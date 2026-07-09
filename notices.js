const noticeCopy = {
  en: {
    pageTitleList: "TwoMenGames | Notices",
    pageTitleDetail: "TwoMenGames | Notice",
    navAbout: "About",
    navGame: "Game",
    navGallery: "Gallery",
    navNotices: "Notices",
    navContact: "Contact",
    noticesEyebrow: "Official notices",
    noticesTitle: "Notices and disclosures",
    noticesCopy: "TwoMenGames shares official notices through static files. No login, comments, or visitor input is used.",
    loading: "Loading notices.",
    empty: "No notices are available.",
    backToList: "Back to notices",
    readMore: "Read notice",
    footerPrivacy: "Privacy Policy",
    footerEmailPolicy: "Email Rejection Policy",
    footerTag: "Indie Game Studio",
    notFoundTitle: "Notice not found",
    notFoundCopy: "The requested notice does not exist or has not been published."
  },
  ko: {
    pageTitleList: "TwoMenGames | 공지/공시",
    pageTitleDetail: "TwoMenGames | 공지",
    navAbout: "스튜디오",
    navGame: "게임",
    navGallery: "갤러리",
    navNotices: "공지/공시",
    navContact: "문의",
    noticesEyebrow: "공식 공지",
    noticesTitle: "공지/공시",
    noticesCopy: "TwoMenGames는 정적 파일을 통해 공식 공지와 공시를 게시합니다. 로그인, 댓글, 방문자 입력 기능은 사용하지 않습니다.",
    loading: "공지 목록을 불러오는 중입니다.",
    empty: "등록된 공지가 없습니다.",
    backToList: "목록으로 돌아가기",
    readMore: "공지 보기",
    footerPrivacy: "개인정보처리방침",
    footerEmailPolicy: "이메일무단수집거부",
    footerTag: "인디 게임 스튜디오",
    notFoundTitle: "공지를 찾을 수 없습니다",
    notFoundCopy: "요청한 공지가 없거나 아직 게시되지 않았습니다."
  }
};

const scriptElement = document.currentScript;
const pageType = scriptElement?.dataset.page || "list";
const contentBase = scriptElement?.dataset.contentBase || "";
const langButtons = document.querySelectorAll("[data-lang]");
const savedLanguage = localStorage.getItem("twomengames-lang");

const detectNoticeLanguage = () => {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((language) => language?.toLowerCase().startsWith("ko")) ? "ko" : "en";
};

const formatDate = (dateValue, language) => {
  const date = new Date(`${dateValue}T00:00:00`);
  return new Intl.DateTimeFormat(language === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(date);
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;"
})[char]);

const fetchJson = async (path) => {
  const response = await fetch(path, { cache: "no-cache" });
  if (!response.ok) {
    throw new Error(`Unable to load ${path}`);
  }
  return response.json();
};

const loadNotice = async (slug, language) => {
  try {
    return await fetchJson(`${contentBase}content/notices/${language}/${slug}.json`);
  } catch (error) {
    const fallbackLanguage = language === "ko" ? "en" : "ko";
    return fetchJson(`${contentBase}content/notices/${fallbackLanguage}/${slug}.json`);
  }
};

const loadNotices = async (language) => {
  const manifest = await fetchJson(`${contentBase}content/notices/manifest.json`);
  const notices = await Promise.all(manifest.notices.map((slug) => loadNotice(slug, language)));
  return notices.sort((a, b) => b.date.localeCompare(a.date));
};

const applyNoticeLanguage = (language) => {
  const nextLanguage = noticeCopy[language] ? language : "en";
  const copy = noticeCopy[nextLanguage];
  document.documentElement.lang = nextLanguage;
  document.title = pageType === "detail" ? copy.pageTitleDetail : copy.pageTitleList;

  document.querySelectorAll("[data-notice-i18n]").forEach((element) => {
    const key = element.dataset.noticeI18n;
    if (Object.prototype.hasOwnProperty.call(copy, key)) {
      element.textContent = copy[key];
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === nextLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const renderList = async (language) => {
  const listElement = document.querySelector("[data-notice-list]");
  if (!listElement) return;
  const copy = noticeCopy[language];

  try {
    const notices = await loadNotices(language);
    if (!notices.length) {
      listElement.innerHTML = `<div class="empty-state">${escapeHtml(copy.empty)}</div>`;
      return;
    }

    listElement.innerHTML = notices.map((notice) => `
      <a class="notice-card" href="detail.html?slug=${encodeURIComponent(notice.slug)}">
        <div class="notice-meta">
          <time datetime="${escapeHtml(notice.date)}">${escapeHtml(formatDate(notice.date, language))}</time>
          <span class="notice-category">${escapeHtml(notice.category)}</span>
        </div>
        <h2>${escapeHtml(notice.title)}</h2>
        <p>${escapeHtml(notice.summary)}</p>
        <span class="button ghost">${escapeHtml(copy.readMore)}</span>
      </a>
    `).join("");
  } catch (error) {
    listElement.innerHTML = `<div class="empty-state">${escapeHtml(copy.empty)}</div>`;
  }
};

const renderDetail = async (language) => {
  const detailElement = document.querySelector("[data-notice-detail]");
  if (!detailElement) return;
  const copy = noticeCopy[language];
  const slug = new URLSearchParams(window.location.search).get("slug");

  if (!slug) {
    detailElement.innerHTML = `
      <h1>${escapeHtml(copy.notFoundTitle)}</h1>
      <p>${escapeHtml(copy.notFoundCopy)}</p>
      <div class="notice-actions"><a class="button" href="./">${escapeHtml(copy.backToList)}</a></div>
    `;
    return;
  }

  try {
    const notice = await loadNotice(slug, language);
    document.title = `${notice.title} | TwoMenGames`;
    detailElement.innerHTML = `
      <div class="notice-meta">
        <time datetime="${escapeHtml(notice.date)}">${escapeHtml(formatDate(notice.date, language))}</time>
        <span class="notice-category">${escapeHtml(notice.category)}</span>
      </div>
      <h1 class="subpage-title">${escapeHtml(notice.title)}</h1>
      <p class="subpage-copy">${escapeHtml(notice.summary)}</p>
      <div class="notice-detail-body">
        ${notice.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </div>
      <div class="notice-actions"><a class="button" href="./">${escapeHtml(copy.backToList)}</a></div>
    `;
  } catch (error) {
    detailElement.innerHTML = `
      <h1>${escapeHtml(copy.notFoundTitle)}</h1>
      <p>${escapeHtml(copy.notFoundCopy)}</p>
      <div class="notice-actions"><a class="button" href="./">${escapeHtml(copy.backToList)}</a></div>
    `;
  }
};

const renderNoticePage = async (language, shouldSave = true) => {
  const nextLanguage = noticeCopy[language] ? language : "en";
  applyNoticeLanguage(nextLanguage);
  if (shouldSave) {
    localStorage.setItem("twomengames-lang", nextLanguage);
  }

  if (pageType === "detail") {
    await renderDetail(nextLanguage);
  } else {
    await renderList(nextLanguage);
  }
};

langButtons.forEach((button) => {
  button.addEventListener("click", () => renderNoticePage(button.dataset.lang));
});

const header = document.querySelector("[data-header]");
const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

renderNoticePage(savedLanguage || detectNoticeLanguage(), Boolean(savedLanguage));
