#!/usr/bin/env node
/**
 * Génère src/data/words.ts à partir de la liste éditoriale scripts/curated-words.json.
 *
 * Pour chaque mot, le script calcule depuis l'analyse morphologique du Quranic Arabic Corpus :
 *  - le nombre d'occurrences du lemme et de sa racine ;
 *  - le texte ʿuthmānī de plusieurs versets d'exemple et la position du mot dans chacun ;
 *  - l'occurrence à faire écouter : le mot seul, sans préfixe ni suffixe, si le Coran en contient ;
 * puis ajoute la traduction française de Muhammad Hamidullah.
 *
 * Les différents sens du mot (champ `senses` de curated-words.json) sont vérifiés à la génération.
 * Pour chaque sens, le verset cité doit :
 *  - contenir le lemme (Quranic Arabic Corpus) ;
 *  - rendre le mot par ce sens dans la traduction française de Hamidullah (`fr`)
 *    et dans la traduction anglaise Saheeh International (`en`) ;
 *  - pour un sens qui relève de l'exégèse (`tafsir`), le confirmer dans le Tafsir al-Muyassar
 *    (Complexe du roi Fahd), qui doit contenir le passage cité.
 *
 * Usage : npm run generate:words
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CACHE_DIR = path.join(ROOT_DIR, 'node_modules', '.cache', 'kalima')
const CURATED_PATH = path.join(ROOT_DIR, 'scripts', 'curated-words.json')
const OUTPUT_PATH = path.join(ROOT_DIR, 'src', 'data', 'words.ts')

const SOURCES = {
  // Version corrigée du Quranic Arabic Corpus (corpus.quran.com), en écriture arabe.
  morphology: 'https://raw.githubusercontent.com/mustafa0x/quran-morphology/master/quran-morphology.txt',
  translation: 'https://api.alquran.cloud/v1/quran/fr.hamidullah',
  translationEn: 'https://api.alquran.cloud/v1/quran/en.sahih',
  // Tafsir al-Muyassar (ressource 16 de l'API quran.com), un verset par requête.
  tafsir: (ref) => `https://api.quran.com/api/v4/tafsirs/16/by_ayah/${ref}`,
}

/** Nombre de versets d'exemple par mot, verset de curated-words.json compris. */
const EXAMPLE_COUNT = 3
/** Au-delà de ce nombre de mots, un verset est jugé trop long pour un exemple supplémentaire. */
const MAX_EXAMPLE_LENGTH = 15

const nfc = (text) => text.normalize('NFC')

async function fetchCached(name, url) {
  const file = path.join(CACHE_DIR, name)
  try {
    return await fs.readFile(file, 'utf8')
  } catch {
    console.log(`Téléchargement de ${url}`)
    const response = await fetch(url)
    if (!response.ok) throw new Error(`${url} : HTTP ${response.status}`)
    const text = await response.text()
    await fs.mkdir(path.dirname(file), { recursive: true })
    await fs.writeFile(file, text)
    return text
  }
}

/** Regroupe les segments morphologiques (préfixes, radical, suffixes) par mot. */
function parseMorphology(text) {
  const words = new Map()
  for (const line of text.split('\n')) {
    const [location, form, pos, features] = line.split('\t')
    if (!features) continue
    const [surah, ayah, index] = location.split(':').map(Number)
    const tags = features.split('|')
    const lemma = tags.find((tag) => tag.startsWith('LEM:'))?.slice(4)
    const root = tags.find((tag) => tag.startsWith('ROOT:'))?.slice(5)
    const key = `${surah}:${ayah}:${index}`
    const word = words.get(key) ?? { surah, ayah, index, form: '', segments: [] }
    word.form += form
    word.segments.push({ lemma: lemma && nfc(lemma), root, pos })
    words.set(key, word)
  }
  return [...words.values()]
}

/**
 * Le corpus compte à part les composés comme يَوْمَئِذٍ (« ce jour-là ») :
 * on les exclut pour retrouver ses chiffres officiels.
 */
const isIdhCompound = (word) => word.segments.some((segment) => segment.lemma === nfc('إِذ'))

/** Mot sans affixe : ni préfixe (وَ، بِ، ٱل…) ni pronom suffixe. */
const isBare = (word) => word.segments.length === 1
const isBareWithArticle = (word) =>
  word.segments.length === 2 && word.segments[0].lemma === nfc('ال')

/**
 * Squelette consonantique pour comparer une forme coranique à la forme de dictionnaire :
 * sans voyelles ni signes coraniques, alifs et yāʾ unifiés (ءَامَنَ ≈ آمَنَ, شَىْء ≈ شَيْء).
 */
const skeleton = (text) =>
  nfc(text)
    .replace(/ًا/g, '') // alif du tanwīn fatḥ : لَيْلًا ≈ لَيْل
    .replace(/[ً-ٰٟۖ-ۭـ]/g, '')
    .replace(/ءا/g, 'ا')
    .replace(/[ٱأإآ]/g, 'ا')
    .replace(/ى/g, 'ي')

/** Retrouve `needle` dans `text` sans tenir compte de la casse et renvoie le passage exact. */
function findPassage(text, needle) {
  const start = text.toLowerCase().indexOf(needle.toLowerCase())
  return start < 0 ? null : text.slice(start, start + needle.length)
}

const slugify = (text) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[ʿʾ]/g, '')
    .toLowerCase()

async function main() {
  const [morphology, translationJson, translationEnJson, curatedJson] = await Promise.all([
    fetchCached('quran-morphology.txt', SOURCES.morphology),
    fetchCached('fr.hamidullah.json', SOURCES.translation),
    fetchCached('en.sahih.json', SOURCES.translationEn),
    fs.readFile(CURATED_PATH, 'utf8'),
  ])

  const allWords = parseMorphology(morphology)
  // Les versets gardent tous leurs mots ; seuls les comptages excluent les composés en إِذ.
  const verses = Map.groupBy(allWords, (word) => `${word.surah}:${word.ayah}`)
  const words = allWords.filter((word) => !isIdhCompound(word))
  const surahs = JSON.parse(translationJson).data.surahs
  const surahsEn = JSON.parse(translationEnJson).data.surahs
  const curated = JSON.parse(curatedJson)

  // Tafsir des versets cités par les sens exégétiques, téléchargé une fois puis mis en cache.
  const tafsirs = new Map()
  for (const sense of curated.flatMap((item) => item.senses)) {
    if (!sense.tafsir || tafsirs.has(sense.ref)) continue
    const json = await fetchCached(`tafsir/16-${sense.ref.replace(':', '_')}.json`, SOURCES.tafsir(sense.ref))
    tafsirs.set(sense.ref, nfc(JSON.parse(json).tafsir.text.replace(/<[^>]+>/g, '')))
  }

  const entries = curated.map((item) => {
    const lemma = nfc(item.lemma)
    const hasLemma = (word) => word.segments.some((s) => s.lemma === lemma && s.pos !== 'P')

    const occurrences = words.filter(hasLemma)
    if (occurrences.length === 0) throw new Error(`Lemme introuvable : ${item.lemma}`)
    const root = occurrences[0].segments.find((s) => s.lemma === lemma).root
    const rootOccurrences = words.reduce(
      (total, word) => total + word.segments.filter((s) => s.root === root).length,
      0,
    )

    const buildExample = (ref) => {
      const [surah, ayah] = ref.split(':').map(Number)
      const verseWords = verses.get(ref)
      const targetIndex = verseWords?.findIndex(hasLemma) ?? -1
      if (targetIndex < 0) throw new Error(`« ${item.lemma} » absent du verset ${ref}`)

      const surahData = surahs[surah - 1]
      const ayahData = surahData.ayahs[ayah - 1]
      return {
        surah,
        ayah,
        globalAyah: ayahData.number,
        surahName: surahData.name.replace(/^سُورَةُ\s*/, ''),
        words: verseWords.map((word) => word.form),
        targetIndex,
        translation: ayahData.text,
      }
    }

    // Versets supplémentaires : courts, dans des sourates différentes, de préférence avec le mot seul.
    const usedSurahs = new Set([Number(item.ref.split(':')[0])])
    const extraRefs = []
    const candidates = occurrences
      .map((word) => ({ word, ref: `${word.surah}:${word.ayah}` }))
      .map((c) => ({ ...c, length: verses.get(c.ref).length }))
      .filter((c) => c.ref !== item.ref && c.length <= MAX_EXAMPLE_LENGTH)
      .sort((a, b) => Number(!isBare(a.word)) - Number(!isBare(b.word)) || a.length - b.length)
    for (const { word, ref } of candidates) {
      if (extraRefs.length === EXAMPLE_COUNT - 1) break
      if (usedSurahs.has(word.surah)) continue
      usedSurahs.add(word.surah)
      extraRefs.push(ref)
    }

    // Prononciation : l'occurrence la plus proche de la forme de dictionnaire, sans affixe.
    // Priorité : mot seul de même squelette, puis avec l'article ٱل, puis forme voisine.
    const target = skeleton(item.arabic)
    const pronunciationScore = (word) => {
      const sameSkeleton = skeleton(word.form).replace(/^ال/, '') === target
      if (isBare(word)) return sameSkeleton ? 0 : 2
      if (isBareWithArticle(word)) return sameSkeleton ? 1 : 3
      return 4
    }
    // À égalité, la forme la plus proche (préfixe commun) puis la plus fréquente : أَنزَلَ plutôt que أُنزِلَ.
    const arabic = nfc(item.arabic)
    const commonPrefix = (form) => {
      let i = 0
      while (i < form.length && form[i] === arabic[i]) i++
      return i
    }
    const formCounts = Map.groupBy(occurrences, (word) => word.form)
    const rank = (word) => [
      pronunciationScore(word),
      -commonPrefix(word.form),
      -formCounts.get(word.form).length,
    ]
    const spoken = occurrences.reduce((best, word) => {
      const [a, b] = [rank(word), rank(best)]
      const diff = a.map((value, i) => value - b[i]).find((d) => d !== 0) ?? 0
      return diff < 0 ? word : best
    })

    if (item.senses.length === 0) throw new Error(`« ${item.lemma} » : aucun sens`)
    const senses = item.senses.map((sense) => {
      const example = buildExample(sense.ref)
      const where = `« ${item.lemma} », sens « ${sense.meaning} » (${sense.ref})`
      const highlight = findPassage(example.translation, sense.fr)
      if (!highlight) throw new Error(`${where} : « ${sense.fr} » absent de la traduction de Hamidullah`)
      const [surah, ayah] = sense.ref.split(':').map(Number)
      if (!findPassage(surahsEn[surah - 1].ayahs[ayah - 1].text, sense.en)) {
        throw new Error(`${where} : « ${sense.en} » absent de la traduction Saheeh International`)
      }
      if (sense.tafsir && !tafsirs.get(sense.ref).includes(nfc(sense.tafsir))) {
        throw new Error(`${where} : « ${sense.tafsir} » absent du Tafsir al-Muyassar`)
      }
      return {
        meaning: sense.meaning,
        ...(sense.note && { note: sense.note }),
        ...(sense.tafsir && { tafsir: nfc(sense.tafsir) }),
        example: { ...example, highlight },
      }
    })

    return {
      id: slugify(item.translit),
      arabic: nfc(item.arabic),
      transliteration: item.translit,
      meaning: item.meaning,
      kind: item.kind,
      note: item.note,
      root: [...root].join(' '),
      occurrences: occurrences.length,
      rootOccurrences,
      pronunciation: {
        surah: spoken.surah,
        ayah: spoken.ayah,
        wordIndex: spoken.index - 1,
        form: spoken.form,
      },
      examples: [item.ref, ...extraRefs].map(buildExample),
      senses,
    }
  })

  entries.sort((a, b) => b.occurrences - a.occurrences)
  const ids = new Set(entries.map((entry) => entry.id))
  if (ids.size !== entries.length) throw new Error('Identifiants en double')

  const banner = [
    '// Fichier généré par scripts/generate-words.mjs — ne pas modifier à la main.',
    '// Sources : Quranic Arabic Corpus (morphologie, fréquences des lemmes), Tanzil (texte ʿuthmānī),',
    '// traductions de Muhammad Hamidullah et Saheeh International (via api.alquran.cloud),',
    '// Tafsir al-Muyassar (via api.quran.com) pour les sens exégétiques.',
    "import type { QuranWord } from '@/types/word'",
    '',
  ].join('\n')
  await fs.writeFile(
    OUTPUT_PATH,
    `${banner}\nexport const WORDS: readonly QuranWord[] = ${JSON.stringify(entries, null, 2)}\n`,
  )
  console.log(`${entries.length} mots écrits dans ${path.relative(ROOT_DIR, OUTPUT_PATH)}`)
}

await main()
