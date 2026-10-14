// Buketia ürün görsellerini Google Drive'a kategori klasörleriyle aktarır.
// Kullanım: script.google.com → Yeni proje → bu dosyanın tamamını yapıştırın → driveAktar'ı çalıştırın → izin verin.
// Tekrar çalıştırmak güvenlidir: Drive'da zaten olan görseller atlanır, yalnızca yeni ürünler eklenir.
// Görsel listesi GitHub'daki products.js'ten okunur; site ana branch'e alındıktan sonra BRANCH'i "main" yapın.
const REPO = "invviola/Buketia-Flower-Web-Site";
const BRANCH = "ccr-5d051f08-43s4ns";
const ANA_KLASOR = "Buketia Ürün Görselleri";
const KATEGORILER = {
  "buket": "Buket", "celenk": "Çelenk", "isteme-cicek-cikolata": "İsteme Çiçekleri & Çikolataları",
  "orkide": "Orkide", "ozel-aranjman": "Özel Aranjman", "sevgiliye": "Sevgiliye",
  "yapay-aranjman": "Yapay Aranjman", "yapay-buket": "Yapay Buket", "yeni-dogum": "Yeni Doğum"
};

function driveAktar() {
  const raw = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/`;
  const urunler = UrlFetchApp.fetch(raw + "products.js").getContentText();
  const gorseller = [...urunler.matchAll(/"assets\/urunler\/([^/"]+)\/([^/"]+\.(?:jpe?g|png|webp))"/g)].map((m) => ({ kategori: m[1], dosya: m[2] }));

  const ana = klasor(DriveApp.getRootFolder(), ANA_KLASOR);
  const klasorler = {};
  const yapilacak = gorseller.filter((g) => {
    if (!klasorler[g.kategori]) klasorler[g.kategori] = klasor(ana, KATEGORILER[g.kategori] || g.kategori);
    const k = klasorler[g.kategori];
    return !k.getFilesByName(g.dosya).hasNext();
  });

  // 20'şerli gruplar hâlinde paralel indirilir; Apps Script'in 6 dakika sınırına takılırsa tekrar çalıştırın, kaldığı yerden devam eder.
  for (let i = 0; i < yapilacak.length; i += 20) {
    const grup = yapilacak.slice(i, i + 20);
    const yanitlar = UrlFetchApp.fetchAll(grup.map((g) => ({ url: `${raw}assets/urunler/${g.kategori}/${g.dosya}`, muteHttpExceptions: true })));
    yanitlar.forEach((yanit, j) => {
      if (yanit.getResponseCode() !== 200) return console.warn(`İndirilemedi: ${grup[j].dosya}`);
      klasorler[grup[j].kategori].createFile(yanit.getBlob().setName(grup[j].dosya));
    });
    console.log(`${Math.min(i + 20, yapilacak.length)} / ${yapilacak.length}`);
  }
  console.log(`Bitti. ${gorseller.length} görselden ${yapilacak.length} tanesi yeni eklendi. Drive'da "${ANA_KLASOR}" klasörüne bakın.`);
}

function klasor(ust, ad) {
  const varolan = ust.getFoldersByName(ad);
  return varolan.hasNext() ? varolan.next() : ust.createFolder(ad);
}
