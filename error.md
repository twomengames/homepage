# Error Log

## 2026-05-06 GitHub Pages stale deploy after Cloudflare purge
- Situation: Cloudflare cache purge completed, but twomengames.com still served old files.
- Cause: GitHub Pages deployment for the latest commit failed/cancelled because GitHub did not acquire a hosted runner.
- Fix: Force a new Pages deployment with a new commit, add `.nojekyll`, and version the `script.js` URL so edge/browser caches fetch the new script.

## 2026-05-06 Notion 도구 미노출

- 상황: Notion 플러그인 설치는 완료됐지만 `tool_search`에서 Notion 페이지 생성/수정 도구가 검색되지 않음.
- 영향: 현재 턴에서 Notion 워크스페이스에 직접 페이지를 생성할 수 없음.
- 대응: Notion에 바로 붙여넣을 수 있는 홈페이지 본문을 로컬 Markdown으로 작성.
- 재시도 방법: Notion 도구가 노출되는 새 세션에서 같은 본문을 사용해 페이지 생성.
