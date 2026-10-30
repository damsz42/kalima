# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Kalima (كَلِمَة) teaches one of the most frequent Quranic Arabic words each day. It is a static app built with Vite, React 19, TypeScript 6, Tailwind CSS v4 and shadcn/ui (style `radix-nova`). Progress is stored in `localStorage` under `kalima:progress`. An optional Google account (Supabase) syncs it across devices; see "Account and sync". All UI text, comments and test names are in **French**, and new code should be too.

## Commands

```bash
npm run dev                        # Vite dev server, http://localhost:5173
npm run build                      # tsc -b && vite build
npm run lint                       # ESLint
npm test                           # Vitest, single run (src/**/*.test.ts)
npm run test:watch                 # Vitest in watch mode
npm run preview                    # serve the production build from dist/
npx vitest run src/lib/date.test.ts          # one test file
npx vitest run -t "computeStreak"            # tests whose name matches
npm run generate:words             # regenerate src/data/words.ts
npx shadcn@latest add <component> -y < /dev/null   # add a shadcn component non-interactively
```

On this machine, Node is installed at `C:\Program Files\nodejs`, and shells started before installation may not have it on PATH. In Git Bash, prefix commands with `export PATH="/c/Program Files/nodejs:$PATH";`. The GitHub CLI is at `C:\Program Files\GitHub CLI\gh.exe` and may not be on PATH either.

## Repository and deployment

- The repo is `damsz42/kalima` on GitHub (public), default branch `main`. The user also works from the Claude Code cloud/iPhone app, which pushes `claude/*` branches and opens PRs. Run `git pull` before working locally.
- On the user's PC only, global hooks in `~/.claude/settings.json` (scripts in `~/.claude/hooks/`, outside the repo) sync every git repo that has a remote, unless it contains `.claude/no-sync`. Here they sync automatically: `git pull --ff-only` at session start and on every prompt; at the end of every turn, if the tree is dirty and `npm test` passes, `git add -A`, commit and push to the current branch, which redeploys the site when it is `main`. Do not commit or push by hand there. Leave the tree in a working state at the end of each turn, since any change that passes the tests is published. Cloud sessions do not have these hooks.
- Every push to `main` runs `.github/workflows/deploy.yml`: `npm ci`, `npm test`, `npm run build`, then publishes `dist/` to GitHub Pages at https://damsz42.github.io/kalima/. A failing test blocks the deploy.
- The site lives in a subfolder, so `vite.config.ts` sets `base: './'`. Root-absolute paths in `index.html` (`/favicon.svg`…) are rewritten by Vite at build time, but paths in app code are not: reference public assets through `import.meta.env.BASE_URL` or imports, never a hard-coded `/…`.
- The app is installable on iPhone via Safari's "Sur l'écran d'accueil": `index.html` holds the `apple-mobile-web-app-*` meta tags and `public/manifest.webmanifest`. iOS ignores SVG icons, hence `public/apple-touch-icon.png` (180×180). There is no service worker, so the app needs a connection.
- Without an account, progress stays per browser (`localStorage`). Signing in with Google shares it across devices and across both sites.
- The app is also published on Netlify at https://kalima-damsz42.netlify.app, only when the user asks, never automatically. The `publier-netlify` skill (`.claude/skills/publier-netlify/SKILL.md`) does it with Netlify CLI: tests, build, `netlify deploy --prod --no-build --dir=dist --site kalima-damsz42`, then a check that the site answers 200 (a 401 means Netlify visitor access protection is on). The Netlify login exists on the PC only, and `.netlify/` is gitignored.

## Architecture

**Daily word selection** (`src/lib/daily-word.ts` and `src/lib/date.ts`):

- The index is the number of local calendar days since `2026-01-01`, modulo `WORDS.length`. It is computed via `Date.UTC` on local date parts, so it is safe across DST changes.
- `WORDS` is sorted by frequency, so day 0 shows the most frequent word.
- `useToday` re-renders at local midnight and when the tab becomes visible again.
- Dates move around as `AAAA-MM-JJ` string keys (`toDateKey`, `addDays`). They compare lexicographically.

**Word data is generated. Never hand-edit `src/data/words.ts`.** To change words:

1. Edit `scripts/curated-words.json`. Each entry holds a corpus lemma string, a verse `ref` containing that lemma, the French meaning, transliteration, `kind`, note, and `senses`.
2. Run `npm run generate:words`.

What the generator (`scripts/generate-words.mjs`) does:

- Downloads its sources, cached in `node_modules/.cache/kalima/`:
  - the Quranic Arabic Corpus morphology, in its corrected mustafa0x/quran-morphology version;
  - the Hamidullah French and Saheeh International English translations from api.alquran.cloud;
  - the Tafsir al-Muyassar from api.quran.com, only for the verses cited by a `senses` entry with a `tafsir` field.
- Computes lemma and root occurrence counts.
- Builds `examples`: the curated `ref` first, then 2 short verses picked automatically from other surahs (`EXAMPLE_COUNT`, `MAX_EXAMPLE_LENGTH`). Each one holds the Uthmani verse words and `targetIndex`, the position of the word in the verse.
- Picks `pronunciation`, the occurrence used by "Écouter la prononciation". It prefers the bare word, with no prefix or suffix and the same consonant skeleton as `arabic`, then the word with only the article ٱل.
- Throws if a lemma or a word-in-verse is not found.
- Verifies every entry of `senses` (the meanings the word takes in the Quran), and throws on any failure:
  - `ref` must contain the lemma;
  - `fr` must appear in the Hamidullah translation of that verse (it becomes `highlight`, emphasized in the UI and masked in the quiz);
  - `en` must appear in the Saheeh International translation;
  - the optional `tafsir` must appear in the Tafsir al-Muyassar (api.quran.com resource 16, cached per verse in `node_modules/.cache/kalima/tafsir/`). Use it for senses that come from exegesis rather than from the translations, e.g. رَحْمَة = rain in 7:57.
  - Never add a sense without a verse that passes these checks.

Two details are non-obvious:

- Lemmas are compared after NFC normalization, because shadda and vowel ordering differ between sources.
- Words containing the lemma `إِذ` (compounds like يَوْمَئِذٍ) are excluded from all counts. This makes the numbers match corpus.quran.com (e.g. يَوْم = 405).

`src/data/words.test.ts` checks data integrity.

**Pure logic lives in `src/lib/`** and is unit-tested:

- `leitner.ts`: boxes with intervals 1/2/4/7/15/30 days.
- `progress.ts`: `progressReducer` with the actions `introduce` / `complete-activity` / `review` / `reset`, plus `computeStreak` and `isProgressState`, which validates stored JSON.
- `quiz.ts`: `buildChoices` (deduplicates options by a key, tries `priority` candidates first) and the question builders described under Activities.
- `random.ts`: seeded mulberry32, `shuffle` and `sample`.

**Progress state** is a React context in `src/features/progress/`, split into three files: context, provider and `useProgress` hook. The split satisfies the `react-refresh/only-export-components` rule. `App` dispatches `introduce` for today's word, so the word enters review from the next day. `ReviewPanel` excludes the current word.

**Activities** (`src/features/activities/`):

- Each activity is a component taking `ActivityProps` (`word`, `seed`, `onComplete`, `onRetry`).
- `QuizRunner` (`quiz-runner.tsx`) runs a series of `QuizQuestion`s, a union discriminated by `kind`. It shows a correction after each answer and a summary at the end. Adding a question kind means updating the union in `lib/quiz.ts`, `ARABIC_CHOICE_KINDS` if its options are Arabic, and the `switch` statements and `KIND_LABELS` in `quiz-runner.tsx`.
- The questions come from the pure builders in `lib/quiz.ts`:
  - `buildWordQuiz` for the Quiz tab: meaning, Arabic spelling, pronunciation, root, two sense-in-context questions (other senses of the same word are the preferred distractors), then a missing word in an example verse;
  - `buildListeningQuiz` for the Écoute tab: one question per example verse.
- Distractor meanings that share a significant word with the answer are dropped (`distinctMeanings`), so that no distractor is also correct (e.g. « Coran » for ذِكْر meaning « le Coran »).
- The Verset tab walks through every example verse.
- Each one is registered in `activity-registry.ts`. Adding an activity means adding its id to `ACTIVITY_IDS` in `lib/progress.ts` and an entry in the registry.
- `ActivityRunner` handles retries:
  - It remounts the activity with `key={attempt}`.
  - It passes `seed = "${today}:${activityId}:${attempt}"`, so quiz options stay stable within a day but change on retry.
- Radix `TabsContent` unmounts inactive tabs, so switching tabs resets an in-progress activity.

**Account and sync** (`src/lib/supabase.ts`, `src/features/account/`):

- Supabase project `fotaspvzhgrzhoaoqzrh` (EU). The URL and publishable key are public and live in `lib/supabase.ts`. The table `progress` (one JSON row per user, RLS) and the `delete_user()` function are defined in `supabase/schema.sql`, run by hand in the dashboard SQL Editor.
- Sign-in is Google only, with `flowType: 'implicit'`: PKCE stores a verifier before the redirect, which breaks when the iPhone home-screen app and Safari do not share storage. Google's authorized redirect URI is the Supabase callback; the site URLs are allowed in Supabase's URL Configuration.
- The account is optional. `AccountSection` (in the progress card) shows sign-in, sync status, sign-out and account deletion. Signing out or deleting the account keeps the local progress.
- `useSync` fetches the remote copy, merges it with `mergeProgress`, then writes whichever side changed (`replace` action locally, upsert remotely). It runs 2 s after each change, when the tab becomes visible and when the connection returns.
- `mergeProgress` unions activity days and keeps, per word, the most recently reviewed card. `reset` stamps `resetAt`; a newer `resetAt` wins over the other side entirely, so a reset applies to every device. Results are key-sorted so `sameProgress` can compare them.
- `public/confidentialite.html` is the privacy page required by Google's OAuth consent screen.

**Audio** comes from external CDNs and is derived from verse coordinates in `src/lib/audio.ts`:

- Word-by-word audio from `audio.qurancdn.com/wbw/SSS_AAA_WWW.mp3`. `WWW` is `wordIndex + 1`, and the corpus word numbering matches quran.com's. `word.pronunciation` (the hero button and the quiz pronunciation question) is played through `wordAudioUrl` directly. A word inside a verse is played with `{ ...example, wordIndex: example.targetIndex }`.
- Full-verse audio from `cdn.islamic.network`, using `globalAyah`.

## Conventions and gotchas

- **Imports.** shadcn components import `cn` from the `cn` npm package. It is the official shadcn-ui utility, a replacement for clsx and tailwind-merge. App code imports it from `@/lib/utils`, which re-exports it.
- **Arabic text.** Always render Arabic through `<ArabicText>` (`src/components/arabic-text.tsx`). It sets `lang="ar"`, `dir="rtl"` and the font: `font-arabic` (Amiri), or `font-quran` (Amiri Quran) with the `quranic` prop for Uthmani verse text.
  - It appends `leading-[1.9]` after `className` on purpose: tailwind-merge drops a `leading-*` that precedes a `text-*` size, and the diacritics then get clipped.
  - To override the line height, use the important modifier, e.g. `leading-[1.4]!`.
  - Render verses with `VerseText` and their translations with `TranslationText` (`src/components/verse-text.tsx`). `VerseText` highlights the target word or replaces it with a blank. `TranslationText` emphasizes or masks a `highlight` passage.
  - Mixed strings like « ص - ل - و » can display in reverse depending on the surrounding bidi context. Render root letters as separate spans in an RTL flex box (`RootText` in `quiz-runner.tsx`, letters in `root-card.tsx`).
- **Theme.** Fonts and color tokens are defined in `src/index.css`: `--font-arabic`, `--font-quran`, and a teal `--primary` in both light and dark.
- **Formatting.** `.prettierrc.json`: no semicolons, single quotes, `printWidth` 100. `.prettierignore` excludes generated code (`src/components/ui/`, `src/data/words.ts`). Prettier is not a dependency and there is no format script.
- **Path alias.** `@/` maps to `src/`. It is configured in `vite.config.ts` (`import.meta.dirname`) and in both tsconfig files, using `paths` without `baseUrl`, which is deprecated in TS 6.
- **Generated UI components.** `src/components/ui/` contains shadcn-generated code. ESLint's fast-refresh rule is disabled there. Prefer regenerating with the shadcn CLI over editing these files by hand.
- **Known dev-only warning.** The console shows "Encountered a script tag while rendering React component". It comes from `next-themes` under React 19, which `ThemeProvider` and the shadcn `sonner` toaster use. It is harmless.
