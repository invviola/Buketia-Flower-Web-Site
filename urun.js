// Ürün sayfası: "Benzer tasarımlar" fotoğrafları, ana fotoğraf yüklendikten sonra indirilir (ana fotoğraf daha hızlı açılır).
(() => {
  const main = document.querySelector(".product-detail-visual img");
  const start = () => document.querySelectorAll(".product-grid img[data-src]").forEach((img) => {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  });
  if (main && !main.complete) {
    main.addEventListener("load", start, { once: true });
    main.addEventListener("error", start, { once: true });
  } else start();
})();
