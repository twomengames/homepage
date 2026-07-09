import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const root = new URL("../", import.meta.url);
const readText = (path) => readFile(new URL(path, root), "utf8");
const readJson = async (path) => JSON.parse(await readText(path));

const requiredFiles = [
  "index.html",
  "styles.css",
  "script.js",
  "notices.js",
  "notices/index.html",
  "notices/detail.html",
  "privacy.html",
  "email-rejection.html",
  "README.md",
  "content/notices/manifest.json"
];

for (const path of requiredFiles) {
  if (!existsSync(new URL(path, root))) {
    throw new Error(`Missing required file: ${path}`);
  }
}

const manifest = await readJson("content/notices/manifest.json");
if (!Array.isArray(manifest.notices) || manifest.notices.length < 2) {
  throw new Error("Manifest must contain at least two notices.");
}

const noticesByLanguage = { ko: [], en: [] };

for (const slug of manifest.notices) {
  for (const language of Object.keys(noticesByLanguage)) {
    const notice = await readJson(`content/notices/${language}/${slug}.json`);
    noticesByLanguage[language].push(notice);

    for (const key of ["slug", "title", "date", "category", "summary", "body"]) {
      if (!notice[key]) {
        throw new Error(`${language}/${slug} is missing ${key}.`);
      }
    }

    if (notice.slug !== slug) {
      throw new Error(`${language}/${slug} slug mismatch.`);
    }

    if (!Array.isArray(notice.body) || notice.body.length === 0) {
      throw new Error(`${language}/${slug} body must be a non-empty array.`);
    }
  }
}

for (const language of Object.keys(noticesByLanguage)) {
  const sorted = [...noticesByLanguage[language]].sort((a, b) => b.date.localeCompare(a.date));
  if (sorted[0].date < sorted[sorted.length - 1].date) {
    throw new Error(`${language} notices are not date-sortable.`);
  }
}

const textFiles = await Promise.all([
  readText("index.html"),
  readText("notices/index.html"),
  readText("notices/detail.html"),
  readText("privacy.html"),
  readText("email-rejection.html"),
  readText("README.md"),
  readText("notices.js")
]);
const combined = textFiles.join("\n");

for (const required of ["notices/", "privacy.html", "email-rejection.html", "data-notice-list", "data-notice-detail"]) {
  if (!combined.includes(required)) {
    throw new Error(`Missing required static reference: ${required}`);
  }
}

const forbiddenPatterns = [
  /firebase/i,
  /supabase/i,
  /wordpress/i,
  /oauth/i,
  /jwt/i,
  /sessionStorage/i,
  /<form\b/i,
  /type=["']file["']/i
];

const runtimeFiles = await Promise.all([
  readText("index.html"),
  readText("notices/index.html"),
  readText("notices/detail.html"),
  readText("privacy.html"),
  readText("email-rejection.html"),
  readText("script.js"),
  readText("notices.js")
]);
const runtimeCombined = runtimeFiles.join("\n");

for (const pattern of forbiddenPatterns) {
  if (pattern.test(runtimeCombined)) {
    throw new Error(`Forbidden dynamic feature reference found: ${pattern}`);
  }
}

console.log("static site verification passed");
