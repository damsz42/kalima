const SOURCES = [
  { label: 'Quranic Arabic Corpus (Université de Leeds)', href: 'https://corpus.quran.com' },
  { label: 'Texte ʿuthmānī : Tanzil', href: 'https://tanzil.net' },
  { label: 'Traduction : Muhammad Hamidullah', href: 'https://alquran.cloud' },
  { label: 'Vérification des sens : Saheeh International', href: 'https://alquran.cloud' },
  { label: 'Exégèse : Tafsir al-Muyassar', href: 'https://quran.com' },
  { label: 'Audio : quran.com et Mishary Alafasy', href: 'https://quran.com' },
]

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-2 px-4 py-6 text-xs text-muted-foreground">
        <p>
          Fréquences : nombre d'occurrences du lemme dans le Coran, d'après l'analyse
          morphologique du Quranic Arabic Corpus. Les traductions sont des interprétations du
          sens et ne remplacent pas le texte arabe.
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {SOURCES.map((source) => (
            <li key={source.label}>
              <a
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-foreground"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
