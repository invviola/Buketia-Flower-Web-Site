// Katalog kartlarını ve ürün şemasını HTML'e önceden basar (arama motorları ürünleri JavaScript olmadan da görsün).
// Kullanım: products.js veya i18n/ dosyaları değiştikten sonra `node build.mjs` çalıştırın, çıkan HTML değişikliklerini commit'leyin.
// Kart biçimi app.js içindeki productCard/visualMarkup ile aynı olmalıdır; birini değiştirirseniz diğerini de güncelleyin.
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
globalThis.window = {};
require("./products.js");
for (const lang of ["tr", "en", "ru", "de"]) require(`./i18n/${lang}.js`);
const dictionaries = window.BUKETIA_I18N;
const allProducts = window.BUKETIA_PRODUCTS;
const siteUrl = "https://buketiaflower.com/";
const pages = ["index.html", "en/index.html", "ru/index.html", "de/index.html"];
const genericDescription = /koleksiyonundan bir tasarım/;
const escapeHtml = (value) => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function translate(t, product) {
  const merged = { ...product, ...(t.products[product.id] || {}), category: t.categories[product.category] || product.category };
  const label = `${merged.category} ${merged.code || merged.name}`;
  merged.alt = !product.description || genericDescription.test(product.description) ? `${label} · Buketia Flower` : `${label}: ${merged.description}`;
  return merged;
}

function card(t, assetBase, item) {
  const product = translate(t, item);
  const style = product.imageFit ? ` style="min-width: 0; min-height: 0; object-fit: ${product.imageFit}; object-position: ${product.imagePosition || "center"}"` : "";
  const visual = `<img src="${assetBase}${product.image}" alt="${escapeHtml(product.alt)}" loading="lazy" decoding="async" width="${product.imageWidth || 675}" height="${product.imageHeight || 900}"${style} />`;
  return `<article class="product-card">
      <button class="product-button" type="button" data-product="${product.id}" aria-label="${escapeHtml(t.viewProduct(product.name))}">
        <div class="product-visual tone-${product.tone}">
          ${visual}
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        </div>
        <div class="product-meta">
          <h3>${product.name}</h3>
        </div>
      </button>
    </article>`;
}

function replaceBlock(html, name, content, file) {
  const pattern = new RegExp(`<!--build:${name}-->[\\s\\S]*?<!--/build:${name}-->`);
  if (!pattern.test(html)) throw new Error(`${file}: <!--build:${name}--> işareti bulunamadı`);
  return html.replace(pattern, () => `<!--build:${name}-->${content}<!--/build:${name}-->`);
}

for (const file of pages) {
  let html = readFileSync(file, "utf8");
  const lang = html.match(/<html lang="(\w+)"/)[1];
  const assetBase = html.match(/data-asset-base="([^"]*)"/)?.[1] || "";
  const t = dictionaries[lang];
  // Katalogda "Tümü" görünümü: fotoğrafı olan, çelenk olmayan ürünler.
  const visible = allProducts.filter((p) => p.image && !p.categories.includes("Çelenk"));
  html = replaceBlock(html, "grid", visible.map((p) => card(t, assetBase, p)).join("\n"), file);
  html = replaceBlock(html, "count", t.count(visible.length), file);
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: html.match(/<title>([^<]*)<\/title>/)[1],
    itemListElement: allProducts.filter((p) => p.image).map((p, index) => {
      const product = translate(t, p);
      return {
        "@type": "ListItem",
        position: index + 1,
        item: { "@type": "Product", name: product.name, sku: product.code, category: product.category, image: `${siteUrl}${p.image}`, description: genericDescription.test(p.description) ? undefined : product.description, brand: { "@type": "Brand", name: "Buketia Flower" } }
      };
    })
  };
  html = replaceBlock(html, "jsonld", `\n    <script type="application/ld+json">${JSON.stringify(list)}</script>\n    `, file);
  writeFileSync(file, html);
  console.log(`${file}: ${visible.length} kart, ${list.itemListElement.length} şema ürünü`);
}
