# Research

## 2026-05-06 Notion 법인 회사 홈페이지 제작

- 목표: Notion 공개 페이지로 사용할 수 있는 법인 회사 홈페이지 초안 제작.
- 현재 폴더에는 기존 홈페이지/기획 문서가 없고 `.git`만 확인됨.
- Notion 직접 생성 도구는 설치 요청이 완료됐지만 현재 세션 도구 목록에 페이지 생성 API가 노출되지 않음.
- 따라서 우선 Notion에 바로 옮길 수 있는 문서형 홈페이지 원고를 로컬 파일로 제작함.

## Notion 페이지 구성 기준

- 첫 화면에서 회사명, 핵심 한 줄 소개, 문의 버튼 역할의 연락처를 바로 노출.
- 법인 홈페이지에 기본적으로 필요한 신뢰 요소: 사업 영역, 강점, 진행 절차, 회사 정보, 문의.
- Notion 공개 페이지 특성상 과도한 디자인보다 명확한 섹션, 짧은 문장, 표 형태의 회사 정보를 우선.
- 회사명/업종/연락처가 아직 제공되지 않았으므로 교체 가능한 플레이스홀더를 사용.

## 2026-05-06 TwoMenGames 홈페이지 제작

- 목표: TwoMenGames 공식 홈페이지 제작.
- 용도: 회사 소개, 게임 쇼케이스, 정부 창업지원 신청, 퍼블리셔/비즈니스 문의.
- 회사 위치: Seoul, Korea.
- 메인 게임: LEGENDARY LUCK DICE / Spawner Hunter.
- 플랫폼: PC Steam. 모바일 게임처럼 보이지 않아야 함.
- 스타일: modern indie game studio, dark fantasy, clean professional, teal/gold accents, cinematic.
- 필수 섹션: Hero, About, Game, Screenshot Gallery, Steam CTA, Contact, Footer.
- 현재 실제 스크린샷/로고 원본 파일은 제공되지 않았으므로 웹페이지에는 교체 가능한 시네마틱 비주얼 플레이스홀더를 사용함.
- Notion 직접 편집 도구는 여전히 노출되지 않아 Notion용 Markdown 원고와 실제 정적 웹페이지를 함께 제작함.

## 2026-05-06 게임소개 PDF 반영

- 원본: `C:\Users\star9\Downloads\허브멤버스_투맨게임즈_.pdf`.
- 추출 방식: 작업 폴더에 임시 복사 후 `pypdf`로 텍스트 추출.
- 홈페이지 반영 대상:
  - 게임 한줄 정의: 3D 액션성과 운 요소를 결합한 스테이지 기반 로그라이크 슈팅 게임.
  - 시장 포지션: Vampire Survivors + Risk of Rain 2 + Returnal 스타일의 확장형 장르.
  - 핵심 경쟁력: 3D 탄막 슈팅과 액션 이동, 운빨주사위 기반 폭발 성장, 짧은 세션형 스테이지 클리어.
  - 차별점: 3D 공간, Z축 이동, 점프/대시, 자동 공격으로 회피와 포지셔닝 집중.
  - 반복 플레이: 6~15분 세션, 레벨업-선택-덱빌딩-성장-보스 클리어 루프.
  - 개발 상태: 핵심 콘텐츠 약 90% 및 주요 콘텐츠 개발 완료 상태, 2026년 6~7월 Steam 출시 예정.
  - 콘텐츠 규모: 무기 24종, 강화칩 13종, 패시브 아이템 43종, 플레이어 캐릭터 9종, 메인맵 6종, 보너스맵 5종, 보스 7종, 6개국어 번역 완료.
  - 공개 링크: Steam 페이지와 YouTube 트레일러 링크.
- 제외 대상:
  - 개인 휴대폰 번호.
  - 파트너십 데모 다운로드 링크.
  - 공개 홈페이지 방향성과 충돌할 수 있는 `레트로` 표현.

## 2026-05-06 한국어/영어 자동 언어 전환

- 요구사항: OS/브라우저 기본 언어가 한국어면 한국어, 영어면 영어로 표시. 사용자가 한국어/영어를 수동 선택 가능해야 함.
- 구현 방식:
  - HTML 텍스트 요소에 `data-i18n` 키를 부여.
  - `script.js`에 `en`, `ko` 번역 딕셔너리를 두고 `textContent`로 적용.
  - 첫 진입 시 `navigator.language` / `navigator.languages`가 `ko`로 시작하면 한국어, 아니면 영어.
  - 사용자가 언어 버튼을 누르면 `localStorage.twomengames-lang`에 저장하여 다음 방문에도 유지.
  - `document.documentElement.lang`도 선택 언어에 맞게 변경.

## 2026-05-06 실제 로고/스크린샷 자산 추가

- 원본 폴더: `F:\홈페이지디자인파일`.
- 복사 위치: `assets/`.
- 회사 로고:
  - `twomengames-logo-dark.png`
  - `twomengames-logo-light.png`
- 게임 로고:
  - `legendary-luck-dice-logo.png`
- 게임 스크린샷:
  - `screenshot-boss-eye.jpg`
  - `screenshot-angel-pig.jpg`
  - `screenshot-fire-canyon.jpg`
  - `screenshot-rooftop-wave.jpg`
  - `screenshot-dice-field.jpg`
  - `screenshot-garden-boss.jpg`
- 반영 위치:
  - 히어로 배경: 실제 보스 전투 스크린샷.
  - 히어로 타이틀: 게임 로고 이미지.
  - 헤더 브랜드: 회사 로고.
  - 게임 쇼케이스/갤러리: 실제 게임 스크린샷.

## 2026-05-06 로고 크기/헤더 레이아웃 수정

- 요청: 회사 로고가 너무 크게 표시되어 헤더/히어로를 덮는 문제 수정.
- 새 원본:
  - `F:\홈페이지디자인파일\Game_LOGO.png`
  - `F:\홈페이지디자인파일\light_company_log.png`
- 적용:
  - 기존 `assets/legendary-luck-dice-logo.png`를 새 게임 로고로 교체.
  - 기존 회사 로고 파일을 새 `light_company_log.png` 기준으로 교체.
  - 헤더 높이: desktop 72px, mobile 64px.
  - 헤더 회사 로고: desktop height 48px / max-width 160px, mobile height 36px / max-width 120px.
  - `object-fit: contain`으로 비율 유지.
  - 모바일에서도 `.site-header`를 `display: flex`로 유지해 로고가 페이지를 밀거나 덮지 않도록 함.
  - 회사 로고는 헤더와 갤러리 로고 스트립에만 사용, 히어로에는 게임 로고와 게임 스크린샷 배경만 사용.

## 2026-05-06 스크린샷 캡션 제거

- 요청: 스크린샷 위에 표시되는 한글 설명/라벨 제거.
- 적용:
  - `index.html`의 `scene-label` / `scene-title` 오버레이 마크업 제거.
  - `styles.css`의 캡션 위치 스타일 제거.
  - `script.js`의 캡션 번역 키 제거.
- 스크린샷 원본 안에 포함된 게임 UI 텍스트는 이미지 자체의 일부라 유지.

## 2026-05-06 비즈니스 섹션 문구 및 소셜 링크 추가

- 요청: `퍼블리셔 및 지원사업용` 문구가 사이트 목적을 좁혀 보이므로 자연스럽게 수정.
- 적용 문구:
  - EN: `Partnership & Business`
  - KO: `파트너십 및 비즈니스`
- 목적: 퍼블리셔/투자/지원사업만을 위한 사이트처럼 보이지 않게, 스튜디오와 게임을 소개하는 공식 홈페이지 톤으로 정리.
- 추가 링크:
  - Discord: `https://discord.com/channels/1492011396039180450/1492015751366709481`
  - TikTok: `https://www.tiktok.com/@twomengames`
  - YouTube: `https://www.youtube.com/@twomengames-v3h`

## 2026-05-06 Korean copy V2 and gallery logo cleanup

- 요청: 한국어 카피를 더 자연스럽고 전문적인 PC Steam 인디 게임 스튜디오 톤으로 정리.
- 추가 요구: 스크린샷 갤러리 아래 회사 로고/게임 로고 썸네일 제거.
- 적용:
  - 한국어 히어로 슬로건을 `끝내기 전에 한 판 더`로 교체.
  - About 한국어 문구를 반복 플레이 중심 스튜디오 소개로 교체.
  - 비즈니스 섹션 한국어 문구를 요청 문구로 교체.
  - 문의 섹션 한국어 제목/설명을 요청 문구로 교체.
  - `logo-strip` HTML/CSS 제거.
  - 갤러리 하단 간격을 충분히 확보해 스크린샷 쇼케이스가 깔끔하게 끝나도록 조정.

## 2026-05-06 About headline emphasis

- 요청: About 섹션의 기존 `반복 플레이 가능한 PC 액션을 만드는 베테랑 개발팀.` 톤 대신 `끝내기 전에 한 판 더`를 강조.
- 적용:
  - 한국어 About 제목: `끝내기 전에 한 판 더`
  - 한국어 About 본문을 반복 플레이 중심 스튜디오 소개와 20년 이상 경험 기반 문장으로 정리.

## 2026-05-06 Contact section polish

- 요청: 연락 섹션에서 `대한민국 서울` 제거, 이메일 주소 잘림 수정, Discord/TikTok/YouTube 공식 아이콘 추가.
- 적용:
  - 위치 카드 제거.
  - 연락 카드 그리드를 5칸에서 4칸으로 변경.
  - 이메일 카드에 `word-break: break-word`, `overflow-wrap: anywhere` 적용.
  - Discord/TikTok/YouTube 링크에 inline SVG 아이콘 추가.

## 2026-05-06 Contact layout icon/email fix

- 요청: 이메일이 카드 안에서 잘리지 않게 하고, 소셜 아이콘을 배경처럼 크게 보이지 않는 깔끔한 연락 아이콘 크기로 조정.
- 적용:
  - 이메일 텍스트를 `.contact-value`로 감싸 줄바꿈 제어.
  - 이메일 카드 클래스명을 `.contact-email`로 정리하고 desktop에서 더 넓게 배치.
  - contact grid: desktop `1.4fr 1fr 1fr 1fr`, tablet 2열, mobile 1열.
  - 소셜 아이콘 desktop 56px, mobile 44px로 고정.
  - 아이콘에 `max-width/max-height/object-fit` 적용.

## 2026-05-06 Hero eyebrow removal and partnership copy update

- 요청: 한국어 히어로의 `서울 기반 PC 인디 게임 스튜디오` 텍스트 제거.
- 요청: 파트너십 섹션 한국어 문구 교체.
- 적용:
  - 한국어 `heroEyebrow`를 빈 문자열로 설정.
  - 빈 i18n 문자열은 `hidden` 처리되도록 `setLanguage` 보강.
  - 한국어 partnership title/body를 요청 문구로 교체.

## 2026-05-06 Email one-line desktop fix

- 요청: `twomengames@gmail.com` 마지막 글자가 다음 줄로 넘어가지 않게 한 줄 표시.
- 원인: `.contact-value`에 desktop에서도 `overflow-wrap: anywhere`가 적용되어 글자 단위 줄바꿈 발생.
- 적용:
  - desktop 이메일 텍스트는 `white-space: nowrap`, `overflow-wrap: normal`.
  - 이메일 카드 최소 폭을 380px로 확장.
  - mobile에서는 다시 `white-space: normal`, `overflow-wrap: anywhere`로 좁은 화면 대응.

## 2026-05-06 Trailer link update

- 요청: YouTube 트레일러 링크를 `https://youtu.be/cXeGeoyCsH8?si=VaMcrUqt2qJgCuiT`로 변경.
- 적용 대상:
  - `index.html` hero `Watch Trailer` 버튼.
  - `notion-twomengames-homepage.md` Trailer 링크.

## 2026-05-06 Company email update

- 요청: 회사 메일을 `contact@twomengames.com`으로 변경.
- 적용 대상:
  - `index.html` 표시 이메일 및 `mailto`.
  - `notion-twomengames-homepage.md` Business email.

## 2026-05-06 Cloudflare cached email workaround

- 상황: GitHub raw와 로컬 `index.html`은 `contact@twomengames.com`으로 변경됐지만, 공개 도메인은 Cloudflare Email Protection이 적용된 오래된 HTML 캐시를 내려주며 `twomengames@gmail.com`을 표시함.
- 확인:
  - `raw.githubusercontent.com/.../index.html`: `contact@twomengames.com`.
  - `https://twomengames.com`: `/cdn-cgi/l/email-protection` 형태로 old Gmail 주소가 obfuscated 상태.
  - `script.js`는 최신 버전이 내려옴.
- 대응:
  - `script.js`에서 `.contact-email` 카드의 `href`와 `.contact-value` 표시 텍스트를 런타임에 `contact@twomengames.com`으로 강제 설정.
  - 이메일 문자열은 Cloudflare 재치환을 피하기 위해 JS에서 `["contact", "twomengames.com"].join("@")`로 조립.

## 2026-05-06 Footer tagline update

- 요청: 푸터 오른쪽 하단 `PC Steam 인디 게임 스튜디오`를 `인디 게임 스튜디오`로 변경.
- 적용:
  - KO footer: `인디 게임 스튜디오`
  - EN footer: `Indie Game Studio`
