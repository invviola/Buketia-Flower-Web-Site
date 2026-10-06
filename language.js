(() => {
  // İlk giriş Türkçedir; menüden yapılan dil seçimi yalnızca bu sekmede saklanır.
  const storageKey = "buketia-selected-language";
  const language = document.documentElement.lang;
  let selectedLanguage;
  try {
    selectedLanguage = sessionStorage.getItem(storageKey);
  } catch {}

  // Depolama kapalıysa menü bağlantısındaki açık dil seçimini kullan.
  const requestedLanguage = new URLSearchParams(location.search).get("language");
  if (language !== "tr" && selectedLanguage !== language && requestedLanguage !== language) {
    location.replace(`/${location.search}${location.hash}`);
    return;
  }

  if (language === "tr") {
    try {
      sessionStorage.removeItem(storageKey);
    } catch {}
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest?.(".lang-menu a[hreflang]");
    if (!link) return;
    const targetLanguage = link.hreflang;
    try {
      sessionStorage.setItem(storageKey, targetLanguage);
    } catch {
      const url = new URL(link.href);
      if (targetLanguage !== "tr") url.searchParams.set("language", targetLanguage);
      link.href = url.href;
    }
    // Yeni sekmenin oturum deposu paylaşılmayabilir; açık dil seçimini bağlantıya ekle.
    if (event.ctrlKey || event.metaKey || event.shiftKey || link.target === "_blank") {
      const url = new URL(link.href);
      if (targetLanguage !== "tr") url.searchParams.set("language", targetLanguage);
      link.href = url.href;
    }
  });
})();
