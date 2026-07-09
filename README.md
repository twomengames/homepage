# TwoMenGames homepage

Static company and game studio homepage for TwoMenGames.

## Local preview

No package install is required.

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`.

## Build

There is no build step. The site is plain static HTML, CSS, JavaScript, images, and JSON content.

## Deploy

Push changes to the GitHub Pages branch used by this repository:

```powershell
git push origin master
```

GitHub Pages serves the static files directly. Cloudflare or browser caches may take a short time to refresh after deployment.

## Notices and disclosures

The notice system is intentionally static. It does not use login, signup, comments, a database, an admin page, CMS, forms, upload, sessions, JWT, OAuth, Firebase, Supabase, WordPress, or any visitor input storage.

Pages:

- `/notices/` shows the notice list.
- `/notices/detail.html?slug=website-open` shows a notice detail page.

Data files:

- `content/notices/manifest.json`
- `content/notices/ko/<slug>.json`
- `content/notices/en/<slug>.json`

## Add a new notice

1. Choose a stable lowercase slug, for example `steam-demo-notice`.
2. Add the slug to `content/notices/manifest.json`.
3. Create a Korean file at `content/notices/ko/steam-demo-notice.json`.
4. Create an English file at `content/notices/en/steam-demo-notice.json`.
5. Preview locally at `/notices/`.

Korean example:

```json
{
  "slug": "steam-demo-notice",
  "title": "Steam 데모 공개 안내",
  "date": "2026-07-09",
  "category": "공지",
  "summary": "Steam 데모 공개와 관련된 짧은 안내입니다.",
  "body": [
    "TwoMenGames는 Steam 데모와 관련된 안내를 공식 홈페이지에 게시합니다.",
    "자세한 일정과 내용은 내부 확인 후 확정된 문구로 업데이트됩니다."
  ]
}
```

English example:

```json
{
  "slug": "steam-demo-notice",
  "title": "Steam Demo Notice",
  "date": "2026-07-09",
  "category": "Notice",
  "summary": "A short notice about a Steam demo.",
  "body": [
    "TwoMenGames publishes Steam demo updates on the official website.",
    "Detailed timing and content will be updated after internal confirmation."
  ]
}
```

The list is sorted by `date` in descending order.

## Contact policy

The homepage keeps the existing email-based contact structure. There is no inquiry board or inquiry form. Visitors contact TwoMenGames through the displayed email link or public official channels only.

## Privacy and email policy pages

Static pages are available at:

- `/privacy.html`
- `/email-rejection.html`

They state that the site does not provide member accounts, comments, inquiry forms, cookies for membership tracking, or visitor input storage.
