// Katalog kartlarını, ürün sayfalarını (/urun/<kod>/), mağaza ve ürün şemasını ve sitemap.xml'i üretir (arama motorları ürünleri JavaScript olmadan da görsün).
// Kullanım: products.js veya i18n/ dosyaları değiştikten sonra `node build.mjs` çalıştırın, çıkan HTML değişikliklerini commit'leyin.
// Kart biçimi ve görsel alt metni kuralı app.js içindeki tx/productCard/visualMarkup ile aynı olmalıdır; birini değiştirirseniz diğerini de güncelleyin.
// Ürün sayfalarının üst bar, başlık ve alt bilgisi seferihisar-cicekci/index.html'den alınır.
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
globalThis.window = {};
require("./products.js");
const languages = ["tr", "en", "ru", "de"];
for (const lang of languages) require(`./i18n/${lang}.js`);
const dictionaries = window.BUKETIA_I18N;
const allProducts = window.BUKETIA_PRODUCTS;
const siteUrl = "https://buketiaflower.com/";
const pages = ["index.html", "en/index.html", "ru/index.html", "de/index.html"];
const localPage = "seferihisar-cicekci/index.html";
const genericDescription = /koleksiyonundan bir tasarım/;
const escapeHtml = (value) => String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const productPath = (product) => `urun/${product.code.toLowerCase()}/`;
const today = new Date().toISOString().slice(0, 10);

// Şablon açıklamalı ürünlerin adı da şablondur ("Buket 21"); bunlarda kategori + kod kullanılır.
const hasOwnName = (product) => Boolean(product.description && !genericDescription.test(product.description) && product.searchNames);

function translate(t, lang, product) {
  const merged = { ...product, ...(t.products[product.id] || {}), category: t.categories[product.category] || product.category };
  const label = `${merged.category} ${merged.code || merged.name}`;
  merged.seoName = hasOwnName(product) ? product.searchNames[languages.indexOf(lang)] || product.searchNames[0] : label;
  merged.alt = hasOwnName(product) ? `${merged.seoName} (${label}): ${merged.description}` : `${label} · Buketia Flower`;
  return merged;
}

function card(t, lang, assetBase, item) {
  const product = translate(t, lang, item);
  const style = product.imageFit ? ` style="min-width: 0; min-height: 0; object-fit: ${product.imageFit}; object-position: ${product.imagePosition || "center"}"` : "";
  const visual = `<img src="${assetBase}${product.image}" alt="${escapeHtml(product.alt)}" loading="lazy" decoding="async" width="${product.imageWidth || 675}" height="${product.imageHeight || 900}"${style} />`;
  return `<article class="product-card">
      <a class="product-button" href="/${productPath(product)}" data-product="${product.id}" aria-label="${escapeHtml(t.viewProduct(product.name))}">
        <div class="product-visual tone-${product.tone}">
          ${visual}
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        </div>
        <div class="product-meta">
          <h3>${product.name}</h3>
        </div>
      </a>
    </article>`;
}

function replaceBlock(html, name, content, file) {
  const pattern = new RegExp(`<!--build:${name}-->[\\s\\S]*?<!--/build:${name}-->`);
  if (!pattern.test(html)) throw new Error(`${file}: <!--build:${name}--> işareti bulunamadı`);
  return html.replace(pattern, () => `<!--build:${name}-->${content}<!--/build:${name}-->`);
}

// Yalnızca içeriği değişen dosyalar yazılır; sitemap'teki lastmod bu sayede gerçek değişiklik tarihini gösterir.
const changedUrls = new Set();
function writePage(file, url, html) {
  if (existsSync(file) && readFileSync(file, "utf8") === html) return;
  writeFileSync(file, html);
  changedUrls.add(url);
}
const jsonLd = (data) => `\n    <script type="application/ld+json">${JSON.stringify(data)}</script>\n    `;

// Mağaza şeması tek kaynaktan tüm sayfalara basılır. Konum, Yandex Haritalar kaydındaki işaretten alınmıştır.
const shopDescriptions = {
  tr: "Seferihisar'da buket, orkide, gelin buketi, isteme çiçeği ve çelenk hazırlayan çiçekçi.",
  en: "Florist in Seferihisar, İzmir, creating bouquets, orchids, bridal bouquets and wreaths.",
  ru: "Цветочный магазин в Сеферихисаре (Измир): букеты, орхидеи, свадебные букеты и венки.",
  de: "Blumenladen in Seferihisar (İzmir) für Sträuße, Orchideen, Brautsträuße und Kränze."
};
const shop = (lang) => ({
  "@context": "https://schema.org",
  "@type": "Florist",
  "@id": `${siteUrl}#shop`,
  name: "Buketia Flower",
  url: siteUrl,
  description: shopDescriptions[lang],
  logo: `${siteUrl}assets/buketia-logo.png`,
  image: [`${siteUrl}assets/buketia-paylasim.jpg`, ...allProducts.filter(hasOwnName).slice(0, 3).map((p) => `${siteUrl}${p.image}`)],
  telephone: "+90 552 407 28 17",
  hasMap: "https://maps.app.goo.gl/1o3m3WtcM1YirCwD9",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Camikebir, 52. Sokak No: 7/C",
    addressLocality: "Seferihisar",
    addressRegion: "İzmir",
    postalCode: "35460",
    addressCountry: "TR"
  },
  geo: { "@type": "GeoCoordinates", latitude: 38.195891, longitude: 26.838984 },
  areaServed: { "@type": "City", name: "Seferihisar" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:30", closes: "20:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "20:00" }
  ],
  sameAs: ["https://www.instagram.com/buketia.flower/", "https://yandex.com.tr/maps/org/buketia_flower/51008909089/"]
});

const productsWithImage = allProducts.filter((p) => p.image);

for (const file of pages) {
  let html = readFileSync(file, "utf8");
  const lang = html.match(/<html lang="(\w+)"/)[1];
  const assetBase = html.match(/data-asset-base="([^"]*)"/)?.[1] || "";
  const t = dictionaries[lang];
  // Katalogda "Tümü" görünümü: fotoğrafı olan, çelenk olmayan ürünler.
  const visible = productsWithImage.filter((p) => !p.categories.includes("Çelenk"));
  html = replaceBlock(html, "grid", visible.map((p) => card(t, lang, assetBase, p)).join("\n"), file);
  html = replaceBlock(html, "count", t.count(visible.length), file);
  html = replaceBlock(html, "shop", jsonLd(shop(lang)), file);
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: html.match(/<title>([^<]*)<\/title>/)[1],
    itemListElement: productsWithImage.map((p, index) => {
      const product = translate(t, lang, p);
      return {
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}${productPath(p)}`,
        item: { "@type": "Product", name: product.seoName, sku: product.code, category: product.category, image: `${siteUrl}${p.image}`, description: hasOwnName(p) ? product.description : undefined, url: `${siteUrl}${productPath(p)}`, brand: { "@type": "Brand", name: "Buketia Flower" } }
      };
    })
  };
  html = replaceBlock(html, "jsonld", jsonLd(list), file);
  writePage(file, `${siteUrl}${file.replace("index.html", "")}`, html);
  console.log(`${file}: ${visible.length} kart, ${list.itemListElement.length} şema ürünü`);
}

let local = readFileSync(localPage, "utf8");
local = replaceBlock(local, "shop", jsonLd(shop("tr")), localPage);
writePage(localPage, `${siteUrl}seferihisar-cicekci/`, local);

// Ürün sayfaları (yalnızca Türkçe). Dil menüsü ürünün diğer dillerdeki katalog penceresine (/en/#BKT-001) götürür.
const chrome = local.match(/<body class="seo-page-body">([\s\S]*?)<main[\s\S]*<\/main>([\s\S]*?)<\/body>/);
if (!chrome) throw new Error(`${localPage}: üst/alt bölüm bulunamadı`);
const [header, footer] = [chrome[1], chrome[2]].map((part) => part.replaceAll('"../', '"/'));
const headShared = local.match(/<meta name="theme-color"[^>]*>/)[0] + "\n    " + local.match(/<link rel="preload"[\s\S]*?<link rel="stylesheet"[^>]*>/)[0].replaceAll('"../', '"/');
const t = dictionaries.tr;
const normalize = (value) => value.toLocaleLowerCase("tr-TR");

function productPage(item, index, group) {
  const product = translate(t, "tr", item);
  const url = `${siteUrl}${productPath(item)}`;
  const code = product.code;
  const nameHasCategory = normalize(product.seoName).includes(normalize(product.category).slice(0, -1));
  const heading = hasOwnName(item) && !nameHasCategory ? `${product.seoName} · ${product.category} (${code})` : hasOwnName(item) ? `${product.seoName} (${code})` : product.seoName;
  const title = `${heading} | Seferihisar Çiçekçi Buketia Flower`;
  const description = hasOwnName(item)
    ? `${product.seoName} (${code}): ${product.description} Seferihisar / İzmir'de Buketia Flower'dan, WhatsApp ile sipariş verin.`
    : `${product.seoName}: ${product.description} Seferihisar / İzmir.`;
  const image = `${siteUrl}${item.image}`;
  const whatsapp = `https://wa.me/905524072817?text=${encodeURIComponent(`Merhaba Buketia Flower, ${code} kodlu ürün hakkında bilgi almak istiyorum.`)}`;
  // Aynı kategoride sıradaki 8 ürün: her ürün sayfası, öncesindeki sayfalardan bağlantı alır.
  const related = Array.from({ length: Math.min(8, group.length - 1) }, (_, i) => group[(index + i + 1) % group.length]);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: "tr",
        isPartOf: { "@type": "WebSite", "@id": `${siteUrl}#website`, url: siteUrl, name: "Buketia Flower" },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#product` }
      },
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: product.seoName,
        sku: code,
        category: product.category,
        image,
        description: product.description,
        url,
        brand: { "@type": "Brand", name: "Buketia Flower" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Buketia Flower", item: siteUrl },
          { "@type": "ListItem", position: 2, name: product.seoName, item: url }
        ]
      }
    ]
  };
  const langLinks = (html) => html
    .replace('href="/" hreflang="tr"', `href="/#${code}" hreflang="tr"`)
    .replace(/href="\/(en|ru|de)\/" hreflang/g, `href="/$1/#${code}" hreflang`);
  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <script src="/language.js?v=20261009a"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${headShared}
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="product" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:site_name" content="Buketia Flower" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="${item.imageWidth || 675}" />
    <meta property="og:image:height" content="${item.imageHeight || 900}" />
    <meta property="og:image:alt" content="${escapeHtml(product.alt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    <!--build:shop-->${jsonLd(shop("tr"))}<!--/build:shop-->
    <title>${escapeHtml(title)}</title>
  </head>
  <body class="seo-page-body">${langLinks(header)}<main class="seo-page product-page">
      <nav class="product-breadcrumb" aria-label="Sayfa yolu"><a href="/">Buketia Flower</a><span aria-hidden="true">/</span><a href="/#catalog">Katalog</a><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(product.category)}</span></nav>
      <article class="product-detail" aria-labelledby="product-title">
        <div class="product-detail-visual">
          <img src="/${item.image}" alt="${escapeHtml(product.alt)}" fetchpriority="high" decoding="async" width="${item.imageWidth || 675}" height="${item.imageHeight || 900}" />
        </div>
        <div class="product-detail-info">
          <p class="eyebrow">${escapeHtml(product.category)} · Seferihisar / İzmir</p>
          <h1 id="product-title">${escapeHtml(product.seoName)}</h1>
          <p class="product-detail-code">Ürün kodu: ${code}</p>
          <p class="seo-lead">${escapeHtml(product.description)}</p>
          <div class="seo-actions">
            <a class="seo-button" href="/#${code}">${t.orderStart} <span aria-hidden="true">↗</span></a>
            <a class="seo-button seo-button-secondary" href="${whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp’tan sor <span aria-hidden="true">↗</span></a>
          </div>
          <p class="product-detail-note">Buketia Flower, Seferihisar Camikebir’de hazırlar. Teslimat tarihi, adres ve kart notunu sipariş sırasında WhatsApp üzerinden birlikte netleştiririz. ${t.priceNote}</p>
        </div>
      </article>
${related.length ? `
      <section class="seo-section" aria-labelledby="related-title">
        <p class="eyebrow">${escapeHtml(product.category)}</p>
        <h2 id="related-title">Benzer tasarımlar</h2>
        <div class="product-grid">${related.map((p) => card(t, "tr", "/", p)).join("\n")}</div>
        <div class="seo-actions"><a class="seo-button seo-button-secondary" href="/#catalog">Tüm kataloğu incele <span aria-hidden="true">↗</span></a></div>
      </section>
` : ""}    </main>${footer}</body>
</html>
`;
}

const groups = new Map();
for (const product of productsWithImage) groups.set(product.category, [...(groups.get(product.category) || []), product]);
const productDirs = new Set(productsWithImage.map((p) => p.code.toLowerCase()));
for (const [, group] of groups) {
  group.forEach((product, index) => {
    mkdirSync(productPath(product), { recursive: true });
    writePage(`${productPath(product)}index.html`, `${siteUrl}${productPath(product)}`, productPage(product, index, group));
  });
}
// products.js'ten çıkarılan ürünlerin sayfaları silinir.
for (const dir of readdirSync("urun")) if (!productDirs.has(dir)) rmSync(`urun/${dir}`, { recursive: true });
console.log(`urun/: ${productDirs.size} ürün sayfası`);

// sitemap.xml: değişmeyen sayfalar eski lastmod tarihini korur.
const previous = new Map([...readFileSync("sitemap.xml", "utf8").matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((m) => [m[1], m[2]]));
const lastmod = (url) => (changedUrls.has(url) || !previous.has(url) ? today : previous.get(url));
const alternates = languages.map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${siteUrl}${lang === "tr" ? "" : `${lang}/`}" />`).join("\n") + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}" />`;
const entries = [
  ...languages.map((lang) => {
    const url = `${siteUrl}${lang === "tr" ? "" : `${lang}/`}`;
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod(url)}</lastmod>\n${alternates}\n  </url>`;
  }),
  `  <url>\n    <loc>${siteUrl}seferihisar-cicekci/</loc>\n    <lastmod>${lastmod(`${siteUrl}seferihisar-cicekci/`)}</lastmod>\n  </url>`,
  ...productsWithImage.map((p) => {
    const url = `${siteUrl}${productPath(p)}`;
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod(url)}</lastmod>\n    <image:image><image:loc>${siteUrl}${p.image}</image:loc></image:image>\n  </url>`;
  })
];
writeFileSync("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join("\n")}
</urlset>
`);
console.log(`sitemap.xml: ${entries.length} adres`);
