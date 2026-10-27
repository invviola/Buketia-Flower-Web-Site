// Katalog kartlarını, ürün sayfalarını (/urun/<kod>/), mağaza ve ürün şemasını ve sitemap.xml'i üretir (arama motorları ürünleri JavaScript olmadan da görsün).
// Kullanım: products.js veya i18n/ dosyaları değiştikten sonra `node build.mjs` çalıştırın, çıkan HTML değişikliklerini commit'leyin.
// Kart biçimi ve görsel alt metni kuralı app.js içindeki tx/productCard/visualMarkup ile aynı olmalıdır; birini değiştirirseniz diğerini de güncelleyin.
// Ürün, bölge ve kategori sayfalarının üst bar, başlık ve alt bilgisi seferihisar-cicekci/index.html'den alınır; bölge metinleri bolgeler.mjs'te, kategori metinleri kategoriler.mjs'tedir.
// Özel gün sayfaları ozelgunler.mjs'te, rehber sayfaları rehberler.mjs'te, ana sayfa "çiçekçiniz" metni anasayfa.mjs'tedir.
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { areas } from "./bolgeler.mjs";
import { categories } from "./kategoriler.mjs";
import { occasions } from "./ozelgunler.mjs";
import { guides } from "./rehberler.mjs";
import { homeText } from "./anasayfa.mjs";

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
const capitalize = (text) => text.replace(/^./, (c) => c.toLocaleUpperCase("tr-TR"));
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

// Fotoğraf boyutu: products.js'te yazılıysa o, yoksa JPEG/PNG dosyasının başlığından okunur, okunamazsa 675x900.
const sizeCache = new Map();
function imageSize(file) {
  if (sizeCache.has(file)) return sizeCache.get(file);
  let size = null;
  try {
    const data = readFileSync(file);
    if (data[0] === 0x89 && data.toString("ascii", 1, 4) === "PNG") size = { width: data.readUInt32BE(16), height: data.readUInt32BE(20) };
    else if (data[0] === 0xff && data[1] === 0xd8) {
      for (let i = 2; i + 9 < data.length; ) {
        if (data[i] !== 0xff) { i++; continue; }
        const marker = data[i + 1];
        if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) { i += 2; continue; }
        if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) { size = { width: data.readUInt16BE(i + 7), height: data.readUInt16BE(i + 5) }; break; }
        i += 2 + data.readUInt16BE(i + 2);
      }
    }
  } catch {}
  sizeCache.set(file, size);
  return size;
}
const dims = (item) => {
  if (item.imageWidth && item.imageHeight) return { width: item.imageWidth, height: item.imageHeight };
  return (item.image && imageSize(item.image)) || { width: 675, height: 900 };
};

// deferImage: fotoğraf data-src ile basılır, urun.js ana fotoğraf yüklenince başlatır (JS kapalıysa noscript yedeği).
function card(t, lang, assetBase, item, { deferImage = false } = {}) {
  const product = translate(t, lang, item);
  const { width, height } = dims(item);
  const style = product.imageFit ? ` style="min-width: 0; min-height: 0; object-fit: ${product.imageFit}; object-position: ${product.imagePosition || "center"}"` : "";
  const attrs = `alt="${escapeHtml(product.alt)}" loading="lazy" decoding="async" width="${width}" height="${height}"${style}`;
  const visual = deferImage
    ? `<img data-src="${assetBase}${product.image}" ${attrs} /><noscript><img src="${assetBase}${product.image}" ${attrs} /></noscript>`
    : `<img src="${assetBase}${product.image}" ${attrs} />`;
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
// Google puan rozeti (ana sayfadakiyle aynı). Yorum şeması (AggregateRating) bilerek eklenmez: Google işletmenin kendi sitesindeki kendi yorumlarını yıldızlı göstermez.
const googleRating = `<a class="google-rating" href="https://maps.app.goo.gl/1o3m3WtcM1YirCwD9" target="_blank" rel="noopener noreferrer" aria-label="Google'da 5,0 puan, 40'tan fazla yorum. Yorumları Google Haritalar'da okuyun"><span class="google-rating-stars" aria-hidden="true">★★★★★</span><span>5,0 · Google’da 40+ yorum</span><span aria-hidden="true">↗</span></a>`;
const jsonLd = (data) => `\n    <script type="application/ld+json">${JSON.stringify(data)}</script>\n    `;

// Mağaza şeması tek kaynaktan tüm sayfalara basılır. Konum, Yandex Haritalar kaydındaki işaretten alınmıştır.
const shopDescriptions = {
  tr: "Seferihisar'da buket, orkide, gelin buketi, isteme çiçeği ve çelenk hazırlayan çiçekçi.",
  en: "Florist in Seferihisar, İzmir, creating bouquets, orchids, bridal bouquets and wreaths.",
  ru: "Цветочный магазин в Сеферихисаре (Измир): букеты, орхидеи, свадебные букеты и венки.",
  de: "Blumenladen in Seferihisar (İzmir) für Sträuße, Orchideen, Brautsträuße und Kränze."
};
// Sitenin Google'da görünen adı için WebSite kaydı da mağaza şemasıyla birlikte basılır.
const website = (lang) => ({ "@type": "WebSite", "@id": `${siteUrl}#website`, url: siteUrl, name: "Buketia Flower", alternateName: ["Buketia", "Buketia Flower Seferihisar"], inLanguage: lang, publisher: { "@id": `${siteUrl}#shop` } });
const shop = (lang) => ({ "@context": "https://schema.org", "@graph": [florist(lang), website(lang)] });
const florist = (lang) => ({
  "@type": "Florist",
  "@id": `${siteUrl}#shop`,
  name: "Buketia Flower",
  url: siteUrl,
  description: shopDescriptions[lang],
  logo: `${siteUrl}assets/buketia-logo.png`,
  image: [`${siteUrl}assets/buketia-paylasim.jpg`, ...allProducts.filter(hasOwnName).slice(0, 3).map((p) => `${siteUrl}${p.image}`)],
  telephone: "+90 552 407 28 17",
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+90 552 407 28 17", contactType: "customer service", availableLanguage: ["Turkish", "English"] },
    { "@type": "ContactPoint", telephone: "+90 552 242 52 52", contactType: "customer service" }
  ],
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
  areaServed: [
    { "@type": "City", name: "Seferihisar" },
    ...areas.map((area) => {
      const district = area.region.split(" / ")[0];
      return district === area.name ? { "@type": "City", name: area.name } : { "@type": "Place", name: `${area.name}, ${district}` };
    })
  ],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:30", closes: "20:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "20:00" }
  ],
  sameAs: ["https://www.instagram.com/buketia.flower/", "https://yandex.com.tr/maps/org/buketia_flower/51008909089/"]
});

const productsWithImage = allProducts.filter((p) => p.image);

// Dil ana sayfalarının başlık ve açıklaması. Google'da "seferihisar çiçekçi" aramasında ilk sıradayız ama tıklama oranı düşük;
// başlıkta aynı gün teslimat ve çevre bölgeler geçsin. og:title/og:description de aynı metinle güncellenir.
const homeHead = {
  tr: { title: "Seferihisar Çiçekçi · Aynı Gün Çiçek Siparişi | Buketia Flower", description: "Seferihisar çiçekçi Buketia Flower: buket, gül, orkide, çelenk ve yapay çiçek. Sığacık, Ürkmez, Urla ve çevresine aynı gün teslimat. Katalogdan seçin, WhatsApp’tan sipariş verin: 0552 407 28 17." },
  en: { title: "Florist in Seferihisar & Sığacık · Same-Day Delivery | Buketia", description: "Florist in Seferihisar, İzmir: bouquets, roses, orchids and wreaths with same-day delivery to Sığacık, Ürkmez and Urla. Choose online, order via WhatsApp." },
  de: { title: "Blumenladen Seferihisar & Sığacık · Lieferung am selben Tag", description: "Blumenladen in Seferihisar (İzmir): Sträuße, Rosen, Orchideen und Kränze, Lieferung am selben Tag nach Sığacık, Ürkmez und Urla. Bestellung per WhatsApp." },
  ru: { title: "Цветы в Сеферихисаре и Сыгаджике · Доставка в день заказа", description: "Цветочный магазин в Сеферихисаре (Измир): букеты, розы, орхидеи и венки с доставкой в день заказа в Сыгаджик, Юркмез и Урлу. Заказ через WhatsApp." }
};
function setHead(html, { title, description }, file) {
  const rules = [
    [/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`],
    [/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(description)}" />`],
    [/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`],
    [/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`]
  ];
  for (const [pattern, value] of rules) {
    if (!pattern.test(html)) throw new Error(`${file}: ${pattern} bulunamadı`);
    html = html.replace(pattern, () => value);
  }
  return html;
}

// Ana sayfa "çiçekçiniz" metnindeki bağlantılar (yalnız Türkçe metin kullanır).
const link = (href, text) => `<a href="${href}">${text}</a>`;
const homeLinks = {
  areas: areas.map((area) => link(`/${area.slug}/`, area.name)).join(", "),
  categories: Object.fromEntries(categories.map((category) => [category.slug, (text) => link(`/${category.slug}/`, text)])),
  occasion: occasions[0] ? (text) => link(`/${occasions[0].slug}/`, text) : (text) => text,
  guide: guides[0] ? (text) => link(`/${guides[0].slug}/`, text) : (text) => text,
};
const homeTexts = homeText(homeLinks);
const howtoBlock = (lines) => lines.length ? `<p class="how-it-works">${lines.map((line) => `<span>${line}</span>`).join("")}</p>` : "";
const aboutBlock = ({ eyebrow, title, paragraphs }) => `
      <section class="local-guide about-shop" id="hakkimizda" aria-labelledby="about-shop-title">
        <div>
          <p class="eyebrow">${eyebrow}</p>
          <h2 id="about-shop-title">${title}</h2>
        </div>
        <div class="local-guide-copy">
          ${paragraphs.map((text) => `<p>${text}</p>`).join("\n          ")}
        </div>
      </section>
      `;

for (const file of pages) {
  let html = readFileSync(file, "utf8");
  const lang = html.match(/<html lang="(\w+)"/)[1];
  const assetBase = html.match(/data-asset-base="([^"]*)"/)?.[1] || "";
  const t = dictionaries[lang];
  html = setHead(html, homeHead[lang], file);
  // Katalogda "Tümü" görünümü: fotoğrafı olan, çelenk olmayan ürünler.
  const visible = productsWithImage.filter((p) => !p.categories.includes("Çelenk"));
  html = replaceBlock(html, "grid", visible.map((p) => card(t, lang, assetBase, p)).join("\n"), file);
  html = replaceBlock(html, "count", t.count(visible.length), file);
  html = replaceBlock(html, "shop", jsonLd(shop(lang)), file);
  html = replaceBlock(html, "howto", howtoBlock(homeTexts[lang].howItWorks), file);
  html = replaceBlock(html, "about", aboutBlock(homeTexts[lang].about), file);
  // Özel gün bandı yalnız Türkçe ana sayfada; app.js tarih aralığındaysa görünür yapar (yeniden build gerekmez).
  if (lang === "tr") html = replaceBlock(html, "occasion", occasions.map((o) => `<a class="occasion-band" href="/${o.slug}/" data-from="${o.showFrom}" data-until="${o.showUntil}" hidden>${o.band} <span aria-hidden="true">→</span></a>`).join(""), file);
  // Fiyatlar sitede gösterilmediği için Product şeması kullanılmaz: "offers" olmadan Google bunları geçersiz sayıyor
  // (Search Console > Ürün snippet'leri). Liste yalnızca ürün sayfalarının adresini ve adını taşır.
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: html.match(/<title>([^<]*)<\/title>/)[1].replace(/&amp;/g, "&"),
    itemListElement: visible.map((p, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteUrl}${productPath(p)}`, name: translate(t, lang, p).seoName }))
  };
  html = replaceBlock(html, "jsonld", jsonLd(list), file);
  writePage(file, `${siteUrl}${file.replace("index.html", "")}`, html);
  console.log(`${file}: ${visible.length} kart, ${list.itemListElement.length} şema ürünü`);
}

// Teslimat bölgesi bağlantıları: Türkçe ana sayfa, Seferihisar sayfası ve (alt bilgi üzerinden) tüm ürün ve bölge sayfaları.
const areaLinks = (except) => areas.filter((area) => area.slug !== except).map((area) => `<a href="/${area.slug}/">${area.name}</a>`).join(", ");
const categoryLinks = categories.map((category) => `<a href="/${category.slug}/">${category.name}</a>`).join(", ");
const occasionLinks = occasions.map((o) => `<a href="/${o.slug}/">${o.name}</a>`).join(" · ");
const guideLinks = guides.map((g) => `<a href="/${g.slug}/">${g.name}</a>`).join(" · ");
const extraLinkLines = [occasionLinks ? `Özel günler: ${occasionLinks}` : "", guideLinks ? `Rehber: ${guideLinks}` : ""].filter(Boolean);
const linkLines = (indent) => [`Aynı gün teslimat: <a href="/seferihisar-cicekci/">Seferihisar merkez</a>, ${areaLinks()}`, `Çiçek çeşitleri: ${categoryLinks}`, ...extraLinkLines].map((line) => `\n${indent}<p class="area-links">${line}</p>`).join("") + `\n${indent}`;
const areaLine = linkLines("          ");
writePage("index.html", siteUrl, replaceBlock(readFileSync("index.html", "utf8"), "areas", areaLine, "index.html"));

let local = readFileSync(localPage, "utf8");
local = replaceBlock(local, "shop", jsonLd(shop("tr")), localPage);
local = replaceBlock(local, "areas", linkLines("        "), localPage);
local = replaceBlock(local, "area-list", `
      <section class="seo-section seo-two-column" aria-labelledby="categories-title">
        <div>
          <p class="eyebrow">Çiçek çeşitleri</p>
          <h2 id="categories-title">Ne göndermek istersiniz?</h2>
        </div>
        <div class="seo-copy">
          <p>Buketlerden çelenklere, tüm tasarımlarımızı kategorilere ayırdık. Her sayfada o kategorideki tasarımları ve sık sorulan soruları bulabilirsiniz:</p>
          <ul class="seo-area-links">${categories.map((category) => `<li><a href="/${category.slug}/">${category.heading}</a></li>`).join("")}</ul>
        </div>
      </section>

      <section class="seo-section seo-two-column" aria-labelledby="areas-title">
        <div>
          <p class="eyebrow">Teslimat bölgeleri</p>
          <h2 id="areas-title">Seferihisar ve çevresine aynı gün</h2>
        </div>
        <div class="seo-copy">
          <p>Seferihisar merkezin yanı sıra çevredeki mahallelere ve komşu ilçelere de aynı gün çiçek teslim ediyoruz. Bölgenizi seçin:</p>
          <ul class="seo-area-links">${areas.map((area) => `<li><a href="/${area.slug}/">${area.heading}</a></li>`).join("")}</ul>
        </div>
      </section>

      `, localPage);
writePage(localPage, `${siteUrl}seferihisar-cicekci/`, local);

// Ürün sayfaları (yalnızca Türkçe). Dil menüsü ürünün diğer dillerdeki katalog penceresine (/en/#BKT-001) götürür.
const chrome = local.match(/<body class="seo-page-body">([\s\S]*?)<main[\s\S]*<\/main>([\s\S]*?)<\/body>/);
if (!chrome) throw new Error(`${localPage}: üst/alt bölüm bulunamadı`);
const [header, footer] = [chrome[1], chrome[2]].map((part) => part.replaceAll('"../', '"/'));
const headShared = local.match(/<meta name="theme-color"[^>]*>/)[0] + "\n    " + local.match(/<link rel="preload"[\s\S]*?<link rel="stylesheet"[^>]*>/)[0].replaceAll('"../', '"/');
const t = dictionaries.tr;
const normalize = (value) => value.toLocaleLowerCase("tr-TR");
const categoryOf = (product) => categories.find((category) => category.match.includes(product.category));
// Fotoğrafların Google Görseller'de sahibiyle birlikte görünmesi için görsel bilgisi (ImageObject).
const imageObject = (id, item, caption) => ({
  "@type": "ImageObject",
  "@id": id,
  contentUrl: `${siteUrl}${item.image}`,
  url: `${siteUrl}${item.image}`,
  ...dims(item),
  caption,
  creator: { "@type": "Organization", name: "Buketia Flower", url: siteUrl },
  creditText: "Buketia Flower",
  copyrightNotice: "© Buketia Flower"
});

// Ürün özellikleri listesi: products.js'teki etiketlerden (fotoğraflara bakılarak yazıldı). Etiketi olmayan satır basılmaz.
const occasionLabels = {
  "sevgiliye": ["Sevgiliye", "/sevgiliye-cicek-seferihisar/"], "yildonumu": ["Yıl dönümü"], "dogum-gunu": ["Doğum günü"],
  "gecmis-olsun": ["Geçmiş olsun"], "yeni-dogan": ["Yeni doğan"], "tebrik-kutlama": ["Tebrik ve kutlama"], "acilis": ["Açılış", "/seferihisar-celenk/"],
  "cenaze-taziye": ["Cenaze ve taziye", "/seferihisar-celenk/"], "anneler-gunu": ["Anneler Günü"],
  "isteme-soz-nisan": ["İsteme, söz, nişan"], "dugun-gelin": ["Düğün"], "tesekkur": ["Teşekkür"], "ozur": ["Özür"], "yilbasi": ["Yılbaşı"], "ev-ofis-dekorasyon": ["Ev ve ofis"]
};
for (const o of occasions) occasionLabels[o.tag] = [o.name, `/${o.slug}/`];
const sizeLabels = { kucuk: "Küçük boy", orta: "Orta boy", buyuk: "Büyük boy" };
function productSpecs(item) {
  const list = (values) => capitalize(values.join(", "));
  const rows = [
    ["Çiçekler", item.flowers?.length ? escapeHtml(list(item.flowers)) : ""],
    ["Renkler", item.colors?.length ? escapeHtml(list(item.colors)) : ""],
    ["Sunum", item.presentation && item.presentation !== "diğer" ? escapeHtml(capitalize(item.presentation)) : ""],
    ["Boyut", sizeLabels[item.size] || ""],
    ["Çiçek türü", item.categories.some((c) => c.startsWith("Yapay")) ? "Yapay çiçek" : ""],
    ["Uygun olduğu günler", (item.occasions || []).filter((o) => occasionLabels[o]).map((o) => {
      const [label, href] = occasionLabels[o];
      return href ? `<a href="${href}">${label}</a>` : label;
    }).join(", ")]
  ].filter(([, value]) => value);
  return rows.length ? `
          <dl class="product-specs">${rows.map(([key, value]) => `<div><dt>${key}</dt><dd>${value}</dd></div>`).join("")}</dl>` : "";
}

function productPage(item, index, group) {
  const product = translate(t, "tr", item);
  const url = `${siteUrl}${productPath(item)}`;
  const code = product.code;
  const nameHasCategory = normalize(product.seoName).includes(normalize(product.category).slice(0, -1));
  const heading = hasOwnName(item) && !nameHasCategory ? `${product.seoName} · ${product.category} (${code})` : hasOwnName(item) ? `${product.seoName} (${code})` : product.seoName;
  // Başlık arama sonucunda kesilmesin: 60 karakteri aşmayan ilk seçenek kullanılır.
  const title = [`${heading} | Buketia Flower Seferihisar`, `${product.seoName} · ${product.category} | Buketia Seferihisar`, `${product.seoName} | Buketia Seferihisar`, `${product.seoName} | Buketia`]
    .find((candidate) => candidate.length <= 60) || product.seoName;
  // Arama sonucunda kesilmesin diye açıklama ~160 karakterde tutulur; yer varsa sipariş cümlesi eklenir.
  const baseDescription = hasOwnName(item) ? `${product.seoName} (${code}): ${product.description}` : `${product.seoName}: ${product.description}`;
  const orderNote = " Seferihisar’dan aynı gün teslimat, WhatsApp ile sipariş.";
  const description = baseDescription.length + orderNote.length <= 160 ? baseDescription + orderNote
    : baseDescription.length <= 160 ? baseDescription
    : `${baseDescription.slice(0, 157).replace(/\s+\S*$/, "")}…`;
  const image = `${siteUrl}${item.image}`;
  const whatsapp = `https://wa.me/905524072817?text=${encodeURIComponent(`Merhaba Buketia Flower, ${code} kodlu ürün hakkında bilgi almak istiyorum.`)}`;
  // Aynı kategoride sıradaki 8 ürün: her ürün sayfası, öncesindeki sayfalardan bağlantı alır.
  const related = Array.from({ length: Math.min(8, group.length - 1) }, (_, i) => group[(index + i + 1) % group.length]);
  const categoryPage = categoryOf(item);
  const crumbs = [
    { name: "Buketia Flower", item: siteUrl },
    ...(categoryPage ? [{ name: categoryPage.heading.replace(/^./, (c) => c.toLocaleUpperCase("tr-TR")), item: `${siteUrl}${categoryPage.slug}/` }] : []),
    { name: product.seoName, item: url }
  ];
  // Fiyat gösterilmediği için Product yerine sayfa + görsel bilgisi verilir (bkz. ItemList notu).
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
        primaryImageOfPage: { "@id": `${url}#image` },
        about: { "@id": `${siteUrl}#shop` }
      },
      imageObject(`${url}#image`, item, product.alt),
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: crumbs.map((crumb, i) => ({ "@type": "ListItem", position: i + 1, ...crumb }))
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
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests" />
    <script src="/language.js?v=20261009a" defer></script>
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
    <meta property="og:image:width" content="${dims(item).width}" />
    <meta property="og:image:height" content="${dims(item).height}" />
    <meta property="og:image:alt" content="${escapeHtml(product.alt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    <!--build:shop-->${jsonLd(shop("tr"))}<!--/build:shop-->
    <title>${escapeHtml(title)}</title>
  </head>
  <body class="seo-page-body">${langLinks(header)}<main id="main" class="seo-page product-page">
      <nav class="product-breadcrumb" aria-label="Sayfa yolu"><a href="/">Buketia Flower</a><span aria-hidden="true">/</span><a href="/#catalog">Katalog</a><span aria-hidden="true">/</span>${categoryPage ? `<a href="/${categoryPage.slug}/">${escapeHtml(product.category)}</a>` : `<span aria-current="page">${escapeHtml(product.category)}</span>`}</nav>
      <article class="product-detail" aria-labelledby="product-title">
        <div class="product-detail-visual">
          <img src="/${item.image}" alt="${escapeHtml(product.alt)}" fetchpriority="high" decoding="async" width="${dims(item).width}" height="${dims(item).height}" />
        </div>
        <div class="product-detail-info">
          <p class="eyebrow">${escapeHtml(product.category)} · Seferihisar / İzmir</p>
          <h1 id="product-title">${escapeHtml(product.seoName)}</h1>
          <p class="product-detail-code">Ürün kodu: ${code}</p>
          ${googleRating}
          <p class="seo-lead">${escapeHtml(product.description)}</p>${productSpecs(item)}
          <div class="seo-actions">
            <a class="seo-button" href="/#${code}-siparis">${t.orderStart} <span aria-hidden="true">↗</span></a>
            <a class="seo-button seo-button-secondary" href="${whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp’tan sor <span aria-hidden="true">↗</span></a>
          </div>
          <p class="product-detail-note">Buketia Flower, Seferihisar Camikebir’de hazırlar. Teslimat tarihi, adres ve kart notunu sipariş sırasında WhatsApp üzerinden birlikte netleştiririz. ${t.priceNote}</p>
        </div>
      </article>
${related.length ? `
      <section class="seo-section" aria-labelledby="related-title">
        <p class="eyebrow">${escapeHtml(product.category)}</p>
        <h2 id="related-title">Benzer tasarımlar</h2>
        <div class="product-grid">${related.map((p) => card(t, "tr", "/", p, { deferImage: true })).join("\n")}</div>
        <div class="seo-actions">${categoryPage ? `<a class="seo-button" href="/${categoryPage.slug}/">${escapeHtml(categoryPage.heading.replace(/^./, (c) => c.toLocaleUpperCase("tr-TR")))}: tüm tasarımlar <span aria-hidden="true">↗</span></a>` : ""}<a class="seo-button seo-button-secondary" href="/#catalog">Tüm kataloğu incele <span aria-hidden="true">↗</span></a></div>
      </section>
` : ""}    </main>
    <div class="product-sticky-order">
      <a class="seo-button" href="/#${code}-siparis">${t.orderStart}</a>
      <a class="sticky-wa" href="${whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="${code} için WhatsApp’tan sor"><span class="whatsapp-dot" aria-hidden="true"></span>WhatsApp</a>
    </div>${footer.replace('<a class="wa-float" href="https://wa.me/905524072817"', `<a class="wa-float" href="${whatsapp}"`)}
    <script src="/urun.js?v=20261019a" defer></script>
  </body>
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

// Teslimat bölgesi sayfaları.
const productByCode = new Map(productsWithImage.map((p) => [p.code, p]));
function areaPage(area) {
  const url = `${siteUrl}${area.slug}/`;
  const whatsapp = `https://wa.me/905524072817?text=${encodeURIComponent(`Merhaba Buketia Flower, ${area.dative} çiçek göndermek istiyorum.`)}`;
  const faq = [
    [`${area.dative} aynı gün çiçek gönderebilir miyim?`, `Evet. Seferihisar’daki mağazamızdan ${area.dative} aynı gün teslimat yapıyoruz; teslimat saatini sipariş sırasında birlikte belirleriz.`],
    ["Kurye ücreti ne kadar?", "Kurye ücreti teslimat adresine göre belirlenir ve sipariş onayından önce size bildirilir."],
    // Bölgeye özel sorular bolgeler.mjs'te (faq: [[soru, cevap]]); fiyat ve kart notu soruları kategori sayfalarında.
    ...(area.faq || [])
  ];
  const featured = area.featured.map((code) => {
    const product = productByCode.get(code);
    if (!product) throw new Error(`bolgeler.mjs: ${area.slug} için ${code} ürünü bulunamadı`);
    return product;
  });
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: area.title, description: area.description, inLanguage: "tr", isPartOf: { "@type": "WebSite", "@id": `${siteUrl}#website`, url: siteUrl, name: "Buketia Flower" }, about: { "@id": `${siteUrl}#shop` }, primaryImageOfPage: { "@id": `${url}#image` } },
      imageObject(`${url}#image`, featured[0], translate(t, "tr", featured[0]).alt),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Buketia Flower", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Seferihisar Çiçekçi", item: `${siteUrl}seferihisar-cicekci/` },
          { "@type": "ListItem", position: 3, name: area.heading.replace(/^./, (c) => c.toLocaleUpperCase("tr-TR")), item: url }
        ]
      },
      { "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
    ]
  };
  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests" />
    <script src="/language.js?v=20261009a" defer></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${headShared}
    <meta name="description" content="${escapeHtml(area.description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:site_name" content="Buketia Flower" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeHtml(area.title)}" />
    <meta property="og:description" content="${escapeHtml(area.description)}" />
    <meta property="og:image" content="${siteUrl}${featured[0].image}" />
    <meta property="og:image:width" content="${dims(featured[0]).width}" />
    <meta property="og:image:height" content="${dims(featured[0]).height}" />
    <meta property="og:image:alt" content="${escapeHtml(translate(t, "tr", featured[0]).alt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    <!--build:shop-->${jsonLd(shop("tr"))}<!--/build:shop-->
    <title>${escapeHtml(area.title)}</title>
  </head>
  <body class="seo-page-body">${header}<main id="main" class="seo-page product-page">
      <nav class="product-breadcrumb" aria-label="Sayfa yolu"><a href="/">Buketia Flower</a><span aria-hidden="true">/</span><a href="/seferihisar-cicekci/">Seferihisar çiçekçi</a><span aria-hidden="true">/</span><span aria-current="page">${area.name}</span></nav>
      <section class="seo-hero" aria-labelledby="seo-title">
        <p class="eyebrow">${area.region} · Aynı gün teslimat</p>
        <h1 id="seo-title">${area.heading}</h1>
        <p class="seo-lead">${area.lead}</p>
        ${googleRating}
        <div class="seo-actions">
          <a class="seo-button" href="/#catalog">Çiçek kataloğunu incele <span aria-hidden="true">↗</span></a>
          <a class="seo-button seo-button-secondary" href="${whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp’tan sipariş ver <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section class="seo-section seo-two-column" aria-labelledby="about-title">
        <div>
          <p class="eyebrow">Buketia Flower</p>
          <h2 id="about-title">${area.locative} çiçek siparişi</h2>
        </div>
        <div class="seo-copy">
          ${area.intro.map((text) => `<p>${text}</p>`).join("\n          ")}
        </div>
      </section>

      <p class="seo-section how-it-works-line">Sipariş üç adımda: tasarımı seçin, bilgileri yazın, WhatsApp’tan onaylayın. <a href="/seferihisar-cicekci/#siparis">Nasıl sipariş verilir? →</a></p>

      <section class="seo-section" aria-labelledby="occasions-title">
        <p class="eyebrow">Özel günler</p>
        <h2 id="occasions-title">${area.name} için çiçek seçenekleri</h2>
        <div class="seo-service-grid seo-service-grid-three">
          ${area.occasions.map(([heading, text]) => `<article><h3>${heading}</h3><p>${text}</p></article>`).join("\n          ")}
        </div>
      </section>

      <section class="seo-section" aria-labelledby="featured-title">
        <p class="eyebrow">Katalogdan</p>
        <h2 id="featured-title">Öne çıkan tasarımlar</h2>
        <div class="product-grid">${featured.map((p) => card(t, "tr", "/", p)).join("\n")}</div>
        <div class="seo-actions"><a class="seo-button seo-button-secondary" href="/#catalog">Tüm kataloğu incele <span aria-hidden="true">↗</span></a></div>
      </section>

      <section class="seo-section seo-faq" aria-labelledby="faq-title">
        <p class="eyebrow">Sık sorulanlar</p>
        <h2 id="faq-title">${area.dative} çiçek göndermek</h2>
        ${faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("\n        ")}
      </section>

      <section class="seo-section seo-contact-section" aria-labelledby="contact-title">
        <div>
          <p class="eyebrow">Mağazamız</p>
          <h2 id="contact-title">Camikebir’de Buketia Flower</h2>
        </div>
        <div class="seo-contact-card">
          <a href="https://maps.app.goo.gl/1o3m3WtcM1YirCwD9" target="_blank" rel="noopener noreferrer">Camikebir, 52. Sokak No: 7/C<br />Seferihisar / İzmir ↗</a>
          <a href="tel:+905524072817">0552 407 28 17</a>
          <span>Hafta içi &amp; Cumartesi 08.30–20.30<br />Pazar 09.00–20.00</span>
          <span>Diğer teslimat bölgeleri: <a href="/seferihisar-cicekci/">Seferihisar</a>, ${areaLinks(area.slug)}</span>
        </div>
      </section>
    </main>${footer}</body>
</html>
`;
}
for (const area of areas) {
  mkdirSync(area.slug, { recursive: true });
  writePage(`${area.slug}/index.html`, `${siteUrl}${area.slug}/`, areaPage(area));
}
console.log(`${areas.length} bölge sayfası`);

// Kategori sayfaları: bir kategorideki tüm ürünler, kategoriye özel metin ve sık sorulanlar.
const contactSection = (extra) => `      <section class="seo-section seo-contact-section" aria-labelledby="contact-title">
        <div>
          <p class="eyebrow">Mağazamız</p>
          <h2 id="contact-title">Camikebir’de Buketia Flower</h2>
        </div>
        <div class="seo-contact-card">
          <a href="https://maps.app.goo.gl/1o3m3WtcM1YirCwD9" target="_blank" rel="noopener noreferrer">Camikebir, 52. Sokak No: 7/C<br />Seferihisar / İzmir ↗</a>
          <a href="tel:+905524072817">0552 407 28 17</a>
          <span>Hafta içi &amp; Cumartesi 08.30–20.30<br />Pazar 09.00–20.00</span>
          <span>${extra}</span>
        </div>
      </section>`;
const csp = `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests" />`;
function categoryPage(category) {
  const url = `${siteUrl}${category.slug}/`;
  const items = productsWithImage.filter((p) => category.match.some((key) => p.categories.includes(key)));
  if (!items.length) throw new Error(`kategoriler.mjs: ${category.slug} için ürün bulunamadı`);
  const whatsapp = `https://wa.me/905524072817?text=${encodeURIComponent(`Merhaba Buketia Flower, ${category.name.toLocaleLowerCase("tr-TR")} siparişi vermek istiyorum.`)}`;
  const cover = items.find(hasOwnName) || items[0];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: category.title, description: category.description, inLanguage: "tr", isPartOf: { "@id": `${siteUrl}#website` }, about: { "@id": `${siteUrl}#shop` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#list` } },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Buketia Flower", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Seferihisar Çiçekçi", item: `${siteUrl}seferihisar-cicekci/` },
          { "@type": "ListItem", position: 3, name: capitalize(category.heading), item: url }
        ]
      },
      { "@type": "ItemList", "@id": `${url}#list`, name: capitalize(category.heading), numberOfItems: items.length, itemListElement: items.map((p, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteUrl}${productPath(p)}`, name: translate(t, "tr", p).seoName })) },
      { "@type": "FAQPage", mainEntity: category.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
    ]
  };
  const otherCategories = categories.filter((c) => c.slug !== category.slug).map((c) => `<a href="/${c.slug}/">${c.name}</a>`).join(", ");
  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    ${csp}
    <script src="/language.js?v=20261009a" defer></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${headShared}
    <meta name="description" content="${escapeHtml(category.description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:site_name" content="Buketia Flower" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeHtml(category.title)}" />
    <meta property="og:description" content="${escapeHtml(category.description)}" />
    <meta property="og:image" content="${siteUrl}${cover.image}" />
    <meta property="og:image:width" content="${dims(cover).width}" />
    <meta property="og:image:height" content="${dims(cover).height}" />
    <meta property="og:image:alt" content="${escapeHtml(translate(t, "tr", cover).alt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    <!--build:shop-->${jsonLd(shop("tr"))}<!--/build:shop-->
    <title>${escapeHtml(category.title)}</title>
  </head>
  <body class="seo-page-body">${header}<main id="main" class="seo-page product-page">
      <nav class="product-breadcrumb" aria-label="Sayfa yolu"><a href="/">Buketia Flower</a><span aria-hidden="true">/</span><a href="/seferihisar-cicekci/">Seferihisar çiçekçi</a><span aria-hidden="true">/</span><span aria-current="page">${category.name}</span></nav>
      <section class="seo-hero" aria-labelledby="seo-title">
        <p class="eyebrow">Seferihisar / İzmir · ${items.length} tasarım · Aynı gün teslimat</p>
        <h1 id="seo-title">${capitalize(category.heading)}</h1>
        <p class="seo-lead">${category.lead}</p>
        ${googleRating}
        <div class="seo-actions">
          <a class="seo-button" href="#designs-title">Tasarımları incele <span aria-hidden="true">↓</span></a>
          <a class="seo-button seo-button-secondary" href="${whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp’tan sipariş ver <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section class="seo-section seo-two-column" aria-labelledby="about-title">
        <div>
          <p class="eyebrow">Buketia Flower</p>
          <h2 id="about-title">${category.name} siparişi nasıl verilir?</h2>
        </div>
        <div class="seo-copy">
          ${category.intro.map((text) => `<p>${text}</p>`).join("\n          ")}
        </div>
      </section>

      <section class="seo-section" aria-labelledby="occasions-title">
        <p class="eyebrow">Hangi gün için?</p>
        <h2 id="occasions-title">${category.name} seçenekleri</h2>
        <div class="seo-service-grid seo-service-grid-three">
          ${category.occasions.map(([heading, text]) => `<article><h3>${heading}</h3><p>${text}</p></article>`).join("\n          ")}
        </div>
      </section>

      <section class="seo-section" aria-labelledby="designs-title">
        <p class="eyebrow">Katalogdan · ${items.length} tasarım</p>
        <h2 id="designs-title">${category.name} tasarımlarımız</h2>
        <div class="product-grid">${items.map((p) => card(t, "tr", "/", p)).join("\n")}</div>
      </section>
${category.ribbons ? `
      <section class="seo-section" aria-labelledby="ribbons-title">
        <p class="eyebrow">Şerit yazısı örnekleri</p>
        <h2 id="ribbons-title">${category.ribbonsTitle}</h2>
        <p class="seo-copy">${category.ribbonsIntro}</p>
        <div class="seo-service-grid seo-service-grid-three">
          ${category.ribbons.map((group) => `<article><h3>${group.title}</h3><ul class="note-list">${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></article>`).join("\n          ")}
        </div>
      </section>
` : ""}${category.guide ? `
      <section class="seo-section seo-two-column" aria-labelledby="guide-title">
        <div>
          <p class="eyebrow">${category.name} rehberi</p>
          <h2 id="guide-title">${category.guideTitle}</h2>
        </div>
        <div class="seo-copy">
          ${category.guide.map(([heading, text]) => `<h3>${heading}</h3><p>${text}</p>`).join("\n          ")}
        </div>
      </section>
` : ""}
      <section class="seo-section seo-faq" aria-labelledby="faq-title">
        <p class="eyebrow">Sık sorulanlar</p>
        <h2 id="faq-title">${category.name} hakkında</h2>
        ${category.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("\n        ")}
      </section>

${contactSection(`Diğer çiçek çeşitleri: ${otherCategories}`)}
    </main>${footer}</body>
</html>
`;
}
for (const category of categories) {
  mkdirSync(category.slug, { recursive: true });
  writePage(`${category.slug}/index.html`, `${siteUrl}${category.slug}/`, categoryPage(category));
}
console.log(`${categories.length} kategori sayfası`);

function pageHead({ url, title, description, image, imageAlt, schema }) {
  const img = image
    ? { src: `${siteUrl}${image.image}`, ...dims(image), alt: imageAlt }
    : { src: `${siteUrl}assets/buketia-paylasim.jpg?v=2`, width: 1200, height: 630, alt: "Buketia Flower logosu ve buketleri" };
  return `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    ${csp}
    <script src="/language.js?v=20261009a" defer></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${headShared}
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:site_name" content="Buketia Flower" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${img.src}" />
    <meta property="og:image:width" content="${img.width}" />
    <meta property="og:image:height" content="${img.height}" />
    <meta property="og:image:alt" content="${escapeHtml(img.alt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
    <!--build:shop-->${jsonLd(shop("tr"))}<!--/build:shop-->
    <title>${escapeHtml(title)}</title>
  </head>`;
}
const crumbList = (url, name) => ({
  "@type": "BreadcrumbList",
  "@id": `${url}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Buketia Flower", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Seferihisar Çiçekçi", item: `${siteUrl}seferihisar-cicekci/` },
    { "@type": "ListItem", position: 3, name, item: url }
  ]
});
const noteList = (notes) => `<ul class="note-list">${notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}</ul>`;

// Özel gün sayfaları: öne çıkan kodlar + etiketli ürünler (en çok 16). FAQPage şeması bilerek yok (Google Mayıs 2026'dan beri göstermiyor).
function occasionPage(o) {
  const url = `${siteUrl}${o.slug}/`;
  const featured = o.featured.map((code) => {
    const product = productByCode.get(code);
    if (!product) throw new Error(`ozelgunler.mjs: ${o.slug} için ${code} ürünü bulunamadı`);
    return product;
  });
  const items = [...new Set([...featured, ...productsWithImage.filter((p) => p.occasions?.includes(o.tag))])].slice(0, 16);
  const notes = t.cardIdeas[o.tag]?.notes || [];
  const whatsapp = `https://wa.me/905524072817?text=${encodeURIComponent(`Merhaba Buketia Flower, ${o.name} için çiçek göndermek istiyorum.`)}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: o.title, description: o.description, inLanguage: "tr", isPartOf: { "@id": `${siteUrl}#website` }, about: { "@id": `${siteUrl}#shop` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#list` } },
      crumbList(url, capitalize(o.heading)),
      { "@type": "ItemList", "@id": `${url}#list`, name: capitalize(o.heading), numberOfItems: items.length, itemListElement: items.map((p, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteUrl}${productPath(p)}`, name: translate(t, "tr", p).seoName })) }
    ]
  };
  return `${pageHead({ url, title: o.title, description: o.description, image: items[0], imageAlt: translate(t, "tr", items[0]).alt, schema })}
  <body class="seo-page-body">${header}<main id="main" class="seo-page product-page">
      <nav class="product-breadcrumb" aria-label="Sayfa yolu"><a href="/">Buketia Flower</a><span aria-hidden="true">/</span><a href="/seferihisar-cicekci/">Seferihisar çiçekçi</a><span aria-hidden="true">/</span><span aria-current="page">${o.name}</span></nav>
      <section class="seo-hero" aria-labelledby="seo-title">
        <p class="eyebrow">${o.dateText} · Seferihisar / İzmir</p>
        <h1 id="seo-title">${o.heading}</h1>
        <p class="seo-lead">${o.lead}</p>
        ${googleRating}
        <div class="seo-actions">
          <a class="seo-button" href="#designs-title">Tasarımları incele <span aria-hidden="true">↓</span></a>
          <a class="seo-button seo-button-secondary" href="${whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp’tan sor <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section class="seo-section" aria-labelledby="designs-title">
        <p class="eyebrow">Katalogdan · ${items.length} tasarım</p>
        <h2 id="designs-title">${o.name} tasarımlarımız</h2>
        <div class="product-grid">${items.map((p) => card(t, "tr", "/", p)).join("\n")}</div>
      </section>

      <section class="seo-section seo-two-column" aria-labelledby="about-title">
        <div>
          <p class="eyebrow">Seçim rehberi</p>
          <h2 id="about-title">${o.introTitle}</h2>
        </div>
        <div class="seo-copy">
          ${o.intro.map((text) => `<p>${text}</p>`).join("\n          ")}
        </div>
      </section>
${o.sections.map((section, i) => `
      <section class="seo-section seo-two-column" aria-labelledby="section-${i + 1}-title">
        <div>
          <p class="eyebrow">${section.eyebrow}</p>
          <h2 id="section-${i + 1}-title">${section.title}</h2>
        </div>
        <div class="seo-copy">
          ${section.paragraphs.map((text) => `<p>${text}</p>`).join("\n          ")}
        </div>
      </section>
`).join("")}${notes.length ? `
      <section class="seo-section seo-two-column" aria-labelledby="notes-title">
        <div>
          <p class="eyebrow">Kart notu</p>
          <h2 id="notes-title">${o.notesTitle}</h2>
        </div>
        <div class="seo-copy">
          <p>${o.notesIntro}</p>
          ${noteList(notes)}
          ${guides[0] ? `<p><a class="local-guide-link" href="/${guides[0].slug}/">Diğer günler için çiçek notu örnekleri <span aria-hidden="true">↗</span></a></p>` : ""}
        </div>
      </section>
` : ""}
      <section class="seo-section seo-faq" aria-labelledby="faq-title">
        <p class="eyebrow">Sık sorulanlar</p>
        <h2 id="faq-title">${o.name} siparişi</h2>
        ${o.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("\n        ")}
      </section>

      <section class="seo-section" aria-labelledby="related-title">
        <p class="eyebrow">Daha fazlası</p>
        <h2 id="related-title">İlgili sayfalar</h2>
        <ul class="seo-area-links">${o.related.map(([href, text]) => `<li><a href="${href}">${text}</a></li>`).join("")}</ul>
      </section>

${contactSection(`Teslimat bölgeleri: <a href="/seferihisar-cicekci/">Seferihisar</a>, ${areaLinks()}`)}
    </main>${footer}</body>
</html>
`;
}
for (const o of occasions) {
  mkdirSync(o.slug, { recursive: true });
  writePage(`${o.slug}/index.html`, `${siteUrl}${o.slug}/`, occasionPage(o));
}
console.log(`${occasions.length} özel gün sayfası`);

// Rehber sayfaları: kart notu örnekleri i18n/tr.js cardIdeas'tan gelir (sipariş formundaki önerilerle aynı liste).
function guidePage(g) {
  const url = `${siteUrl}${g.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#webpage`, url, name: g.title, description: g.description, inLanguage: "tr", isPartOf: { "@id": `${siteUrl}#website` }, about: { "@id": `${siteUrl}#shop` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#article` } },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: capitalize(g.heading),
        description: g.description,
        inLanguage: "tr",
        mainEntityOfPage: { "@id": `${url}#webpage` },
        image: `${siteUrl}assets/buketia-paylasim.jpg`,
        datePublished: g.datePublished,
        dateModified: g.dateModified,
        author: { "@type": "Organization", name: "Buketia Flower", url: siteUrl },
        publisher: { "@id": `${siteUrl}#shop` }
      },
      crumbList(url, capitalize(g.heading))
    ]
  };
  return `${pageHead({ url, title: g.title, description: g.description, schema })}
  <body class="seo-page-body">${header}<main id="main" class="seo-page product-page">
      <nav class="product-breadcrumb" aria-label="Sayfa yolu"><a href="/">Buketia Flower</a><span aria-hidden="true">/</span><a href="/seferihisar-cicekci/">Seferihisar çiçekçi</a><span aria-hidden="true">/</span><span aria-current="page">${g.name}</span></nav>
      <section class="seo-hero" aria-labelledby="seo-title">
        <p class="eyebrow">Rehber · Buketia Flower</p>
        <h1 id="seo-title">${capitalize(g.heading)}</h1>
        <p class="seo-lead">${g.lead}</p>
        <ul class="seo-area-links">${g.sections.map((section) => `<li><a href="#${section.key}">${t.cardIdeas[section.key].label}</a></li>`).join("")}</ul>
      </section>
${g.sections.map((section) => {
  const ideas = t.cardIdeas[section.key];
  if (!ideas) throw new Error(`rehberler.mjs: ${section.key} için i18n/tr.js cardIdeas bulunamadı`);
  return `
      <section class="seo-section seo-two-column" id="${section.key}" aria-labelledby="${section.key}-title">
        <div>
          <p class="eyebrow">${ideas.label}</p>
          <h2 id="${section.key}-title">${section.title}</h2>
        </div>
        <div class="seo-copy">
          <p>${section.intro}</p>
          ${noteList(ideas.notes)}
          <p><a class="local-guide-link" href="${section.link[0]}">${section.link[1]} <span aria-hidden="true">↗</span></a></p>
        </div>
      </section>
`;
}).join("")}
      <section class="seo-section" aria-labelledby="tips-title">
        <p class="eyebrow">Not yazarken</p>
        <h2 id="tips-title">Kart notu için dört ipucu</h2>
        <div class="seo-service-grid">
          ${g.tips.map(([heading, text]) => `<article><h3>${heading}</h3><p>${text}</p></article>`).join("\n          ")}
        </div>
        <div class="seo-actions"><a class="seo-button" href="/#catalog">Çiçeği seçin, notu formda yazın <span aria-hidden="true">↗</span></a></div>
      </section>

${contactSection(`Çiçek çeşitleri: ${categoryLinks}`)}
    </main>${footer}</body>
</html>
`;
}
for (const g of guides) {
  mkdirSync(g.slug, { recursive: true });
  writePage(`${g.slug}/index.html`, `${siteUrl}${g.slug}/`, guidePage(g));
}
console.log(`${guides.length} rehber sayfası`);

// GitHub Pages bulunamayan adreslerde 404.html'i gösterir; ziyaretçiyi kataloğa ve kategorilere yönlendirir.
writePage("404.html", `${siteUrl}404.html`, `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    ${csp}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${headShared}
    <meta name="robots" content="noindex" />
    <title>Sayfa bulunamadı | Buketia Flower</title>
  </head>
  <body class="seo-page-body">${header}<main id="main" class="seo-page product-page">
      <section class="seo-hero" aria-labelledby="seo-title">
        <p class="eyebrow">404</p>
        <h1 id="seo-title">Aradığınız sayfa bulunamadı</h1>
        <p class="seo-lead">Bu adres değişmiş ya da kaldırılmış olabilir. Kataloğumuza göz atın ya da bir çiçek çeşidi seçin.</p>
        <div class="seo-actions">
          <a class="seo-button" href="/#catalog">Çiçek kataloğunu incele <span aria-hidden="true">↗</span></a>
          <a class="seo-button seo-button-secondary" href="https://wa.me/905524072817" target="_blank" rel="noopener noreferrer">WhatsApp’tan sor <span aria-hidden="true">↗</span></a>
        </div>
        <ul class="seo-area-links">${categories.map((category) => `<li><a href="/${category.slug}/">${capitalize(category.heading)}</a></li>`).join("")}</ul>
      </section>
    </main>${footer}</body>
</html>
`);

// IndexNow: bu build'de değişen adresler .indexnow-bekleyen.json'a eklenir (yayınlanmaz, .gitignore'da).
// Yayından SONRA `node indexnow.mjs` ile Bing ve Yandex'e bildirilir.
{
  const pendingFile = ".indexnow-bekleyen.json";
  let pending = [];
  try { pending = JSON.parse(readFileSync(pendingFile, "utf8")); } catch {}
  const merged = [...new Set([...pending, ...changedUrls, ...(changedUrls.size ? [`${siteUrl}sitemap.xml`] : [])])];
  if (merged.length) writeFileSync(pendingFile, JSON.stringify(merged, null, 1));
}

// sitemap.xml: değişmeyen sayfalar eski lastmod tarihini korur.
const previous = new Map([...readFileSync("sitemap.xml", "utf8").matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((m) => [m[1], m[2]]));
const lastmod = (url) => (changedUrls.has(url) || !previous.has(url) ? today : previous.get(url));
const alternates = languages.map((lang) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${siteUrl}${lang === "tr" ? "" : `${lang}/`}" />`).join("\n") + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}" />`;
const entries = [
  ...languages.map((lang) => {
    const url = `${siteUrl}${lang === "tr" ? "" : `${lang}/`}`;
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod(url)}</lastmod>\n${alternates}\n  </url>`;
  }),
  ...["seferihisar-cicekci", ...categories.map((category) => category.slug), ...occasions.map((o) => o.slug), ...guides.map((g) => g.slug), ...areas.map((area) => area.slug)].map((slug) => `  <url>\n    <loc>${siteUrl}${slug}/</loc>\n    <lastmod>${lastmod(`${siteUrl}${slug}/`)}</lastmod>\n  </url>`),
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
