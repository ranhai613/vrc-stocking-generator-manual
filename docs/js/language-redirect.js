(() => {
  const base = "/vrc-stocking-generator-manual/";
  const path = window.location.pathname.replace(/\/+$/, "/");

  if (path !== base) return;
  if (sessionStorage.getItem("language-redirect-done") === "1") return;

  const languages = navigator.languages || [navigator.language || ""];
  let target = "";

  for (const language of languages.map((lang) => lang.toLowerCase())) {
    if (language.startsWith("ja")) {
      target = "ja/";
      break;
    }

    if (language.startsWith("zh")) {
      target = "zh-Hans/";
      break;
    }
  }

  if (!target) return;

  sessionStorage.setItem("language-redirect-done", "1");
  window.location.replace(base + target + window.location.search + window.location.hash);
})();