// Değişen sayfaları IndexNow ile Bing ve Yandex'e bildirir (Google IndexNow kullanmaz).
// Kullanım: siteyi yayına aldıktan SONRA `node indexnow.mjs` (önce görmek için: `node indexnow.mjs --dry-run`).
// Liste `node build.mjs` tarafından .indexnow-bekleyen.json'a yazılır; başarılı gönderimden sonra dosya silinir.
// Anahtar dosyası (427b84f43d7115aee0501227c475e861.txt) sitede yayında kalmalıdır, silmeyin.
import { existsSync, readFileSync, rmSync } from "node:fs";

const key = "427b84f43d7115aee0501227c475e861";
const host = "buketiaflower.com";
const pendingFile = ".indexnow-bekleyen.json";
// 404 sayfası dizine eklenmez, bildirilmez.
const urlList = (existsSync(pendingFile) ? JSON.parse(readFileSync(pendingFile, "utf8")) : []).filter((url) => !url.endsWith("/404.html"));
if (!urlList.length) {
  console.log("Bildirilecek adres yok.");
  process.exit(0);
}
const body = { host, key, keyLocation: `https://${host}/${key}.txt`, urlList };
if (process.argv.includes("--dry-run")) {
  console.log(JSON.stringify(body, null, 2));
  process.exit(0);
}
const response = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body)
});
console.log(`IndexNow: ${response.status} ${response.statusText} (${urlList.length} adres)`);
if (response.ok) rmSync(pendingFile);
else process.exitCode = 1;
