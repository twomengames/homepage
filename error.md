# Error Log

## 2026-06-13 Publisher/publishing copy removal
- Situation: Publisher/publishing proposal wording can remain in both static fallback HTML and `script.js` i18n strings.
- Prevention: Search both `index.html` and `script.js` for Korean and English variants before and after edits.
- Deploy note: This static site has prior stale GitHub Pages behavior, so push a new commit to `origin/master` after verification.

## 2026-06-13 GitHub push account mismatch
- Situation: `git push origin master` failed with `Permission to twomengames/homepage.git denied to leegunsoodev`.
- Cause: GitHub CLI/keyring had both `leegunsoodev` and `twomengames`, but `leegunsoodev` was the active account for HTTPS git operations.
- Fix: Run `gh auth switch -h github.com -u twomengames`, confirm `gh auth status`, then push again.

## 2026-07-09 Game title text update
- Situation: Old game title appears both in visible HTML and `script.js` i18n copy.
- Prevention: Search `index.html`, `script.js`, and `notion-twomengames-homepage.md`; do not rewrite image file paths or Steam URL slugs when the request says image-based content should stay.
- Deploy note: Bump the `script.js` query string so cached pages fetch the updated title copy.

## 2026-05-06 GitHub Pages stale deploy after Cloudflare purge
- Situation: Cloudflare cache purge completed, but twomengames.com still served old files.
- Cause: GitHub Pages deployment for the latest commit failed/cancelled because GitHub did not acquire a hosted runner.
- Fix: Force a new Pages deployment with a new commit, add `.nojekyll`, and version the `script.js` URL so edge/browser caches fetch the new script.

## 2026-05-06 Notion 도구 미노출

- 상황: Notion 플러그인 설치는 완료됐지만 `tool_search`에서 Notion 페이지 생성/수정 도구가 검색되지 않음.
- 영향: 현재 턴에서 Notion 워크스페이스에 직접 페이지를 생성할 수 없음.
- 대응: Notion에 바로 붙여넣을 수 있는 홈페이지 본문을 로컬 Markdown으로 작성.
- 재시도 방법: Notion 도구가 노출되는 새 세션에서 같은 본문을 사용해 페이지 생성.
