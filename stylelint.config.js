/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-html", "stylelint-config-html/astro"],
  rules: {},
  ignoreFiles: ["**/*.json", "*.config.*", "**/*.md", "**/env.*.*"],
};
