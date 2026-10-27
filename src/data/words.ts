// Fichier généré par scripts/generate-words.mjs — ne pas modifier à la main.
// Sources : Quranic Arabic Corpus (morphologie, fréquences des lemmes), Tanzil (texte ʿuthmānī),
// traductions de Muhammad Hamidullah et Saheeh International (via api.alquran.cloud),
// Tafsir al-Muyassar (via api.quran.com) pour les sens exégétiques.
import type { QuranWord } from '@/types/word'

export const WORDS: readonly QuranWord[] = [
  {
    "id": "allah",
    "arabic": "اللَّه",
    "transliteration": "Allāh",
    "meaning": "Allah (Dieu)",
    "kind": "proper",
    "note": "Le mot le plus fréquent du Coran. On le trouve dès le premier verset : « Bismi-llāh ».",
    "root": "أ ل ه",
    "occurrences": 2699,
    "rootOccurrences": 2851,
    "pronunciation": {
      "surah": 1,
      "ayah": 1,
      "wordIndex": 1,
      "form": "ٱللَّهِ"
    },
    "examples": [
      {
        "surah": 112,
        "ayah": 1,
        "globalAyah": 6222,
        "surahName": "الإِخۡلَاصِ",
        "words": [
          "قُلْ",
          "هُوَ",
          "ٱللَّهُ",
          "أَحَدٌ"
        ],
        "targetIndex": 2,
        "translation": "Dis: «Il est Allah, Unique."
      },
      {
        "surah": 26,
        "ayah": 108,
        "globalAyah": 3040,
        "surahName": "الشُّعَرَاءِ",
        "words": [
          "فَٱتَّقُوا۟",
          "ٱللَّهَ",
          "وَأَطِيعُونِ"
        ],
        "targetIndex": 1,
        "translation": "Craignez Allah donc et obéissez-moi."
      },
      {
        "surah": 104,
        "ayah": 6,
        "globalAyah": 6185,
        "surahName": "الهُمَزَةِ",
        "words": [
          "نَارُ",
          "ٱللَّهِ",
          "ٱلْمُوقَدَةُ"
        ],
        "targetIndex": 1,
        "translation": "Le Feu attisé d'Allah"
      }
    ],
    "senses": [
      {
        "meaning": "Allah, le nom propre de Dieu",
        "example": {
          "surah": 112,
          "ayah": 1,
          "globalAyah": 6222,
          "surahName": "الإِخۡلَاصِ",
          "words": [
            "قُلْ",
            "هُوَ",
            "ٱللَّهُ",
            "أَحَدٌ"
          ],
          "targetIndex": 2,
          "translation": "Dis: «Il est Allah, Unique.",
          "highlight": "Allah"
        }
      }
    ]
  },
  {
    "id": "qala",
    "arabic": "قَالَ",
    "transliteration": "qāla",
    "meaning": "il a dit ; dire",
    "kind": "verb",
    "note": "Inaccompli : يَقُولُ yaqūlu (il dit). L'impératif قُلْ qul (dis !) ouvre de nombreuses sourates.",
    "root": "ق و ل",
    "occurrences": 1618,
    "rootOccurrences": 1722,
    "pronunciation": {
      "surah": 2,
      "ayah": 30,
      "wordIndex": 1,
      "form": "قَالَ"
    },
    "examples": [
      {
        "surah": 20,
        "ayah": 49,
        "globalAyah": 2397,
        "surahName": "طه",
        "words": [
          "قَالَ",
          "فَمَن",
          "رَّبُّكُمَا",
          "يَٰمُوسَىٰ"
        ],
        "targetIndex": 0,
        "translation": "Alors [Pharaon] dit: «Qui donc est votre Seigneur, ô Moïse?»"
      },
      {
        "surah": 109,
        "ayah": 1,
        "globalAyah": 6208,
        "surahName": "الكَافِرُونَ",
        "words": [
          "قُلْ",
          "يَٰٓأَيُّهَا",
          "ٱلْكَٰفِرُونَ"
        ],
        "targetIndex": 0,
        "translation": "Dis: «O vous les infidèles!"
      },
      {
        "surah": 7,
        "ayah": 15,
        "globalAyah": 969,
        "surahName": "الأَعۡرَافِ",
        "words": [
          "قَالَ",
          "إِنَّكَ",
          "مِنَ",
          "ٱلْمُنظَرِينَ"
        ],
        "targetIndex": 0,
        "translation": "[Allah] dit: «Tu es de ceux à qui délai est accordé.»"
      }
    ],
    "senses": [
      {
        "meaning": "dire",
        "example": {
          "surah": 20,
          "ayah": 49,
          "globalAyah": 2397,
          "surahName": "طه",
          "words": [
            "قَالَ",
            "فَمَن",
            "رَّبُّكُمَا",
            "يَٰمُوسَىٰ"
          ],
          "targetIndex": 0,
          "translation": "Alors [Pharaon] dit: «Qui donc est votre Seigneur, ô Moïse?»",
          "highlight": "dit"
        }
      },
      {
        "meaning": "se dire, penser en soi-même",
        "note": "Avec « fī anfusihim » (en eux-mêmes), la parole reste intérieure.",
        "example": {
          "surah": 58,
          "ayah": 8,
          "globalAyah": 5112,
          "surahName": "المُجَادلَةِ",
          "words": [
            "أَلَمْ",
            "تَرَ",
            "إِلَى",
            "ٱلَّذِينَ",
            "نُهُوا۟",
            "عَنِ",
            "ٱلنَّجْوَىٰ",
            "ثُمَّ",
            "يَعُودُونَ",
            "لِمَا",
            "نُهُوا۟",
            "عَنْهُ",
            "وَيَتَنَٰجَوْنَ",
            "بِٱلْإِثْمِ",
            "وَٱلْعُدْوَٰنِ",
            "وَمَعْصِيَتِ",
            "ٱلرَّسُولِ",
            "وَإِذَا",
            "جَآءُوكَ",
            "حَيَّوْكَ",
            "بِمَا",
            "لَمْ",
            "يُحَيِّكَ",
            "بِهِ",
            "ٱللَّهُ",
            "وَيَقُولُونَ",
            "فِىٓ",
            "أَنفُسِهِمْ",
            "لَوْلَا",
            "يُعَذِّبُنَا",
            "ٱللَّهُ",
            "بِمَا",
            "نَقُولُ",
            "حَسْبُهُمْ",
            "جَهَنَّمُ",
            "يَصْلَوْنَهَا",
            "فَبِئْسَ",
            "ٱلْمَصِيرُ"
          ],
          "targetIndex": 25,
          "translation": "Ne vois-tu pas ceux à qui les conversations secrètes ont été interdites? Puis, ils retournent à ce qui leur a été interdit, et se concertent pour pécher, transgresser et désobéir au Messager. Et quand ils viennent à toi, ils te saluent d'une façon dont Allah ne t'a pas salué, et disent en eux-mêmes: «Pourquoi Allah ne nous châtie pas pour ce que nous disons?» L'Enfer leur suffira, où ils brûleront. Et quelle mauvaise destination!",
          "highlight": "disent en eux-mêmes"
        }
      }
    ]
  },
  {
    "id": "kana",
    "arabic": "كَانَ",
    "transliteration": "kāna",
    "meaning": "il était ; être",
    "kind": "verb",
    "note": "Souvent utilisé pour décrire un état permanent : « kāna-llāhu ʿalīman » (Allah est Omniscient).",
    "root": "ك و ن",
    "occurrences": 1358,
    "rootOccurrences": 1390,
    "pronunciation": {
      "surah": 2,
      "ayah": 75,
      "wordIndex": 5,
      "form": "كَانَ"
    },
    "examples": [
      {
        "surah": 20,
        "ayah": 35,
        "globalAyah": 2383,
        "surahName": "طه",
        "words": [
          "إِنَّكَ",
          "كُنتَ",
          "بِنَا",
          "بَصِيرًا"
        ],
        "targetIndex": 1,
        "translation": "Et Toi, certes, Tu es Très Clairvoyant sur nous»."
      },
      {
        "surah": 69,
        "ayah": 27,
        "globalAyah": 5350,
        "surahName": "الحَاقَّةِ",
        "words": [
          "يَٰلَيْتَهَا",
          "كَانَتِ",
          "ٱلْقَاضِيَةَ"
        ],
        "targetIndex": 1,
        "translation": "Hélas, comme j'aurai souhaité que [ma première mort] fût la définitive."
      },
      {
        "surah": 54,
        "ayah": 16,
        "globalAyah": 4862,
        "surahName": "القَمَرِ",
        "words": [
          "فَكَيْفَ",
          "كَانَ",
          "عَذَابِى",
          "وَنُذُرِ"
        ],
        "targetIndex": 1,
        "translation": "Comment furent Mon châtiment et Mes avertissements?"
      }
    ],
    "senses": [
      {
        "meaning": "était (passé)",
        "example": {
          "surah": 19,
          "ayah": 28,
          "globalAyah": 2278,
          "surahName": "مَرۡيَمَ",
          "words": [
            "يَٰٓأُخْتَ",
            "هَٰرُونَ",
            "مَا",
            "كَانَ",
            "أَبُوكِ",
            "ٱمْرَأَ",
            "سَوْءٍ",
            "وَمَا",
            "كَانَتْ",
            "أُمُّكِ",
            "بَغِيًّا"
          ],
          "targetIndex": 3,
          "translation": "«Sœur de Hârûn, ton père n'était pas un homme de mal et ta mère n'était pas une prostituée».",
          "highlight": "était"
        }
      },
      {
        "meaning": "est, de tout temps (attribut d'Allah)",
        "note": "Avec un attribut divin, kāna n'indique pas un passé révolu mais une qualité permanente.",
        "example": {
          "surah": 4,
          "ayah": 96,
          "globalAyah": 589,
          "surahName": "النِّسَاءِ",
          "words": [
            "دَرَجَٰتٍ",
            "مِّنْهُ",
            "وَمَغْفِرَةً",
            "وَرَحْمَةً",
            "وَكَانَ",
            "ٱللَّهُ",
            "غَفُورًا",
            "رَّحِيمًا"
          ],
          "targetIndex": 4,
          "translation": "des grades de supériorité de Sa part ainsi qu'un pardon et une miséricorde. Allah est Pardonneur et Miséricordieux.",
          "highlight": "Allah est"
        }
      },
      {
        "meaning": "devenir",
        "note": "Le Tafsir Muyassar l'explique par ṣārat : « elles devinrent ».",
        "tafsir": "فصارت",
        "example": {
          "surah": 56,
          "ayah": 6,
          "globalAyah": 4985,
          "surahName": "الوَاقِعَةِ",
          "words": [
            "فَكَانَتْ",
            "هَبَآءً",
            "مُّنۢبَثًّا"
          ],
          "targetIndex": 0,
          "translation": "et qu'elles deviendront poussière éparpillée",
          "highlight": "deviendront"
        }
      }
    ]
  },
  {
    "id": "rabb",
    "arabic": "رَبّ",
    "transliteration": "rabb",
    "meaning": "Seigneur, Maître",
    "kind": "noun",
    "note": "Évoque celui qui élève, entretient et prend soin. « Rabbi l-ʿālamīn » : Seigneur des mondes.",
    "root": "ر ب ب",
    "occurrences": 975,
    "rootOccurrences": 980,
    "pronunciation": {
      "surah": 1,
      "ayah": 2,
      "wordIndex": 2,
      "form": "رَبِّ"
    },
    "examples": [
      {
        "surah": 1,
        "ayah": 2,
        "globalAyah": 2,
        "surahName": "ٱلْفَاتِحَةِ",
        "words": [
          "ٱلْحَمْدُ",
          "لِلَّهِ",
          "رَبِّ",
          "ٱلْعَٰلَمِينَ"
        ],
        "targetIndex": 2,
        "translation": "Louange à Allah, Seigneur de l'univers."
      },
      {
        "surah": 7,
        "ayah": 122,
        "globalAyah": 1076,
        "surahName": "الأَعۡرَافِ",
        "words": [
          "رَبِّ",
          "مُوسَىٰ",
          "وَهَٰرُونَ"
        ],
        "targetIndex": 0,
        "translation": "au Seigneur de Moïse et d'Aaron.»"
      },
      {
        "surah": 26,
        "ayah": 48,
        "globalAyah": 2980,
        "surahName": "الشُّعَرَاءِ",
        "words": [
          "رَبِّ",
          "مُوسَىٰ",
          "وَهَٰرُونَ"
        ],
        "targetIndex": 0,
        "translation": "Le Seigneur de Moïse et d'Aaron»."
      }
    ],
    "senses": [
      {
        "meaning": "Seigneur (Allah)",
        "example": {
          "surah": 1,
          "ayah": 2,
          "globalAyah": 2,
          "surahName": "ٱلْفَاتِحَةِ",
          "words": [
            "ٱلْحَمْدُ",
            "لِلَّهِ",
            "رَبِّ",
            "ٱلْعَٰلَمِينَ"
          ],
          "targetIndex": 2,
          "translation": "Louange à Allah, Seigneur de l'univers.",
          "highlight": "Seigneur"
        }
      },
      {
        "meaning": "maître (d'un homme)",
        "note": "Joseph parle ici du roi, le maître de son codétenu.",
        "tafsir": "سيِّدك الملك",
        "example": {
          "surah": 12,
          "ayah": 42,
          "globalAyah": 1638,
          "surahName": "يُوسُفَ",
          "words": [
            "وَقَالَ",
            "لِلَّذِى",
            "ظَنَّ",
            "أَنَّهُۥ",
            "نَاجٍ",
            "مِّنْهُمَا",
            "ٱذْكُرْنِى",
            "عِندَ",
            "رَبِّكَ",
            "فَأَنسَىٰهُ",
            "ٱلشَّيْطَٰنُ",
            "ذِكْرَ",
            "رَبِّهِۦ",
            "فَلَبِثَ",
            "فِى",
            "ٱلسِّجْنِ",
            "بِضْعَ",
            "سِنِينَ"
          ],
          "targetIndex": 8,
          "translation": "Et il dit à celui des deux dont il pensait qu'il serait délivré: «Parle de moi auprès de ton maître». Mais le Diable fit qu'il oublia de rappeler (le cas de Joseph) à son maître. Joseph resta donc en prison quelques années.",
          "highlight": "maître"
        }
      },
      {
        "meaning": "faux seigneurs (pluriel arbāb)",
        "note": "Prendre des hommes pour « seigneurs », c'est leur obéir à la place d'Allah.",
        "tafsir": "يدين بعضنا لبعض بالطاعة",
        "example": {
          "surah": 3,
          "ayah": 64,
          "globalAyah": 357,
          "surahName": "آلِ عِمۡرَانَ",
          "words": [
            "قُلْ",
            "يَٰٓأَهْلَ",
            "ٱلْكِتَٰبِ",
            "تَعَالَوْا۟",
            "إِلَىٰ",
            "كَلِمَةٍ",
            "سَوَآءٍۭ",
            "بَيْنَنَا",
            "وَبَيْنَكُمْ",
            "أَلَّا",
            "نَعْبُدَ",
            "إِلَّا",
            "ٱللَّهَ",
            "وَلَا",
            "نُشْرِكَ",
            "بِهِۦ",
            "شَيْـًٔا",
            "وَلَا",
            "يَتَّخِذَ",
            "بَعْضُنَا",
            "بَعْضًا",
            "أَرْبَابًا",
            "مِّن",
            "دُونِ",
            "ٱللَّهِ",
            "فَإِن",
            "تَوَلَّوْا۟",
            "فَقُولُوا۟",
            "ٱشْهَدُوا۟",
            "بِأَنَّا",
            "مُسْلِمُونَ"
          ],
          "targetIndex": 21,
          "translation": "- Dis: «O gens du Livre, venez à une parole commune entre nous et vous: que nous n'adorions qu'Allah, sans rien Lui associer, et que nous ne prenions point les uns les autres pour seigneurs en dehors d'Allah». Puis, s'ils tournent le dos, dites: «Soyez témoins que nous, nous sommes soumis».",
          "highlight": "seigneurs"
        }
      }
    ]
  },
  {
    "id": "amana",
    "arabic": "آمَنَ",
    "transliteration": "āmana",
    "meaning": "il a cru ; croire (avoir la foi)",
    "kind": "verb",
    "note": "Même racine que أَمْن amn (sécurité) et مُؤْمِن muʾmin (croyant) : la foi rassure.",
    "root": "أ م ن",
    "occurrences": 537,
    "rootOccurrences": 879,
    "pronunciation": {
      "surah": 2,
      "ayah": 13,
      "wordIndex": 5,
      "form": "ءَامَنَ"
    },
    "examples": [
      {
        "surah": 7,
        "ayah": 121,
        "globalAyah": 1075,
        "surahName": "الأَعۡرَافِ",
        "words": [
          "قَالُوٓا۟",
          "ءَامَنَّا",
          "بِرَبِّ",
          "ٱلْعَٰلَمِينَ"
        ],
        "targetIndex": 1,
        "translation": "Ils dirent: «Nous croyons au Seigneur de l'Univers,"
      },
      {
        "surah": 69,
        "ayah": 33,
        "globalAyah": 5356,
        "surahName": "الحَاقَّةِ",
        "words": [
          "إِنَّهُۥ",
          "كَانَ",
          "لَا",
          "يُؤْمِنُ",
          "بِٱللَّهِ",
          "ٱلْعَظِيمِ"
        ],
        "targetIndex": 3,
        "translation": "car il ne croyait pas en Allah, le Très Grand."
      },
      {
        "surah": 12,
        "ayah": 106,
        "globalAyah": 1702,
        "surahName": "يُوسُفَ",
        "words": [
          "وَمَا",
          "يُؤْمِنُ",
          "أَكْثَرُهُم",
          "بِٱللَّهِ",
          "إِلَّا",
          "وَهُم",
          "مُّشْرِكُونَ"
        ],
        "targetIndex": 1,
        "translation": "Et la plupart d'entre eux ne croient en Allah, qu'en lui donnant des associés."
      }
    ],
    "senses": [
      {
        "meaning": "croire, avoir la foi",
        "example": {
          "surah": 2,
          "ayah": 285,
          "globalAyah": 292,
          "surahName": "البَقَرَةِ",
          "words": [
            "ءَامَنَ",
            "ٱلرَّسُولُ",
            "بِمَآ",
            "أُنزِلَ",
            "إِلَيْهِ",
            "مِن",
            "رَّبِّهِۦ",
            "وَٱلْمُؤْمِنُونَ",
            "كُلٌّ",
            "ءَامَنَ",
            "بِٱللَّهِ",
            "وَمَلَٰٓئِكَتِهِۦ",
            "وَكُتُبِهِۦ",
            "وَرُسُلِهِۦ",
            "لَا",
            "نُفَرِّقُ",
            "بَيْنَ",
            "أَحَدٍ",
            "مِّن",
            "رُّسُلِهِۦ",
            "وَقَالُوا۟",
            "سَمِعْنَا",
            "وَأَطَعْنَا",
            "غُفْرَانَكَ",
            "رَبَّنَا",
            "وَإِلَيْكَ",
            "ٱلْمَصِيرُ"
          ],
          "targetIndex": 0,
          "translation": "Le Messager a cru en ce qu'on a fait descendre vers lui venant de son Seigneur, et aussi les croyants: tous ont cru en Allah, en Ses anges, à Ses livres et en Ses messagers; (en disant): «Nous ne faisons aucune distinction entre Ses messagers». Et ils ont dit: «Nous avons entendu et obéi. Seigneur, nous implorons Ton pardon. C'est à Toi que sera le retour».",
          "highlight": "cru"
        }
      },
      {
        "meaning": "croire quelqu'un, lui faire confiance",
        "tafsir": "ويصدق المؤمنين",
        "example": {
          "surah": 9,
          "ayah": 61,
          "globalAyah": 1296,
          "surahName": "التَّوۡبَةِ",
          "words": [
            "وَمِنْهُمُ",
            "ٱلَّذِينَ",
            "يُؤْذُونَ",
            "ٱلنَّبِىَّ",
            "وَيَقُولُونَ",
            "هُوَ",
            "أُذُنٌ",
            "قُلْ",
            "أُذُنُ",
            "خَيْرٍ",
            "لَّكُمْ",
            "يُؤْمِنُ",
            "بِٱللَّهِ",
            "وَيُؤْمِنُ",
            "لِلْمُؤْمِنِينَ",
            "وَرَحْمَةٌ",
            "لِّلَّذِينَ",
            "ءَامَنُوا۟",
            "مِنكُمْ",
            "وَٱلَّذِينَ",
            "يُؤْذُونَ",
            "رَسُولَ",
            "ٱللَّهِ",
            "لَهُمْ",
            "عَذَابٌ",
            "أَلِيمٌ"
          ],
          "targetIndex": 11,
          "translation": "Et il en est parmi eux ceux qui font du tort au Prophète et disent: «Il est tout oreille». - Dis: «Une oreille pour votre bien. Il croit en Allah et fait confiance aux croyants, et il est une miséricorde pour ceux d'entre vous qui croient. Et ceux qui font du tort au Messager d'Allah auront un châtiment douloureux».",
          "highlight": "confiance"
        }
      },
      {
        "meaning": "mettre en sécurité",
        "note": "Même racine que amn, la sécurité.",
        "tafsir": "وآمنهم من فزع",
        "example": {
          "surah": 106,
          "ayah": 4,
          "globalAyah": 6197,
          "surahName": "قُرَيۡشٍ",
          "words": [
            "ٱلَّذِىٓ",
            "أَطْعَمَهُم",
            "مِّن",
            "جُوعٍ",
            "وَءَامَنَهُم",
            "مِّنْ",
            "خَوْفٍۭ"
          ],
          "targetIndex": 4,
          "translation": "qui les a nourris contre la faim et rassurés de la crainte!",
          "highlight": "rassur"
        }
      }
    ]
  },
  {
    "id": "ard",
    "arabic": "أَرْض",
    "transliteration": "arḍ",
    "meaning": "terre",
    "kind": "noun",
    "note": "Souvent associée à السَّمَاوَات as-samāwāt (les cieux) : « les cieux et la terre ».",
    "root": "أ ر ض",
    "occurrences": 461,
    "rootOccurrences": 461,
    "pronunciation": {
      "surah": 7,
      "ayah": 73,
      "wordIndex": 26,
      "form": "أَرْضِ"
    },
    "examples": [
      {
        "surah": 51,
        "ayah": 20,
        "globalAyah": 4695,
        "surahName": "الذَّارِيَاتِ",
        "words": [
          "وَفِى",
          "ٱلْأَرْضِ",
          "ءَايَٰتٌ",
          "لِّلْمُوقِنِينَ"
        ],
        "targetIndex": 1,
        "translation": "Il y a sur terre des preuves pour ceux qui croient avec certitude;"
      },
      {
        "surah": 12,
        "ayah": 9,
        "globalAyah": 1605,
        "surahName": "يُوسُفَ",
        "words": [
          "ٱقْتُلُوا۟",
          "يُوسُفَ",
          "أَوِ",
          "ٱطْرَحُوهُ",
          "أَرْضًا",
          "يَخْلُ",
          "لَكُمْ",
          "وَجْهُ",
          "أَبِيكُمْ",
          "وَتَكُونُوا۟",
          "مِنۢ",
          "بَعْدِهِۦ",
          "قَوْمًا",
          "صَٰلِحِينَ"
        ],
        "targetIndex": 4,
        "translation": "Tuez Joseph ou bien éloignez-le dans n'importe quel pays, afin que le visage de votre père se tourne exclusivement vers vous, et que vous soyez après cela des gens de bien»."
      },
      {
        "surah": 55,
        "ayah": 10,
        "globalAyah": 4911,
        "surahName": "الرَّحۡمَٰن",
        "words": [
          "وَٱلْأَرْضَ",
          "وَضَعَهَا",
          "لِلْأَنَامِ"
        ],
        "targetIndex": 0,
        "translation": "Quant à la terre, Il l'a étendue pour les êtres vivants:"
      }
    ],
    "senses": [
      {
        "meaning": "la Terre (création)",
        "example": {
          "surah": 2,
          "ayah": 29,
          "globalAyah": 36,
          "surahName": "البَقَرَةِ",
          "words": [
            "هُوَ",
            "ٱلَّذِى",
            "خَلَقَ",
            "لَكُم",
            "مَّا",
            "فِى",
            "ٱلْأَرْضِ",
            "جَمِيعًا",
            "ثُمَّ",
            "ٱسْتَوَىٰٓ",
            "إِلَى",
            "ٱلسَّمَآءِ",
            "فَسَوَّىٰهُنَّ",
            "سَبْعَ",
            "سَمَٰوَٰتٍ",
            "وَهُوَ",
            "بِكُلِّ",
            "شَىْءٍ",
            "عَلِيمٌ"
          ],
          "targetIndex": 6,
          "translation": "C'est Lui qui a créé pour vous tout ce qui est sur la terre, puis Il a orienté Sa volonté vers le ciel et en fit sept cieux. Et Il est Omniscient.",
          "highlight": "terre"
        }
      },
      {
        "meaning": "un pays, un territoire",
        "tafsir": "بيت المقدس",
        "example": {
          "surah": 5,
          "ayah": 21,
          "globalAyah": 690,
          "surahName": "المَائـِدَةِ",
          "words": [
            "يَٰقَوْمِ",
            "ٱدْخُلُوا۟",
            "ٱلْأَرْضَ",
            "ٱلْمُقَدَّسَةَ",
            "ٱلَّتِى",
            "كَتَبَ",
            "ٱللَّهُ",
            "لَكُمْ",
            "وَلَا",
            "تَرْتَدُّوا۟",
            "عَلَىٰٓ",
            "أَدْبَارِكُمْ",
            "فَتَنقَلِبُوا۟",
            "خَٰسِرِينَ"
          ],
          "targetIndex": 2,
          "translation": "O mon peuple! Entrez dans la terre sainte qu'Allah vous a prescrite. Et ne revenez point sur vos pas [en refusant de combattre] car vous retourneriez perdants.",
          "highlight": "terre sainte"
        }
      },
      {
        "meaning": "le sol (qui reprend vie)",
        "example": {
          "surah": 22,
          "ayah": 5,
          "globalAyah": 2600,
          "surahName": "الحَجِّ",
          "words": [
            "يَٰٓأَيُّهَا",
            "ٱلنَّاسُ",
            "إِن",
            "كُنتُمْ",
            "فِى",
            "رَيْبٍ",
            "مِّنَ",
            "ٱلْبَعْثِ",
            "فَإِنَّا",
            "خَلَقْنَٰكُم",
            "مِّن",
            "تُرَابٍ",
            "ثُمَّ",
            "مِن",
            "نُّطْفَةٍ",
            "ثُمَّ",
            "مِنْ",
            "عَلَقَةٍ",
            "ثُمَّ",
            "مِن",
            "مُّضْغَةٍ",
            "مُّخَلَّقَةٍ",
            "وَغَيْرِ",
            "مُخَلَّقَةٍ",
            "لِّنُبَيِّنَ",
            "لَكُمْ",
            "وَنُقِرُّ",
            "فِى",
            "ٱلْأَرْحَامِ",
            "مَا",
            "نَشَآءُ",
            "إِلَىٰٓ",
            "أَجَلٍ",
            "مُّسَمًّى",
            "ثُمَّ",
            "نُخْرِجُكُمْ",
            "طِفْلًا",
            "ثُمَّ",
            "لِتَبْلُغُوٓا۟",
            "أَشُدَّكُمْ",
            "وَمِنكُم",
            "مَّن",
            "يُتَوَفَّىٰ",
            "وَمِنكُم",
            "مَّن",
            "يُرَدُّ",
            "إِلَىٰٓ",
            "أَرْذَلِ",
            "ٱلْعُمُرِ",
            "لِكَيْلَا",
            "يَعْلَمَ",
            "مِنۢ",
            "بَعْدِ",
            "عِلْمٍ",
            "شَيْـًٔا",
            "وَتَرَى",
            "ٱلْأَرْضَ",
            "هَامِدَةً",
            "فَإِذَآ",
            "أَنزَلْنَا",
            "عَلَيْهَا",
            "ٱلْمَآءَ",
            "ٱهْتَزَّتْ",
            "وَرَبَتْ",
            "وَأَنۢبَتَتْ",
            "مِن",
            "كُلِّ",
            "زَوْجٍۭ",
            "بَهِيجٍ"
          ],
          "targetIndex": 56,
          "translation": "O hommes! Si vous doutez au sujet de la Résurrection, c'est Nous qui vous avons créés de terre, puis d'une goutte de sperme, puis d'une adhérence puis d'un embryon [normalement] formé aussi bien qu'informe pour vous montrer [Notre Omnipotence] et Nous déposerons dans les matrices ce que Nous voulons jusqu'à un terme fixé. Puis Nous vous en sortirons [à l'état] de bébé, pour qu'ensuite vous atteignez votre maturité. Il en est parmi vous qui meurent [jeunes] tandis que d'autres parviennent au plus vil de l'âge si bien qu'ils ne savent plus rien de ce qu'ils connaissaient auparavant. De même tu vois la terre desséchée: dès que Nous y faisons descendre de l'eau elle remue, se gonfle, et fait pousser toutes sortes de splendides couples de végétaux.",
          "highlight": "terre desséchée"
        }
      }
    ]
  },
  {
    "id": "yawm",
    "arabic": "يَوْم",
    "transliteration": "yawm",
    "meaning": "jour",
    "kind": "noun",
    "note": "Pluriel : أَيَّام ayyām. « Yawm ad-dīn » : le Jour de la Rétribution.",
    "root": "ي و م",
    "occurrences": 405,
    "rootOccurrences": 405,
    "pronunciation": {
      "surah": 2,
      "ayah": 113,
      "wordIndex": 25,
      "form": "يَوْمَ"
    },
    "examples": [
      {
        "surah": 1,
        "ayah": 4,
        "globalAyah": 4,
        "surahName": "ٱلْفَاتِحَةِ",
        "words": [
          "مَٰلِكِ",
          "يَوْمِ",
          "ٱلدِّينِ"
        ],
        "targetIndex": 1,
        "translation": "Maître du Jour de la rétribution."
      },
      {
        "surah": 77,
        "ayah": 12,
        "globalAyah": 5634,
        "surahName": "المُرۡسَلَاتِ",
        "words": [
          "لِأَىِّ",
          "يَوْمٍ",
          "أُجِّلَتْ"
        ],
        "targetIndex": 1,
        "translation": "A quel jour tout cela a-t-il été renvoyé?"
      },
      {
        "surah": 79,
        "ayah": 6,
        "globalAyah": 5718,
        "surahName": "النَّازِعَاتِ",
        "words": [
          "يَوْمَ",
          "تَرْجُفُ",
          "ٱلرَّاجِفَةُ"
        ],
        "targetIndex": 0,
        "translation": "Le jour où [la terre] tremblera [au premier son du clairon]"
      }
    ],
    "senses": [
      {
        "meaning": "jour",
        "example": {
          "surah": 2,
          "ayah": 184,
          "globalAyah": 191,
          "surahName": "البَقَرَةِ",
          "words": [
            "أَيَّامًا",
            "مَّعْدُودَٰتٍ",
            "فَمَن",
            "كَانَ",
            "مِنكُم",
            "مَّرِيضًا",
            "أَوْ",
            "عَلَىٰ",
            "سَفَرٍ",
            "فَعِدَّةٌ",
            "مِّنْ",
            "أَيَّامٍ",
            "أُخَرَ",
            "وَعَلَى",
            "ٱلَّذِينَ",
            "يُطِيقُونَهُۥ",
            "فِدْيَةٌ",
            "طَعَامُ",
            "مِسْكِينٍ",
            "فَمَن",
            "تَطَوَّعَ",
            "خَيْرًا",
            "فَهُوَ",
            "خَيْرٌ",
            "لَّهُۥ",
            "وَأَن",
            "تَصُومُوا۟",
            "خَيْرٌ",
            "لَّكُمْ",
            "إِن",
            "كُنتُمْ",
            "تَعْلَمُونَ"
          ],
          "targetIndex": 0,
          "translation": "pendant un nombre déterminé de jours. Quiconque d'entre vous est malade ou en voyage, devra jeûner un nombre égal d'autres jours. Mais pour ceux qui ne pourraient le supporter qu'(avec grande difficulté), il y a une compensation: nourrir un pauvre. Et si quelqu'un fait plus de son propre gré, c'est pour lui; mais il est mieux pour vous de jeûner; si vous saviez!",
          "highlight": "jours"
        }
      },
      {
        "meaning": "période, durée immense",
        "note": "Un « jour » auprès d'Allah peut équivaloir à mille de nos années.",
        "example": {
          "surah": 32,
          "ayah": 5,
          "globalAyah": 3508,
          "surahName": "السَّجۡدَةِ",
          "words": [
            "يُدَبِّرُ",
            "ٱلْأَمْرَ",
            "مِنَ",
            "ٱلسَّمَآءِ",
            "إِلَى",
            "ٱلْأَرْضِ",
            "ثُمَّ",
            "يَعْرُجُ",
            "إِلَيْهِ",
            "فِى",
            "يَوْمٍ",
            "كَانَ",
            "مِقْدَارُهُۥٓ",
            "أَلْفَ",
            "سَنَةٍ",
            "مِّمَّا",
            "تَعُدُّونَ"
          ],
          "targetIndex": 10,
          "translation": "Du ciel à la terre, Il administre l'affaire, laquelle ensuite monte vers Lui en un jour équivalent à mille ans de votre calcul.",
          "highlight": "mille ans"
        }
      },
      {
        "meaning": "le Jour du Jugement",
        "example": {
          "surah": 1,
          "ayah": 4,
          "globalAyah": 4,
          "surahName": "ٱلْفَاتِحَةِ",
          "words": [
            "مَٰلِكِ",
            "يَوْمِ",
            "ٱلدِّينِ"
          ],
          "targetIndex": 1,
          "translation": "Maître du Jour de la rétribution.",
          "highlight": "Jour de la rétribution"
        }
      }
    ]
  },
  {
    "id": "qawm",
    "arabic": "قَوْم",
    "transliteration": "qawm",
    "meaning": "peuple",
    "kind": "noun",
    "note": "Les prophètes s'adressent souvent aux leurs par « yā qawmi » : ô mon peuple !",
    "root": "ق و م",
    "occurrences": 383,
    "rootOccurrences": 660,
    "pronunciation": {
      "surah": 3,
      "ayah": 86,
      "wordIndex": 3,
      "form": "قَوْمًا"
    },
    "examples": [
      {
        "surah": 15,
        "ayah": 62,
        "globalAyah": 1864,
        "surahName": "الحِجۡرِ",
        "words": [
          "قَالَ",
          "إِنَّكُمْ",
          "قَوْمٌ",
          "مُّنكَرُونَ"
        ],
        "targetIndex": 2,
        "translation": "celui-ci dit: «Vous êtes [pour moi] des gens inconnus»."
      },
      {
        "surah": 26,
        "ayah": 11,
        "globalAyah": 2943,
        "surahName": "الشُّعَرَاءِ",
        "words": [
          "قَوْمَ",
          "فِرْعَوْنَ",
          "أَلَا",
          "يَتَّقُونَ"
        ],
        "targetIndex": 0,
        "translation": "[auprès du] peuple de Pharaon» ne craindront-ils pas (Allah)?"
      },
      {
        "surah": 44,
        "ayah": 28,
        "globalAyah": 4442,
        "surahName": "الدُّخَانِ",
        "words": [
          "كَذَٰلِكَ",
          "وَأَوْرَثْنَٰهَا",
          "قَوْمًا",
          "ءَاخَرِينَ"
        ],
        "targetIndex": 2,
        "translation": "Il en fut ainsi et Nous fîmes qu'un autre peuple en hérita."
      }
    ],
    "senses": [
      {
        "meaning": "peuple",
        "example": {
          "surah": 7,
          "ayah": 59,
          "globalAyah": 1013,
          "surahName": "الأَعۡرَافِ",
          "words": [
            "لَقَدْ",
            "أَرْسَلْنَا",
            "نُوحًا",
            "إِلَىٰ",
            "قَوْمِهِۦ",
            "فَقَالَ",
            "يَٰقَوْمِ",
            "ٱعْبُدُوا۟",
            "ٱللَّهَ",
            "مَا",
            "لَكُم",
            "مِّنْ",
            "إِلَٰهٍ",
            "غَيْرُهُۥٓ",
            "إِنِّىٓ",
            "أَخَافُ",
            "عَلَيْكُمْ",
            "عَذَابَ",
            "يَوْمٍ",
            "عَظِيمٍ"
          ],
          "targetIndex": 4,
          "translation": "Nous avons envoyé Noé vers son peuple. Il dit: «O mon peuple, adorez Allah. Pour vous, pas d'autre divinité que Lui. Je crains pour vous le châtiment d'un jour terrible».",
          "highlight": "peuple"
        }
      },
      {
        "meaning": "groupe de personnes",
        "example": {
          "surah": 49,
          "ayah": 11,
          "globalAyah": 4623,
          "surahName": "الحُجُرَاتِ",
          "words": [
            "يَٰٓأَيُّهَا",
            "ٱلَّذِينَ",
            "ءَامَنُوا۟",
            "لَا",
            "يَسْخَرْ",
            "قَوْمٌ",
            "مِّن",
            "قَوْمٍ",
            "عَسَىٰٓ",
            "أَن",
            "يَكُونُوا۟",
            "خَيْرًا",
            "مِّنْهُمْ",
            "وَلَا",
            "نِسَآءٌ",
            "مِّن",
            "نِّسَآءٍ",
            "عَسَىٰٓ",
            "أَن",
            "يَكُنَّ",
            "خَيْرًا",
            "مِّنْهُنَّ",
            "وَلَا",
            "تَلْمِزُوٓا۟",
            "أَنفُسَكُمْ",
            "وَلَا",
            "تَنَابَزُوا۟",
            "بِٱلْأَلْقَٰبِ",
            "بِئْسَ",
            "ٱلِٱسْمُ",
            "ٱلْفُسُوقُ",
            "بَعْدَ",
            "ٱلْإِيمَٰنِ",
            "وَمَن",
            "لَّمْ",
            "يَتُبْ",
            "فَأُو۟لَٰٓئِكَ",
            "هُمُ",
            "ٱلظَّٰلِمُونَ"
          ],
          "targetIndex": 5,
          "translation": "O vous qui avez cru! Qu'un groupe ne se raille pas d'un autre groupe: ceux-ci sont peut-être meilleurs qu'eux. Et que des femmes ne se raillent pas d'autres femmes: celles-ci sont peut-être meilleures qu'elles. Ne vous dénigrez pas et ne vous lancez pas mutuellement des sobriquets (injurieux). Quel vilain mot que «perversion» lorsqu'on a déjà la foi. Et quiconque ne se repent pas... Ceux-là sont les injustes.",
          "highlight": "groupe"
        }
      }
    ]
  },
  {
    "id": "alima",
    "arabic": "عَلِمَ",
    "transliteration": "ʿalima",
    "meaning": "il a su ; savoir, connaître",
    "kind": "verb",
    "note": "Inaccompli : يَعْلَمُ yaʿlamu. La racine ع ل م donne aussi عِلْم (science) et عَلِيم (Omniscient).",
    "root": "ع ل م",
    "occurrences": 382,
    "rootOccurrences": 854,
    "pronunciation": {
      "surah": 2,
      "ayah": 60,
      "wordIndex": 14,
      "form": "عَلِمَ"
    },
    "examples": [
      {
        "surah": 96,
        "ayah": 5,
        "globalAyah": 6111,
        "surahName": "العَلَقِ",
        "words": [
          "عَلَّمَ",
          "ٱلْإِنسَٰنَ",
          "مَا",
          "لَمْ",
          "يَعْلَمْ"
        ],
        "targetIndex": 4,
        "translation": "a enseigné à l'homme ce qu'il ne savait pas."
      },
      {
        "surah": 81,
        "ayah": 14,
        "globalAyah": 5814,
        "surahName": "التَّكۡوِيرِ",
        "words": [
          "عَلِمَتْ",
          "نَفْسٌ",
          "مَّآ",
          "أَحْضَرَتْ"
        ],
        "targetIndex": 0,
        "translation": "chaque âme saura ce qu'elle a présenté."
      },
      {
        "surah": 82,
        "ayah": 5,
        "globalAyah": 5834,
        "surahName": "الانفِطَارِ",
        "words": [
          "عَلِمَتْ",
          "نَفْسٌ",
          "مَّا",
          "قَدَّمَتْ",
          "وَأَخَّرَتْ"
        ],
        "targetIndex": 0,
        "translation": "toute âme saura alors ce qu'elle a accompli et ce qu'elle a remis de faire à plus tard."
      }
    ],
    "senses": [
      {
        "meaning": "savoir",
        "example": {
          "surah": 2,
          "ayah": 60,
          "globalAyah": 67,
          "surahName": "البَقَرَةِ",
          "words": [
            "وَإِذِ",
            "ٱسْتَسْقَىٰ",
            "مُوسَىٰ",
            "لِقَوْمِهِۦ",
            "فَقُلْنَا",
            "ٱضْرِب",
            "بِّعَصَاكَ",
            "ٱلْحَجَرَ",
            "فَٱنفَجَرَتْ",
            "مِنْهُ",
            "ٱثْنَتَا",
            "عَشْرَةَ",
            "عَيْنًا",
            "قَدْ",
            "عَلِمَ",
            "كُلُّ",
            "أُنَاسٍ",
            "مَّشْرَبَهُمْ",
            "كُلُوا۟",
            "وَٱشْرَبُوا۟",
            "مِن",
            "رِّزْقِ",
            "ٱللَّهِ",
            "وَلَا",
            "تَعْثَوْا۟",
            "فِى",
            "ٱلْأَرْضِ",
            "مُفْسِدِينَ"
          ],
          "targetIndex": 14,
          "translation": "Et [rappelez-vous] quand Moïse demanda de l'eau pour désaltérer son peuple, c'est alors que Nous dîmes: «Frappe le rocher avec ton bâton». Et tout d'un coup, douze sources en jaillirent, et certes, chaque tribu sut où s'abreuver! - «Mangez et buvez de ce qu'Allah vous accorde; et ne semez pas de troubles sur la terre comme des fauteurs de désordre».",
          "highlight": "sut"
        }
      },
      {
        "meaning": "savoir (ce qu'on ignorait)",
        "example": {
          "surah": 96,
          "ayah": 5,
          "globalAyah": 6111,
          "surahName": "العَلَقِ",
          "words": [
            "عَلَّمَ",
            "ٱلْإِنسَٰنَ",
            "مَا",
            "لَمْ",
            "يَعْلَمْ"
          ],
          "targetIndex": 4,
          "translation": "a enseigné à l'homme ce qu'il ne savait pas.",
          "highlight": "ne savait pas"
        }
      }
    ]
  },
  {
    "id": "aya",
    "arabic": "آيَة",
    "transliteration": "āya",
    "meaning": "signe ; verset",
    "kind": "noun",
    "note": "Pluriel : آيَات āyāt. Un verset du Coran est appelé un « signe ».",
    "root": "أ ي ي",
    "occurrences": 382,
    "rootOccurrences": 597,
    "pronunciation": {
      "surah": 2,
      "ayah": 259,
      "wordIndex": 46,
      "form": "ءَايَةً"
    },
    "examples": [
      {
        "surah": 26,
        "ayah": 2,
        "globalAyah": 2934,
        "surahName": "الشُّعَرَاءِ",
        "words": [
          "تِلْكَ",
          "ءَايَٰتُ",
          "ٱلْكِتَٰبِ",
          "ٱلْمُبِينِ"
        ],
        "targetIndex": 1,
        "translation": "Voici les versets du Livre explicite."
      },
      {
        "surah": 28,
        "ayah": 2,
        "globalAyah": 3254,
        "surahName": "القَصَصِ",
        "words": [
          "تِلْكَ",
          "ءَايَٰتُ",
          "ٱلْكِتَٰبِ",
          "ٱلْمُبِينِ"
        ],
        "targetIndex": 1,
        "translation": "Voici les versets du Livre explicite."
      },
      {
        "surah": 31,
        "ayah": 2,
        "globalAyah": 3471,
        "surahName": "لُقۡمَانَ",
        "words": [
          "تِلْكَ",
          "ءَايَٰتُ",
          "ٱلْكِتَٰبِ",
          "ٱلْحَكِيمِ"
        ],
        "targetIndex": 1,
        "translation": "Voici les versets du Livre plein de sagesse,"
      }
    ],
    "senses": [
      {
        "meaning": "signe (dans la création)",
        "tafsir": "آياته الدالة",
        "example": {
          "surah": 30,
          "ayah": 21,
          "globalAyah": 3430,
          "surahName": "الرُّومِ",
          "words": [
            "وَمِنْ",
            "ءَايَٰتِهِۦٓ",
            "أَنْ",
            "خَلَقَ",
            "لَكُم",
            "مِّنْ",
            "أَنفُسِكُمْ",
            "أَزْوَٰجًا",
            "لِّتَسْكُنُوٓا۟",
            "إِلَيْهَا",
            "وَجَعَلَ",
            "بَيْنَكُم",
            "مَّوَدَّةً",
            "وَرَحْمَةً",
            "إِنَّ",
            "فِى",
            "ذَٰلِكَ",
            "لَءَايَٰتٍ",
            "لِّقَوْمٍ",
            "يَتَفَكَّرُونَ"
          ],
          "targetIndex": 1,
          "translation": "Et parmi Ses signes Il a créé de vous, pour vous, des épouses pour que vous viviez en tranquillité avec elles et Il a mis entre vous de l'affection et de la bonté. Il y a en cela des preuves pour des gens qui réfléchissent.",
          "highlight": "signes"
        }
      },
      {
        "meaning": "verset du Coran",
        "example": {
          "surah": 2,
          "ayah": 106,
          "globalAyah": 113,
          "surahName": "البَقَرَةِ",
          "words": [
            "مَا",
            "نَنسَخْ",
            "مِنْ",
            "ءَايَةٍ",
            "أَوْ",
            "نُنسِهَا",
            "نَأْتِ",
            "بِخَيْرٍ",
            "مِّنْهَآ",
            "أَوْ",
            "مِثْلِهَآ",
            "أَلَمْ",
            "تَعْلَمْ",
            "أَنَّ",
            "ٱللَّهَ",
            "عَلَىٰ",
            "كُلِّ",
            "شَىْءٍ",
            "قَدِيرٌ"
          ],
          "targetIndex": 3,
          "translation": "Si Nous abrogeons un verset quelconque ou que Nous le fassions oublier, Nous en apportons un meilleur, ou un semblable. Ne sais-tu pas qu'Allah est Omnipotent?",
          "highlight": "verset"
        }
      },
      {
        "meaning": "miracle, preuve",
        "note": "La chamelle de Ṣāliḥ était une preuve de sa mission.",
        "tafsir": "بالبرهان",
        "example": {
          "surah": 7,
          "ayah": 73,
          "globalAyah": 1027,
          "surahName": "الأَعۡرَافِ",
          "words": [
            "وَإِلَىٰ",
            "ثَمُودَ",
            "أَخَاهُمْ",
            "صَٰلِحًا",
            "قَالَ",
            "يَٰقَوْمِ",
            "ٱعْبُدُوا۟",
            "ٱللَّهَ",
            "مَا",
            "لَكُم",
            "مِّنْ",
            "إِلَٰهٍ",
            "غَيْرُهُۥ",
            "قَدْ",
            "جَآءَتْكُم",
            "بَيِّنَةٌ",
            "مِّن",
            "رَّبِّكُمْ",
            "هَٰذِهِۦ",
            "نَاقَةُ",
            "ٱللَّهِ",
            "لَكُمْ",
            "ءَايَةً",
            "فَذَرُوهَا",
            "تَأْكُلْ",
            "فِىٓ",
            "أَرْضِ",
            "ٱللَّهِ",
            "وَلَا",
            "تَمَسُّوهَا",
            "بِسُوٓءٍ",
            "فَيَأْخُذَكُمْ",
            "عَذَابٌ",
            "أَلِيمٌ"
          ],
          "targetIndex": 22,
          "translation": "Et aux Thamûd, leur frère Sâlih: «O mon peuple, dit-il, adorez Allah. Pour vous, pas d'autre divinité que Lui. Certes, une preuve vous est venue de votre Seigneur: voici la chamelle d'Allah, un signe pour vous. Laissez-la donc manger sur la terre d'Allah et ne lui faites aucun mal; sinon un châtiment douloureux vous saisira.",
          "highlight": "signe"
        }
      }
    ]
  },
  {
    "id": "kull",
    "arabic": "كُلّ",
    "transliteration": "kull",
    "meaning": "tout, chaque",
    "kind": "noun",
    "note": "Suivi d'un nom indéfini : « kullu nafsin » = chaque âme ; d'un défini : la totalité.",
    "root": "ك ل ل",
    "occurrences": 359,
    "rootOccurrences": 377,
    "pronunciation": {
      "surah": 2,
      "ayah": 20,
      "wordIndex": 22,
      "form": "كُلِّ"
    },
    "examples": [
      {
        "surah": 55,
        "ayah": 26,
        "globalAyah": 4927,
        "surahName": "الرَّحۡمَٰن",
        "words": [
          "كُلُّ",
          "مَنْ",
          "عَلَيْهَا",
          "فَانٍ"
        ],
        "targetIndex": 0,
        "translation": "Tout ce qui est sur elle [la terre] doit disparaître,"
      },
      {
        "surah": 38,
        "ayah": 37,
        "globalAyah": 4007,
        "surahName": "صٓ",
        "words": [
          "وَٱلشَّيَٰطِينَ",
          "كُلَّ",
          "بَنَّآءٍ",
          "وَغَوَّاصٍ"
        ],
        "targetIndex": 1,
        "translation": "De même que les diables, bâtisseurs et plongeurs de toutes sortes."
      },
      {
        "surah": 14,
        "ayah": 15,
        "globalAyah": 1765,
        "surahName": "إِبۡرَاهِيمَ",
        "words": [
          "وَٱسْتَفْتَحُوا۟",
          "وَخَابَ",
          "كُلُّ",
          "جَبَّارٍ",
          "عَنِيدٍ"
        ],
        "targetIndex": 2,
        "translation": "Et ils demandèrent [à Allah] la victoire. Et tout tyran insolent fut déçu."
      }
    ],
    "senses": [
      {
        "meaning": "chaque, tout",
        "example": {
          "surah": 55,
          "ayah": 26,
          "globalAyah": 4927,
          "surahName": "الرَّحۡمَٰن",
          "words": [
            "كُلُّ",
            "مَنْ",
            "عَلَيْهَا",
            "فَانٍ"
          ],
          "targetIndex": 0,
          "translation": "Tout ce qui est sur elle [la terre] doit disparaître,",
          "highlight": "Tout"
        }
      }
    ]
  },
  {
    "id": "jaala",
    "arabic": "جَعَلَ",
    "transliteration": "jaʿala",
    "meaning": "il a fait, rendu, placé",
    "kind": "verb",
    "note": "Exprime la transformation : faire de quelque chose autre chose (« Nous avons fait de la nuit un vêtement »).",
    "root": "ج ع ل",
    "occurrences": 340,
    "rootOccurrences": 346,
    "pronunciation": {
      "surah": 2,
      "ayah": 22,
      "wordIndex": 1,
      "form": "جَعَلَ"
    },
    "examples": [
      {
        "surah": 78,
        "ayah": 10,
        "globalAyah": 5682,
        "surahName": "النَّبَإِ",
        "words": [
          "وَجَعَلْنَا",
          "ٱلَّيْلَ",
          "لِبَاسًا"
        ],
        "targetIndex": 0,
        "translation": "et fait de la nuit un vêtement,"
      },
      {
        "surah": 77,
        "ayah": 25,
        "globalAyah": 5647,
        "surahName": "المُرۡسَلَاتِ",
        "words": [
          "أَلَمْ",
          "نَجْعَلِ",
          "ٱلْأَرْضَ",
          "كِفَاتًا"
        ],
        "targetIndex": 1,
        "translation": "N'avons-Nous pas fait de la terre un endroit les contenant tous,"
      },
      {
        "surah": 90,
        "ayah": 8,
        "globalAyah": 6031,
        "surahName": "البَلَدِ",
        "words": [
          "أَلَمْ",
          "نَجْعَل",
          "لَّهُۥ",
          "عَيْنَيْنِ"
        ],
        "targetIndex": 1,
        "translation": "Ne lui avons Nous pas assigné deux yeux,"
      }
    ],
    "senses": [
      {
        "meaning": "faire de… (transformer)",
        "example": {
          "surah": 2,
          "ayah": 22,
          "globalAyah": 29,
          "surahName": "البَقَرَةِ",
          "words": [
            "ٱلَّذِى",
            "جَعَلَ",
            "لَكُمُ",
            "ٱلْأَرْضَ",
            "فِرَٰشًا",
            "وَٱلسَّمَآءَ",
            "بِنَآءً",
            "وَأَنزَلَ",
            "مِنَ",
            "ٱلسَّمَآءِ",
            "مَآءً",
            "فَأَخْرَجَ",
            "بِهِۦ",
            "مِنَ",
            "ٱلثَّمَرَٰتِ",
            "رِزْقًا",
            "لَّكُمْ",
            "فَلَا",
            "تَجْعَلُوا۟",
            "لِلَّهِ",
            "أَندَادًا",
            "وَأَنتُمْ",
            "تَعْلَمُونَ"
          ],
          "targetIndex": 1,
          "translation": "C'est Lui qui vous a fait la terre pour lit, et le ciel pour toit; qui précipite la pluie du ciel et par elle fait surgir toutes sortes de fruits pour vous nourrir, ne Lui cherchez donc pas des égaux, alors que vous savez (tout cela).",
          "highlight": "fait la terre pour lit"
        }
      },
      {
        "meaning": "établir, désigner",
        "example": {
          "surah": 2,
          "ayah": 30,
          "globalAyah": 37,
          "surahName": "البَقَرَةِ",
          "words": [
            "وَإِذْ",
            "قَالَ",
            "رَبُّكَ",
            "لِلْمَلَٰٓئِكَةِ",
            "إِنِّى",
            "جَاعِلٌ",
            "فِى",
            "ٱلْأَرْضِ",
            "خَلِيفَةً",
            "قَالُوٓا۟",
            "أَتَجْعَلُ",
            "فِيهَا",
            "مَن",
            "يُفْسِدُ",
            "فِيهَا",
            "وَيَسْفِكُ",
            "ٱلدِّمَآءَ",
            "وَنَحْنُ",
            "نُسَبِّحُ",
            "بِحَمْدِكَ",
            "وَنُقَدِّسُ",
            "لَكَ",
            "قَالَ",
            "إِنِّىٓ",
            "أَعْلَمُ",
            "مَا",
            "لَا",
            "تَعْلَمُونَ"
          ],
          "targetIndex": 10,
          "translation": "Lorsque Ton Seigneur confia aux Anges: «Je vais établir sur la terre un vicaire «Khalifa». Ils dirent: «Vas-Tu y désigner un qui y mettra le désordre et répandra le sang, quand nous sommes là à Te sanctifier et à Te glorifier?» - Il dit: «En vérité, Je sais ce que vous ne savez pas!».",
          "highlight": "établir"
        }
      },
      {
        "meaning": "mettre, placer",
        "tafsir": "يضعون أصابعهم",
        "example": {
          "surah": 2,
          "ayah": 19,
          "globalAyah": 26,
          "surahName": "البَقَرَةِ",
          "words": [
            "أَوْ",
            "كَصَيِّبٍ",
            "مِّنَ",
            "ٱلسَّمَآءِ",
            "فِيهِ",
            "ظُلُمَٰتٌ",
            "وَرَعْدٌ",
            "وَبَرْقٌ",
            "يَجْعَلُونَ",
            "أَصَٰبِعَهُمْ",
            "فِىٓ",
            "ءَاذَانِهِم",
            "مِّنَ",
            "ٱلصَّوَٰعِقِ",
            "حَذَرَ",
            "ٱلْمَوْتِ",
            "وَٱللَّهُ",
            "مُحِيطٌۢ",
            "بِٱلْكَٰفِرِينَ"
          ],
          "targetIndex": 8,
          "translation": "(On peut encore les comparer à ces gens qui,) au moment où les nuées éclatent en pluies, chargées de ténèbres, de tonnerre et éclairs, se mettent les doigts dans les oreilles, terrorisés par le fracas de la foudre et craignant la mort; et Allah encercle de tous côtés les infidèles.",
          "highlight": "mettent"
        }
      }
    ]
  },
  {
    "id": "rasul",
    "arabic": "رَسُول",
    "transliteration": "rasūl",
    "meaning": "messager",
    "kind": "noun",
    "note": "Pluriel : رُسُل rusul. Même racine que أَرْسَلَ arsala (envoyer) et رِسَالَة risāla (message).",
    "root": "ر س ل",
    "occurrences": 332,
    "rootOccurrences": 513,
    "pronunciation": {
      "surah": 2,
      "ayah": 101,
      "wordIndex": 2,
      "form": "رَسُولٌ"
    },
    "examples": [
      {
        "surah": 26,
        "ayah": 107,
        "globalAyah": 3039,
        "surahName": "الشُّعَرَاءِ",
        "words": [
          "إِنِّى",
          "لَكُمْ",
          "رَسُولٌ",
          "أَمِينٌ"
        ],
        "targetIndex": 2,
        "translation": "Je suis pour vous un messager digne de confiance."
      },
      {
        "surah": 69,
        "ayah": 40,
        "globalAyah": 5363,
        "surahName": "الحَاقَّةِ",
        "words": [
          "إِنَّهُۥ",
          "لَقَوْلُ",
          "رَسُولٍ",
          "كَرِيمٍ"
        ],
        "targetIndex": 2,
        "translation": "que ceci [le Coran] est la parole d'un noble Messager,"
      },
      {
        "surah": 81,
        "ayah": 19,
        "globalAyah": 5819,
        "surahName": "التَّكۡوِيرِ",
        "words": [
          "إِنَّهُۥ",
          "لَقَوْلُ",
          "رَسُولٍ",
          "كَرِيمٍ"
        ],
        "targetIndex": 2,
        "translation": "Ceci [le Coran] est la parole d'un noble Messager,"
      }
    ],
    "senses": [
      {
        "meaning": "Messager d'Allah",
        "example": {
          "surah": 48,
          "ayah": 29,
          "globalAyah": 4612,
          "surahName": "الفَتۡحِ",
          "words": [
            "مُّحَمَّدٌ",
            "رَّسُولُ",
            "ٱللَّهِ",
            "وَٱلَّذِينَ",
            "مَعَهُۥٓ",
            "أَشِدَّآءُ",
            "عَلَى",
            "ٱلْكُفَّارِ",
            "رُحَمَآءُ",
            "بَيْنَهُمْ",
            "تَرَىٰهُمْ",
            "رُكَّعًا",
            "سُجَّدًا",
            "يَبْتَغُونَ",
            "فَضْلًا",
            "مِّنَ",
            "ٱللَّهِ",
            "وَرِضْوَٰنًا",
            "سِيمَاهُمْ",
            "فِى",
            "وُجُوهِهِم",
            "مِّنْ",
            "أَثَرِ",
            "ٱلسُّجُودِ",
            "ذَٰلِكَ",
            "مَثَلُهُمْ",
            "فِى",
            "ٱلتَّوْرَىٰةِ",
            "وَمَثَلُهُمْ",
            "فِى",
            "ٱلْإِنجِيلِ",
            "كَزَرْعٍ",
            "أَخْرَجَ",
            "شَطْـَٔهُۥ",
            "فَـَٔازَرَهُۥ",
            "فَٱسْتَغْلَظَ",
            "فَٱسْتَوَىٰ",
            "عَلَىٰ",
            "سُوقِهِۦ",
            "يُعْجِبُ",
            "ٱلزُّرَّاعَ",
            "لِيَغِيظَ",
            "بِهِمُ",
            "ٱلْكُفَّارَ",
            "وَعَدَ",
            "ٱللَّهُ",
            "ٱلَّذِينَ",
            "ءَامَنُوا۟",
            "وَعَمِلُوا۟",
            "ٱلصَّٰلِحَٰتِ",
            "مِنْهُم",
            "مَّغْفِرَةً",
            "وَأَجْرًا",
            "عَظِيمًۢا"
          ],
          "targetIndex": 1,
          "translation": "Muhammad est le Messager d'Allah. Et ceux qui sont avec lui sont durs envers les mécréants, miséricordieux entre eux. Tu les vois inclinés, prosternés, recherchant d'Allah grâce et agrément. Leurs visages sont marqués par la trace laissée par la prosternation. Telle est leur image dans la Thora. Et l'image que l'on donne d'eux dans l'Evangile est celle d'une semence qui sort sa pousse, puis se raffermit, s'épaissit, et ensuite se dresse sur sa tige, à l'émerveillement des semeurs. [Allah] par eux [les croyants] remplit de dépit les mécréants. Allah promet à ceux d'entre eux qui croient et font de bonnes œuvres, un pardon et une énorme récompense.",
          "highlight": "Messager"
        }
      },
      {
        "meaning": "émissaire (d'un homme)",
        "note": "Il s'agit de l'envoyé du roi d'Égypte auprès de Joseph.",
        "tafsir": "رسول الملك",
        "example": {
          "surah": 12,
          "ayah": 50,
          "globalAyah": 1646,
          "surahName": "يُوسُفَ",
          "words": [
            "وَقَالَ",
            "ٱلْمَلِكُ",
            "ٱئْتُونِى",
            "بِهِۦ",
            "فَلَمَّا",
            "جَآءَهُ",
            "ٱلرَّسُولُ",
            "قَالَ",
            "ٱرْجِعْ",
            "إِلَىٰ",
            "رَبِّكَ",
            "فَسْـَٔلْهُ",
            "مَا",
            "بَالُ",
            "ٱلنِّسْوَةِ",
            "ٱلَّٰتِى",
            "قَطَّعْنَ",
            "أَيْدِيَهُنَّ",
            "إِنَّ",
            "رَبِّى",
            "بِكَيْدِهِنَّ",
            "عَلِيمٌ"
          ],
          "targetIndex": 6,
          "translation": "Et le roi dit: «Amenez-le moi». Puis, lorsque l'émissaire arriva auprès de lui, [Joseph] dit: «Retourne auprès de ton maître et demande-lui: «Quelle était la raison qui poussa les femmes à se couper les mains? Mon Seigneur connaît bien leur ruse».",
          "highlight": "émissaire"
        }
      },
      {
        "meaning": "ange messager (Gabriel)",
        "tafsir": "جبريل",
        "example": {
          "surah": 81,
          "ayah": 19,
          "globalAyah": 5819,
          "surahName": "التَّكۡوِيرِ",
          "words": [
            "إِنَّهُۥ",
            "لَقَوْلُ",
            "رَسُولٍ",
            "كَرِيمٍ"
          ],
          "targetIndex": 2,
          "translation": "Ceci [le Coran] est la parole d'un noble Messager,",
          "highlight": "Messager"
        }
      }
    ]
  },
  {
    "id": "adhab",
    "arabic": "عَذَاب",
    "transliteration": "ʿadhāb",
    "meaning": "châtiment",
    "kind": "noun",
    "note": "Souvent qualifié : عَذَابٌ أَلِيم ʿadhābun alīm (un châtiment douloureux).",
    "root": "ع ذ ب",
    "occurrences": 322,
    "rootOccurrences": 373,
    "pronunciation": {
      "surah": 2,
      "ayah": 7,
      "wordIndex": 10,
      "form": "عَذَابٌ"
    },
    "examples": [
      {
        "surah": 52,
        "ayah": 7,
        "globalAyah": 4742,
        "surahName": "الطُّورِ",
        "words": [
          "إِنَّ",
          "عَذَابَ",
          "رَبِّكَ",
          "لَوَٰقِعٌ"
        ],
        "targetIndex": 1,
        "translation": "Le châtiment de ton Seigneur aura lieu inévitablement."
      },
      {
        "surah": 37,
        "ayah": 9,
        "globalAyah": 3797,
        "surahName": "الصَّافَّاتِ",
        "words": [
          "دُحُورًا",
          "وَلَهُمْ",
          "عَذَابٌ",
          "وَاصِبٌ"
        ],
        "targetIndex": 2,
        "translation": "et refoulés. Et ils auront un châtiment perpétuel."
      },
      {
        "surah": 16,
        "ayah": 117,
        "globalAyah": 2018,
        "surahName": "النَّحۡلِ",
        "words": [
          "مَتَٰعٌ",
          "قَلِيلٌ",
          "وَلَهُمْ",
          "عَذَابٌ",
          "أَلِيمٌ"
        ],
        "targetIndex": 3,
        "translation": "Ce sera pour eux une piètre jouissance, mais un douloureux châtiment les attend."
      }
    ],
    "senses": [
      {
        "meaning": "châtiment de l'au-delà",
        "example": {
          "surah": 2,
          "ayah": 7,
          "globalAyah": 14,
          "surahName": "البَقَرَةِ",
          "words": [
            "خَتَمَ",
            "ٱللَّهُ",
            "عَلَىٰ",
            "قُلُوبِهِمْ",
            "وَعَلَىٰ",
            "سَمْعِهِمْ",
            "وَعَلَىٰٓ",
            "أَبْصَٰرِهِمْ",
            "غِشَٰوَةٌ",
            "وَلَهُمْ",
            "عَذَابٌ",
            "عَظِيمٌ"
          ],
          "targetIndex": 10,
          "translation": "Allah a scellé leurs cœurs et leurs oreilles; et un voile épais leur couvre la vue; et pour eux il y aura un grand châtiment.",
          "highlight": "châtiment"
        }
      },
      {
        "meaning": "épreuve, châtiment ici-bas",
        "note": "Le « châtiment inférieur » désigne les épreuves de ce monde, avant le grand châtiment.",
        "tafsir": "في الدنيا",
        "example": {
          "surah": 32,
          "ayah": 21,
          "globalAyah": 3524,
          "surahName": "السَّجۡدَةِ",
          "words": [
            "وَلَنُذِيقَنَّهُم",
            "مِّنَ",
            "ٱلْعَذَابِ",
            "ٱلْأَدْنَىٰ",
            "دُونَ",
            "ٱلْعَذَابِ",
            "ٱلْأَكْبَرِ",
            "لَعَلَّهُمْ",
            "يَرْجِعُونَ"
          ],
          "targetIndex": 2,
          "translation": "Nous leur ferons certainement goûter au châtiment ici-bas, avant le grand châtiment afin qu'ils retournent (vers le chemin droit)!",
          "highlight": "châtiment"
        }
      },
      {
        "meaning": "peine légale",
        "tafsir": "وليحضر العقوبةَ",
        "example": {
          "surah": 24,
          "ayah": 2,
          "globalAyah": 2793,
          "surahName": "النُّورِ",
          "words": [
            "ٱلزَّانِيَةُ",
            "وَٱلزَّانِى",
            "فَٱجْلِدُوا۟",
            "كُلَّ",
            "وَٰحِدٍ",
            "مِّنْهُمَا",
            "مِا۟ئَةَ",
            "جَلْدَةٍ",
            "وَلَا",
            "تَأْخُذْكُم",
            "بِهِمَا",
            "رَأْفَةٌ",
            "فِى",
            "دِينِ",
            "ٱللَّهِ",
            "إِن",
            "كُنتُمْ",
            "تُؤْمِنُونَ",
            "بِٱللَّهِ",
            "وَٱلْيَوْمِ",
            "ٱلْءَاخِرِ",
            "وَلْيَشْهَدْ",
            "عَذَابَهُمَا",
            "طَآئِفَةٌ",
            "مِّنَ",
            "ٱلْمُؤْمِنِينَ"
          ],
          "targetIndex": 22,
          "translation": "La fornicatrice et le fornicateur, fouettez-les chacun de cent coups de fouet. Et ne soyez point pris de pitié pour eux dans l'exécution de la loi d'Allah - si vous croyez en Allah et au Jour dernier. Et qu'un groupe de croyants assiste à leur punition.",
          "highlight": "punition"
        }
      }
    ]
  },
  {
    "id": "sama",
    "arabic": "سَمَاء",
    "transliteration": "samāʾ",
    "meaning": "ciel",
    "kind": "noun",
    "note": "Pluriel : سَمَاوَات samāwāt. La racine س م و évoque l'élévation.",
    "root": "س م و",
    "occurrences": 310,
    "rootOccurrences": 381,
    "pronunciation": {
      "surah": 41,
      "ayah": 12,
      "wordIndex": 8,
      "form": "سَمَآءٍ"
    },
    "examples": [
      {
        "surah": 55,
        "ayah": 7,
        "globalAyah": 4908,
        "surahName": "الرَّحۡمَٰن",
        "words": [
          "وَٱلسَّمَآءَ",
          "رَفَعَهَا",
          "وَوَضَعَ",
          "ٱلْمِيزَانَ"
        ],
        "targetIndex": 0,
        "translation": "Et quant au ciel, Il l'a élevé bien haut. Et Il a établi la balance,"
      },
      {
        "surah": 71,
        "ayah": 15,
        "globalAyah": 5434,
        "surahName": "نُوحٍ",
        "words": [
          "أَلَمْ",
          "تَرَوْا۟",
          "كَيْفَ",
          "خَلَقَ",
          "ٱللَّهُ",
          "سَبْعَ",
          "سَمَٰوَٰتٍ",
          "طِبَاقًا"
        ],
        "targetIndex": 6,
        "translation": "N'avez-vous pas vu comment Allah a créé sept cieux superposés"
      },
      {
        "surah": 86,
        "ayah": 1,
        "globalAyah": 5932,
        "surahName": "الطَّارِقِ",
        "words": [
          "وَٱلسَّمَآءِ",
          "وَٱلطَّارِقِ"
        ],
        "targetIndex": 0,
        "translation": "Par le ciel et par l'astre nocturne"
      }
    ],
    "senses": [
      {
        "meaning": "ciel",
        "example": {
          "surah": 2,
          "ayah": 22,
          "globalAyah": 29,
          "surahName": "البَقَرَةِ",
          "words": [
            "ٱلَّذِى",
            "جَعَلَ",
            "لَكُمُ",
            "ٱلْأَرْضَ",
            "فِرَٰشًا",
            "وَٱلسَّمَآءَ",
            "بِنَآءً",
            "وَأَنزَلَ",
            "مِنَ",
            "ٱلسَّمَآءِ",
            "مَآءً",
            "فَأَخْرَجَ",
            "بِهِۦ",
            "مِنَ",
            "ٱلثَّمَرَٰتِ",
            "رِزْقًا",
            "لَّكُمْ",
            "فَلَا",
            "تَجْعَلُوا۟",
            "لِلَّهِ",
            "أَندَادًا",
            "وَأَنتُمْ",
            "تَعْلَمُونَ"
          ],
          "targetIndex": 5,
          "translation": "C'est Lui qui vous a fait la terre pour lit, et le ciel pour toit; qui précipite la pluie du ciel et par elle fait surgir toutes sortes de fruits pour vous nourrir, ne Lui cherchez donc pas des égaux, alors que vous savez (tout cela).",
          "highlight": "ciel"
        }
      },
      {
        "meaning": "pluie",
        "tafsir": "بإنزال الأمطار",
        "example": {
          "surah": 6,
          "ayah": 6,
          "globalAyah": 795,
          "surahName": "الأَنۡعَامِ",
          "words": [
            "أَلَمْ",
            "يَرَوْا۟",
            "كَمْ",
            "أَهْلَكْنَا",
            "مِن",
            "قَبْلِهِم",
            "مِّن",
            "قَرْنٍ",
            "مَّكَّنَّٰهُمْ",
            "فِى",
            "ٱلْأَرْضِ",
            "مَا",
            "لَمْ",
            "نُمَكِّن",
            "لَّكُمْ",
            "وَأَرْسَلْنَا",
            "ٱلسَّمَآءَ",
            "عَلَيْهِم",
            "مِّدْرَارًا",
            "وَجَعَلْنَا",
            "ٱلْأَنْهَٰرَ",
            "تَجْرِى",
            "مِن",
            "تَحْتِهِمْ",
            "فَأَهْلَكْنَٰهُم",
            "بِذُنُوبِهِمْ",
            "وَأَنشَأْنَا",
            "مِنۢ",
            "بَعْدِهِمْ",
            "قَرْنًا",
            "ءَاخَرِينَ"
          ],
          "targetIndex": 16,
          "translation": "N'ont-ils pas vu combien de générations, avant eux, Nous avons détruites, auxquelles Nous avions donné pouvoir sur terre, bien plus que ce que Nous vous avons donnés? Nous avions envoyé, sur eux, du ciel, la pluie en abondance, et Nous avions fait couler des rivières à leurs pieds. Puis Nous les avons détruites, pour leurs péchés; et Nous avons créé après eux, une nouvelle génération.",
          "highlight": "pluie"
        }
      }
    ]
  },
  {
    "id": "nafs",
    "arabic": "نَفْس",
    "transliteration": "nafs",
    "meaning": "âme ; soi-même",
    "kind": "noun",
    "note": "Pluriels : أَنْفُس anfus et نُفُوس nufūs. Désigne aussi la personne elle-même.",
    "root": "ن ف س",
    "occurrences": 295,
    "rootOccurrences": 298,
    "pronunciation": {
      "surah": 2,
      "ayah": 281,
      "wordIndex": 9,
      "form": "نَفْسٍ"
    },
    "examples": [
      {
        "surah": 91,
        "ayah": 7,
        "globalAyah": 6050,
        "surahName": "الشَّمۡسِ",
        "words": [
          "وَنَفْسٍ",
          "وَمَا",
          "سَوَّىٰهَا"
        ],
        "targetIndex": 0,
        "translation": "Et par l'âme et Celui qui l'a harmonieusement façonnée;"
      },
      {
        "surah": 81,
        "ayah": 14,
        "globalAyah": 5814,
        "surahName": "التَّكۡوِيرِ",
        "words": [
          "عَلِمَتْ",
          "نَفْسٌ",
          "مَّآ",
          "أَحْضَرَتْ"
        ],
        "targetIndex": 1,
        "translation": "chaque âme saura ce qu'elle a présenté."
      },
      {
        "surah": 74,
        "ayah": 38,
        "globalAyah": 5533,
        "surahName": "المُدَّثِّرِ",
        "words": [
          "كُلُّ",
          "نَفْسٍۭ",
          "بِمَا",
          "كَسَبَتْ",
          "رَهِينَةٌ"
        ],
        "targetIndex": 1,
        "translation": "Toute âme est l'otage de ce qu'elle a acquis."
      }
    ],
    "senses": [
      {
        "meaning": "âme",
        "example": {
          "surah": 91,
          "ayah": 7,
          "globalAyah": 6050,
          "surahName": "الشَّمۡسِ",
          "words": [
            "وَنَفْسٍ",
            "وَمَا",
            "سَوَّىٰهَا"
          ],
          "targetIndex": 0,
          "translation": "Et par l'âme et Celui qui l'a harmonieusement façonnée;",
          "highlight": "âme"
        }
      },
      {
        "meaning": "personne, vie humaine",
        "example": {
          "surah": 5,
          "ayah": 32,
          "globalAyah": 701,
          "surahName": "المَائـِدَةِ",
          "words": [
            "مِنْ",
            "أَجْلِ",
            "ذَٰلِكَ",
            "كَتَبْنَا",
            "عَلَىٰ",
            "بَنِىٓ",
            "إِسْرَٰٓءِيلَ",
            "أَنَّهُۥ",
            "مَن",
            "قَتَلَ",
            "نَفْسًۢا",
            "بِغَيْرِ",
            "نَفْسٍ",
            "أَوْ",
            "فَسَادٍ",
            "فِى",
            "ٱلْأَرْضِ",
            "فَكَأَنَّمَا",
            "قَتَلَ",
            "ٱلنَّاسَ",
            "جَمِيعًا",
            "وَمَنْ",
            "أَحْيَاهَا",
            "فَكَأَنَّمَآ",
            "أَحْيَا",
            "ٱلنَّاسَ",
            "جَمِيعًا",
            "وَلَقَدْ",
            "جَآءَتْهُمْ",
            "رُسُلُنَا",
            "بِٱلْبَيِّنَٰتِ",
            "ثُمَّ",
            "إِنَّ",
            "كَثِيرًا",
            "مِّنْهُم",
            "بَعْدَ",
            "ذَٰلِكَ",
            "فِى",
            "ٱلْأَرْضِ",
            "لَمُسْرِفُونَ"
          ],
          "targetIndex": 10,
          "translation": "C'est pourquoi Nous avons prescrit pour les Enfants d'Israël que quiconque tuerait une personne non coupable d'un meurtre ou d'une corruption sur la terre, c'est comme s'il avait tué tous les hommes. Et quiconque lui fait don de la vie, c'est comme s'il faisait don de la vie à tous les hommes. En effet Nos messagers sont venus à eux avec les preuves. Et puis voilà, qu'en dépit de cela, beaucoup d'entre eux se mettent à commettre des excès sur la terre.",
          "highlight": "personne"
        }
      },
      {
        "meaning": "soi-même",
        "example": {
          "surah": 6,
          "ayah": 12,
          "globalAyah": 801,
          "surahName": "الأَنۡعَامِ",
          "words": [
            "قُل",
            "لِّمَن",
            "مَّا",
            "فِى",
            "ٱلسَّمَٰوَٰتِ",
            "وَٱلْأَرْضِ",
            "قُل",
            "لِّلَّهِ",
            "كَتَبَ",
            "عَلَىٰ",
            "نَفْسِهِ",
            "ٱلرَّحْمَةَ",
            "لَيَجْمَعَنَّكُمْ",
            "إِلَىٰ",
            "يَوْمِ",
            "ٱلْقِيَٰمَةِ",
            "لَا",
            "رَيْبَ",
            "فِيهِ",
            "ٱلَّذِينَ",
            "خَسِرُوٓا۟",
            "أَنفُسَهُمْ",
            "فَهُمْ",
            "لَا",
            "يُؤْمِنُونَ"
          ],
          "targetIndex": 10,
          "translation": "Dis: «A qui appartient ce qui est dans les cieux et la terre?» Dis: «A Allah!» Il S'est à Lui-même prescrit la miséricorde. Il vous rassemblera, certainement, au Jour de la Résurrection: il n'y a pas de doute là-dessus. Ceux qui font leur propre perte sont ceux qui ne croient pas.",
          "highlight": "Lui-même"
        }
      }
    ]
  },
  {
    "id": "kafara",
    "arabic": "كَفَرَ",
    "transliteration": "kafara",
    "meaning": "il a mécru ; renier",
    "kind": "verb",
    "note": "Sens premier : couvrir, cacher. Le mécréant « couvre » la vérité ou le bienfait reçu.",
    "root": "ك ف ر",
    "occurrences": 289,
    "rootOccurrences": 525,
    "pronunciation": {
      "surah": 2,
      "ayah": 102,
      "wordIndex": 8,
      "form": "كَفَرَ"
    },
    "examples": [
      {
        "surah": 84,
        "ayah": 22,
        "globalAyah": 5906,
        "surahName": "الانشِقَاقِ",
        "words": [
          "بَلِ",
          "ٱلَّذِينَ",
          "كَفَرُوا۟",
          "يُكَذِّبُونَ"
        ],
        "targetIndex": 2,
        "translation": "Mais ceux qui ne croient pas, le traitent plutôt de mensonge."
      },
      {
        "surah": 54,
        "ayah": 14,
        "globalAyah": 4860,
        "surahName": "القَمَرِ",
        "words": [
          "تَجْرِى",
          "بِأَعْيُنِنَا",
          "جَزَآءً",
          "لِّمَن",
          "كَانَ",
          "كُفِرَ"
        ],
        "targetIndex": 5,
        "translation": "voguant sous Nos yeux: récompense pour celui qu'on avait renié [Noé]."
      },
      {
        "surah": 19,
        "ayah": 77,
        "globalAyah": 2327,
        "surahName": "مَرۡيَمَ",
        "words": [
          "أَفَرَءَيْتَ",
          "ٱلَّذِى",
          "كَفَرَ",
          "بِـَٔايَٰتِنَا",
          "وَقَالَ",
          "لَأُوتَيَنَّ",
          "مَالًا",
          "وَوَلَدًا"
        ],
        "targetIndex": 2,
        "translation": "As-tu vu celui qui ne croit pas à Nos versets et dit: «On me donnera certes des biens et des enfants»?"
      }
    ],
    "senses": [
      {
        "meaning": "mécroire, rejeter la foi",
        "example": {
          "surah": 2,
          "ayah": 6,
          "globalAyah": 13,
          "surahName": "البَقَرَةِ",
          "words": [
            "إِنَّ",
            "ٱلَّذِينَ",
            "كَفَرُوا۟",
            "سَوَآءٌ",
            "عَلَيْهِمْ",
            "ءَأَنذَرْتَهُمْ",
            "أَمْ",
            "لَمْ",
            "تُنذِرْهُمْ",
            "لَا",
            "يُؤْمِنُونَ"
          ],
          "targetIndex": 2,
          "translation": "[Mais] certes les infidèles que tu les avertisses ou que tu ne les avertisses pas, ils ne croient pas.",
          "highlight": "infidèles"
        }
      },
      {
        "meaning": "être ingrat",
        "tafsir": "جحدتم نعمة الله",
        "example": {
          "surah": 14,
          "ayah": 7,
          "globalAyah": 1757,
          "surahName": "إِبۡرَاهِيمَ",
          "words": [
            "وَإِذْ",
            "تَأَذَّنَ",
            "رَبُّكُمْ",
            "لَئِن",
            "شَكَرْتُمْ",
            "لَأَزِيدَنَّكُمْ",
            "وَلَئِن",
            "كَفَرْتُمْ",
            "إِنَّ",
            "عَذَابِى",
            "لَشَدِيدٌ"
          ],
          "targetIndex": 7,
          "translation": "Et lorsque votre Seigneur proclama: «Si vous êtes reconnaissants, très certainement J'augmenterai [Mes bienfaits] pour vous. Mais si vous êtes ingrats, Mon châtiment sera terrible».",
          "highlight": "ingrats"
        }
      },
      {
        "meaning": "renier, désavouer",
        "tafsir": "يتبرأ بعضكم من بعض",
        "example": {
          "surah": 29,
          "ayah": 25,
          "globalAyah": 3365,
          "surahName": "العَنكَبُوتِ",
          "words": [
            "وَقَالَ",
            "إِنَّمَا",
            "ٱتَّخَذْتُم",
            "مِّن",
            "دُونِ",
            "ٱللَّهِ",
            "أَوْثَٰنًا",
            "مَّوَدَّةَ",
            "بَيْنِكُمْ",
            "فِى",
            "ٱلْحَيَوٰةِ",
            "ٱلدُّنْيَا",
            "ثُمَّ",
            "يَوْمَ",
            "ٱلْقِيَٰمَةِ",
            "يَكْفُرُ",
            "بَعْضُكُم",
            "بِبَعْضٍ",
            "وَيَلْعَنُ",
            "بَعْضُكُم",
            "بَعْضًا",
            "وَمَأْوَىٰكُمُ",
            "ٱلنَّارُ",
            "وَمَا",
            "لَكُم",
            "مِّن",
            "نَّٰصِرِينَ"
          ],
          "targetIndex": 15,
          "translation": "Et [Abraham] dit: «En effet, c'est pour cimenter des liens entre vous-mêmes dans la vie présente, que vous avez adopté des idoles, en dehors d'Allah. Ensuite, le Jour de la Résurrection, les uns rejetteront les autres, et les uns maudiront les autres, tandis que vous aurez le Feu pour refuge, n'aurez pas de protecteurs.",
          "highlight": "rejetteront"
        }
      }
    ]
  },
  {
    "id": "shay",
    "arabic": "شَيْء",
    "transliteration": "shayʾ",
    "meaning": "chose",
    "kind": "noun",
    "note": "Très fréquent dans « ʿalā kulli shayʾin qadīr » : Il est capable de toute chose.",
    "root": "ش ي أ",
    "occurrences": 283,
    "rootOccurrences": 519,
    "pronunciation": {
      "surah": 2,
      "ayah": 20,
      "wordIndex": 23,
      "form": "شَىْءٍ"
    },
    "examples": [
      {
        "surah": 78,
        "ayah": 29,
        "globalAyah": 5701,
        "surahName": "النَّبَإِ",
        "words": [
          "وَكُلَّ",
          "شَىْءٍ",
          "أَحْصَيْنَٰهُ",
          "كِتَٰبًا"
        ],
        "targetIndex": 1,
        "translation": "alors que Nous avons dénombré toutes choses en écrit."
      },
      {
        "surah": 19,
        "ayah": 89,
        "globalAyah": 2339,
        "surahName": "مَرۡيَمَ",
        "words": [
          "لَّقَدْ",
          "جِئْتُمْ",
          "شَيْـًٔا",
          "إِدًّا"
        ],
        "targetIndex": 2,
        "translation": "Vous avancez certes là une chose abominable!"
      },
      {
        "surah": 80,
        "ayah": 18,
        "globalAyah": 5776,
        "surahName": "عَبَسَ",
        "words": [
          "مِنْ",
          "أَىِّ",
          "شَىْءٍ",
          "خَلَقَهُۥ"
        ],
        "targetIndex": 2,
        "translation": "De quoi [Allah] l'a-t-Il créé?"
      }
    ],
    "senses": [
      {
        "meaning": "chose",
        "example": {
          "surah": 2,
          "ayah": 20,
          "globalAyah": 27,
          "surahName": "البَقَرَةِ",
          "words": [
            "يَكَادُ",
            "ٱلْبَرْقُ",
            "يَخْطَفُ",
            "أَبْصَٰرَهُمْ",
            "كُلَّمَآ",
            "أَضَآءَ",
            "لَهُم",
            "مَّشَوْا۟",
            "فِيهِ",
            "وَإِذَآ",
            "أَظْلَمَ",
            "عَلَيْهِمْ",
            "قَامُوا۟",
            "وَلَوْ",
            "شَآءَ",
            "ٱللَّهُ",
            "لَذَهَبَ",
            "بِسَمْعِهِمْ",
            "وَأَبْصَٰرِهِمْ",
            "إِنَّ",
            "ٱللَّهَ",
            "عَلَىٰ",
            "كُلِّ",
            "شَىْءٍ",
            "قَدِيرٌ"
          ],
          "targetIndex": 23,
          "translation": "L'éclair presque leur emporte la vue: chaque fois qu'il leur donne de la lumière, ils avancent; mais dès qu'il fait obscur, ils s'arrêtent. Si Allah le voulait Il leur enlèverait certes l'ouïe et la vue, car Allah a pouvoir sur toute chose.",
          "highlight": "toute chose"
        }
      },
      {
        "meaning": "un peu de",
        "tafsir": "بشيء يسير",
        "example": {
          "surah": 2,
          "ayah": 155,
          "globalAyah": 162,
          "surahName": "البَقَرَةِ",
          "words": [
            "وَلَنَبْلُوَنَّكُم",
            "بِشَىْءٍ",
            "مِّنَ",
            "ٱلْخَوْفِ",
            "وَٱلْجُوعِ",
            "وَنَقْصٍ",
            "مِّنَ",
            "ٱلْأَمْوَٰلِ",
            "وَٱلْأَنفُسِ",
            "وَٱلثَّمَرَٰتِ",
            "وَبَشِّرِ",
            "ٱلصَّٰبِرِينَ"
          ],
          "targetIndex": 1,
          "translation": "Très certainement, Nous vous éprouverons par un peu de peur, de faim et de diminution de biens, de personnes et de fruits. Et fais la bonne annonce aux endurants,",
          "highlight": "un peu de peur"
        }
      }
    ]
  },
  {
    "id": "jaa",
    "arabic": "جَاءَ",
    "transliteration": "jāʾa",
    "meaning": "il est venu ; venir",
    "kind": "verb",
    "note": "« Idhā jāʾa naṣru-llāh » : lorsque vient le secours d'Allah (sourate An-Naṣr).",
    "root": "ج ي أ",
    "occurrences": 278,
    "rootOccurrences": 278,
    "pronunciation": {
      "surah": 4,
      "ayah": 43,
      "wordIndex": 26,
      "form": "جَآءَ"
    },
    "examples": [
      {
        "surah": 110,
        "ayah": 1,
        "globalAyah": 6214,
        "surahName": "النَّصۡرِ",
        "words": [
          "إِذَا",
          "جَآءَ",
          "نَصْرُ",
          "ٱللَّهِ",
          "وَٱلْفَتْحُ"
        ],
        "targetIndex": 1,
        "translation": "Lorsque vient le secours d'Allah ainsi que la victoire,"
      },
      {
        "surah": 80,
        "ayah": 33,
        "globalAyah": 5791,
        "surahName": "عَبَسَ",
        "words": [
          "فَإِذَا",
          "جَآءَتِ",
          "ٱلصَّآخَّةُ"
        ],
        "targetIndex": 1,
        "translation": "Puis quand viendra le Fracas,"
      },
      {
        "surah": 79,
        "ayah": 34,
        "globalAyah": 5746,
        "surahName": "النَّازِعَاتِ",
        "words": [
          "فَإِذَا",
          "جَآءَتِ",
          "ٱلطَّآمَّةُ",
          "ٱلْكُبْرَىٰ"
        ],
        "targetIndex": 1,
        "translation": "Puis quand viendra le grand cataclysme,"
      }
    ],
    "senses": [
      {
        "meaning": "venir, arriver",
        "example": {
          "surah": 110,
          "ayah": 1,
          "globalAyah": 6214,
          "surahName": "النَّصۡرِ",
          "words": [
            "إِذَا",
            "جَآءَ",
            "نَصْرُ",
            "ٱللَّهِ",
            "وَٱلْفَتْحُ"
          ],
          "targetIndex": 1,
          "translation": "Lorsque vient le secours d'Allah ainsi que la victoire,",
          "highlight": "vient"
        }
      },
      {
        "meaning": "apporter, venir avec (jāʾa bi-)",
        "example": {
          "surah": 6,
          "ayah": 160,
          "globalAyah": 949,
          "surahName": "الأَنۡعَامِ",
          "words": [
            "مَن",
            "جَآءَ",
            "بِٱلْحَسَنَةِ",
            "فَلَهُۥ",
            "عَشْرُ",
            "أَمْثَالِهَا",
            "وَمَن",
            "جَآءَ",
            "بِٱلسَّيِّئَةِ",
            "فَلَا",
            "يُجْزَىٰٓ",
            "إِلَّا",
            "مِثْلَهَا",
            "وَهُمْ",
            "لَا",
            "يُظْلَمُونَ"
          ],
          "targetIndex": 1,
          "translation": "Quiconque viendra avec le bien aura dix fois autant; et quiconque viendra avec le mal ne sera rétribué que par son équivalent. Et on ne leur fera aucune injustice.",
          "highlight": "viendra avec"
        }
      }
    ]
  },
  {
    "id": "amila",
    "arabic": "عَمِلَ",
    "transliteration": "ʿamila",
    "meaning": "il a œuvré ; agir, faire",
    "kind": "verb",
    "note": "Souvent associé à la foi : « ceux qui croient et accomplissent (ʿamilū) les bonnes œuvres ».",
    "root": "ع م ل",
    "occurrences": 276,
    "rootOccurrences": 360,
    "pronunciation": {
      "surah": 6,
      "ayah": 54,
      "wordIndex": 15,
      "form": "عَمِلَ"
    },
    "examples": [
      {
        "surah": 37,
        "ayah": 96,
        "globalAyah": 3884,
        "surahName": "الصَّافَّاتِ",
        "words": [
          "وَٱللَّهُ",
          "خَلَقَكُمْ",
          "وَمَا",
          "تَعْمَلُونَ"
        ],
        "targetIndex": 3,
        "translation": "alors que c'est Allah qui vous a créés, vous et ce que vous fabriquez?»"
      },
      {
        "surah": 99,
        "ayah": 7,
        "globalAyah": 6145,
        "surahName": "الزَّلۡزَلَةِ",
        "words": [
          "فَمَن",
          "يَعْمَلْ",
          "مِثْقَالَ",
          "ذَرَّةٍ",
          "خَيْرًا",
          "يَرَهُۥ"
        ],
        "targetIndex": 1,
        "translation": "Quiconque fait un bien fût-ce du poids d'un atome, le verra,"
      },
      {
        "surah": 30,
        "ayah": 44,
        "globalAyah": 3453,
        "surahName": "الرُّومِ",
        "words": [
          "مَن",
          "كَفَرَ",
          "فَعَلَيْهِ",
          "كُفْرُهُۥ",
          "وَمَنْ",
          "عَمِلَ",
          "صَٰلِحًا",
          "فَلِأَنفُسِهِمْ",
          "يَمْهَدُونَ"
        ],
        "targetIndex": 5,
        "translation": "Celui qui aura mécru subira [les conséquences] de son infidélité. Et quiconque aura œuvré en bien... C'est pour eux-mêmes qu'ils préparent (leur avenir),"
      }
    ],
    "senses": [
      {
        "meaning": "agir, faire (des œuvres)",
        "example": {
          "surah": 99,
          "ayah": 7,
          "globalAyah": 6145,
          "surahName": "الزَّلۡزَلَةِ",
          "words": [
            "فَمَن",
            "يَعْمَلْ",
            "مِثْقَالَ",
            "ذَرَّةٍ",
            "خَيْرًا",
            "يَرَهُۥ"
          ],
          "targetIndex": 1,
          "translation": "Quiconque fait un bien fût-ce du poids d'un atome, le verra,",
          "highlight": "fait"
        }
      },
      {
        "meaning": "fabriquer, travailler pour",
        "example": {
          "surah": 34,
          "ayah": 13,
          "globalAyah": 3619,
          "surahName": "سَبَإٍ",
          "words": [
            "يَعْمَلُونَ",
            "لَهُۥ",
            "مَا",
            "يَشَآءُ",
            "مِن",
            "مَّحَٰرِيبَ",
            "وَتَمَٰثِيلَ",
            "وَجِفَانٍ",
            "كَٱلْجَوَابِ",
            "وَقُدُورٍ",
            "رَّاسِيَٰتٍ",
            "ٱعْمَلُوٓا۟",
            "ءَالَ",
            "دَاوُۥدَ",
            "شُكْرًا",
            "وَقَلِيلٌ",
            "مِّنْ",
            "عِبَادِىَ",
            "ٱلشَّكُورُ"
          ],
          "targetIndex": 0,
          "translation": "Ils exécutaient pour lui ce qu'il voulait: sanctuaires, statues, plateaux comme des bassins, et marmites bien ancrées. - «O famille de David, œuvrez par gratitude», alors qu'il y a eu peu de Mes serviteurs qui sont reconnaissants.",
          "highlight": "exécutaient"
        }
      }
    ]
  },
  {
    "id": "raa",
    "arabic": "رَأَى",
    "transliteration": "raʾā",
    "meaning": "il a vu ; voir",
    "kind": "verb",
    "note": "Inaccompli : يَرَى yarā. « A-raʾayta » (as-tu vu… ?) introduit souvent une réflexion.",
    "root": "ر أ ي",
    "occurrences": 271,
    "rootOccurrences": 328,
    "pronunciation": {
      "surah": 53,
      "ayah": 11,
      "wordIndex": 4,
      "form": "رَأَىٰٓ"
    },
    "examples": [
      {
        "surah": 96,
        "ayah": 14,
        "globalAyah": 6120,
        "surahName": "العَلَقِ",
        "words": [
          "أَلَمْ",
          "يَعْلَم",
          "بِأَنَّ",
          "ٱللَّهَ",
          "يَرَىٰ"
        ],
        "targetIndex": 4,
        "translation": "Ne sait-il pas que vraiment Allah voit?"
      },
      {
        "surah": 53,
        "ayah": 12,
        "globalAyah": 4796,
        "surahName": "النَّجۡمِ",
        "words": [
          "أَفَتُمَٰرُونَهُۥ",
          "عَلَىٰ",
          "مَا",
          "يَرَىٰ"
        ],
        "targetIndex": 3,
        "translation": "Lui contestez-vous donc ce qu'il voit?"
      },
      {
        "surah": 79,
        "ayah": 36,
        "globalAyah": 5748,
        "surahName": "النَّازِعَاتِ",
        "words": [
          "وَبُرِّزَتِ",
          "ٱلْجَحِيمُ",
          "لِمَن",
          "يَرَىٰ"
        ],
        "targetIndex": 3,
        "translation": "l'Enfer sera pleinement visible à celui qui regardera..."
      }
    ],
    "senses": [
      {
        "meaning": "voir (de ses yeux)",
        "example": {
          "surah": 6,
          "ayah": 76,
          "globalAyah": 865,
          "surahName": "الأَنۡعَامِ",
          "words": [
            "فَلَمَّا",
            "جَنَّ",
            "عَلَيْهِ",
            "ٱلَّيْلُ",
            "رَءَا",
            "كَوْكَبًا",
            "قَالَ",
            "هَٰذَا",
            "رَبِّى",
            "فَلَمَّآ",
            "أَفَلَ",
            "قَالَ",
            "لَآ",
            "أُحِبُّ",
            "ٱلْءَافِلِينَ"
          ],
          "targetIndex": 4,
          "translation": "Quand la nuit l'enveloppa, il observa une étoile, et dit: «Voilà mon Seigneur!» Puis, lorsqu'elle disparut, il dit: «Je n'aime pas les choses qui disparaissent».",
          "highlight": "observa"
        }
      },
      {
        "meaning": "voir en songe",
        "tafsir": "في المنام",
        "example": {
          "surah": 12,
          "ayah": 4,
          "globalAyah": 1600,
          "surahName": "يُوسُفَ",
          "words": [
            "إِذْ",
            "قَالَ",
            "يُوسُفُ",
            "لِأَبِيهِ",
            "يَٰٓأَبَتِ",
            "إِنِّى",
            "رَأَيْتُ",
            "أَحَدَ",
            "عَشَرَ",
            "كَوْكَبًا",
            "وَٱلشَّمْسَ",
            "وَٱلْقَمَرَ",
            "رَأَيْتُهُمْ",
            "لِى",
            "سَٰجِدِينَ"
          ],
          "targetIndex": 6,
          "translation": "Quand Joseph dit à son père: «O mon père, j'ai vu [en songe], onze étoiles, et aussi le soleil et la lune; je les ai vus prosternés devant moi».",
          "highlight": "vu"
        }
      },
      {
        "meaning": "estimer, juger",
        "note": "Les mécréants « voient » le châtiment lointain : ils le jugent improbable.",
        "tafsir": "يستبعدون العذاب",
        "example": {
          "surah": 70,
          "ayah": 6,
          "globalAyah": 5381,
          "surahName": "المَعَارِجِ",
          "words": [
            "إِنَّهُمْ",
            "يَرَوْنَهُۥ",
            "بَعِيدًا"
          ],
          "targetIndex": 1,
          "translation": "Ils le (le châtiment) voient bien loin,",
          "highlight": "voient"
        }
      }
    ]
  },
  {
    "id": "kitab",
    "arabic": "كِتَاب",
    "transliteration": "kitāb",
    "meaning": "livre, écrit",
    "kind": "noun",
    "note": "Racine ك ت ب (écrire). « Ahl al-kitāb » : les gens du Livre.",
    "root": "ك ت ب",
    "occurrences": 260,
    "rootOccurrences": 319,
    "pronunciation": {
      "surah": 13,
      "ayah": 38,
      "wordIndex": 20,
      "form": "كِتَابٌ"
    },
    "examples": [
      {
        "surah": 2,
        "ayah": 2,
        "globalAyah": 9,
        "surahName": "البَقَرَةِ",
        "words": [
          "ذَٰلِكَ",
          "ٱلْكِتَٰبُ",
          "لَا",
          "رَيْبَ",
          "فِيهِ",
          "هُدًى",
          "لِّلْمُتَّقِينَ"
        ],
        "targetIndex": 1,
        "translation": "C'est le Livre au sujet duquel il n'y a aucun doute, c'est un guide pour les pieux,"
      },
      {
        "surah": 83,
        "ayah": 9,
        "globalAyah": 5857,
        "surahName": "المُطَفِّفِينَ",
        "words": [
          "كِتَٰبٌ",
          "مَّرْقُومٌ"
        ],
        "targetIndex": 0,
        "translation": "Un livre déjà cacheté (achevé)."
      },
      {
        "surah": 56,
        "ayah": 78,
        "globalAyah": 5057,
        "surahName": "الوَاقِعَةِ",
        "words": [
          "فِى",
          "كِتَٰبٍ",
          "مَّكْنُونٍ"
        ],
        "targetIndex": 1,
        "translation": "dans un Livre bien gardé"
      }
    ],
    "senses": [
      {
        "meaning": "Livre révélé",
        "example": {
          "surah": 2,
          "ayah": 2,
          "globalAyah": 9,
          "surahName": "البَقَرَةِ",
          "words": [
            "ذَٰلِكَ",
            "ٱلْكِتَٰبُ",
            "لَا",
            "رَيْبَ",
            "فِيهِ",
            "هُدًى",
            "لِّلْمُتَّقِينَ"
          ],
          "targetIndex": 1,
          "translation": "C'est le Livre au sujet duquel il n'y a aucun doute, c'est un guide pour les pieux,",
          "highlight": "Livre"
        }
      },
      {
        "meaning": "lettre",
        "example": {
          "surah": 27,
          "ayah": 29,
          "globalAyah": 3188,
          "surahName": "النَّمۡلِ",
          "words": [
            "قَالَتْ",
            "يَٰٓأَيُّهَا",
            "ٱلْمَلَؤُا۟",
            "إِنِّىٓ",
            "أُلْقِىَ",
            "إِلَىَّ",
            "كِتَٰبٌ",
            "كَرِيمٌ"
          ],
          "targetIndex": 6,
          "translation": "La reine dit: «O notables! Une noble lettre m'a été lancée.",
          "highlight": "lettre"
        }
      },
      {
        "meaning": "registre des actes",
        "tafsir": "سُجِّلت فيه أعماله",
        "example": {
          "surah": 17,
          "ayah": 13,
          "globalAyah": 2042,
          "surahName": "الإِسۡرَاءِ",
          "words": [
            "وَكُلَّ",
            "إِنسَٰنٍ",
            "أَلْزَمْنَٰهُ",
            "طَٰٓئِرَهُۥ",
            "فِى",
            "عُنُقِهِۦ",
            "وَنُخْرِجُ",
            "لَهُۥ",
            "يَوْمَ",
            "ٱلْقِيَٰمَةِ",
            "كِتَٰبًا",
            "يَلْقَىٰهُ",
            "مَنشُورًا"
          ],
          "targetIndex": 10,
          "translation": "Et au cou de chaque homme, Nous avons attaché son œuvre. Et au Jour de la Résurrection, Nous lui sortirons un écrit qu'il trouvera déroulé:",
          "highlight": "écrit"
        }
      },
      {
        "meaning": "décret, prescription",
        "tafsir": "القضاء والقدر",
        "example": {
          "surah": 8,
          "ayah": 68,
          "globalAyah": 1228,
          "surahName": "الأَنفَالِ",
          "words": [
            "لَّوْلَا",
            "كِتَٰبٌ",
            "مِّنَ",
            "ٱللَّهِ",
            "سَبَقَ",
            "لَمَسَّكُمْ",
            "فِيمَآ",
            "أَخَذْتُمْ",
            "عَذَابٌ",
            "عَظِيمٌ"
          ],
          "targetIndex": 1,
          "translation": "N'eût-été une prescription préalable d'Allah, un énorme châtiment vous aurait touché pour ce que vous avez pris. [de la rançon]",
          "highlight": "prescription"
        }
      }
    ]
  },
  {
    "id": "haqq",
    "arabic": "حَقّ",
    "transliteration": "ḥaqq",
    "meaning": "vérité ; droit",
    "kind": "noun",
    "note": "Désigne ce qui est vrai, juste et dû. Al-Ḥaqq est aussi un nom d'Allah.",
    "root": "ح ق ق",
    "occurrences": 247,
    "rootOccurrences": 287,
    "pronunciation": {
      "surah": 3,
      "ayah": 86,
      "wordIndex": 10,
      "form": "حَقٌّ"
    },
    "examples": [
      {
        "surah": 17,
        "ayah": 81,
        "globalAyah": 2110,
        "surahName": "الإِسۡرَاءِ",
        "words": [
          "وَقُلْ",
          "جَآءَ",
          "ٱلْحَقُّ",
          "وَزَهَقَ",
          "ٱلْبَٰطِلُ",
          "إِنَّ",
          "ٱلْبَٰطِلَ",
          "كَانَ",
          "زَهُوقًا"
        ],
        "targetIndex": 2,
        "translation": "Et dis: «La Vérité (l'Islam) est venue et l'Erreur a disparu. Car l'Erreur est destinée à disparaître»."
      },
      {
        "surah": 51,
        "ayah": 19,
        "globalAyah": 4694,
        "surahName": "الذَّارِيَاتِ",
        "words": [
          "وَفِىٓ",
          "أَمْوَٰلِهِمْ",
          "حَقٌّ",
          "لِّلسَّآئِلِ",
          "وَٱلْمَحْرُومِ"
        ],
        "targetIndex": 2,
        "translation": "et dans leurs biens, il y avait un droit au mendiant et au déshérité."
      },
      {
        "surah": 56,
        "ayah": 95,
        "globalAyah": 5074,
        "surahName": "الوَاقِعَةِ",
        "words": [
          "إِنَّ",
          "هَٰذَا",
          "لَهُوَ",
          "حَقُّ",
          "ٱلْيَقِينِ"
        ],
        "targetIndex": 3,
        "translation": "C'est cela la pleine certitude."
      }
    ],
    "senses": [
      {
        "meaning": "vérité",
        "example": {
          "surah": 17,
          "ayah": 81,
          "globalAyah": 2110,
          "surahName": "الإِسۡرَاءِ",
          "words": [
            "وَقُلْ",
            "جَآءَ",
            "ٱلْحَقُّ",
            "وَزَهَقَ",
            "ٱلْبَٰطِلُ",
            "إِنَّ",
            "ٱلْبَٰطِلَ",
            "كَانَ",
            "زَهُوقًا"
          ],
          "targetIndex": 2,
          "translation": "Et dis: «La Vérité (l'Islam) est venue et l'Erreur a disparu. Car l'Erreur est destinée à disparaître».",
          "highlight": "Vérité"
        }
      },
      {
        "meaning": "droit, dû",
        "example": {
          "surah": 51,
          "ayah": 19,
          "globalAyah": 4694,
          "surahName": "الذَّارِيَاتِ",
          "words": [
            "وَفِىٓ",
            "أَمْوَٰلِهِمْ",
            "حَقٌّ",
            "لِّلسَّآئِلِ",
            "وَٱلْمَحْرُومِ"
          ],
          "targetIndex": 2,
          "translation": "et dans leurs biens, il y avait un droit au mendiant et au déshérité.",
          "highlight": "droit"
        }
      },
      {
        "meaning": "la Vérité (nom d'Allah)",
        "example": {
          "surah": 22,
          "ayah": 6,
          "globalAyah": 2601,
          "surahName": "الحَجِّ",
          "words": [
            "ذَٰلِكَ",
            "بِأَنَّ",
            "ٱللَّهَ",
            "هُوَ",
            "ٱلْحَقُّ",
            "وَأَنَّهُۥ",
            "يُحْىِ",
            "ٱلْمَوْتَىٰ",
            "وَأَنَّهُۥ",
            "عَلَىٰ",
            "كُلِّ",
            "شَىْءٍ",
            "قَدِيرٌ"
          ],
          "targetIndex": 4,
          "translation": "Il en est ainsi parce qu'Allah est la vérité; et c'est Lui qui rend la vie aux morts; et c'est Lui qui est Omnipotent.",
          "highlight": "Allah est la vérité"
        }
      }
    ]
  },
  {
    "id": "nas",
    "arabic": "نَاس",
    "transliteration": "nās",
    "meaning": "les gens, les hommes",
    "kind": "noun",
    "note": "Donne son nom à la dernière sourate : An-Nās. « Yā ayyuhā n-nās » : ô gens !",
    "root": "أ ن س",
    "occurrences": 241,
    "rootOccurrences": 338,
    "pronunciation": {
      "surah": 2,
      "ayah": 8,
      "wordIndex": 1,
      "form": "ٱلنَّاسِ"
    },
    "examples": [
      {
        "surah": 114,
        "ayah": 1,
        "globalAyah": 6231,
        "surahName": "النَّاسِ",
        "words": [
          "قُلْ",
          "أَعُوذُ",
          "بِرَبِّ",
          "ٱلنَّاسِ"
        ],
        "targetIndex": 3,
        "translation": "Dis: «Je cherche protection auprès du Seigneur des hommes."
      },
      {
        "surah": 26,
        "ayah": 39,
        "globalAyah": 2971,
        "surahName": "الشُّعَرَاءِ",
        "words": [
          "وَقِيلَ",
          "لِلنَّاسِ",
          "هَلْ",
          "أَنتُم",
          "مُّجْتَمِعُونَ"
        ],
        "targetIndex": 1,
        "translation": "Et il fut dit aux gens: «Est-ce que vous allez vous réunir,"
      },
      {
        "surah": 44,
        "ayah": 11,
        "globalAyah": 4425,
        "surahName": "الدُّخَانِ",
        "words": [
          "يَغْشَى",
          "ٱلنَّاسَ",
          "هَٰذَا",
          "عَذَابٌ",
          "أَلِيمٌ"
        ],
        "targetIndex": 1,
        "translation": "qui couvrira les gens. Ce sera un châtiment douloureux."
      }
    ],
    "senses": [
      {
        "meaning": "les gens, l'humanité",
        "example": {
          "surah": 114,
          "ayah": 1,
          "globalAyah": 6231,
          "surahName": "النَّاسِ",
          "words": [
            "قُلْ",
            "أَعُوذُ",
            "بِرَبِّ",
            "ٱلنَّاسِ"
          ],
          "targetIndex": 3,
          "translation": "Dis: «Je cherche protection auprès du Seigneur des hommes.",
          "highlight": "hommes"
        }
      },
      {
        "meaning": "certaines personnes en particulier",
        "note": "Ici, « les gens » désigne seulement quelques polythéistes venus effrayer les croyants.",
        "tafsir": "بعض المشركين",
        "example": {
          "surah": 3,
          "ayah": 173,
          "globalAyah": 466,
          "surahName": "آلِ عِمۡرَانَ",
          "words": [
            "ٱلَّذِينَ",
            "قَالَ",
            "لَهُمُ",
            "ٱلنَّاسُ",
            "إِنَّ",
            "ٱلنَّاسَ",
            "قَدْ",
            "جَمَعُوا۟",
            "لَكُمْ",
            "فَٱخْشَوْهُمْ",
            "فَزَادَهُمْ",
            "إِيمَٰنًا",
            "وَقَالُوا۟",
            "حَسْبُنَا",
            "ٱللَّهُ",
            "وَنِعْمَ",
            "ٱلْوَكِيلُ"
          ],
          "targetIndex": 3,
          "translation": "Certes ceux auxquels l'on disait: «Les gens se sont rassemblés contre vous; craignez-les» - cela accrut leur foi - et ils dirent: «Allah nous suffit; Il est notre meilleur garant».",
          "highlight": "gens"
        }
      }
    ]
  },
  {
    "id": "shaa",
    "arabic": "شَاءَ",
    "transliteration": "shāʾa",
    "meaning": "il a voulu ; vouloir",
    "kind": "verb",
    "note": "On le retrouve dans l'expression « in shāʾa-llāh » : si Allah le veut.",
    "root": "ش ي أ",
    "occurrences": 236,
    "rootOccurrences": 519,
    "pronunciation": {
      "surah": 2,
      "ayah": 20,
      "wordIndex": 14,
      "form": "شَآءَ"
    },
    "examples": [
      {
        "surah": 81,
        "ayah": 28,
        "globalAyah": 5828,
        "surahName": "التَّكۡوِيرِ",
        "words": [
          "لِمَن",
          "شَآءَ",
          "مِنكُمْ",
          "أَن",
          "يَسْتَقِيمَ"
        ],
        "targetIndex": 1,
        "translation": "pour celui d'entre vous qui veut suivre le chemin droit."
      },
      {
        "surah": 74,
        "ayah": 55,
        "globalAyah": 5550,
        "surahName": "المُدَّثِّرِ",
        "words": [
          "فَمَن",
          "شَآءَ",
          "ذَكَرَهُۥ"
        ],
        "targetIndex": 1,
        "translation": "Quiconque veut, qu'il se le rappelle."
      },
      {
        "surah": 80,
        "ayah": 12,
        "globalAyah": 5770,
        "surahName": "عَبَسَ",
        "words": [
          "فَمَن",
          "شَآءَ",
          "ذَكَرَهُۥ"
        ],
        "targetIndex": 1,
        "translation": "quiconque veut, donc, s'en rappelle -"
      }
    ],
    "senses": [
      {
        "meaning": "vouloir",
        "example": {
          "surah": 81,
          "ayah": 29,
          "globalAyah": 5829,
          "surahName": "التَّكۡوِيرِ",
          "words": [
            "وَمَا",
            "تَشَآءُونَ",
            "إِلَّآ",
            "أَن",
            "يَشَآءَ",
            "ٱللَّهُ",
            "رَبُّ",
            "ٱلْعَٰلَمِينَ"
          ],
          "targetIndex": 1,
          "translation": "Mais vous ne pouvez vouloir, que si Allah veut, [Lui], le Seigneur de l'Univers ;",
          "highlight": "vouloir"
        }
      }
    ]
  },
  {
    "id": "khalaqa",
    "arabic": "خَلَقَ",
    "transliteration": "khalaqa",
    "meaning": "il a créé ; créer",
    "kind": "verb",
    "note": "Le nom خَلْق khalq signifie « la création ». Al-Khāliq : le Créateur.",
    "root": "خ ل ق",
    "occurrences": 184,
    "rootOccurrences": 261,
    "pronunciation": {
      "surah": 2,
      "ayah": 29,
      "wordIndex": 2,
      "form": "خَلَقَ"
    },
    "examples": [
      {
        "surah": 96,
        "ayah": 1,
        "globalAyah": 6107,
        "surahName": "العَلَقِ",
        "words": [
          "ٱقْرَأْ",
          "بِٱسْمِ",
          "رَبِّكَ",
          "ٱلَّذِى",
          "خَلَقَ"
        ],
        "targetIndex": 4,
        "translation": "Lis, au nom de ton Seigneur qui a créé,"
      },
      {
        "surah": 55,
        "ayah": 3,
        "globalAyah": 4904,
        "surahName": "الرَّحۡمَٰن",
        "words": [
          "خَلَقَ",
          "ٱلْإِنسَٰنَ"
        ],
        "targetIndex": 0,
        "translation": "Il a créé l'homme."
      },
      {
        "surah": 87,
        "ayah": 2,
        "globalAyah": 5950,
        "surahName": "الأَعۡلَىٰ",
        "words": [
          "ٱلَّذِى",
          "خَلَقَ",
          "فَسَوَّىٰ"
        ],
        "targetIndex": 1,
        "translation": "Celui Qui a créé et agencé harmonieusement,"
      }
    ],
    "senses": [
      {
        "meaning": "créer",
        "example": {
          "surah": 96,
          "ayah": 1,
          "globalAyah": 6107,
          "surahName": "العَلَقِ",
          "words": [
            "ٱقْرَأْ",
            "بِٱسْمِ",
            "رَبِّكَ",
            "ٱلَّذِى",
            "خَلَقَ"
          ],
          "targetIndex": 4,
          "translation": "Lis, au nom de ton Seigneur qui a créé,",
          "highlight": "créé"
        }
      },
      {
        "meaning": "façonner (une forme)",
        "tafsir": "أصنع لكم من الطين",
        "example": {
          "surah": 3,
          "ayah": 49,
          "globalAyah": 342,
          "surahName": "آلِ عِمۡرَانَ",
          "words": [
            "وَرَسُولًا",
            "إِلَىٰ",
            "بَنِىٓ",
            "إِسْرَٰٓءِيلَ",
            "أَنِّى",
            "قَدْ",
            "جِئْتُكُم",
            "بِـَٔايَةٍ",
            "مِّن",
            "رَّبِّكُمْ",
            "أَنِّىٓ",
            "أَخْلُقُ",
            "لَكُم",
            "مِّنَ",
            "ٱلطِّينِ",
            "كَهَيْـَٔةِ",
            "ٱلطَّيْرِ",
            "فَأَنفُخُ",
            "فِيهِ",
            "فَيَكُونُ",
            "طَيْرًۢا",
            "بِإِذْنِ",
            "ٱللَّهِ",
            "وَأُبْرِئُ",
            "ٱلْأَكْمَهَ",
            "وَٱلْأَبْرَصَ",
            "وَأُحْىِ",
            "ٱلْمَوْتَىٰ",
            "بِإِذْنِ",
            "ٱللَّهِ",
            "وَأُنَبِّئُكُم",
            "بِمَا",
            "تَأْكُلُونَ",
            "وَمَا",
            "تَدَّخِرُونَ",
            "فِى",
            "بُيُوتِكُمْ",
            "إِنَّ",
            "فِى",
            "ذَٰلِكَ",
            "لَءَايَةً",
            "لَّكُمْ",
            "إِن",
            "كُنتُم",
            "مُّؤْمِنِينَ"
          ],
          "targetIndex": 11,
          "translation": "et Il sera le messager aux enfants d'Israël, [et leur dira]: «En vérité, je viens à vous avec un signe de la part de votre Seigneur. Pour vous, je forme de la glaise comme la figure d'un oiseau, puis je souffle dedans: et, par la permission d'Allah, cela devient un oiseau. Et je guéris l'aveugle-né et le lépreux, et je ressuscite les morts, par la permission d'Allah. Et je vous apprends ce que vous mangez et ce que vous amassez dans vos maisons. Voilà bien là un signe, pour vous, si vous êtes croyants!",
          "highlight": "forme"
        }
      },
      {
        "meaning": "forger (un mensonge)",
        "tafsir": "وتفترون كذبًا",
        "example": {
          "surah": 29,
          "ayah": 17,
          "globalAyah": 3357,
          "surahName": "العَنكَبُوتِ",
          "words": [
            "إِنَّمَا",
            "تَعْبُدُونَ",
            "مِن",
            "دُونِ",
            "ٱللَّهِ",
            "أَوْثَٰنًا",
            "وَتَخْلُقُونَ",
            "إِفْكًا",
            "إِنَّ",
            "ٱلَّذِينَ",
            "تَعْبُدُونَ",
            "مِن",
            "دُونِ",
            "ٱللَّهِ",
            "لَا",
            "يَمْلِكُونَ",
            "لَكُمْ",
            "رِزْقًا",
            "فَٱبْتَغُوا۟",
            "عِندَ",
            "ٱللَّهِ",
            "ٱلرِّزْقَ",
            "وَٱعْبُدُوهُ",
            "وَٱشْكُرُوا۟",
            "لَهُۥٓ",
            "إِلَيْهِ",
            "تُرْجَعُونَ"
          ],
          "targetIndex": 6,
          "translation": "Vous n'adorez que des idoles, en dehors d'Allah, et vous forgez un mensonge. Ceux que vous adorez en dehors d'Allah ne possèdent aucun moyen pour vous procurer nourriture; recherchez votre subsistance auprès d'Allah. Adorez-Le et soyez-Lui reconnaissants. C'est à Lui que vous serez ramenés.",
          "highlight": "mensonge"
        }
      }
    ]
  },
  {
    "id": "anzala",
    "arabic": "أَنْزَلَ",
    "transliteration": "anzala",
    "meaning": "il a fait descendre ; révéler",
    "kind": "verb",
    "note": "Forme IV de la racine ن ز ل (descendre). Utilisé pour la révélation du Coran.",
    "root": "ن ز ل",
    "occurrences": 183,
    "rootOccurrences": 293,
    "pronunciation": {
      "surah": 2,
      "ayah": 90,
      "wordIndex": 7,
      "form": "أَنزَلَ"
    },
    "examples": [
      {
        "surah": 97,
        "ayah": 1,
        "globalAyah": 6126,
        "surahName": "القَدۡرِ",
        "words": [
          "إِنَّآ",
          "أَنزَلْنَٰهُ",
          "فِى",
          "لَيْلَةِ",
          "ٱلْقَدْرِ"
        ],
        "targetIndex": 1,
        "translation": "Nous l'avons certes, fait descendre (le Coran) pendant la nuit d'Al-Qadr."
      },
      {
        "surah": 47,
        "ayah": 9,
        "globalAyah": 4554,
        "surahName": "مُحَمَّدٍ",
        "words": [
          "ذَٰلِكَ",
          "بِأَنَّهُمْ",
          "كَرِهُوا۟",
          "مَآ",
          "أَنزَلَ",
          "ٱللَّهُ",
          "فَأَحْبَطَ",
          "أَعْمَٰلَهُمْ"
        ],
        "targetIndex": 4,
        "translation": "C'est parce qu'ils ont de la répulsion pour ce qu'Allah a fait descendre. Il a rendu donc vaines leurs œuvres."
      },
      {
        "surah": 16,
        "ayah": 24,
        "globalAyah": 1925,
        "surahName": "النَّحۡلِ",
        "words": [
          "وَإِذَا",
          "قِيلَ",
          "لَهُم",
          "مَّاذَآ",
          "أَنزَلَ",
          "رَبُّكُمْ",
          "قَالُوٓا۟",
          "أَسَٰطِيرُ",
          "ٱلْأَوَّلِينَ"
        ],
        "targetIndex": 4,
        "translation": "Et lorsqu'on leur dit: «Qu'est-ce que votre Seigneur a fait descendre?» Ils disent: «Des légendes anciennes!»"
      }
    ],
    "senses": [
      {
        "meaning": "faire descendre (la révélation)",
        "example": {
          "surah": 97,
          "ayah": 1,
          "globalAyah": 6126,
          "surahName": "القَدۡرِ",
          "words": [
            "إِنَّآ",
            "أَنزَلْنَٰهُ",
            "فِى",
            "لَيْلَةِ",
            "ٱلْقَدْرِ"
          ],
          "targetIndex": 1,
          "translation": "Nous l'avons certes, fait descendre (le Coran) pendant la nuit d'Al-Qadr.",
          "highlight": "fait descendre"
        }
      },
      {
        "meaning": "faire descendre (la pluie)",
        "example": {
          "surah": 2,
          "ayah": 22,
          "globalAyah": 29,
          "surahName": "البَقَرَةِ",
          "words": [
            "ٱلَّذِى",
            "جَعَلَ",
            "لَكُمُ",
            "ٱلْأَرْضَ",
            "فِرَٰشًا",
            "وَٱلسَّمَآءَ",
            "بِنَآءً",
            "وَأَنزَلَ",
            "مِنَ",
            "ٱلسَّمَآءِ",
            "مَآءً",
            "فَأَخْرَجَ",
            "بِهِۦ",
            "مِنَ",
            "ٱلثَّمَرَٰتِ",
            "رِزْقًا",
            "لَّكُمْ",
            "فَلَا",
            "تَجْعَلُوا۟",
            "لِلَّهِ",
            "أَندَادًا",
            "وَأَنتُمْ",
            "تَعْلَمُونَ"
          ],
          "targetIndex": 7,
          "translation": "C'est Lui qui vous a fait la terre pour lit, et le ciel pour toit; qui précipite la pluie du ciel et par elle fait surgir toutes sortes de fruits pour vous nourrir, ne Lui cherchez donc pas des égaux, alors que vous savez (tout cela).",
          "highlight": "précipite la pluie"
        }
      },
      {
        "meaning": "créer, accorder",
        "note": "Le Tafsir Muyassar explique « Il a fait descendre » par « Il a créé pour vous ».",
        "tafsir": "وخلق لكم من الأنعام",
        "example": {
          "surah": 39,
          "ayah": 6,
          "globalAyah": 4064,
          "surahName": "الزُّمَرِ",
          "words": [
            "خَلَقَكُم",
            "مِّن",
            "نَّفْسٍ",
            "وَٰحِدَةٍ",
            "ثُمَّ",
            "جَعَلَ",
            "مِنْهَا",
            "زَوْجَهَا",
            "وَأَنزَلَ",
            "لَكُم",
            "مِّنَ",
            "ٱلْأَنْعَٰمِ",
            "ثَمَٰنِيَةَ",
            "أَزْوَٰجٍ",
            "يَخْلُقُكُمْ",
            "فِى",
            "بُطُونِ",
            "أُمَّهَٰتِكُمْ",
            "خَلْقًا",
            "مِّنۢ",
            "بَعْدِ",
            "خَلْقٍ",
            "فِى",
            "ظُلُمَٰتٍ",
            "ثَلَٰثٍ",
            "ذَٰلِكُمُ",
            "ٱللَّهُ",
            "رَبُّكُمْ",
            "لَهُ",
            "ٱلْمُلْكُ",
            "لَآ",
            "إِلَٰهَ",
            "إِلَّا",
            "هُوَ",
            "فَأَنَّىٰ",
            "تُصْرَفُونَ"
          ],
          "targetIndex": 8,
          "translation": "Il vous a créés d'une personne unique et a tiré d'elle son épouse. Et Il a fait descendre [créé] pour vous huit couples de bestiaux. Il vous crée dans les ventres de vos mères, création après création, dans trois ténèbres. Tel est Allah, votre Seigneur! A Lui appartient toute la Royauté. Point de divinité à part Lui. Comment pouvez-vous vous détourner [de son culte]?",
          "highlight": "bestiaux"
        }
      }
    ]
  },
  {
    "id": "khayr",
    "arabic": "خَيْر",
    "transliteration": "khayr",
    "meaning": "bien ; meilleur",
    "kind": "noun",
    "note": "Sert aussi de comparatif : « khayrun min » = meilleur que.",
    "root": "خ ي ر",
    "occurrences": 178,
    "rootOccurrences": 196,
    "pronunciation": {
      "surah": 2,
      "ayah": 54,
      "wordIndex": 16,
      "form": "خَيْرٌ"
    },
    "examples": [
      {
        "surah": 97,
        "ayah": 3,
        "globalAyah": 6128,
        "surahName": "القَدۡرِ",
        "words": [
          "لَيْلَةُ",
          "ٱلْقَدْرِ",
          "خَيْرٌ",
          "مِّنْ",
          "أَلْفِ",
          "شَهْرٍ"
        ],
        "targetIndex": 2,
        "translation": "La nuit d'Al-Qadr est meilleure que mille mois."
      },
      {
        "surah": 87,
        "ayah": 17,
        "globalAyah": 5965,
        "surahName": "الأَعۡلَىٰ",
        "words": [
          "وَٱلْءَاخِرَةُ",
          "خَيْرٌ",
          "وَأَبْقَىٰٓ"
        ],
        "targetIndex": 1,
        "translation": "alors que l'au-delà est meilleur et plus durable."
      },
      {
        "surah": 93,
        "ayah": 4,
        "globalAyah": 6083,
        "surahName": "الضُّحَىٰ",
        "words": [
          "وَلَلْءَاخِرَةُ",
          "خَيْرٌ",
          "لَّكَ",
          "مِنَ",
          "ٱلْأُولَىٰ"
        ],
        "targetIndex": 1,
        "translation": "La vie dernière t'est, certes, meilleure que la vie présente."
      }
    ],
    "senses": [
      {
        "meaning": "bien, bonne action",
        "example": {
          "surah": 99,
          "ayah": 7,
          "globalAyah": 6145,
          "surahName": "الزَّلۡزَلَةِ",
          "words": [
            "فَمَن",
            "يَعْمَلْ",
            "مِثْقَالَ",
            "ذَرَّةٍ",
            "خَيْرًا",
            "يَرَهُۥ"
          ],
          "targetIndex": 4,
          "translation": "Quiconque fait un bien fût-ce du poids d'un atome, le verra,",
          "highlight": "bien"
        }
      },
      {
        "meaning": "richesse, biens",
        "example": {
          "surah": 100,
          "ayah": 8,
          "globalAyah": 6154,
          "surahName": "العَادِيَاتِ",
          "words": [
            "وَإِنَّهُۥ",
            "لِحُبِّ",
            "ٱلْخَيْرِ",
            "لَشَدِيدٌ"
          ],
          "targetIndex": 2,
          "translation": "et pour l'amour des richesses il est certes ardent.",
          "highlight": "richesses"
        }
      },
      {
        "meaning": "meilleur",
        "example": {
          "surah": 97,
          "ayah": 3,
          "globalAyah": 6128,
          "surahName": "القَدۡرِ",
          "words": [
            "لَيْلَةُ",
            "ٱلْقَدْرِ",
            "خَيْرٌ",
            "مِّنْ",
            "أَلْفِ",
            "شَهْرٍ"
          ],
          "targetIndex": 2,
          "translation": "La nuit d'Al-Qadr est meilleure que mille mois.",
          "highlight": "meilleure"
        }
      }
    ]
  },
  {
    "id": "sabil",
    "arabic": "سَبِيل",
    "transliteration": "sabīl",
    "meaning": "chemin, voie",
    "kind": "noun",
    "note": "Pluriel : سُبُل subul. « Fī sabīli-llāh » : dans le sentier d'Allah.",
    "root": "س ب ل",
    "occurrences": 176,
    "rootOccurrences": 176,
    "pronunciation": {
      "surah": 2,
      "ayah": 154,
      "wordIndex": 5,
      "form": "سَبِيلِ"
    },
    "examples": [
      {
        "surah": 76,
        "ayah": 3,
        "globalAyah": 5594,
        "surahName": "الإِنسَانِ",
        "words": [
          "إِنَّا",
          "هَدَيْنَٰهُ",
          "ٱلسَّبِيلَ",
          "إِمَّا",
          "شَاكِرًا",
          "وَإِمَّا",
          "كَفُورًا"
        ],
        "targetIndex": 2,
        "translation": "Nous l'avons guidé dans le chemin, - qu'il soit reconnaissant ou ingrat -"
      },
      {
        "surah": 71,
        "ayah": 20,
        "globalAyah": 5439,
        "surahName": "نُوحٍ",
        "words": [
          "لِّتَسْلُكُوا۟",
          "مِنْهَا",
          "سُبُلًا",
          "فِجَاجًا"
        ],
        "targetIndex": 2,
        "translation": "pour que vous vous acheminiez par ses voies spacieuses»."
      },
      {
        "surah": 6,
        "ayah": 55,
        "globalAyah": 844,
        "surahName": "الأَنۡعَامِ",
        "words": [
          "وَكَذَٰلِكَ",
          "نُفَصِّلُ",
          "ٱلْءَايَٰتِ",
          "وَلِتَسْتَبِينَ",
          "سَبِيلُ",
          "ٱلْمُجْرِمِينَ"
        ],
        "targetIndex": 4,
        "translation": "C'est ainsi que Nous détaillons les versets, afin qu'apparaisse clairement le chemin des criminels."
      }
    ],
    "senses": [
      {
        "meaning": "voie, chemin (d'Allah)",
        "example": {
          "surah": 2,
          "ayah": 154,
          "globalAyah": 161,
          "surahName": "البَقَرَةِ",
          "words": [
            "وَلَا",
            "تَقُولُوا۟",
            "لِمَن",
            "يُقْتَلُ",
            "فِى",
            "سَبِيلِ",
            "ٱللَّهِ",
            "أَمْوَٰتٌۢ",
            "بَلْ",
            "أَحْيَآءٌ",
            "وَلَٰكِن",
            "لَّا",
            "تَشْعُرُونَ"
          ],
          "targetIndex": 5,
          "translation": "Et ne dites pas de ceux qui sont tués dans le sentier d'Allah qu'ils sont morts. Au contraire ils sont vivants, mais vous en êtes inconscients.",
          "highlight": "sentier"
        }
      },
      {
        "meaning": "moyen, prétexte",
        "example": {
          "surah": 4,
          "ayah": 34,
          "globalAyah": 527,
          "surahName": "النِّسَاءِ",
          "words": [
            "ٱلرِّجَالُ",
            "قَوَّٰمُونَ",
            "عَلَى",
            "ٱلنِّسَآءِ",
            "بِمَا",
            "فَضَّلَ",
            "ٱللَّهُ",
            "بَعْضَهُمْ",
            "عَلَىٰ",
            "بَعْضٍ",
            "وَبِمَآ",
            "أَنفَقُوا۟",
            "مِنْ",
            "أَمْوَٰلِهِمْ",
            "فَٱلصَّٰلِحَٰتُ",
            "قَٰنِتَٰتٌ",
            "حَٰفِظَٰتٌ",
            "لِّلْغَيْبِ",
            "بِمَا",
            "حَفِظَ",
            "ٱللَّهُ",
            "وَٱلَّٰتِى",
            "تَخَافُونَ",
            "نُشُوزَهُنَّ",
            "فَعِظُوهُنَّ",
            "وَٱهْجُرُوهُنَّ",
            "فِى",
            "ٱلْمَضَاجِعِ",
            "وَٱضْرِبُوهُنَّ",
            "فَإِنْ",
            "أَطَعْنَكُمْ",
            "فَلَا",
            "تَبْغُوا۟",
            "عَلَيْهِنَّ",
            "سَبِيلًا",
            "إِنَّ",
            "ٱللَّهَ",
            "كَانَ",
            "عَلِيًّا",
            "كَبِيرًا"
          ],
          "targetIndex": 34,
          "translation": "Les hommes ont autorité sur les femmes, en raison des faveurs qu'Allah accorde à ceux-là sur celles-ci, et aussi à cause des dépenses qu'ils font de leurs biens. Les femmes vertueuses sont obéissantes (à leurs maris), et protègent ce qui doit être protégé, pendant l'absence de leurs époux, avec la protection d'Allah. Et quant à celles dont vous craignez la désobéissance, exhortez-les, éloignez-vous d'elles dans leurs lits et frappez-les. Si elles arrivent à vous obéir, alors ne cherchez plus de voie contre elles, car Allah est certes, Haut et Grand!",
          "highlight": "voie"
        }
      },
      {
        "meaning": "voyageur (ibn as-sabīl)",
        "note": "Ibn as-sabīl, « le fils du chemin », est le voyageur.",
        "example": {
          "surah": 2,
          "ayah": 177,
          "globalAyah": 184,
          "surahName": "البَقَرَةِ",
          "words": [
            "لَّيْسَ",
            "ٱلْبِرَّ",
            "أَن",
            "تُوَلُّوا۟",
            "وُجُوهَكُمْ",
            "قِبَلَ",
            "ٱلْمَشْرِقِ",
            "وَٱلْمَغْرِبِ",
            "وَلَٰكِنَّ",
            "ٱلْبِرَّ",
            "مَنْ",
            "ءَامَنَ",
            "بِٱللَّهِ",
            "وَٱلْيَوْمِ",
            "ٱلْءَاخِرِ",
            "وَٱلْمَلَٰٓئِكَةِ",
            "وَٱلْكِتَٰبِ",
            "وَٱلنَّبِيِّۦنَ",
            "وَءَاتَى",
            "ٱلْمَالَ",
            "عَلَىٰ",
            "حُبِّهِۦ",
            "ذَوِى",
            "ٱلْقُرْبَىٰ",
            "وَٱلْيَتَٰمَىٰ",
            "وَٱلْمَسَٰكِينَ",
            "وَٱبْنَ",
            "ٱلسَّبِيلِ",
            "وَٱلسَّآئِلِينَ",
            "وَفِى",
            "ٱلرِّقَابِ",
            "وَأَقَامَ",
            "ٱلصَّلَوٰةَ",
            "وَءَاتَى",
            "ٱلزَّكَوٰةَ",
            "وَٱلْمُوفُونَ",
            "بِعَهْدِهِمْ",
            "إِذَا",
            "عَٰهَدُوا۟",
            "وَٱلصَّٰبِرِينَ",
            "فِى",
            "ٱلْبَأْسَآءِ",
            "وَٱلضَّرَّآءِ",
            "وَحِينَ",
            "ٱلْبَأْسِ",
            "أُو۟لَٰٓئِكَ",
            "ٱلَّذِينَ",
            "صَدَقُوا۟",
            "وَأُو۟لَٰٓئِكَ",
            "هُمُ",
            "ٱلْمُتَّقُونَ"
          ],
          "targetIndex": 27,
          "translation": "La bonté pieuse ne consiste pas à tourner vos visages vers le Levant ou le Couchant. Mais la bonté pieuse est de croire en Allah, au Jour dernier, aux Anges, au Livre et aux prophètes, de donner de son bien, quelqu'amour qu'on en ait, aux proches, aux orphelins, aux nécessiteux, aux voyageurs indigents et à ceux qui demandent l'aide et pour délier les jougs, d'accomplir la Salât et d'acquitter la Zakât. Et ceux qui remplissent leurs engagements lorsqu'ils se sont engagés, ceux qui sont endurants dans la misère, la maladie et quand les combats font rage, les voilà les véridiques et les voilà les vrais pieux!",
          "highlight": "voyageur"
        }
      }
    ]
  },
  {
    "id": "daa",
    "arabic": "دَعَا",
    "transliteration": "daʿā",
    "meaning": "il a appelé ; invoquer",
    "kind": "verb",
    "note": "Le nom دُعَاء duʿāʾ désigne l'invocation, la prière de demande.",
    "root": "د ع و",
    "occurrences": 170,
    "rootOccurrences": 212,
    "pronunciation": {
      "surah": 3,
      "ayah": 38,
      "wordIndex": 1,
      "form": "دَعَا"
    },
    "examples": [
      {
        "surah": 71,
        "ayah": 8,
        "globalAyah": 5427,
        "surahName": "نُوحٍ",
        "words": [
          "ثُمَّ",
          "إِنِّى",
          "دَعَوْتُهُمْ",
          "جِهَارًا"
        ],
        "targetIndex": 2,
        "translation": "Ensuite, je les ai appelés ouvertement."
      },
      {
        "surah": 84,
        "ayah": 11,
        "globalAyah": 5895,
        "surahName": "الانشِقَاقِ",
        "words": [
          "فَسَوْفَ",
          "يَدْعُوا۟",
          "ثُبُورًا"
        ],
        "targetIndex": 1,
        "translation": "il invoquera la destruction sur lui-même,"
      },
      {
        "surah": 70,
        "ayah": 17,
        "globalAyah": 5392,
        "surahName": "المَعَارِجِ",
        "words": [
          "تَدْعُوا۟",
          "مَنْ",
          "أَدْبَرَ",
          "وَتَوَلَّىٰ"
        ],
        "targetIndex": 0,
        "translation": "Il appellera celui qui tournait le dos et s'en allait,"
      }
    ],
    "senses": [
      {
        "meaning": "invoquer, appeler (Allah)",
        "example": {
          "surah": 40,
          "ayah": 60,
          "globalAyah": 4193,
          "surahName": "غَافِرٍ",
          "words": [
            "وَقَالَ",
            "رَبُّكُمُ",
            "ٱدْعُونِىٓ",
            "أَسْتَجِبْ",
            "لَكُمْ",
            "إِنَّ",
            "ٱلَّذِينَ",
            "يَسْتَكْبِرُونَ",
            "عَنْ",
            "عِبَادَتِى",
            "سَيَدْخُلُونَ",
            "جَهَنَّمَ",
            "دَاخِرِينَ"
          ],
          "targetIndex": 2,
          "translation": "Et votre Seigneur dit: «Appelez-Moi, Je vous répondrai. Ceux qui, par orgueil, se refusent à M'adorer entreront bientôt dans l'Enfer, humiliés».",
          "highlight": "Appelez-Moi"
        }
      },
      {
        "meaning": "inviter",
        "example": {
          "surah": 10,
          "ayah": 25,
          "globalAyah": 1389,
          "surahName": "يُونُسَ",
          "words": [
            "وَٱللَّهُ",
            "يَدْعُوٓا۟",
            "إِلَىٰ",
            "دَارِ",
            "ٱلسَّلَٰمِ",
            "وَيَهْدِى",
            "مَن",
            "يَشَآءُ",
            "إِلَىٰ",
            "صِرَٰطٍ",
            "مُّسْتَقِيمٍ"
          ],
          "targetIndex": 1,
          "translation": "Allah appelle à la demeure de la paix et guide qui Il veut vers un droit chemin.",
          "highlight": "appelle"
        }
      },
      {
        "meaning": "attribuer",
        "tafsir": "لِنِسْبَتِهم له الولد",
        "example": {
          "surah": 19,
          "ayah": 91,
          "globalAyah": 2341,
          "surahName": "مَرۡيَمَ",
          "words": [
            "أَن",
            "دَعَوْا۟",
            "لِلرَّحْمَٰنِ",
            "وَلَدًا"
          ],
          "targetIndex": 1,
          "translation": "du fait qu'ils ont attribué un enfant au Tout Miséricordieux,",
          "highlight": "attribué"
        }
      }
    ]
  },
  {
    "id": "ittaqa",
    "arabic": "اتَّقَى",
    "transliteration": "ittaqā",
    "meaning": "il a craint (Allah) ; se prémunir",
    "kind": "verb",
    "note": "Forme VIII de la racine و ق ي (protéger). Même famille que تَقْوَى taqwā (piété).",
    "root": "و ق ي",
    "occurrences": 166,
    "rootOccurrences": 258,
    "pronunciation": {
      "surah": 2,
      "ayah": 189,
      "wordIndex": 18,
      "form": "ٱتَّقَىٰ"
    },
    "examples": [
      {
        "surah": 92,
        "ayah": 5,
        "globalAyah": 6063,
        "surahName": "اللَّيۡلِ",
        "words": [
          "فَأَمَّا",
          "مَنْ",
          "أَعْطَىٰ",
          "وَٱتَّقَىٰ"
        ],
        "targetIndex": 3,
        "translation": "Celui qui donne et craint (Allah)"
      },
      {
        "surah": 2,
        "ayah": 206,
        "globalAyah": 213,
        "surahName": "البَقَرَةِ",
        "words": [
          "وَإِذَا",
          "قِيلَ",
          "لَهُ",
          "ٱتَّقِ",
          "ٱللَّهَ",
          "أَخَذَتْهُ",
          "ٱلْعِزَّةُ",
          "بِٱلْإِثْمِ",
          "فَحَسْبُهُۥ",
          "جَهَنَّمُ",
          "وَلَبِئْسَ",
          "ٱلْمِهَادُ"
        ],
        "targetIndex": 3,
        "translation": "Et quand on lui dit: «Redoute Allah», l'orgueil criminel s'empare de lui. L'Enfer lui suffira, et quel mauvais lit, certes!"
      },
      {
        "surah": 33,
        "ayah": 1,
        "globalAyah": 3534,
        "surahName": "الأَحۡزَابِ",
        "words": [
          "يَٰٓأَيُّهَا",
          "ٱلنَّبِىُّ",
          "ٱتَّقِ",
          "ٱللَّهَ",
          "وَلَا",
          "تُطِعِ",
          "ٱلْكَٰفِرِينَ",
          "وَٱلْمُنَٰفِقِينَ",
          "إِنَّ",
          "ٱللَّهَ",
          "كَانَ",
          "عَلِيمًا",
          "حَكِيمًا"
        ],
        "targetIndex": 2,
        "translation": "O Prophète! Crains Allah et n'obéis pas aux infidèles et aux hypocrites, car Allah demeure Omniscient et Sage."
      }
    ],
    "senses": [
      {
        "meaning": "craindre Allah, être pieux",
        "example": {
          "surah": 92,
          "ayah": 5,
          "globalAyah": 6063,
          "surahName": "اللَّيۡلِ",
          "words": [
            "فَأَمَّا",
            "مَنْ",
            "أَعْطَىٰ",
            "وَٱتَّقَىٰ"
          ],
          "targetIndex": 3,
          "translation": "Celui qui donne et craint (Allah)",
          "highlight": "craint (Allah)"
        }
      },
      {
        "meaning": "se préserver de",
        "example": {
          "surah": 2,
          "ayah": 24,
          "globalAyah": 31,
          "surahName": "البَقَرَةِ",
          "words": [
            "فَإِن",
            "لَّمْ",
            "تَفْعَلُوا۟",
            "وَلَن",
            "تَفْعَلُوا۟",
            "فَٱتَّقُوا۟",
            "ٱلنَّارَ",
            "ٱلَّتِى",
            "وَقُودُهَا",
            "ٱلنَّاسُ",
            "وَٱلْحِجَارَةُ",
            "أُعِدَّتْ",
            "لِلْكَٰفِرِينَ"
          ],
          "targetIndex": 5,
          "translation": "Si vous n'y parvenez pas et, à coup sûr, vous n'y parviendrez jamais, parez-vous donc contre le feu qu'alimenteront les hommes et les pierres, lequel est réservé aux infidèles.",
          "highlight": "parez-vous"
        }
      },
      {
        "meaning": "se protéger (d'un ennemi)",
        "tafsir": "اتقاء لشرهم",
        "example": {
          "surah": 3,
          "ayah": 28,
          "globalAyah": 321,
          "surahName": "آلِ عِمۡرَانَ",
          "words": [
            "لَّا",
            "يَتَّخِذِ",
            "ٱلْمُؤْمِنُونَ",
            "ٱلْكَٰفِرِينَ",
            "أَوْلِيَآءَ",
            "مِن",
            "دُونِ",
            "ٱلْمُؤْمِنِينَ",
            "وَمَن",
            "يَفْعَلْ",
            "ذَٰلِكَ",
            "فَلَيْسَ",
            "مِنَ",
            "ٱللَّهِ",
            "فِى",
            "شَىْءٍ",
            "إِلَّآ",
            "أَن",
            "تَتَّقُوا۟",
            "مِنْهُمْ",
            "تُقَىٰةً",
            "وَيُحَذِّرُكُمُ",
            "ٱللَّهُ",
            "نَفْسَهُۥ",
            "وَإِلَى",
            "ٱللَّهِ",
            "ٱلْمَصِيرُ"
          ],
          "targetIndex": 18,
          "translation": "Que les croyants ne prennent pas, pour alliés, des infidèles, au lieu de croyants. Quiconque le fait contredit la religion d'Allah, à moins que vous ne cherchiez à vous protéger d'eux. Allah vous met en garde à l'égard de Lui-même. Et c'est à Allah le retour.",
          "highlight": "protéger"
        }
      }
    ]
  },
  {
    "id": "amr",
    "arabic": "أَمْر",
    "transliteration": "amr",
    "meaning": "ordre, commandement ; affaire",
    "kind": "noun",
    "note": "Pluriel : أُمُور umūr (affaires). Le verbe أَمَرَ amara signifie « ordonner ».",
    "root": "أ م ر",
    "occurrences": 166,
    "rootOccurrences": 248,
    "pronunciation": {
      "surah": 2,
      "ayah": 117,
      "wordIndex": 5,
      "form": "أَمْرًا"
    },
    "examples": [
      {
        "surah": 26,
        "ayah": 151,
        "globalAyah": 3083,
        "surahName": "الشُّعَرَاءِ",
        "words": [
          "وَلَا",
          "تُطِيعُوٓا۟",
          "أَمْرَ",
          "ٱلْمُسْرِفِينَ"
        ],
        "targetIndex": 2,
        "translation": "N'obéissez pas à l'ordre des outranciers,"
      },
      {
        "surah": 51,
        "ayah": 4,
        "globalAyah": 4679,
        "surahName": "الذَّارِيَاتِ",
        "words": [
          "فَٱلْمُقَسِّمَٰتِ",
          "أَمْرًا"
        ],
        "targetIndex": 1,
        "translation": "Par les distributeurs selon un commandement!"
      },
      {
        "surah": 79,
        "ayah": 5,
        "globalAyah": 5717,
        "surahName": "النَّازِعَاتِ",
        "words": [
          "فَٱلْمُدَبِّرَٰتِ",
          "أَمْرًا"
        ],
        "targetIndex": 1,
        "translation": "et règlent les affaires!"
      }
    ],
    "senses": [
      {
        "meaning": "ordre, commandement",
        "tafsir": "جاء أمرنا بإهلاكهم",
        "example": {
          "surah": 11,
          "ayah": 40,
          "globalAyah": 1513,
          "surahName": "هُودٍ",
          "words": [
            "حَتَّىٰٓ",
            "إِذَا",
            "جَآءَ",
            "أَمْرُنَا",
            "وَفَارَ",
            "ٱلتَّنُّورُ",
            "قُلْنَا",
            "ٱحْمِلْ",
            "فِيهَا",
            "مِن",
            "كُلٍّ",
            "زَوْجَيْنِ",
            "ٱثْنَيْنِ",
            "وَأَهْلَكَ",
            "إِلَّا",
            "مَن",
            "سَبَقَ",
            "عَلَيْهِ",
            "ٱلْقَوْلُ",
            "وَمَنْ",
            "ءَامَنَ",
            "وَمَآ",
            "ءَامَنَ",
            "مَعَهُۥٓ",
            "إِلَّا",
            "قَلِيلٌ"
          ],
          "targetIndex": 3,
          "translation": "Puis, lorsque Notre commandement vint et que le four se mit à bouillonner [d'eau], Nous dîmes: «Charge [dans l'arche] un couple de chaque espèce ainsi que ta famille - sauf ceux contre qui le décret est déjà prononcé - et ceux qui croient». Or, ceux qui avaient cru avec lui étaient peu nombreux.",
          "highlight": "commandement"
        }
      },
      {
        "meaning": "affaire",
        "tafsir": "في الأمور",
        "example": {
          "surah": 3,
          "ayah": 159,
          "globalAyah": 452,
          "surahName": "آلِ عِمۡرَانَ",
          "words": [
            "فَبِمَا",
            "رَحْمَةٍ",
            "مِّنَ",
            "ٱللَّهِ",
            "لِنتَ",
            "لَهُمْ",
            "وَلَوْ",
            "كُنتَ",
            "فَظًّا",
            "غَلِيظَ",
            "ٱلْقَلْبِ",
            "لَٱنفَضُّوا۟",
            "مِنْ",
            "حَوْلِكَ",
            "فَٱعْفُ",
            "عَنْهُمْ",
            "وَٱسْتَغْفِرْ",
            "لَهُمْ",
            "وَشَاوِرْهُمْ",
            "فِى",
            "ٱلْأَمْرِ",
            "فَإِذَا",
            "عَزَمْتَ",
            "فَتَوَكَّلْ",
            "عَلَى",
            "ٱللَّهِ",
            "إِنَّ",
            "ٱللَّهَ",
            "يُحِبُّ",
            "ٱلْمُتَوَكِّلِينَ"
          ],
          "targetIndex": 20,
          "translation": "C'est par quelque miséricorde de la part d'Allah que tu (Muhammad) as été si doux envers eux! Mais si tu étais rude, au cœur dur, ils se seraient enfuis de ton entourage. Pardonne-leur donc, et implore pour eux le pardon (d'Allah). Et consulte-les à propos des affaires; puis une fois que tu t'es décidé, confie-toi donc à Allah, Allah aime, en vérité, ceux qui Lui font confiance.",
          "highlight": "affaires"
        }
      },
      {
        "meaning": "l'Heure, le décret d'Allah",
        "note": "Selon le Tafsir Muyassar, l'« ordre d'Allah » désigne ici l'Heure et le jugement qui approchent.",
        "tafsir": "قيام الساعة",
        "example": {
          "surah": 16,
          "ayah": 1,
          "globalAyah": 1902,
          "surahName": "النَّحۡلِ",
          "words": [
            "أَتَىٰٓ",
            "أَمْرُ",
            "ٱللَّهِ",
            "فَلَا",
            "تَسْتَعْجِلُوهُ",
            "سُبْحَٰنَهُۥ",
            "وَتَعَٰلَىٰ",
            "عَمَّا",
            "يُشْرِكُونَ"
          ],
          "targetIndex": 1,
          "translation": "L'ordre d'Allah arrive. Ne le hâtez donc pas. Gloire à Lui! Il est au-dessus de ce qu'on Lui associe.",
          "highlight": "ordre"
        }
      }
    ]
  },
  {
    "id": "alim",
    "arabic": "عَلِيم",
    "transliteration": "ʿalīm",
    "meaning": "Omniscient, savant",
    "kind": "adjective",
    "note": "Schème فَعِيل (faʿīl) : qualité intense et permanente. Souvent couplé à سَمِيع (Audient).",
    "root": "ع ل م",
    "occurrences": 163,
    "rootOccurrences": 854,
    "pronunciation": {
      "surah": 2,
      "ayah": 29,
      "wordIndex": 18,
      "form": "عَلِيمٌ"
    },
    "examples": [
      {
        "surah": 26,
        "ayah": 220,
        "globalAyah": 3152,
        "surahName": "الشُّعَرَاءِ",
        "words": [
          "إِنَّهُۥ",
          "هُوَ",
          "ٱلسَّمِيعُ",
          "ٱلْعَلِيمُ"
        ],
        "targetIndex": 3,
        "translation": "C'est Lui vraiment, l'Audient, l'Omniscient."
      },
      {
        "surah": 7,
        "ayah": 112,
        "globalAyah": 1066,
        "surahName": "الأَعۡرَافِ",
        "words": [
          "يَأْتُوكَ",
          "بِكُلِّ",
          "سَٰحِرٍ",
          "عَلِيمٍ"
        ],
        "targetIndex": 3,
        "translation": "qui t'amèneront tout magicien averti."
      },
      {
        "surah": 3,
        "ayah": 63,
        "globalAyah": 356,
        "surahName": "آلِ عِمۡرَانَ",
        "words": [
          "فَإِن",
          "تَوَلَّوْا۟",
          "فَإِنَّ",
          "ٱللَّهَ",
          "عَلِيمٌۢ",
          "بِٱلْمُفْسِدِينَ"
        ],
        "targetIndex": 4,
        "translation": "Si donc ils tournent le dos... alors Allah connaît bien les semeurs de corruption!"
      }
    ],
    "senses": [
      {
        "meaning": "Omniscient (Allah)",
        "example": {
          "surah": 2,
          "ayah": 29,
          "globalAyah": 36,
          "surahName": "البَقَرَةِ",
          "words": [
            "هُوَ",
            "ٱلَّذِى",
            "خَلَقَ",
            "لَكُم",
            "مَّا",
            "فِى",
            "ٱلْأَرْضِ",
            "جَمِيعًا",
            "ثُمَّ",
            "ٱسْتَوَىٰٓ",
            "إِلَى",
            "ٱلسَّمَآءِ",
            "فَسَوَّىٰهُنَّ",
            "سَبْعَ",
            "سَمَٰوَٰتٍ",
            "وَهُوَ",
            "بِكُلِّ",
            "شَىْءٍ",
            "عَلِيمٌ"
          ],
          "targetIndex": 18,
          "translation": "C'est Lui qui a créé pour vous tout ce qui est sur la terre, puis Il a orienté Sa volonté vers le ciel et en fit sept cieux. Et Il est Omniscient.",
          "highlight": "Omniscient"
        }
      },
      {
        "meaning": "savant, connaisseur (un homme)",
        "tafsir": "ذو علم",
        "example": {
          "surah": 12,
          "ayah": 55,
          "globalAyah": 1651,
          "surahName": "يُوسُفَ",
          "words": [
            "قَالَ",
            "ٱجْعَلْنِى",
            "عَلَىٰ",
            "خَزَآئِنِ",
            "ٱلْأَرْضِ",
            "إِنِّى",
            "حَفِيظٌ",
            "عَلِيمٌ"
          ],
          "targetIndex": 7,
          "translation": "Et [Joseph] dit: «Assigne-moi les dépôts du territoire: je suis bon gardien et connaisseur».",
          "highlight": "connaisseur"
        }
      }
    ]
  },
  {
    "id": "janna",
    "arabic": "جَنَّة",
    "transliteration": "janna",
    "meaning": "jardin ; Paradis",
    "kind": "noun",
    "note": "Racine ج ن ن : ce qui est caché, couvert. Un jardin dont le feuillage couvre le sol.",
    "root": "ج ن ن",
    "occurrences": 147,
    "rootOccurrences": 201,
    "pronunciation": {
      "surah": 2,
      "ayah": 266,
      "wordIndex": 5,
      "form": "جَنَّةٌ"
    },
    "examples": [
      {
        "surah": 89,
        "ayah": 30,
        "globalAyah": 6023,
        "surahName": "الفَجۡرِ",
        "words": [
          "وَٱدْخُلِى",
          "جَنَّتِى"
        ],
        "targetIndex": 1,
        "translation": "et entre dans Mon Paradis»."
      },
      {
        "surah": 26,
        "ayah": 147,
        "globalAyah": 3079,
        "surahName": "الشُّعَرَاءِ",
        "words": [
          "فِى",
          "جَنَّٰتٍ",
          "وَعُيُونٍ"
        ],
        "targetIndex": 1,
        "translation": "Au milieu de jardins, de sources,"
      },
      {
        "surah": 37,
        "ayah": 43,
        "globalAyah": 3831,
        "surahName": "الصَّافَّاتِ",
        "words": [
          "فِى",
          "جَنَّٰتِ",
          "ٱلنَّعِيمِ"
        ],
        "targetIndex": 1,
        "translation": "dans les Jardins du délice,"
      }
    ],
    "senses": [
      {
        "meaning": "le Paradis",
        "example": {
          "surah": 89,
          "ayah": 30,
          "globalAyah": 6023,
          "surahName": "الفَجۡرِ",
          "words": [
            "وَٱدْخُلِى",
            "جَنَّتِى"
          ],
          "targetIndex": 1,
          "translation": "et entre dans Mon Paradis».",
          "highlight": "Paradis"
        }
      },
      {
        "meaning": "jardin (ici-bas)",
        "tafsir": "حديقته",
        "example": {
          "surah": 18,
          "ayah": 35,
          "globalAyah": 2175,
          "surahName": "الكَهۡفِ",
          "words": [
            "وَدَخَلَ",
            "جَنَّتَهُۥ",
            "وَهُوَ",
            "ظَالِمٌ",
            "لِّنَفْسِهِۦ",
            "قَالَ",
            "مَآ",
            "أَظُنُّ",
            "أَن",
            "تَبِيدَ",
            "هَٰذِهِۦٓ",
            "أَبَدًا"
          ],
          "targetIndex": 1,
          "translation": "Il entra dans son jardin coupable envers lui-même [par sa mécréance]; il dit: «Je ne pense pas que ceci puisse jamais périr,",
          "highlight": "jardin"
        }
      }
    ]
  },
  {
    "id": "ilah",
    "arabic": "إِلَٰه",
    "transliteration": "ilāh",
    "meaning": "divinité",
    "kind": "noun",
    "note": "Pluriel : آلِهَة āliha. Au cœur de l'attestation « lā ilāha illā-llāh ».",
    "root": "أ ل ه",
    "occurrences": 147,
    "rootOccurrences": 2851,
    "pronunciation": {
      "surah": 2,
      "ayah": 163,
      "wordIndex": 4,
      "form": "إِلَٰهَ"
    },
    "examples": [
      {
        "surah": 114,
        "ayah": 3,
        "globalAyah": 6233,
        "surahName": "النَّاسِ",
        "words": [
          "إِلَٰهِ",
          "ٱلنَّاسِ"
        ],
        "targetIndex": 0,
        "translation": "Dieu des hommes,"
      },
      {
        "surah": 37,
        "ayah": 86,
        "globalAyah": 3874,
        "surahName": "الصَّافَّاتِ",
        "words": [
          "أَئِفْكًا",
          "ءَالِهَةً",
          "دُونَ",
          "ٱللَّهِ",
          "تُرِيدُونَ"
        ],
        "targetIndex": 1,
        "translation": "Cherchez-vous dans votre égarement, des divinités en dehors d'Allah?"
      },
      {
        "surah": 3,
        "ayah": 2,
        "globalAyah": 295,
        "surahName": "آلِ عِمۡرَانَ",
        "words": [
          "ٱللَّهُ",
          "لَآ",
          "إِلَٰهَ",
          "إِلَّا",
          "هُوَ",
          "ٱلْحَىُّ",
          "ٱلْقَيُّومُ"
        ],
        "targetIndex": 2,
        "translation": "Allah! Pas de divinité à part Lui, le Vivant, Celui qui subsiste par Lui-même «Al-Qayyum»."
      }
    ],
    "senses": [
      {
        "meaning": "divinité, Dieu",
        "example": {
          "surah": 2,
          "ayah": 163,
          "globalAyah": 170,
          "surahName": "البَقَرَةِ",
          "words": [
            "وَإِلَٰهُكُمْ",
            "إِلَٰهٌ",
            "وَٰحِدٌ",
            "لَّآ",
            "إِلَٰهَ",
            "إِلَّا",
            "هُوَ",
            "ٱلرَّحْمَٰنُ",
            "ٱلرَّحِيمُ"
          ],
          "targetIndex": 0,
          "translation": "Et votre Divinité est une divinité unique. Pas de divinité à part Lui, le Tout Miséricordieux, le Très Miséricordieux.",
          "highlight": "Divinité"
        }
      },
      {
        "meaning": "objet d'adoration (faux dieu)",
        "note": "Celui qui obéit à sa passion comme on obéit à Allah en fait sa « divinité ».",
        "tafsir": "أطاع هواه",
        "example": {
          "surah": 25,
          "ayah": 43,
          "globalAyah": 2898,
          "surahName": "الفُرۡقَانِ",
          "words": [
            "أَرَءَيْتَ",
            "مَنِ",
            "ٱتَّخَذَ",
            "إِلَٰهَهُۥ",
            "هَوَىٰهُ",
            "أَفَأَنتَ",
            "تَكُونُ",
            "عَلَيْهِ",
            "وَكِيلًا"
          ],
          "targetIndex": 3,
          "translation": "Ne vois-tu pas celui qui a fait de sa passion sa divinité? Est-ce à toi d'être un garant pour lui?",
          "highlight": "divinité"
        }
      }
    ]
  },
  {
    "id": "nar",
    "arabic": "نَار",
    "transliteration": "nār",
    "meaning": "feu",
    "kind": "noun",
    "note": "Même racine que نُور nūr (lumière) : ن و ر.",
    "root": "ن و ر",
    "occurrences": 145,
    "rootOccurrences": 194,
    "pronunciation": {
      "surah": 2,
      "ayah": 17,
      "wordIndex": 4,
      "form": "نَارًا"
    },
    "examples": [
      {
        "surah": 111,
        "ayah": 3,
        "globalAyah": 6219,
        "surahName": "المَسَدِ",
        "words": [
          "سَيَصْلَىٰ",
          "نَارًا",
          "ذَاتَ",
          "لَهَبٍ"
        ],
        "targetIndex": 1,
        "translation": "Il sera brûlé dans un Feu plein de flammes,"
      },
      {
        "surah": 101,
        "ayah": 11,
        "globalAyah": 6168,
        "surahName": "القَارِعَةِ",
        "words": [
          "نَارٌ",
          "حَامِيَةٌۢ"
        ],
        "targetIndex": 0,
        "translation": "C'est un Feu ardent."
      },
      {
        "surah": 88,
        "ayah": 4,
        "globalAyah": 5971,
        "surahName": "الغَاشِيَةِ",
        "words": [
          "تَصْلَىٰ",
          "نَارًا",
          "حَامِيَةً"
        ],
        "targetIndex": 1,
        "translation": "Ils brûleront dans un Feu ardent,"
      }
    ],
    "senses": [
      {
        "meaning": "le Feu de l'Enfer",
        "example": {
          "surah": 2,
          "ayah": 24,
          "globalAyah": 31,
          "surahName": "البَقَرَةِ",
          "words": [
            "فَإِن",
            "لَّمْ",
            "تَفْعَلُوا۟",
            "وَلَن",
            "تَفْعَلُوا۟",
            "فَٱتَّقُوا۟",
            "ٱلنَّارَ",
            "ٱلَّتِى",
            "وَقُودُهَا",
            "ٱلنَّاسُ",
            "وَٱلْحِجَارَةُ",
            "أُعِدَّتْ",
            "لِلْكَٰفِرِينَ"
          ],
          "targetIndex": 6,
          "translation": "Si vous n'y parvenez pas et, à coup sûr, vous n'y parviendrez jamais, parez-vous donc contre le feu qu'alimenteront les hommes et les pierres, lequel est réservé aux infidèles.",
          "highlight": "feu"
        }
      },
      {
        "meaning": "feu (ordinaire)",
        "tafsir": "نارًا موقدة",
        "example": {
          "surah": 20,
          "ayah": 10,
          "globalAyah": 2358,
          "surahName": "طه",
          "words": [
            "إِذْ",
            "رَءَا",
            "نَارًا",
            "فَقَالَ",
            "لِأَهْلِهِ",
            "ٱمْكُثُوٓا۟",
            "إِنِّىٓ",
            "ءَانَسْتُ",
            "نَارًا",
            "لَّعَلِّىٓ",
            "ءَاتِيكُم",
            "مِّنْهَا",
            "بِقَبَسٍ",
            "أَوْ",
            "أَجِدُ",
            "عَلَى",
            "ٱلنَّارِ",
            "هُدًى"
          ],
          "targetIndex": 2,
          "translation": "Lorsqu'il vit du feu, il dit à sa famille: «Restez ici! Je vois du feu de loin; peut-être vous en apporterai-je un tison, ou trouverai-je auprès du feu de quoi me guider».",
          "highlight": "feu"
        }
      }
    ]
  },
  {
    "id": "hada",
    "arabic": "هَدَى",
    "transliteration": "hadā",
    "meaning": "il a guidé ; guider",
    "kind": "verb",
    "note": "« Ihdinā ṣ-ṣirāṭa l-mustaqīm » : guide-nous vers le droit chemin (Al-Fātiḥa).",
    "root": "ه د ي",
    "occurrences": 144,
    "rootOccurrences": 316,
    "pronunciation": {
      "surah": 2,
      "ayah": 143,
      "wordIndex": 33,
      "form": "هَدَى"
    },
    "examples": [
      {
        "surah": 1,
        "ayah": 6,
        "globalAyah": 6,
        "surahName": "ٱلْفَاتِحَةِ",
        "words": [
          "ٱهْدِنَا",
          "ٱلصِّرَٰطَ",
          "ٱلْمُسْتَقِيمَ"
        ],
        "targetIndex": 0,
        "translation": "Guide-nous dans le droit chemin,"
      },
      {
        "surah": 20,
        "ayah": 79,
        "globalAyah": 2427,
        "surahName": "طه",
        "words": [
          "وَأَضَلَّ",
          "فِرْعَوْنُ",
          "قَوْمَهُۥ",
          "وَمَا",
          "هَدَىٰ"
        ],
        "targetIndex": 4,
        "translation": "Pharaon égara ainsi son peuple et ne le mît pas sur le droit chemin."
      },
      {
        "surah": 22,
        "ayah": 16,
        "globalAyah": 2611,
        "surahName": "الحَجِّ",
        "words": [
          "وَكَذَٰلِكَ",
          "أَنزَلْنَٰهُ",
          "ءَايَٰتٍۭ",
          "بَيِّنَٰتٍ",
          "وَأَنَّ",
          "ٱللَّهَ",
          "يَهْدِى",
          "مَن",
          "يُرِيدُ"
        ],
        "targetIndex": 6,
        "translation": "C'est ainsi que Nous le fîmes descendre (Le Coran) en versets clairs et qu'Allah guide qui Il veut."
      }
    ],
    "senses": [
      {
        "meaning": "guider (vers la foi)",
        "example": {
          "surah": 1,
          "ayah": 6,
          "globalAyah": 6,
          "surahName": "ٱلْفَاتِحَةِ",
          "words": [
            "ٱهْدِنَا",
            "ٱلصِّرَٰطَ",
            "ٱلْمُسْتَقِيمَ"
          ],
          "targetIndex": 0,
          "translation": "Guide-nous dans le droit chemin,",
          "highlight": "Guide"
        }
      },
      {
        "meaning": "montrer, indiquer la voie",
        "tafsir": "وبينَّا له",
        "example": {
          "surah": 90,
          "ayah": 10,
          "globalAyah": 6033,
          "surahName": "البَلَدِ",
          "words": [
            "وَهَدَيْنَٰهُ",
            "ٱلنَّجْدَيْنِ"
          ],
          "targetIndex": 0,
          "translation": "Ne l'avons-Nous pas guidé aux deux voies.",
          "highlight": "deux voies"
        }
      },
      {
        "meaning": "conduire (vers l'Enfer)",
        "tafsir": "فسوقوهم",
        "example": {
          "surah": 37,
          "ayah": 23,
          "globalAyah": 3811,
          "surahName": "الصَّافَّاتِ",
          "words": [
            "مِن",
            "دُونِ",
            "ٱللَّهِ",
            "فَٱهْدُوهُمْ",
            "إِلَىٰ",
            "صِرَٰطِ",
            "ٱلْجَحِيمِ"
          ],
          "targetIndex": 3,
          "translation": "en dehors d'Allah. Puis conduisez-les au chemin de la Fournaise.",
          "highlight": "conduisez"
        }
      }
    ]
  },
  {
    "id": "qalb",
    "arabic": "قَلْب",
    "transliteration": "qalb",
    "meaning": "cœur",
    "kind": "noun",
    "note": "Pluriel : قُلُوب qulūb. La racine ق ل ب signifie « retourner » : le cœur change d'état.",
    "root": "ق ل ب",
    "occurrences": 132,
    "rootOccurrences": 168,
    "pronunciation": {
      "surah": 40,
      "ayah": 35,
      "wordIndex": 20,
      "form": "قَلْبِ"
    },
    "examples": [
      {
        "surah": 13,
        "ayah": 28,
        "globalAyah": 1735,
        "surahName": "الرَّعۡدِ",
        "words": [
          "ٱلَّذِينَ",
          "ءَامَنُوا۟",
          "وَتَطْمَئِنُّ",
          "قُلُوبُهُم",
          "بِذِكْرِ",
          "ٱللَّهِ",
          "أَلَا",
          "بِذِكْرِ",
          "ٱللَّهِ",
          "تَطْمَئِنُّ",
          "ٱلْقُلُوبُ"
        ],
        "targetIndex": 3,
        "translation": "ceux qui ont cru, et dont les cœurs se tranquillisent à l'évocation d'Allah». Certes, c'est par l'évocation d'Allah que les cœurs se tranquillisent."
      },
      {
        "surah": 79,
        "ayah": 8,
        "globalAyah": 5720,
        "surahName": "النَّازِعَاتِ",
        "words": [
          "قُلُوبٌ",
          "يَوْمَئِذٍ",
          "وَاجِفَةٌ"
        ],
        "targetIndex": 0,
        "translation": "Ce jour-là, il y aura des cœurs qui seront agités d'effroi,"
      },
      {
        "surah": 15,
        "ayah": 12,
        "globalAyah": 1814,
        "surahName": "الحِجۡرِ",
        "words": [
          "كَذَٰلِكَ",
          "نَسْلُكُهُۥ",
          "فِى",
          "قُلُوبِ",
          "ٱلْمُجْرِمِينَ"
        ],
        "targetIndex": 3,
        "translation": "C'est ainsi que Nous faisons pénétrer (la mécréance) dans les cœurs des coupables."
      }
    ],
    "senses": [
      {
        "meaning": "cœur, siège de la compréhension",
        "example": {
          "surah": 7,
          "ayah": 179,
          "globalAyah": 1133,
          "surahName": "الأَعۡرَافِ",
          "words": [
            "وَلَقَدْ",
            "ذَرَأْنَا",
            "لِجَهَنَّمَ",
            "كَثِيرًا",
            "مِّنَ",
            "ٱلْجِنِّ",
            "وَٱلْإِنسِ",
            "لَهُمْ",
            "قُلُوبٌ",
            "لَّا",
            "يَفْقَهُونَ",
            "بِهَا",
            "وَلَهُمْ",
            "أَعْيُنٌ",
            "لَّا",
            "يُبْصِرُونَ",
            "بِهَا",
            "وَلَهُمْ",
            "ءَاذَانٌ",
            "لَّا",
            "يَسْمَعُونَ",
            "بِهَآ",
            "أُو۟لَٰٓئِكَ",
            "كَٱلْأَنْعَٰمِ",
            "بَلْ",
            "هُمْ",
            "أَضَلُّ",
            "أُو۟لَٰٓئِكَ",
            "هُمُ",
            "ٱلْغَٰفِلُونَ"
          ],
          "targetIndex": 8,
          "translation": "Nous avons destiné beaucoup de djinns et d'hommes pour l'Enfer. Ils ont des cœurs, mais ne comprennent pas. Ils ont des yeux, mais ne voient pas. Ils ont des oreilles, mais n'entendent pas. Ceux-là sont comme les bestiaux, même plus égarés encore. Tels sont les insouciants.",
          "highlight": "cœurs"
        }
      },
      {
        "meaning": "cœur (organe)",
        "tafsir": "من قلبين في صدره",
        "example": {
          "surah": 33,
          "ayah": 4,
          "globalAyah": 3537,
          "surahName": "الأَحۡزَابِ",
          "words": [
            "مَّا",
            "جَعَلَ",
            "ٱللَّهُ",
            "لِرَجُلٍ",
            "مِّن",
            "قَلْبَيْنِ",
            "فِى",
            "جَوْفِهِۦ",
            "وَمَا",
            "جَعَلَ",
            "أَزْوَٰجَكُمُ",
            "ٱلَّٰٓـِٔى",
            "تُظَٰهِرُونَ",
            "مِنْهُنَّ",
            "أُمَّهَٰتِكُمْ",
            "وَمَا",
            "جَعَلَ",
            "أَدْعِيَآءَكُمْ",
            "أَبْنَآءَكُمْ",
            "ذَٰلِكُمْ",
            "قَوْلُكُم",
            "بِأَفْوَٰهِكُمْ",
            "وَٱللَّهُ",
            "يَقُولُ",
            "ٱلْحَقَّ",
            "وَهُوَ",
            "يَهْدِى",
            "ٱلسَّبِيلَ"
          ],
          "targetIndex": 5,
          "translation": "Allah n'a pas placé à l'homme deux cœurs dans sa poitrine. Il n'a point assimilé à vos mères vos épouses [à qui vous dites en les répudiant]: «Tu es [aussi illicite] pour moi que le dos de ma mère». Il n'a point fait de vos enfants adoptifs vos propres enfants. Ce sont des propos [qui sortent] de votre bouche. Mais Allah dit la vérité et c'est Lui qui met [l'homme] dans la bonne direction.",
          "highlight": "deux cœurs"
        }
      }
    ]
  },
  {
    "id": "abd",
    "arabic": "عَبْد",
    "transliteration": "ʿabd",
    "meaning": "serviteur, adorateur",
    "kind": "noun",
    "note": "Pluriel : عِبَاد ʿibād. Base de prénoms comme ʿAbdullāh (serviteur d'Allah).",
    "root": "ع ب د",
    "occurrences": 131,
    "rootOccurrences": 275,
    "pronunciation": {
      "surah": 4,
      "ayah": 172,
      "wordIndex": 5,
      "form": "عَبْدًا"
    },
    "examples": [
      {
        "surah": 96,
        "ayah": 10,
        "globalAyah": 6116,
        "surahName": "العَلَقِ",
        "words": [
          "عَبْدًا",
          "إِذَا",
          "صَلَّىٰٓ"
        ],
        "targetIndex": 0,
        "translation": "à un serviteur d'Allah [Muhammad] de célébrer la Salât?"
      },
      {
        "surah": 37,
        "ayah": 40,
        "globalAyah": 3828,
        "surahName": "الصَّافَّاتِ",
        "words": [
          "إِلَّا",
          "عِبَادَ",
          "ٱللَّهِ",
          "ٱلْمُخْلَصِينَ"
        ],
        "targetIndex": 1,
        "translation": "sauf les serviteurs élus d'Allah,"
      },
      {
        "surah": 50,
        "ayah": 8,
        "globalAyah": 4638,
        "surahName": "قٓ",
        "words": [
          "تَبْصِرَةً",
          "وَذِكْرَىٰ",
          "لِكُلِّ",
          "عَبْدٍ",
          "مُّنِيبٍ"
        ],
        "targetIndex": 3,
        "translation": "à titre d'appel à la clairvoyance et un rappel pour tout serviteur repentant."
      }
    ],
    "senses": [
      {
        "meaning": "serviteur d'Allah",
        "tafsir": "بعبده محمد",
        "example": {
          "surah": 17,
          "ayah": 1,
          "globalAyah": 2030,
          "surahName": "الإِسۡرَاءِ",
          "words": [
            "سُبْحَٰنَ",
            "ٱلَّذِىٓ",
            "أَسْرَىٰ",
            "بِعَبْدِهِۦ",
            "لَيْلًا",
            "مِّنَ",
            "ٱلْمَسْجِدِ",
            "ٱلْحَرَامِ",
            "إِلَى",
            "ٱلْمَسْجِدِ",
            "ٱلْأَقْصَا",
            "ٱلَّذِى",
            "بَٰرَكْنَا",
            "حَوْلَهُۥ",
            "لِنُرِيَهُۥ",
            "مِنْ",
            "ءَايَٰتِنَآ",
            "إِنَّهُۥ",
            "هُوَ",
            "ٱلسَّمِيعُ",
            "ٱلْبَصِيرُ"
          ],
          "targetIndex": 3,
          "translation": "Gloire et Pureté à Celui qui de nuit, fit voyager Son serviteur [Muhammad], de la Mosquée Al-Harâm à la Mosquée Al-Aqsâ dont Nous avons béni l'alentour, afin de lui faire voir certaines de Nos merveilles. C'est Lui, vraiment, qui est l'Audient, le Clairvoyant.",
          "highlight": "serviteur"
        }
      },
      {
        "meaning": "esclave",
        "example": {
          "surah": 2,
          "ayah": 178,
          "globalAyah": 185,
          "surahName": "البَقَرَةِ",
          "words": [
            "يَٰٓأَيُّهَا",
            "ٱلَّذِينَ",
            "ءَامَنُوا۟",
            "كُتِبَ",
            "عَلَيْكُمُ",
            "ٱلْقِصَاصُ",
            "فِى",
            "ٱلْقَتْلَى",
            "ٱلْحُرُّ",
            "بِٱلْحُرِّ",
            "وَٱلْعَبْدُ",
            "بِٱلْعَبْدِ",
            "وَٱلْأُنثَىٰ",
            "بِٱلْأُنثَىٰ",
            "فَمَنْ",
            "عُفِىَ",
            "لَهُۥ",
            "مِنْ",
            "أَخِيهِ",
            "شَىْءٌ",
            "فَٱتِّبَاعٌۢ",
            "بِٱلْمَعْرُوفِ",
            "وَأَدَآءٌ",
            "إِلَيْهِ",
            "بِإِحْسَٰنٍ",
            "ذَٰلِكَ",
            "تَخْفِيفٌ",
            "مِّن",
            "رَّبِّكُمْ",
            "وَرَحْمَةٌ",
            "فَمَنِ",
            "ٱعْتَدَىٰ",
            "بَعْدَ",
            "ذَٰلِكَ",
            "فَلَهُۥ",
            "عَذَابٌ",
            "أَلِيمٌ"
          ],
          "targetIndex": 10,
          "translation": "O les croyants! On vous a prescrit le talion au sujet des tués: homme libre pour homme libre, esclave pour esclave, femme pour femme. Mais celui à qui son frère aura pardonné en quelque façon doit faire face à une requête convenable et doit payer des dommages de bonne grâce. Ceci est un allègement de la part de votre Seigneur, et une miséricorde. Donc, quiconque après cela transgresse, aura un châtiment douloureux.",
          "highlight": "esclave"
        }
      }
    ]
  },
  {
    "id": "rahim",
    "arabic": "رَحِيم",
    "transliteration": "raḥīm",
    "meaning": "Très Miséricordieux",
    "kind": "adjective",
    "note": "Racine ر ح م, comme رَحْمَة (miséricorde) et رَحْمَٰن (le Tout Miséricordieux).",
    "root": "ر ح م",
    "occurrences": 116,
    "rootOccurrences": 339,
    "pronunciation": {
      "surah": 4,
      "ayah": 29,
      "wordIndex": 22,
      "form": "رَحِيمًا"
    },
    "examples": [
      {
        "surah": 1,
        "ayah": 3,
        "globalAyah": 3,
        "surahName": "ٱلْفَاتِحَةِ",
        "words": [
          "ٱلرَّحْمَٰنِ",
          "ٱلرَّحِيمِ"
        ],
        "targetIndex": 1,
        "translation": "Le Tout Miséricordieux, le Très Miséricordieux,"
      },
      {
        "surah": 41,
        "ayah": 32,
        "globalAyah": 4250,
        "surahName": "فُصِّلَتۡ",
        "words": [
          "نُزُلًا",
          "مِّنْ",
          "غَفُورٍ",
          "رَّحِيمٍ"
        ],
        "targetIndex": 3,
        "translation": "un lieu d'accueil de la part d'un Très Grand Pardonneur, d'un Très Miséricordieux»."
      },
      {
        "surah": 36,
        "ayah": 58,
        "globalAyah": 3763,
        "surahName": "يسٓ",
        "words": [
          "سَلَٰمٌ",
          "قَوْلًا",
          "مِّن",
          "رَّبٍّ",
          "رَّحِيمٍ"
        ],
        "targetIndex": 4,
        "translation": "«Salâm» [paix et salut]! Parole de la part d'un Seigneur Très Miséricordieux."
      }
    ],
    "senses": [
      {
        "meaning": "Très Miséricordieux (Allah)",
        "example": {
          "surah": 1,
          "ayah": 3,
          "globalAyah": 3,
          "surahName": "ٱلْفَاتِحَةِ",
          "words": [
            "ٱلرَّحْمَٰنِ",
            "ٱلرَّحِيمِ"
          ],
          "targetIndex": 1,
          "translation": "Le Tout Miséricordieux, le Très Miséricordieux,",
          "highlight": "Très Miséricordieux"
        }
      },
      {
        "meaning": "plein de compassion (le Prophète)",
        "tafsir": "كثير الرأفة والرحمة",
        "example": {
          "surah": 9,
          "ayah": 128,
          "globalAyah": 1363,
          "surahName": "التَّوۡبَةِ",
          "words": [
            "لَقَدْ",
            "جَآءَكُمْ",
            "رَسُولٌ",
            "مِّنْ",
            "أَنفُسِكُمْ",
            "عَزِيزٌ",
            "عَلَيْهِ",
            "مَا",
            "عَنِتُّمْ",
            "حَرِيصٌ",
            "عَلَيْكُم",
            "بِٱلْمُؤْمِنِينَ",
            "رَءُوفٌ",
            "رَّحِيمٌ"
          ],
          "targetIndex": 13,
          "translation": "Certes, un Messager pris parmi vous, est venu à vous, auquel pèsent lourd les difficultés que vous subissez, qui est plein de sollicitude pour vous, qui est compatissant et miséricordieux envers les croyants.",
          "highlight": "miséricordieux"
        }
      }
    ]
  },
  {
    "id": "dunya",
    "arabic": "دُنْيَا",
    "transliteration": "dunyā",
    "meaning": "ce bas monde, la vie d'ici-bas",
    "kind": "noun",
    "note": "Littéralement « la plus proche » (racine د ن و). S'oppose à الآخِرَة al-ākhira (l'au-delà).",
    "root": "د ن و",
    "occurrences": 115,
    "rootOccurrences": 133,
    "pronunciation": {
      "surah": 2,
      "ayah": 85,
      "wordIndex": 37,
      "form": "ٱلدُّنْيَا"
    },
    "examples": [
      {
        "surah": 87,
        "ayah": 16,
        "globalAyah": 5964,
        "surahName": "الأَعۡلَىٰ",
        "words": [
          "بَلْ",
          "تُؤْثِرُونَ",
          "ٱلْحَيَوٰةَ",
          "ٱلدُّنْيَا"
        ],
        "targetIndex": 3,
        "translation": "Mais, vous préférez plutôt la vie présente,"
      },
      {
        "surah": 79,
        "ayah": 38,
        "globalAyah": 5750,
        "surahName": "النَّازِعَاتِ",
        "words": [
          "وَءَاثَرَ",
          "ٱلْحَيَوٰةَ",
          "ٱلدُّنْيَا"
        ],
        "targetIndex": 2,
        "translation": "et aura préféré la vie présente,"
      },
      {
        "surah": 37,
        "ayah": 6,
        "globalAyah": 3794,
        "surahName": "الصَّافَّاتِ",
        "words": [
          "إِنَّا",
          "زَيَّنَّا",
          "ٱلسَّمَآءَ",
          "ٱلدُّنْيَا",
          "بِزِينَةٍ",
          "ٱلْكَوَاكِبِ"
        ],
        "targetIndex": 3,
        "translation": "Nous avons décoré le ciel le plus proche d'un décor: les étoiles,"
      }
    ],
    "senses": [
      {
        "meaning": "la vie d'ici-bas",
        "example": {
          "surah": 87,
          "ayah": 16,
          "globalAyah": 5964,
          "surahName": "الأَعۡلَىٰ",
          "words": [
            "بَلْ",
            "تُؤْثِرُونَ",
            "ٱلْحَيَوٰةَ",
            "ٱلدُّنْيَا"
          ],
          "targetIndex": 3,
          "translation": "Mais, vous préférez plutôt la vie présente,",
          "highlight": "vie présente"
        }
      },
      {
        "meaning": "le plus proche (ciel)",
        "example": {
          "surah": 37,
          "ayah": 6,
          "globalAyah": 3794,
          "surahName": "الصَّافَّاتِ",
          "words": [
            "إِنَّا",
            "زَيَّنَّا",
            "ٱلسَّمَآءَ",
            "ٱلدُّنْيَا",
            "بِزِينَةٍ",
            "ٱلْكَوَاكِبِ"
          ],
          "targetIndex": 3,
          "translation": "Nous avons décoré le ciel le plus proche d'un décor: les étoiles,",
          "highlight": "le plus proche"
        }
      }
    ]
  },
  {
    "id": "rahma",
    "arabic": "رَحْمَة",
    "transliteration": "raḥma",
    "meaning": "miséricorde",
    "kind": "noun",
    "note": "Le Prophète ﷺ est décrit comme « raḥmatan lil-ʿālamīn » : une miséricorde pour l'univers.",
    "root": "ر ح م",
    "occurrences": 114,
    "rootOccurrences": 339,
    "pronunciation": {
      "surah": 3,
      "ayah": 8,
      "wordIndex": 11,
      "form": "رَحْمَةً"
    },
    "examples": [
      {
        "surah": 21,
        "ayah": 107,
        "globalAyah": 2590,
        "surahName": "الأَنبِيَاءِ",
        "words": [
          "وَمَآ",
          "أَرْسَلْنَٰكَ",
          "إِلَّا",
          "رَحْمَةً",
          "لِّلْعَٰلَمِينَ"
        ],
        "targetIndex": 3,
        "translation": "Et Nous ne t'avons envoyé qu'en miséricorde pour l'univers."
      },
      {
        "surah": 19,
        "ayah": 2,
        "globalAyah": 2252,
        "surahName": "مَرۡيَمَ",
        "words": [
          "ذِكْرُ",
          "رَحْمَتِ",
          "رَبِّكَ",
          "عَبْدَهُۥ",
          "زَكَرِيَّآ"
        ],
        "targetIndex": 1,
        "translation": "C'est un récit de la miséricorde de ton Seigneur envers Son serviteur Zacharie."
      },
      {
        "surah": 36,
        "ayah": 44,
        "globalAyah": 3749,
        "surahName": "يسٓ",
        "words": [
          "إِلَّا",
          "رَحْمَةً",
          "مِّنَّا",
          "وَمَتَٰعًا",
          "إِلَىٰ",
          "حِينٍ"
        ],
        "targetIndex": 1,
        "translation": "sauf par une miséricorde de Notre part, et à titre de jouissance pour un temps."
      }
    ],
    "senses": [
      {
        "meaning": "miséricorde",
        "example": {
          "surah": 21,
          "ayah": 107,
          "globalAyah": 2590,
          "surahName": "الأَنبِيَاءِ",
          "words": [
            "وَمَآ",
            "أَرْسَلْنَٰكَ",
            "إِلَّا",
            "رَحْمَةً",
            "لِّلْعَٰلَمِينَ"
          ],
          "targetIndex": 3,
          "translation": "Et Nous ne t'avons envoyé qu'en miséricorde pour l'univers.",
          "highlight": "miséricorde"
        }
      },
      {
        "meaning": "la pluie",
        "note": "Les vents annoncent la « miséricorde » d'Allah, c'est-à-dire la pluie.",
        "tafsir": "بالمطر",
        "example": {
          "surah": 7,
          "ayah": 57,
          "globalAyah": 1011,
          "surahName": "الأَعۡرَافِ",
          "words": [
            "وَهُوَ",
            "ٱلَّذِى",
            "يُرْسِلُ",
            "ٱلرِّيَٰحَ",
            "بُشْرًۢا",
            "بَيْنَ",
            "يَدَىْ",
            "رَحْمَتِهِۦ",
            "حَتَّىٰٓ",
            "إِذَآ",
            "أَقَلَّتْ",
            "سَحَابًا",
            "ثِقَالًا",
            "سُقْنَٰهُ",
            "لِبَلَدٍ",
            "مَّيِّتٍ",
            "فَأَنزَلْنَا",
            "بِهِ",
            "ٱلْمَآءَ",
            "فَأَخْرَجْنَا",
            "بِهِۦ",
            "مِن",
            "كُلِّ",
            "ٱلثَّمَرَٰتِ",
            "كَذَٰلِكَ",
            "نُخْرِجُ",
            "ٱلْمَوْتَىٰ",
            "لَعَلَّكُمْ",
            "تَذَكَّرُونَ"
          ],
          "targetIndex": 7,
          "translation": "C'est Lui qui envoie les vents comme une annonce de Sa Miséricorde. Puis, lorsqu'ils transportent une nuée lourde, Nous la dirigeons vers un pays mort [de sécheresse], puis Nous en faisons descendre l'eau, ensuite Nous en faisons sortir toutes espèces de fruits. Ainsi ferons-Nous sortir les morts. Peut-être vous rappellerez-vous.",
          "highlight": "Miséricorde"
        }
      },
      {
        "meaning": "le Paradis",
        "tafsir": "في جنة الله",
        "example": {
          "surah": 3,
          "ayah": 107,
          "globalAyah": 400,
          "surahName": "آلِ عِمۡرَانَ",
          "words": [
            "وَأَمَّا",
            "ٱلَّذِينَ",
            "ٱبْيَضَّتْ",
            "وُجُوهُهُمْ",
            "فَفِى",
            "رَحْمَةِ",
            "ٱللَّهِ",
            "هُمْ",
            "فِيهَا",
            "خَٰلِدُونَ"
          ],
          "targetIndex": 5,
          "translation": "Et quant à ceux dont les visages s'éclaireront, ils seront dans la miséricorde d'Allah, où ils demeureront éternellement.",
          "highlight": "miséricorde"
        }
      }
    ]
  },
  {
    "id": "azim",
    "arabic": "عَظِيم",
    "transliteration": "ʿaẓīm",
    "meaning": "immense, grandiose",
    "kind": "adjective",
    "note": "Dans l'inclinaison de la prière : « subḥāna rabbiya l-ʿaẓīm ».",
    "root": "ع ظ م",
    "occurrences": 107,
    "rootOccurrences": 128,
    "pronunciation": {
      "surah": 2,
      "ayah": 7,
      "wordIndex": 11,
      "form": "عَظِيمٌ"
    },
    "examples": [
      {
        "surah": 68,
        "ayah": 4,
        "globalAyah": 5275,
        "surahName": "القَلَمِ",
        "words": [
          "وَإِنَّكَ",
          "لَعَلَىٰ",
          "خُلُقٍ",
          "عَظِيمٍ"
        ],
        "targetIndex": 3,
        "translation": "Et tu es certes, d'une moralité éminente."
      },
      {
        "surah": 83,
        "ayah": 5,
        "globalAyah": 5853,
        "surahName": "المُطَفِّفِينَ",
        "words": [
          "لِيَوْمٍ",
          "عَظِيمٍ"
        ],
        "targetIndex": 1,
        "translation": "en un jour terrible,"
      },
      {
        "surah": 37,
        "ayah": 107,
        "globalAyah": 3895,
        "surahName": "الصَّافَّاتِ",
        "words": [
          "وَفَدَيْنَٰهُ",
          "بِذِبْحٍ",
          "عَظِيمٍ"
        ],
        "targetIndex": 2,
        "translation": "Et Nous le rançonnâmes d'une immolation généreuse."
      }
    ],
    "senses": [
      {
        "meaning": "immense, éminent",
        "example": {
          "surah": 68,
          "ayah": 4,
          "globalAyah": 5275,
          "surahName": "القَلَمِ",
          "words": [
            "وَإِنَّكَ",
            "لَعَلَىٰ",
            "خُلُقٍ",
            "عَظِيمٍ"
          ],
          "targetIndex": 3,
          "translation": "Et tu es certes, d'une moralité éminente.",
          "highlight": "éminente"
        }
      },
      {
        "meaning": "le Très Grand (Allah)",
        "example": {
          "surah": 2,
          "ayah": 255,
          "globalAyah": 262,
          "surahName": "البَقَرَةِ",
          "words": [
            "ٱللَّهُ",
            "لَآ",
            "إِلَٰهَ",
            "إِلَّا",
            "هُوَ",
            "ٱلْحَىُّ",
            "ٱلْقَيُّومُ",
            "لَا",
            "تَأْخُذُهُۥ",
            "سِنَةٌ",
            "وَلَا",
            "نَوْمٌ",
            "لَّهُۥ",
            "مَا",
            "فِى",
            "ٱلسَّمَٰوَٰتِ",
            "وَمَا",
            "فِى",
            "ٱلْأَرْضِ",
            "مَن",
            "ذَا",
            "ٱلَّذِى",
            "يَشْفَعُ",
            "عِندَهُۥٓ",
            "إِلَّا",
            "بِإِذْنِهِۦ",
            "يَعْلَمُ",
            "مَا",
            "بَيْنَ",
            "أَيْدِيهِمْ",
            "وَمَا",
            "خَلْفَهُمْ",
            "وَلَا",
            "يُحِيطُونَ",
            "بِشَىْءٍ",
            "مِّنْ",
            "عِلْمِهِۦٓ",
            "إِلَّا",
            "بِمَا",
            "شَآءَ",
            "وَسِعَ",
            "كُرْسِيُّهُ",
            "ٱلسَّمَٰوَٰتِ",
            "وَٱلْأَرْضَ",
            "وَلَا",
            "يَـُٔودُهُۥ",
            "حِفْظُهُمَا",
            "وَهُوَ",
            "ٱلْعَلِىُّ",
            "ٱلْعَظِيمُ"
          ],
          "targetIndex": 49,
          "translation": "Allah! Point de divinité à part Lui, le Vivant, Celui qui subsiste par lui-même «Al-Qayyûm». Ni somnolence ni sommeil ne Le saisissent. A Lui appartient tout ce qui est dans les cieux et sur la terre. Qui peut intercéder auprès de Lui sans Sa permission? Il connaît leur passé et leur futur. Et, de Sa science, ils n'embrassent que ce qu'Il veut. Son Trône «Kursiy», déborde les cieux et la terre, dont la garde ne Lui coûte aucune peine. Et Il est le Très Haut, le Très Grand.",
          "highlight": "Très Grand"
        }
      }
    ]
  },
  {
    "id": "ilm",
    "arabic": "عِلْم",
    "transliteration": "ʿilm",
    "meaning": "science, savoir",
    "kind": "noun",
    "note": "Nom verbal de عَلِمَ (savoir). « Rabbi zidnī ʿilmā » : Seigneur, accroît ma science (20:114).",
    "root": "ع ل م",
    "occurrences": 105,
    "rootOccurrences": 854,
    "pronunciation": {
      "surah": 4,
      "ayah": 157,
      "wordIndex": 27,
      "form": "عِلْمٍ"
    },
    "examples": [
      {
        "surah": 102,
        "ayah": 5,
        "globalAyah": 6173,
        "surahName": "التَّكَاثُرِ",
        "words": [
          "كَلَّا",
          "لَوْ",
          "تَعْلَمُونَ",
          "عِلْمَ",
          "ٱلْيَقِينِ"
        ],
        "targetIndex": 3,
        "translation": "Sûrement! Si vous saviez de science certaine."
      },
      {
        "surah": 53,
        "ayah": 35,
        "globalAyah": 4819,
        "surahName": "النَّجۡمِ",
        "words": [
          "أَعِندَهُۥ",
          "عِلْمُ",
          "ٱلْغَيْبِ",
          "فَهُوَ",
          "يَرَىٰٓ"
        ],
        "targetIndex": 1,
        "translation": "Détient-il la science de l'Inconnaissable en sorte qu'il voit?"
      },
      {
        "surah": 44,
        "ayah": 32,
        "globalAyah": 4446,
        "surahName": "الدُّخَانِ",
        "words": [
          "وَلَقَدِ",
          "ٱخْتَرْنَٰهُمْ",
          "عَلَىٰ",
          "عِلْمٍ",
          "عَلَى",
          "ٱلْعَٰلَمِينَ"
        ],
        "targetIndex": 3,
        "translation": "A bon escient Nous les choisîmes parmi tous les peuples de l'univers,"
      }
    ],
    "senses": [
      {
        "meaning": "savoir, connaissance",
        "example": {
          "surah": 20,
          "ayah": 114,
          "globalAyah": 2462,
          "surahName": "طه",
          "words": [
            "فَتَعَٰلَى",
            "ٱللَّهُ",
            "ٱلْمَلِكُ",
            "ٱلْحَقُّ",
            "وَلَا",
            "تَعْجَلْ",
            "بِٱلْقُرْءَانِ",
            "مِن",
            "قَبْلِ",
            "أَن",
            "يُقْضَىٰٓ",
            "إِلَيْكَ",
            "وَحْيُهُۥ",
            "وَقُل",
            "رَّبِّ",
            "زِدْنِى",
            "عِلْمًا"
          ],
          "targetIndex": 16,
          "translation": "Que soit éxalté Allah, le Vrai Souverain! Ne te hâte pas [de réciter] le Coran avant que ne te soit achevée sa révélation. Et dis: «O mon Seigneur, accroît mes connaissances!»",
          "highlight": "connaissances"
        }
      },
      {
        "meaning": "la révélation",
        "note": "La « science » reçue par le Prophète est ici la révélation.",
        "tafsir": "من الوحي",
        "example": {
          "surah": 2,
          "ayah": 120,
          "globalAyah": 127,
          "surahName": "البَقَرَةِ",
          "words": [
            "وَلَن",
            "تَرْضَىٰ",
            "عَنكَ",
            "ٱلْيَهُودُ",
            "وَلَا",
            "ٱلنَّصَٰرَىٰ",
            "حَتَّىٰ",
            "تَتَّبِعَ",
            "مِلَّتَهُمْ",
            "قُلْ",
            "إِنَّ",
            "هُدَى",
            "ٱللَّهِ",
            "هُوَ",
            "ٱلْهُدَىٰ",
            "وَلَئِنِ",
            "ٱتَّبَعْتَ",
            "أَهْوَآءَهُم",
            "بَعْدَ",
            "ٱلَّذِى",
            "جَآءَكَ",
            "مِنَ",
            "ٱلْعِلْمِ",
            "مَا",
            "لَكَ",
            "مِنَ",
            "ٱللَّهِ",
            "مِن",
            "وَلِىٍّ",
            "وَلَا",
            "نَصِيرٍ"
          ],
          "targetIndex": 22,
          "translation": "Ni les Juifs, ni les Chrétiens ne seront jamais satisfaits de toi, jusqu'à ce que tu suives leur religion. - Dis: «Certes, c'est la direction d'Allah qui est la vraie direction». Mais si tu suis leurs passions après ce que tu as reçu de science, tu n'auras contre Allah ni protecteur ni secoureur.",
          "highlight": "science"
        }
      }
    ]
  },
  {
    "id": "ajr",
    "arabic": "أَجْر",
    "transliteration": "ajr",
    "meaning": "récompense, salaire",
    "kind": "noun",
    "note": "Désigne la rétribution méritée pour une œuvre.",
    "root": "أ ج ر",
    "occurrences": 105,
    "rootOccurrences": 108,
    "pronunciation": {
      "surah": 4,
      "ayah": 40,
      "wordIndex": 13,
      "form": "أَجْرًا"
    },
    "examples": [
      {
        "surah": 68,
        "ayah": 3,
        "globalAyah": 5274,
        "surahName": "القَلَمِ",
        "words": [
          "وَإِنَّ",
          "لَكَ",
          "لَأَجْرًا",
          "غَيْرَ",
          "مَمْنُونٍ"
        ],
        "targetIndex": 2,
        "translation": "Et il y aura pour toi certes, une récompense jamais interrompue."
      },
      {
        "surah": 4,
        "ayah": 67,
        "globalAyah": 560,
        "surahName": "النِّسَاءِ",
        "words": [
          "وَإِذًا",
          "لَّءَاتَيْنَٰهُم",
          "مِّن",
          "لَّدُنَّآ",
          "أَجْرًا",
          "عَظِيمًا"
        ],
        "targetIndex": 4,
        "translation": "Alors Nous leur aurions donné certainement, de Notre part, une grande récompense,"
      },
      {
        "surah": 11,
        "ayah": 115,
        "globalAyah": 1588,
        "surahName": "هُودٍ",
        "words": [
          "وَٱصْبِرْ",
          "فَإِنَّ",
          "ٱللَّهَ",
          "لَا",
          "يُضِيعُ",
          "أَجْرَ",
          "ٱلْمُحْسِنِينَ"
        ],
        "targetIndex": 5,
        "translation": "Et sois patient. Car Allah ne laisse pas perdre la récompense des gens bienfaisants."
      }
    ],
    "senses": [
      {
        "meaning": "récompense (d'Allah)",
        "example": {
          "surah": 68,
          "ayah": 3,
          "globalAyah": 5274,
          "surahName": "القَلَمِ",
          "words": [
            "وَإِنَّ",
            "لَكَ",
            "لَأَجْرًا",
            "غَيْرَ",
            "مَمْنُونٍ"
          ],
          "targetIndex": 2,
          "translation": "Et il y aura pour toi certes, une récompense jamais interrompue.",
          "highlight": "récompense"
        }
      },
      {
        "meaning": "salaire",
        "example": {
          "surah": 26,
          "ayah": 109,
          "globalAyah": 3041,
          "surahName": "الشُّعَرَاءِ",
          "words": [
            "وَمَآ",
            "أَسْـَٔلُكُمْ",
            "عَلَيْهِ",
            "مِنْ",
            "أَجْرٍ",
            "إِنْ",
            "أَجْرِىَ",
            "إِلَّا",
            "عَلَىٰ",
            "رَبِّ",
            "ٱلْعَٰلَمِينَ"
          ],
          "targetIndex": 4,
          "translation": "Et je ne vous demande pas de salaire pour cela; mon salaire n'incombe qu'au Seigneur de l'univers.",
          "highlight": "salaire"
        }
      },
      {
        "meaning": "dot (mahr)",
        "tafsir": "مهورهن",
        "example": {
          "surah": 4,
          "ayah": 24,
          "globalAyah": 517,
          "surahName": "النِّسَاءِ",
          "words": [
            "وَٱلْمُحْصَنَٰتُ",
            "مِنَ",
            "ٱلنِّسَآءِ",
            "إِلَّا",
            "مَا",
            "مَلَكَتْ",
            "أَيْمَٰنُكُمْ",
            "كِتَٰبَ",
            "ٱللَّهِ",
            "عَلَيْكُمْ",
            "وَأُحِلَّ",
            "لَكُم",
            "مَّا",
            "وَرَآءَ",
            "ذَٰلِكُمْ",
            "أَن",
            "تَبْتَغُوا۟",
            "بِأَمْوَٰلِكُم",
            "مُّحْصِنِينَ",
            "غَيْرَ",
            "مُسَٰفِحِينَ",
            "فَمَا",
            "ٱسْتَمْتَعْتُم",
            "بِهِۦ",
            "مِنْهُنَّ",
            "فَـَٔاتُوهُنَّ",
            "أُجُورَهُنَّ",
            "فَرِيضَةً",
            "وَلَا",
            "جُنَاحَ",
            "عَلَيْكُمْ",
            "فِيمَا",
            "تَرَٰضَيْتُم",
            "بِهِۦ",
            "مِنۢ",
            "بَعْدِ",
            "ٱلْفَرِيضَةِ",
            "إِنَّ",
            "ٱللَّهَ",
            "كَانَ",
            "عَلِيمًا",
            "حَكِيمًا"
          ],
          "targetIndex": 26,
          "translation": "et, parmi les femmes, les dames (qui ont un mari), sauf si elles sont vos esclaves en toute propriété. Prescription d'Allah sur vous! A part cela, il vous est permis de les rechercher, en vous servant de vos biens et en concluant mariage, non en débauchés. Puis, de même que vous jouissez d'elles, donnez-leur leur mahr comme une chose due. Il n'y a aucun péché contre vous à ce que vous concluez un accord quelconque entre vous après la fixation du mahr Car Allah est, certes, Omniscient et Sage.",
          "highlight": "mahr"
        }
      }
    ]
  },
  {
    "id": "din",
    "arabic": "دِين",
    "transliteration": "dīn",
    "meaning": "religion ; Rétribution",
    "kind": "noun",
    "note": "Dans « yawm ad-dīn », il signifie « Jugement, Rétribution ».",
    "root": "د ي ن",
    "occurrences": 92,
    "rootOccurrences": 101,
    "pronunciation": {
      "surah": 3,
      "ayah": 83,
      "wordIndex": 1,
      "form": "دِينِ"
    },
    "examples": [
      {
        "surah": 109,
        "ayah": 6,
        "globalAyah": 6213,
        "surahName": "الكَافِرُونَ",
        "words": [
          "لَكُمْ",
          "دِينُكُمْ",
          "وَلِىَ",
          "دِينِ"
        ],
        "targetIndex": 1,
        "translation": "A vous votre religion, et à moi ma religion»."
      },
      {
        "surah": 110,
        "ayah": 2,
        "globalAyah": 6215,
        "surahName": "النَّصۡرِ",
        "words": [
          "وَرَأَيْتَ",
          "ٱلنَّاسَ",
          "يَدْخُلُونَ",
          "فِى",
          "دِينِ",
          "ٱللَّهِ",
          "أَفْوَاجًا"
        ],
        "targetIndex": 4,
        "translation": "et que tu vois les gens entrer en foule dans la religion d'Allah,"
      },
      {
        "surah": 3,
        "ayah": 85,
        "globalAyah": 378,
        "surahName": "آلِ عِمۡرَانَ",
        "words": [
          "وَمَن",
          "يَبْتَغِ",
          "غَيْرَ",
          "ٱلْإِسْلَٰمِ",
          "دِينًا",
          "فَلَن",
          "يُقْبَلَ",
          "مِنْهُ",
          "وَهُوَ",
          "فِى",
          "ٱلْءَاخِرَةِ",
          "مِنَ",
          "ٱلْخَٰسِرِينَ"
        ],
        "targetIndex": 4,
        "translation": "Et quiconque désire une religion autre que l'Islam, ne sera point agréé, et il sera, dans l'au-delà, parmi les perdants."
      }
    ],
    "senses": [
      {
        "meaning": "religion",
        "example": {
          "surah": 3,
          "ayah": 19,
          "globalAyah": 312,
          "surahName": "آلِ عِمۡرَانَ",
          "words": [
            "إِنَّ",
            "ٱلدِّينَ",
            "عِندَ",
            "ٱللَّهِ",
            "ٱلْإِسْلَٰمُ",
            "وَمَا",
            "ٱخْتَلَفَ",
            "ٱلَّذِينَ",
            "أُوتُوا۟",
            "ٱلْكِتَٰبَ",
            "إِلَّا",
            "مِنۢ",
            "بَعْدِ",
            "مَا",
            "جَآءَهُمُ",
            "ٱلْعِلْمُ",
            "بَغْيًۢا",
            "بَيْنَهُمْ",
            "وَمَن",
            "يَكْفُرْ",
            "بِـَٔايَٰتِ",
            "ٱللَّهِ",
            "فَإِنَّ",
            "ٱللَّهَ",
            "سَرِيعُ",
            "ٱلْحِسَابِ"
          ],
          "targetIndex": 1,
          "translation": "Certes, la religion acceptée d'Allah, c'est l'Islam. Ceux auxquels le Livre a été apporté ne se sont disputés, par agressivité entre eux, qu'après avoir reçu la science. Et quiconque ne croit pas aux signes d'Allah... alors Allah est prompt à demander compte!",
          "highlight": "religion"
        }
      },
      {
        "meaning": "rétribution, jugement",
        "example": {
          "surah": 1,
          "ayah": 4,
          "globalAyah": 4,
          "surahName": "ٱلْفَاتِحَةِ",
          "words": [
            "مَٰلِكِ",
            "يَوْمِ",
            "ٱلدِّينِ"
          ],
          "targetIndex": 2,
          "translation": "Maître du Jour de la rétribution.",
          "highlight": "rétribution"
        }
      },
      {
        "meaning": "culte, adoration",
        "tafsir": "بعبادتهم",
        "example": {
          "surah": 98,
          "ayah": 5,
          "globalAyah": 6135,
          "surahName": "البَيِّنَةِ",
          "words": [
            "وَمَآ",
            "أُمِرُوٓا۟",
            "إِلَّا",
            "لِيَعْبُدُوا۟",
            "ٱللَّهَ",
            "مُخْلِصِينَ",
            "لَهُ",
            "ٱلدِّينَ",
            "حُنَفَآءَ",
            "وَيُقِيمُوا۟",
            "ٱلصَّلَوٰةَ",
            "وَيُؤْتُوا۟",
            "ٱلزَّكَوٰةَ",
            "وَذَٰلِكَ",
            "دِينُ",
            "ٱلْقَيِّمَةِ"
          ],
          "targetIndex": 7,
          "translation": "Il ne leur a été commandé, cependant, que d'adorer Allah, Lui vouant un culte exclusif, d'accomplir la Salât et d'acquitter la Zakât. Et voilà la religion de droiture.",
          "highlight": "culte"
        }
      },
      {
        "meaning": "loi, justice (d'un roi)",
        "note": "Le « dīn du roi » est la loi d'Égypte.",
        "tafsir": "حكم مَلِك",
        "example": {
          "surah": 12,
          "ayah": 76,
          "globalAyah": 1672,
          "surahName": "يُوسُفَ",
          "words": [
            "فَبَدَأَ",
            "بِأَوْعِيَتِهِمْ",
            "قَبْلَ",
            "وِعَآءِ",
            "أَخِيهِ",
            "ثُمَّ",
            "ٱسْتَخْرَجَهَا",
            "مِن",
            "وِعَآءِ",
            "أَخِيهِ",
            "كَذَٰلِكَ",
            "كِدْنَا",
            "لِيُوسُفَ",
            "مَا",
            "كَانَ",
            "لِيَأْخُذَ",
            "أَخَاهُ",
            "فِى",
            "دِينِ",
            "ٱلْمَلِكِ",
            "إِلَّآ",
            "أَن",
            "يَشَآءَ",
            "ٱللَّهُ",
            "نَرْفَعُ",
            "دَرَجَٰتٍ",
            "مَّن",
            "نَّشَآءُ",
            "وَفَوْقَ",
            "كُلِّ",
            "ذِى",
            "عِلْمٍ",
            "عَلِيمٌ"
          ],
          "targetIndex": 18,
          "translation": "[Joseph] commença par les sacs des autres avant celui de son frère; puis il la fit sortir du sac de son frère. Ainsi suggérâmes-Nous cet artifice à Joseph. Car il ne pouvait pas se saisir de son frère, selon la justice du roi, à moins qu'Allah ne l'eût voulu. Nous élevons en rang qui Nous voulons. Et au-dessus de tout homme détenant la science il y a un savant [plus docte que lui].",
          "highlight": "justice du roi"
        }
      }
    ]
  },
  {
    "id": "ghafur",
    "arabic": "غَفُور",
    "transliteration": "ghafūr",
    "meaning": "Pardonneur",
    "kind": "adjective",
    "note": "Racine غ ف ر : couvrir, protéger. Souvent suivi de رَحِيم : « Ghafūrun Raḥīm ».",
    "root": "غ ف ر",
    "occurrences": 91,
    "rootOccurrences": 234,
    "pronunciation": {
      "surah": 2,
      "ayah": 173,
      "wordIndex": 23,
      "form": "غَفُورٌ"
    },
    "examples": [
      {
        "surah": 85,
        "ayah": 14,
        "globalAyah": 5923,
        "surahName": "البُرُوجِ",
        "words": [
          "وَهُوَ",
          "ٱلْغَفُورُ",
          "ٱلْوَدُودُ"
        ],
        "targetIndex": 1,
        "translation": "Et c'est Lui le Pardonneur, le Tout-Affectueux,"
      },
      {
        "surah": 41,
        "ayah": 32,
        "globalAyah": 4250,
        "surahName": "فُصِّلَتۡ",
        "words": [
          "نُزُلًا",
          "مِّنْ",
          "غَفُورٍ",
          "رَّحِيمٍ"
        ],
        "targetIndex": 2,
        "translation": "un lieu d'accueil de la part d'un Très Grand Pardonneur, d'un Très Miséricordieux»."
      },
      {
        "surah": 2,
        "ayah": 192,
        "globalAyah": 199,
        "surahName": "البَقَرَةِ",
        "words": [
          "فَإِنِ",
          "ٱنتَهَوْا۟",
          "فَإِنَّ",
          "ٱللَّهَ",
          "غَفُورٌ",
          "رَّحِيمٌ"
        ],
        "targetIndex": 4,
        "translation": "S'ils cessent, Allah est, certes, Pardonneur et Miséricordieux."
      }
    ],
    "senses": [
      {
        "meaning": "Pardonneur (Allah)",
        "example": {
          "surah": 85,
          "ayah": 14,
          "globalAyah": 5923,
          "surahName": "البُرُوجِ",
          "words": [
            "وَهُوَ",
            "ٱلْغَفُورُ",
            "ٱلْوَدُودُ"
          ],
          "targetIndex": 1,
          "translation": "Et c'est Lui le Pardonneur, le Tout-Affectueux,",
          "highlight": "Pardonneur"
        }
      }
    ]
  },
  {
    "id": "shaytan",
    "arabic": "شَيْطَان",
    "transliteration": "shayṭān",
    "meaning": "diable, Satan",
    "kind": "noun",
    "note": "Pluriel : شَيَاطِين shayāṭīn. « Ash-shayṭān ar-rajīm » : le diable banni.",
    "root": "ش ط ن",
    "occurrences": 88,
    "rootOccurrences": 88,
    "pronunciation": {
      "surah": 15,
      "ayah": 17,
      "wordIndex": 3,
      "form": "شَيْطَٰنٍ"
    },
    "examples": [
      {
        "surah": 81,
        "ayah": 25,
        "globalAyah": 5825,
        "surahName": "التَّكۡوِيرِ",
        "words": [
          "وَمَا",
          "هُوَ",
          "بِقَوْلِ",
          "شَيْطَٰنٍ",
          "رَّجِيمٍ"
        ],
        "targetIndex": 3,
        "translation": "Et ceci [le Coran] n'est point la parole d'un diable banni."
      },
      {
        "surah": 15,
        "ayah": 17,
        "globalAyah": 1819,
        "surahName": "الحِجۡرِ",
        "words": [
          "وَحَفِظْنَٰهَا",
          "مِن",
          "كُلِّ",
          "شَيْطَٰنٍ",
          "رَّجِيمٍ"
        ],
        "targetIndex": 3,
        "translation": "Et Nous l'avons protégé contre tout diable banni."
      },
      {
        "surah": 37,
        "ayah": 7,
        "globalAyah": 3795,
        "surahName": "الصَّافَّاتِ",
        "words": [
          "وَحِفْظًا",
          "مِّن",
          "كُلِّ",
          "شَيْطَٰنٍ",
          "مَّارِدٍ"
        ],
        "targetIndex": 3,
        "translation": "afin de le protéger contre tout diable rebelle."
      }
    ],
    "senses": [
      {
        "meaning": "Satan, démon",
        "example": {
          "surah": 2,
          "ayah": 36,
          "globalAyah": 43,
          "surahName": "البَقَرَةِ",
          "words": [
            "فَأَزَلَّهُمَا",
            "ٱلشَّيْطَٰنُ",
            "عَنْهَا",
            "فَأَخْرَجَهُمَا",
            "مِمَّا",
            "كَانَا",
            "فِيهِ",
            "وَقُلْنَا",
            "ٱهْبِطُوا۟",
            "بَعْضُكُمْ",
            "لِبَعْضٍ",
            "عَدُوٌّ",
            "وَلَكُمْ",
            "فِى",
            "ٱلْأَرْضِ",
            "مُسْتَقَرٌّ",
            "وَمَتَٰعٌ",
            "إِلَىٰ",
            "حِينٍ"
          ],
          "targetIndex": 1,
          "translation": "Peu de temps après, Satan les fit glisser de là et les fit sortir du lieu où ils étaient. Et Nous dîmes: «Descendez (du Paradis); ennemis les uns des autres. Et pour vous il y aura une demeure sur la terre, et un usufruit pour un temps.",
          "highlight": "Satan"
        }
      },
      {
        "meaning": "meneurs mécréants (démons humains)",
        "note": "Les « diables » des hypocrites sont leurs chefs mécréants.",
        "tafsir": "زعمائهم",
        "example": {
          "surah": 2,
          "ayah": 14,
          "globalAyah": 21,
          "surahName": "البَقَرَةِ",
          "words": [
            "وَإِذَا",
            "لَقُوا۟",
            "ٱلَّذِينَ",
            "ءَامَنُوا۟",
            "قَالُوٓا۟",
            "ءَامَنَّا",
            "وَإِذَا",
            "خَلَوْا۟",
            "إِلَىٰ",
            "شَيَٰطِينِهِمْ",
            "قَالُوٓا۟",
            "إِنَّا",
            "مَعَكُمْ",
            "إِنَّمَا",
            "نَحْنُ",
            "مُسْتَهْزِءُونَ"
          ],
          "targetIndex": 9,
          "translation": "Quand ils rencontrent ceux qui ont cru, ils disent: «Nous croyons» mais quand ils se trouvent seuls avec leurs diables, ils disent: «Nous sommes avec vous; en effet nous ne faisions que nous moquer (d'eux)».",
          "highlight": "diables"
        }
      }
    ]
  },
  {
    "id": "huda",
    "arabic": "هُدًى",
    "transliteration": "hudā",
    "meaning": "guidée, bonne direction",
    "kind": "noun",
    "note": "Nom de la racine ه د ي, comme le verbe هَدَى (guider). Le Coran est « hudan lil-muttaqīn ».",
    "root": "ه د ي",
    "occurrences": 85,
    "rootOccurrences": 316,
    "pronunciation": {
      "surah": 2,
      "ayah": 2,
      "wordIndex": 5,
      "form": "هُدًى"
    },
    "examples": [
      {
        "surah": 27,
        "ayah": 77,
        "globalAyah": 3236,
        "surahName": "النَّمۡلِ",
        "words": [
          "وَإِنَّهُۥ",
          "لَهُدًى",
          "وَرَحْمَةٌ",
          "لِّلْمُؤْمِنِينَ"
        ],
        "targetIndex": 1,
        "translation": "cependant qu'il est pour les croyants un guide et une miséricorde."
      },
      {
        "surah": 31,
        "ayah": 3,
        "globalAyah": 3472,
        "surahName": "لُقۡمَانَ",
        "words": [
          "هُدًى",
          "وَرَحْمَةً",
          "لِّلْمُحْسِنِينَ"
        ],
        "targetIndex": 0,
        "translation": "c'est un guide et une miséricorde aux bienfaisants,"
      },
      {
        "surah": 40,
        "ayah": 54,
        "globalAyah": 4187,
        "surahName": "غَافِرٍ",
        "words": [
          "هُدًى",
          "وَذِكْرَىٰ",
          "لِأُو۟لِى",
          "ٱلْأَلْبَٰبِ"
        ],
        "targetIndex": 0,
        "translation": "une guidée et un rappel aux gens doués d'intelligence."
      }
    ],
    "senses": [
      {
        "meaning": "bonne direction",
        "example": {
          "surah": 2,
          "ayah": 5,
          "globalAyah": 12,
          "surahName": "البَقَرَةِ",
          "words": [
            "أُو۟لَٰٓئِكَ",
            "عَلَىٰ",
            "هُدًى",
            "مِّن",
            "رَّبِّهِمْ",
            "وَأُو۟لَٰٓئِكَ",
            "هُمُ",
            "ٱلْمُفْلِحُونَ"
          ],
          "targetIndex": 2,
          "translation": "Ceux-là sont sur le bon chemin de leur Seigneur, et ce sont eux qui réussissent (dans cette vie et dans la vie future).",
          "highlight": "bon chemin"
        }
      },
      {
        "meaning": "guide (le Coran)",
        "example": {
          "surah": 2,
          "ayah": 2,
          "globalAyah": 9,
          "surahName": "البَقَرَةِ",
          "words": [
            "ذَٰلِكَ",
            "ٱلْكِتَٰبُ",
            "لَا",
            "رَيْبَ",
            "فِيهِ",
            "هُدًى",
            "لِّلْمُتَّقِينَ"
          ],
          "targetIndex": 5,
          "translation": "C'est le Livre au sujet duquel il n'y a aucun doute, c'est un guide pour les pieux,",
          "highlight": "guide"
        }
      },
      {
        "meaning": "la Torah",
        "tafsir": "التوراة",
        "example": {
          "surah": 40,
          "ayah": 53,
          "globalAyah": 4186,
          "surahName": "غَافِرٍ",
          "words": [
            "وَلَقَدْ",
            "ءَاتَيْنَا",
            "مُوسَى",
            "ٱلْهُدَىٰ",
            "وَأَوْرَثْنَا",
            "بَنِىٓ",
            "إِسْرَٰٓءِيلَ",
            "ٱلْكِتَٰبَ"
          ],
          "targetIndex": 3,
          "translation": "En effet, Nous avons apporté à Moïse la guidée, et fait hériter aux Enfants d'Israël, le Livre,",
          "highlight": "guidée"
        }
      }
    ]
  },
  {
    "id": "layl",
    "arabic": "لَيْل",
    "transliteration": "layl",
    "meaning": "nuit",
    "kind": "noun",
    "note": "Nom d'unité : لَيْلَة layla (une nuit), comme dans « laylat al-qadr ».",
    "root": "ل ي ل",
    "occurrences": 84,
    "rootOccurrences": 92,
    "pronunciation": {
      "surah": 10,
      "ayah": 24,
      "wordIndex": 29,
      "form": "لَيْلًا"
    },
    "examples": [
      {
        "surah": 93,
        "ayah": 2,
        "globalAyah": 6081,
        "surahName": "الضُّحَىٰ",
        "words": [
          "وَٱلَّيْلِ",
          "إِذَا",
          "سَجَىٰ"
        ],
        "targetIndex": 0,
        "translation": "Et par la nuit quand elle couvre tout!"
      },
      {
        "surah": 44,
        "ayah": 23,
        "globalAyah": 4437,
        "surahName": "الدُّخَانِ",
        "words": [
          "فَأَسْرِ",
          "بِعِبَادِى",
          "لَيْلًا",
          "إِنَّكُم",
          "مُّتَّبَعُونَ"
        ],
        "targetIndex": 2,
        "translation": "«Voyage de nuit avec Mes serviteurs; vous serez poursuivis."
      },
      {
        "surah": 71,
        "ayah": 5,
        "globalAyah": 5424,
        "surahName": "نُوحٍ",
        "words": [
          "قَالَ",
          "رَبِّ",
          "إِنِّى",
          "دَعَوْتُ",
          "قَوْمِى",
          "لَيْلًا",
          "وَنَهَارًا"
        ],
        "targetIndex": 5,
        "translation": "Il dit: «Seigneur! J'ai appelé mon peuple, nuit et jour."
      }
    ],
    "senses": [
      {
        "meaning": "nuit",
        "example": {
          "surah": 93,
          "ayah": 2,
          "globalAyah": 6081,
          "surahName": "الضُّحَىٰ",
          "words": [
            "وَٱلَّيْلِ",
            "إِذَا",
            "سَجَىٰ"
          ],
          "targetIndex": 0,
          "translation": "Et par la nuit quand elle couvre tout!",
          "highlight": "nuit"
        }
      }
    ]
  },
  {
    "id": "salah",
    "arabic": "صَلَاة",
    "transliteration": "ṣalāh",
    "meaning": "prière (rituelle)",
    "kind": "noun",
    "note": "Dans l'écriture coranique (rasm ʿuthmānī), il s'écrit souvent صَلَوٰة, avec un wāw.",
    "root": "ص ل و",
    "occurrences": 83,
    "rootOccurrences": 99,
    "pronunciation": {
      "surah": 24,
      "ayah": 58,
      "wordIndex": 16,
      "form": "صَلَوٰةِ"
    },
    "examples": [
      {
        "surah": 23,
        "ayah": 2,
        "globalAyah": 2675,
        "surahName": "المُؤۡمِنُونَ",
        "words": [
          "ٱلَّذِينَ",
          "هُمْ",
          "فِى",
          "صَلَاتِهِمْ",
          "خَٰشِعُونَ"
        ],
        "targetIndex": 3,
        "translation": "ceux qui sont humbles dans leur Salât,"
      },
      {
        "surah": 2,
        "ayah": 157,
        "globalAyah": 164,
        "surahName": "البَقَرَةِ",
        "words": [
          "أُو۟لَٰٓئِكَ",
          "عَلَيْهِمْ",
          "صَلَوَٰتٌ",
          "مِّن",
          "رَّبِّهِمْ",
          "وَرَحْمَةٌ",
          "وَأُو۟لَٰٓئِكَ",
          "هُمُ",
          "ٱلْمُهْتَدُونَ"
        ],
        "targetIndex": 2,
        "translation": "Ceux-là reçoivent des bénédictions de leur Seigneur, ainsi que la miséricorde; et ceux-là sont les biens guidés."
      },
      {
        "surah": 70,
        "ayah": 23,
        "globalAyah": 5398,
        "surahName": "المَعَارِجِ",
        "words": [
          "ٱلَّذِينَ",
          "هُمْ",
          "عَلَىٰ",
          "صَلَاتِهِمْ",
          "دَآئِمُونَ"
        ],
        "targetIndex": 3,
        "translation": "qui sont assidus à leurs Salâts,"
      }
    ],
    "senses": [
      {
        "meaning": "prière rituelle",
        "example": {
          "surah": 2,
          "ayah": 43,
          "globalAyah": 50,
          "surahName": "البَقَرَةِ",
          "words": [
            "وَأَقِيمُوا۟",
            "ٱلصَّلَوٰةَ",
            "وَءَاتُوا۟",
            "ٱلزَّكَوٰةَ",
            "وَٱرْكَعُوا۟",
            "مَعَ",
            "ٱلرَّٰكِعِينَ"
          ],
          "targetIndex": 1,
          "translation": "Et accomplissez la Salât, et acquittez la Zakât, et inclinez-vous avec ceux qui s'inclinent.",
          "highlight": "Salât"
        }
      },
      {
        "meaning": "bénédiction d'Allah",
        "example": {
          "surah": 2,
          "ayah": 157,
          "globalAyah": 164,
          "surahName": "البَقَرَةِ",
          "words": [
            "أُو۟لَٰٓئِكَ",
            "عَلَيْهِمْ",
            "صَلَوَٰتٌ",
            "مِّن",
            "رَّبِّهِمْ",
            "وَرَحْمَةٌ",
            "وَأُو۟لَٰٓئِكَ",
            "هُمُ",
            "ٱلْمُهْتَدُونَ"
          ],
          "targetIndex": 2,
          "translation": "Ceux-là reçoivent des bénédictions de leur Seigneur, ainsi que la miséricorde; et ceux-là sont les biens guidés.",
          "highlight": "bénédictions"
        }
      },
      {
        "meaning": "invocation",
        "tafsir": "وادع لهم",
        "example": {
          "surah": 9,
          "ayah": 103,
          "globalAyah": 1338,
          "surahName": "التَّوۡبَةِ",
          "words": [
            "خُذْ",
            "مِنْ",
            "أَمْوَٰلِهِمْ",
            "صَدَقَةً",
            "تُطَهِّرُهُمْ",
            "وَتُزَكِّيهِم",
            "بِهَا",
            "وَصَلِّ",
            "عَلَيْهِمْ",
            "إِنَّ",
            "صَلَوٰتَكَ",
            "سَكَنٌ",
            "لَّهُمْ",
            "وَٱللَّهُ",
            "سَمِيعٌ",
            "عَلِيمٌ"
          ],
          "targetIndex": 10,
          "translation": "Prélève de leurs biens une Sadaqa par laquelle tu les purifies et les bénis, et prie pour eux. Ta prière est une quiétude pour eux. Et Allah est Audient et Omniscient.",
          "highlight": "prière"
        }
      },
      {
        "meaning": "lieux de prière",
        "tafsir": "أماكن العبا",
        "example": {
          "surah": 22,
          "ayah": 40,
          "globalAyah": 2635,
          "surahName": "الحَجِّ",
          "words": [
            "ٱلَّذِينَ",
            "أُخْرِجُوا۟",
            "مِن",
            "دِيَٰرِهِم",
            "بِغَيْرِ",
            "حَقٍّ",
            "إِلَّآ",
            "أَن",
            "يَقُولُوا۟",
            "رَبُّنَا",
            "ٱللَّهُ",
            "وَلَوْلَا",
            "دَفْعُ",
            "ٱللَّهِ",
            "ٱلنَّاسَ",
            "بَعْضَهُم",
            "بِبَعْضٍ",
            "لَّهُدِّمَتْ",
            "صَوَٰمِعُ",
            "وَبِيَعٌ",
            "وَصَلَوَٰتٌ",
            "وَمَسَٰجِدُ",
            "يُذْكَرُ",
            "فِيهَا",
            "ٱسْمُ",
            "ٱللَّهِ",
            "كَثِيرًا",
            "وَلَيَنصُرَنَّ",
            "ٱللَّهُ",
            "مَن",
            "يَنصُرُهُۥٓ",
            "إِنَّ",
            "ٱللَّهَ",
            "لَقَوِىٌّ",
            "عَزِيزٌ"
          ],
          "targetIndex": 20,
          "translation": "ceux qui ont été expulsés de leurs demeures, - contre toute justice, simplement parce qu'ils disaient: «Allah est notre Seigneur». - Si Allah ne repoussait pas les gens les uns par les autres, les ermitages seraient démolis, ainsi que les églises, les synagogues et les mosquées où le nom d'Allah est beaucoup invoqué. Allah soutient, certes, ceux qui soutiennent (Sa Religion). Allah est assurément Fort et Puissant,",
          "highlight": "synagogues"
        }
      }
    ]
  },
  {
    "id": "samia",
    "arabic": "سَمِعَ",
    "transliteration": "samiʿa",
    "meaning": "il a entendu ; entendre",
    "kind": "verb",
    "note": "« Samiʿnā wa aṭaʿnā » : nous avons entendu et nous avons obéi. As-Samīʿ : l'Audient.",
    "root": "س م ع",
    "occurrences": 78,
    "rootOccurrences": 185,
    "pronunciation": {
      "surah": 3,
      "ayah": 181,
      "wordIndex": 1,
      "form": "سَمِعَ"
    },
    "examples": [
      {
        "surah": 36,
        "ayah": 25,
        "globalAyah": 3730,
        "surahName": "يسٓ",
        "words": [
          "إِنِّىٓ",
          "ءَامَنتُ",
          "بِرَبِّكُمْ",
          "فَٱسْمَعُونِ"
        ],
        "targetIndex": 3,
        "translation": "[Mais] je crois en votre Seigneur. Ecoutez-moi donc»."
      },
      {
        "surah": 88,
        "ayah": 11,
        "globalAyah": 5978,
        "surahName": "الغَاشِيَةِ",
        "words": [
          "لَّا",
          "تَسْمَعُ",
          "فِيهَا",
          "لَٰغِيَةً"
        ],
        "targetIndex": 1,
        "translation": "où ils n'entendent aucune futilité."
      },
      {
        "surah": 20,
        "ayah": 46,
        "globalAyah": 2394,
        "surahName": "طه",
        "words": [
          "قَالَ",
          "لَا",
          "تَخَافَآ",
          "إِنَّنِى",
          "مَعَكُمَآ",
          "أَسْمَعُ",
          "وَأَرَىٰ"
        ],
        "targetIndex": 5,
        "translation": "Il dit: «Ne craignez rien. Je suis avec vous: J'entends et Je vois."
      }
    ],
    "senses": [
      {
        "meaning": "entendre",
        "example": {
          "surah": 58,
          "ayah": 1,
          "globalAyah": 5105,
          "surahName": "المُجَادلَةِ",
          "words": [
            "قَدْ",
            "سَمِعَ",
            "ٱللَّهُ",
            "قَوْلَ",
            "ٱلَّتِى",
            "تُجَٰدِلُكَ",
            "فِى",
            "زَوْجِهَا",
            "وَتَشْتَكِىٓ",
            "إِلَى",
            "ٱللَّهِ",
            "وَٱللَّهُ",
            "يَسْمَعُ",
            "تَحَاوُرَكُمَآ",
            "إِنَّ",
            "ٱللَّهَ",
            "سَمِيعٌۢ",
            "بَصِيرٌ"
          ],
          "targetIndex": 1,
          "translation": "Allah a bien entendu la parole de celle qui discutait avec toi à propos de son époux et se plaignait à Allah. Et Allah entendait votre conversation, car Allah est Audient et Clairvoyant.",
          "highlight": "entendu"
        }
      },
      {
        "meaning": "écouter et obéir",
        "example": {
          "surah": 2,
          "ayah": 285,
          "globalAyah": 292,
          "surahName": "البَقَرَةِ",
          "words": [
            "ءَامَنَ",
            "ٱلرَّسُولُ",
            "بِمَآ",
            "أُنزِلَ",
            "إِلَيْهِ",
            "مِن",
            "رَّبِّهِۦ",
            "وَٱلْمُؤْمِنُونَ",
            "كُلٌّ",
            "ءَامَنَ",
            "بِٱللَّهِ",
            "وَمَلَٰٓئِكَتِهِۦ",
            "وَكُتُبِهِۦ",
            "وَرُسُلِهِۦ",
            "لَا",
            "نُفَرِّقُ",
            "بَيْنَ",
            "أَحَدٍ",
            "مِّن",
            "رُّسُلِهِۦ",
            "وَقَالُوا۟",
            "سَمِعْنَا",
            "وَأَطَعْنَا",
            "غُفْرَانَكَ",
            "رَبَّنَا",
            "وَإِلَيْكَ",
            "ٱلْمَصِيرُ"
          ],
          "targetIndex": 21,
          "translation": "Le Messager a cru en ce qu'on a fait descendre vers lui venant de son Seigneur, et aussi les croyants: tous ont cru en Allah, en Ses anges, à Ses livres et en Ses messagers; (en disant): «Nous ne faisons aucune distinction entre Ses messagers». Et ils ont dit: «Nous avons entendu et obéi. Seigneur, nous implorons Ton pardon. C'est à Toi que sera le retour».",
          "highlight": "entendu et obéi"
        }
      }
    ]
  },
  {
    "id": "hayah",
    "arabic": "حَيَاة",
    "transliteration": "ḥayāh",
    "meaning": "vie",
    "kind": "noun",
    "note": "Dans l'écriture coranique, il s'écrit souvent حَيَوٰة. « Al-ḥayāt ad-dunyā » : la vie d'ici-bas.",
    "root": "ح ي ي",
    "occurrences": 76,
    "rootOccurrences": 189,
    "pronunciation": {
      "surah": 16,
      "ayah": 97,
      "wordIndex": 10,
      "form": "حَيَوٰةً"
    },
    "examples": [
      {
        "surah": 89,
        "ayah": 24,
        "globalAyah": 6017,
        "surahName": "الفَجۡرِ",
        "words": [
          "يَقُولُ",
          "يَٰلَيْتَنِى",
          "قَدَّمْتُ",
          "لِحَيَاتِى"
        ],
        "targetIndex": 3,
        "translation": "Il dira: «Hélas! Que n'ai-je fait du bien pour ma vie future!"
      },
      {
        "surah": 2,
        "ayah": 179,
        "globalAyah": 186,
        "surahName": "البَقَرَةِ",
        "words": [
          "وَلَكُمْ",
          "فِى",
          "ٱلْقِصَاصِ",
          "حَيَوٰةٌ",
          "يَٰٓأُو۟لِى",
          "ٱلْأَلْبَٰبِ",
          "لَعَلَّكُمْ",
          "تَتَّقُونَ"
        ],
        "targetIndex": 3,
        "translation": "C'est dans le talion que vous aurez la préservation de la vie, ô vous doués d'intelligence, ainsi atteindrez-vous la piété."
      },
      {
        "surah": 79,
        "ayah": 38,
        "globalAyah": 5750,
        "surahName": "النَّازِعَاتِ",
        "words": [
          "وَءَاثَرَ",
          "ٱلْحَيَوٰةَ",
          "ٱلدُّنْيَا"
        ],
        "targetIndex": 1,
        "translation": "et aura préféré la vie présente,"
      }
    ],
    "senses": [
      {
        "meaning": "vie",
        "example": {
          "surah": 67,
          "ayah": 2,
          "globalAyah": 5243,
          "surahName": "المُلۡكِ",
          "words": [
            "ٱلَّذِى",
            "خَلَقَ",
            "ٱلْمَوْتَ",
            "وَٱلْحَيَوٰةَ",
            "لِيَبْلُوَكُمْ",
            "أَيُّكُمْ",
            "أَحْسَنُ",
            "عَمَلًا",
            "وَهُوَ",
            "ٱلْعَزِيزُ",
            "ٱلْغَفُورُ"
          ],
          "targetIndex": 3,
          "translation": "Celui qui a créé la mort et la vie afin de vous éprouver (et de savoir) qui de vous est le meilleur en œuvre, et c'est Lui le Puissant, le Pardonneur.",
          "highlight": "vie"
        }
      },
      {
        "meaning": "préservation de la vie",
        "note": "La loi du talion protège la vie en dissuadant de tuer.",
        "tafsir": "حياة آمنة",
        "example": {
          "surah": 2,
          "ayah": 179,
          "globalAyah": 186,
          "surahName": "البَقَرَةِ",
          "words": [
            "وَلَكُمْ",
            "فِى",
            "ٱلْقِصَاصِ",
            "حَيَوٰةٌ",
            "يَٰٓأُو۟لِى",
            "ٱلْأَلْبَٰبِ",
            "لَعَلَّكُمْ",
            "تَتَّقُونَ"
          ],
          "targetIndex": 3,
          "translation": "C'est dans le talion que vous aurez la préservation de la vie, ô vous doués d'intelligence, ainsi atteindrez-vous la piété.",
          "highlight": "vie"
        }
      }
    ]
  },
  {
    "id": "dhikr",
    "arabic": "ذِكْر",
    "transliteration": "dhikr",
    "meaning": "rappel ; évocation",
    "kind": "noun",
    "note": "Désigne aussi le Coran lui-même, « le Rappel », et l'évocation d'Allah.",
    "root": "ذ ك ر",
    "occurrences": 76,
    "rootOccurrences": 292,
    "pronunciation": {
      "surah": 2,
      "ayah": 200,
      "wordIndex": 9,
      "form": "ذِكْرًا"
    },
    "examples": [
      {
        "surah": 15,
        "ayah": 9,
        "globalAyah": 1811,
        "surahName": "الحِجۡرِ",
        "words": [
          "إِنَّا",
          "نَحْنُ",
          "نَزَّلْنَا",
          "ٱلذِّكْرَ",
          "وَإِنَّا",
          "لَهُۥ",
          "لَحَٰفِظُونَ"
        ],
        "targetIndex": 3,
        "translation": "En vérité c'est Nous qui avons fait descendre le Coran, et c'est Nous qui en sommes gardien."
      },
      {
        "surah": 37,
        "ayah": 3,
        "globalAyah": 3791,
        "surahName": "الصَّافَّاتِ",
        "words": [
          "فَٱلتَّٰلِيَٰتِ",
          "ذِكْرًا"
        ],
        "targetIndex": 1,
        "translation": "Par ceux qui récitent, en rappel:"
      },
      {
        "surah": 77,
        "ayah": 5,
        "globalAyah": 5627,
        "surahName": "المُرۡسَلَاتِ",
        "words": [
          "فَٱلْمُلْقِيَٰتِ",
          "ذِكْرًا"
        ],
        "targetIndex": 1,
        "translation": "et lancent un rappel"
      }
    ],
    "senses": [
      {
        "meaning": "rappel, évocation d'Allah",
        "example": {
          "surah": 29,
          "ayah": 45,
          "globalAyah": 3385,
          "surahName": "العَنكَبُوتِ",
          "words": [
            "ٱتْلُ",
            "مَآ",
            "أُوحِىَ",
            "إِلَيْكَ",
            "مِنَ",
            "ٱلْكِتَٰبِ",
            "وَأَقِمِ",
            "ٱلصَّلَوٰةَ",
            "إِنَّ",
            "ٱلصَّلَوٰةَ",
            "تَنْهَىٰ",
            "عَنِ",
            "ٱلْفَحْشَآءِ",
            "وَٱلْمُنكَرِ",
            "وَلَذِكْرُ",
            "ٱللَّهِ",
            "أَكْبَرُ",
            "وَٱللَّهُ",
            "يَعْلَمُ",
            "مَا",
            "تَصْنَعُونَ"
          ],
          "targetIndex": 14,
          "translation": "Récite ce qui t'est révélé du Livre et accomplis la Salât. En vérité la Salât préserve de la turpitude et du blâmable. Le rappel d'Allah est certes ce qu'il y a de plus grand. Et Allah sait ce que vous faites.",
          "highlight": "rappel"
        }
      },
      {
        "meaning": "le Coran",
        "example": {
          "surah": 15,
          "ayah": 9,
          "globalAyah": 1811,
          "surahName": "الحِجۡرِ",
          "words": [
            "إِنَّا",
            "نَحْنُ",
            "نَزَّلْنَا",
            "ٱلذِّكْرَ",
            "وَإِنَّا",
            "لَهُۥ",
            "لَحَٰفِظُونَ"
          ],
          "targetIndex": 3,
          "translation": "En vérité c'est Nous qui avons fait descendre le Coran, et c'est Nous qui en sommes gardien.",
          "highlight": "Coran"
        }
      },
      {
        "meaning": "renommée",
        "example": {
          "surah": 94,
          "ayah": 4,
          "globalAyah": 6094,
          "surahName": "الشَّرۡحِ",
          "words": [
            "وَرَفَعْنَا",
            "لَكَ",
            "ذِكْرَكَ"
          ],
          "targetIndex": 2,
          "translation": "Et exalté pour toi ta renommée?",
          "highlight": "renommée"
        }
      },
      {
        "meaning": "les Écritures antérieures",
        "tafsir": "بالكتب المنزلة السابقة",
        "example": {
          "surah": 21,
          "ayah": 7,
          "globalAyah": 2490,
          "surahName": "الأَنبِيَاءِ",
          "words": [
            "وَمَآ",
            "أَرْسَلْنَا",
            "قَبْلَكَ",
            "إِلَّا",
            "رِجَالًا",
            "نُّوحِىٓ",
            "إِلَيْهِمْ",
            "فَسْـَٔلُوٓا۟",
            "أَهْلَ",
            "ٱلذِّكْرِ",
            "إِن",
            "كُنتُمْ",
            "لَا",
            "تَعْلَمُونَ"
          ],
          "targetIndex": 9,
          "translation": "Nous n'avons envoyé avant toi que des hommes à qui Nous faisions des révélations. Demandez donc aux érudits du Livre, si vous ne savez pas.",
          "highlight": "érudits du Livre"
        }
      }
    ]
  },
  {
    "id": "nabiyy",
    "arabic": "نَبِيّ",
    "transliteration": "nabiyy",
    "meaning": "prophète",
    "kind": "noun",
    "note": "Racine ن ب أ : annoncer une nouvelle. Pluriels : أَنْبِيَاء anbiyāʾ et نَبِيُّون nabiyyūn.",
    "root": "ن ب أ",
    "occurrences": 75,
    "rootOccurrences": 160,
    "pronunciation": {
      "surah": 6,
      "ayah": 112,
      "wordIndex": 3,
      "form": "نَبِىٍّ"
    },
    "examples": [
      {
        "surah": 37,
        "ayah": 112,
        "globalAyah": 3900,
        "surahName": "الصَّافَّاتِ",
        "words": [
          "وَبَشَّرْنَٰهُ",
          "بِإِسْحَٰقَ",
          "نَبِيًّا",
          "مِّنَ",
          "ٱلصَّٰلِحِينَ"
        ],
        "targetIndex": 2,
        "translation": "Nous lui fîmes la bonne annonce d'Isaac comme prophète d'entre les gens vertueux."
      },
      {
        "surah": 43,
        "ayah": 6,
        "globalAyah": 4331,
        "surahName": "الزُّخۡرُفِ",
        "words": [
          "وَكَمْ",
          "أَرْسَلْنَا",
          "مِن",
          "نَّبِىٍّ",
          "فِى",
          "ٱلْأَوَّلِينَ"
        ],
        "targetIndex": 3,
        "translation": "Que de prophètes avons-Nous envoyés aux Anciens!"
      },
      {
        "surah": 19,
        "ayah": 53,
        "globalAyah": 2303,
        "surahName": "مَرۡيَمَ",
        "words": [
          "وَوَهَبْنَا",
          "لَهُۥ",
          "مِن",
          "رَّحْمَتِنَآ",
          "أَخَاهُ",
          "هَٰرُونَ",
          "نَبِيًّا"
        ],
        "targetIndex": 6,
        "translation": "Et par Notre miséricorde, Nous lui donnâmes Aaron son frère comme prophète."
      }
    ],
    "senses": [
      {
        "meaning": "prophète",
        "example": {
          "surah": 37,
          "ayah": 112,
          "globalAyah": 3900,
          "surahName": "الصَّافَّاتِ",
          "words": [
            "وَبَشَّرْنَٰهُ",
            "بِإِسْحَٰقَ",
            "نَبِيًّا",
            "مِّنَ",
            "ٱلصَّٰلِحِينَ"
          ],
          "targetIndex": 2,
          "translation": "Nous lui fîmes la bonne annonce d'Isaac comme prophète d'entre les gens vertueux.",
          "highlight": "prophète"
        }
      }
    ]
  },
  {
    "id": "insan",
    "arabic": "إِنْسَان",
    "transliteration": "insān",
    "meaning": "être humain",
    "kind": "noun",
    "note": "Racine أ ن س (familiarité), comme نَاس (les gens).",
    "root": "أ ن س",
    "occurrences": 71,
    "rootOccurrences": 338,
    "pronunciation": {
      "surah": 17,
      "ayah": 13,
      "wordIndex": 1,
      "form": "إِنسَٰنٍ"
    },
    "examples": [
      {
        "surah": 103,
        "ayah": 2,
        "globalAyah": 6178,
        "surahName": "العَصۡرِ",
        "words": [
          "إِنَّ",
          "ٱلْإِنسَٰنَ",
          "لَفِى",
          "خُسْرٍ"
        ],
        "targetIndex": 1,
        "translation": "L'homme est certes, en perdition,"
      },
      {
        "surah": 7,
        "ayah": 82,
        "globalAyah": 1036,
        "surahName": "الأَعۡرَافِ",
        "words": [
          "وَمَا",
          "كَانَ",
          "جَوَابَ",
          "قَوْمِهِۦٓ",
          "إِلَّآ",
          "أَن",
          "قَالُوٓا۟",
          "أَخْرِجُوهُم",
          "مِّن",
          "قَرْيَتِكُمْ",
          "إِنَّهُمْ",
          "أُنَاسٌ",
          "يَتَطَهَّرُونَ"
        ],
        "targetIndex": 11,
        "translation": "Et pour toute réponse, son peuple ne fit que dire: «Expulsez-les de votre cité. Ce sont des gens qui veulent se garder purs!»"
      },
      {
        "surah": 17,
        "ayah": 13,
        "globalAyah": 2042,
        "surahName": "الإِسۡرَاءِ",
        "words": [
          "وَكُلَّ",
          "إِنسَٰنٍ",
          "أَلْزَمْنَٰهُ",
          "طَٰٓئِرَهُۥ",
          "فِى",
          "عُنُقِهِۦ",
          "وَنُخْرِجُ",
          "لَهُۥ",
          "يَوْمَ",
          "ٱلْقِيَٰمَةِ",
          "كِتَٰبًا",
          "يَلْقَىٰهُ",
          "مَنشُورًا"
        ],
        "targetIndex": 1,
        "translation": "Et au cou de chaque homme, Nous avons attaché son œuvre. Et au Jour de la Résurrection, Nous lui sortirons un écrit qu'il trouvera déroulé:"
      }
    ],
    "senses": [
      {
        "meaning": "l'être humain",
        "example": {
          "surah": 103,
          "ayah": 2,
          "globalAyah": 6178,
          "surahName": "العَصۡرِ",
          "words": [
            "إِنَّ",
            "ٱلْإِنسَٰنَ",
            "لَفِى",
            "خُسْرٍ"
          ],
          "targetIndex": 1,
          "translation": "L'homme est certes, en perdition,",
          "highlight": "homme"
        }
      }
    ]
  },
  {
    "id": "quran",
    "arabic": "قُرْآن",
    "transliteration": "Qurʾān",
    "meaning": "Coran ; lecture, récitation",
    "kind": "proper",
    "note": "Nom verbal de قَرَأَ qaraʾa (lire, réciter). Le premier mot révélé est اقْرَأْ : « Lis ! ».",
    "root": "ق ر أ",
    "occurrences": 70,
    "rootOccurrences": 88,
    "pronunciation": {
      "surah": 13,
      "ayah": 31,
      "wordIndex": 2,
      "form": "قُرْءَانًا"
    },
    "examples": [
      {
        "surah": 54,
        "ayah": 17,
        "globalAyah": 4863,
        "surahName": "القَمَرِ",
        "words": [
          "وَلَقَدْ",
          "يَسَّرْنَا",
          "ٱلْقُرْءَانَ",
          "لِلذِّكْرِ",
          "فَهَلْ",
          "مِن",
          "مُّدَّكِرٍ"
        ],
        "targetIndex": 2,
        "translation": "En effet, Nous avons rendu le Coran facile pour la méditation. Y a-t-il quelqu'un pour réfléchir?"
      },
      {
        "surah": 85,
        "ayah": 21,
        "globalAyah": 5930,
        "surahName": "البُرُوجِ",
        "words": [
          "بَلْ",
          "هُوَ",
          "قُرْءَانٌ",
          "مَّجِيدٌ"
        ],
        "targetIndex": 2,
        "translation": "Mais c'est plutôt un Coran glorifié"
      },
      {
        "surah": 12,
        "ayah": 2,
        "globalAyah": 1598,
        "surahName": "يُوسُفَ",
        "words": [
          "إِنَّآ",
          "أَنزَلْنَٰهُ",
          "قُرْءَٰنًا",
          "عَرَبِيًّا",
          "لَّعَلَّكُمْ",
          "تَعْقِلُونَ"
        ],
        "targetIndex": 2,
        "translation": "Nous l'avons fait descendre, un Coran en [langue] arabe, afin que vous raisonniez."
      }
    ],
    "senses": [
      {
        "meaning": "le Coran",
        "example": {
          "surah": 54,
          "ayah": 17,
          "globalAyah": 4863,
          "surahName": "القَمَرِ",
          "words": [
            "وَلَقَدْ",
            "يَسَّرْنَا",
            "ٱلْقُرْءَانَ",
            "لِلذِّكْرِ",
            "فَهَلْ",
            "مِن",
            "مُّدَّكِرٍ"
          ],
          "targetIndex": 2,
          "translation": "En effet, Nous avons rendu le Coran facile pour la méditation. Y a-t-il quelqu'un pour réfléchir?",
          "highlight": "Coran"
        }
      },
      {
        "meaning": "récitation, lecture",
        "note": "« Qurʾān al-fajr » : la longue récitation de la prière de l'aube.",
        "tafsir": "وأَطِلِ القراءة فيها",
        "example": {
          "surah": 17,
          "ayah": 78,
          "globalAyah": 2107,
          "surahName": "الإِسۡرَاءِ",
          "words": [
            "أَقِمِ",
            "ٱلصَّلَوٰةَ",
            "لِدُلُوكِ",
            "ٱلشَّمْسِ",
            "إِلَىٰ",
            "غَسَقِ",
            "ٱلَّيْلِ",
            "وَقُرْءَانَ",
            "ٱلْفَجْرِ",
            "إِنَّ",
            "قُرْءَانَ",
            "ٱلْفَجْرِ",
            "كَانَ",
            "مَشْهُودًا"
          ],
          "targetIndex": 7,
          "translation": "Accomplis la Salât au déclin du soleil jusqu'à l'obscurité de la nuit, et [fais] aussi la Lecture à l'aube, car la Lecture à l'aube a des témoins.",
          "highlight": "Lecture"
        }
      }
    ]
  },
  {
    "id": "qiyama",
    "arabic": "قِيَامَة",
    "transliteration": "qiyāma",
    "meaning": "Résurrection",
    "kind": "noun",
    "note": "Racine ق و م (se lever) : le jour où les gens se lèveront. Yawm al-qiyāma.",
    "root": "ق و م",
    "occurrences": 70,
    "rootOccurrences": 660,
    "pronunciation": {
      "surah": 2,
      "ayah": 85,
      "wordIndex": 39,
      "form": "ٱلْقِيَٰمَةِ"
    },
    "examples": [
      {
        "surah": 75,
        "ayah": 1,
        "globalAyah": 5552,
        "surahName": "القِيَامَةِ",
        "words": [
          "لَآ",
          "أُقْسِمُ",
          "بِيَوْمِ",
          "ٱلْقِيَٰمَةِ"
        ],
        "targetIndex": 3,
        "translation": "Non!... Je jure par le Jour de la Résurrection!"
      },
      {
        "surah": 19,
        "ayah": 95,
        "globalAyah": 2345,
        "surahName": "مَرۡيَمَ",
        "words": [
          "وَكُلُّهُمْ",
          "ءَاتِيهِ",
          "يَوْمَ",
          "ٱلْقِيَٰمَةِ",
          "فَرْدًا"
        ],
        "targetIndex": 3,
        "translation": "Et au Jour de la Résurrection, chacun d'eux se rendra seul auprès de Lui."
      },
      {
        "surah": 23,
        "ayah": 16,
        "globalAyah": 2689,
        "surahName": "المُؤۡمِنُونَ",
        "words": [
          "ثُمَّ",
          "إِنَّكُمْ",
          "يَوْمَ",
          "ٱلْقِيَٰمَةِ",
          "تُبْعَثُونَ"
        ],
        "targetIndex": 3,
        "translation": "Et puis au Jour de la Résurrection vous serez ressuscités."
      }
    ],
    "senses": [
      {
        "meaning": "la Résurrection",
        "example": {
          "surah": 75,
          "ayah": 1,
          "globalAyah": 5552,
          "surahName": "القِيَامَةِ",
          "words": [
            "لَآ",
            "أُقْسِمُ",
            "بِيَوْمِ",
            "ٱلْقِيَٰمَةِ"
          ],
          "targetIndex": 3,
          "translation": "Non!... Je jure par le Jour de la Résurrection!",
          "highlight": "Résurrection"
        }
      }
    ]
  },
  {
    "id": "ma",
    "arabic": "مَاء",
    "transliteration": "māʾ",
    "meaning": "eau",
    "kind": "noun",
    "note": "« Et Nous avons fait, à partir de l'eau, toute chose vivante » (21:30).",
    "root": "م و ه",
    "occurrences": 63,
    "rootOccurrences": 63,
    "pronunciation": {
      "surah": 2,
      "ayah": 22,
      "wordIndex": 10,
      "form": "مَآءً"
    },
    "examples": [
      {
        "surah": 80,
        "ayah": 25,
        "globalAyah": 5783,
        "surahName": "عَبَسَ",
        "words": [
          "أَنَّا",
          "صَبَبْنَا",
          "ٱلْمَآءَ",
          "صَبًّا"
        ],
        "targetIndex": 2,
        "translation": "C'est Nous qui versons l'eau abondante,"
      },
      {
        "surah": 86,
        "ayah": 6,
        "globalAyah": 5937,
        "surahName": "الطَّارِقِ",
        "words": [
          "خُلِقَ",
          "مِن",
          "مَّآءٍ",
          "دَافِقٍ"
        ],
        "targetIndex": 2,
        "translation": "Il a été créé d'une giclée d'eau"
      },
      {
        "surah": 77,
        "ayah": 20,
        "globalAyah": 5642,
        "surahName": "المُرۡسَلَاتِ",
        "words": [
          "أَلَمْ",
          "نَخْلُقكُّم",
          "مِّن",
          "مَّآءٍ",
          "مَّهِينٍ"
        ],
        "targetIndex": 3,
        "translation": "Ne vous avons-Nous pas créés d'une eau vile"
      }
    ],
    "senses": [
      {
        "meaning": "eau",
        "example": {
          "surah": 80,
          "ayah": 25,
          "globalAyah": 5783,
          "surahName": "عَبَسَ",
          "words": [
            "أَنَّا",
            "صَبَبْنَا",
            "ٱلْمَآءَ",
            "صَبًّا"
          ],
          "targetIndex": 2,
          "translation": "C'est Nous qui versons l'eau abondante,",
          "highlight": "eau"
        }
      },
      {
        "meaning": "liquide séminal",
        "example": {
          "surah": 86,
          "ayah": 6,
          "globalAyah": 5937,
          "surahName": "الطَّارِقِ",
          "words": [
            "خُلِقَ",
            "مِن",
            "مَّآءٍ",
            "دَافِقٍ"
          ],
          "targetIndex": 2,
          "translation": "Il a été créé d'une giclée d'eau",
          "highlight": "giclée d'eau"
        }
      }
    ]
  },
  {
    "id": "sabara",
    "arabic": "صَبَرَ",
    "transliteration": "ṣabara",
    "meaning": "il a patienté ; être patient",
    "kind": "verb",
    "note": "Le nom صَبْر ṣabr (patience, endurance) est une vertu centrale du Coran.",
    "root": "ص ب ر",
    "occurrences": 58,
    "rootOccurrences": 103,
    "pronunciation": {
      "surah": 42,
      "ayah": 43,
      "wordIndex": 1,
      "form": "صَبَرَ"
    },
    "examples": [
      {
        "surah": 76,
        "ayah": 12,
        "globalAyah": 5603,
        "surahName": "الإِنسَانِ",
        "words": [
          "وَجَزَىٰهُم",
          "بِمَا",
          "صَبَرُوا۟",
          "جَنَّةً",
          "وَحَرِيرًا"
        ],
        "targetIndex": 2,
        "translation": "et les rétribuera pour ce qu'ils auront enduré, en leur donnant le Paradis et des [vêtements] de soie,"
      },
      {
        "surah": 18,
        "ayah": 68,
        "globalAyah": 2208,
        "surahName": "الكَهۡفِ",
        "words": [
          "وَكَيْفَ",
          "تَصْبِرُ",
          "عَلَىٰ",
          "مَا",
          "لَمْ",
          "تُحِطْ",
          "بِهِۦ",
          "خُبْرًا"
        ],
        "targetIndex": 1,
        "translation": "Comment endurerais-tu sur des choses que tu n'embrasses pas par ta connaissance?»"
      },
      {
        "surah": 42,
        "ayah": 43,
        "globalAyah": 4315,
        "surahName": "الشُّورَىٰ",
        "words": [
          "وَلَمَن",
          "صَبَرَ",
          "وَغَفَرَ",
          "إِنَّ",
          "ذَٰلِكَ",
          "لَمِنْ",
          "عَزْمِ",
          "ٱلْأُمُورِ"
        ],
        "targetIndex": 1,
        "translation": "Et celui qui endure et pardonne, cela en vérité, fait partie des bonnes dispositions et de la résolution dans les affaires."
      }
    ],
    "senses": [
      {
        "meaning": "être patient, endurer",
        "example": {
          "surah": 76,
          "ayah": 12,
          "globalAyah": 5603,
          "surahName": "الإِنسَانِ",
          "words": [
            "وَجَزَىٰهُم",
            "بِمَا",
            "صَبَرُوا۟",
            "جَنَّةً",
            "وَحَرِيرًا"
          ],
          "targetIndex": 2,
          "translation": "et les rétribuera pour ce qu'ils auront enduré, en leur donnant le Paradis et des [vêtements] de soie,",
          "highlight": "endur"
        }
      },
      {
        "meaning": "supporter (quelque chose de pénible)",
        "tafsir": "الصبر",
        "example": {
          "surah": 18,
          "ayah": 68,
          "globalAyah": 2208,
          "surahName": "الكَهۡفِ",
          "words": [
            "وَكَيْفَ",
            "تَصْبِرُ",
            "عَلَىٰ",
            "مَا",
            "لَمْ",
            "تُحِطْ",
            "بِهِۦ",
            "خُبْرًا"
          ],
          "targetIndex": 1,
          "translation": "Comment endurerais-tu sur des choses que tu n'embrasses pas par ta connaissance?»",
          "highlight": "endurer"
        }
      }
    ]
  },
  {
    "id": "nahar",
    "arabic": "نَهَار",
    "transliteration": "nahār",
    "meaning": "jour (le temps diurne)",
    "kind": "noun",
    "note": "S'oppose à لَيْل (nuit). يَوْم désigne plutôt le jour comme unité de temps.",
    "root": "ن ه ر",
    "occurrences": 57,
    "rootOccurrences": 113,
    "pronunciation": {
      "surah": 10,
      "ayah": 24,
      "wordIndex": 31,
      "form": "نَهَارًا"
    },
    "examples": [
      {
        "surah": 91,
        "ayah": 3,
        "globalAyah": 6046,
        "surahName": "الشَّمۡسِ",
        "words": [
          "وَٱلنَّهَارِ",
          "إِذَا",
          "جَلَّىٰهَا"
        ],
        "targetIndex": 0,
        "translation": "Et par le jour quand il l'éclaire!"
      },
      {
        "surah": 10,
        "ayah": 50,
        "globalAyah": 1414,
        "surahName": "يُونُسَ",
        "words": [
          "قُلْ",
          "أَرَءَيْتُمْ",
          "إِنْ",
          "أَتَىٰكُمْ",
          "عَذَابُهُۥ",
          "بَيَٰتًا",
          "أَوْ",
          "نَهَارًا",
          "مَّاذَا",
          "يَسْتَعْجِلُ",
          "مِنْهُ",
          "ٱلْمُجْرِمُونَ"
        ],
        "targetIndex": 7,
        "translation": "Dis: «Voyez-vous! Si Son châtiment vous arrivait de nuit ou de jour, les criminels pourraient-ils en hâter quelque chose?"
      },
      {
        "surah": 78,
        "ayah": 11,
        "globalAyah": 5683,
        "surahName": "النَّبَإِ",
        "words": [
          "وَجَعَلْنَا",
          "ٱلنَّهَارَ",
          "مَعَاشًا"
        ],
        "targetIndex": 1,
        "translation": "et assigné le jour pour les affaires de la vie,"
      }
    ],
    "senses": [
      {
        "meaning": "jour (le temps de clarté)",
        "example": {
          "surah": 91,
          "ayah": 3,
          "globalAyah": 6046,
          "surahName": "الشَّمۡسِ",
          "words": [
            "وَٱلنَّهَارِ",
            "إِذَا",
            "جَلَّىٰهَا"
          ],
          "targetIndex": 0,
          "translation": "Et par le jour quand il l'éclaire!",
          "highlight": "jour"
        }
      }
    ]
  },
  {
    "id": "rahman",
    "arabic": "رَحْمَٰن",
    "transliteration": "raḥmān",
    "meaning": "le Tout Miséricordieux",
    "kind": "adjective",
    "note": "Schème فَعْلَان (faʿlān) : une miséricorde débordante. Donne son nom à la sourate Ar-Raḥmān.",
    "root": "ر ح م",
    "occurrences": 57,
    "rootOccurrences": 339,
    "pronunciation": {
      "surah": 1,
      "ayah": 1,
      "wordIndex": 2,
      "form": "ٱلرَّحْمَٰنِ"
    },
    "examples": [
      {
        "surah": 55,
        "ayah": 1,
        "globalAyah": 4902,
        "surahName": "الرَّحۡمَٰن",
        "words": [
          "ٱلرَّحْمَٰنُ"
        ],
        "targetIndex": 0,
        "translation": "Le Tout Miséricordieux."
      },
      {
        "surah": 1,
        "ayah": 3,
        "globalAyah": 3,
        "surahName": "ٱلْفَاتِحَةِ",
        "words": [
          "ٱلرَّحْمَٰنِ",
          "ٱلرَّحِيمِ"
        ],
        "targetIndex": 0,
        "translation": "Le Tout Miséricordieux, le Très Miséricordieux,"
      },
      {
        "surah": 19,
        "ayah": 88,
        "globalAyah": 2338,
        "surahName": "مَرۡيَمَ",
        "words": [
          "وَقَالُوا۟",
          "ٱتَّخَذَ",
          "ٱلرَّحْمَٰنُ",
          "وَلَدًا"
        ],
        "targetIndex": 2,
        "translation": "Et ils ont dit: «Le Tout Miséricordieux S'est attribué un enfant!»"
      }
    ],
    "senses": [
      {
        "meaning": "le Tout Miséricordieux (Allah)",
        "example": {
          "surah": 55,
          "ayah": 1,
          "globalAyah": 4902,
          "surahName": "الرَّحۡمَٰن",
          "words": [
            "ٱلرَّحْمَٰنُ"
          ],
          "targetIndex": 0,
          "translation": "Le Tout Miséricordieux.",
          "highlight": "Miséricordieux"
        }
      }
    ]
  }
]
