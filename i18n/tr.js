// Türkçe dil dosyası: app.js'in ekrana yazdığı dinamik metinler ve ürün çevirileri (yalnızca bu dili konuşan sayfa yükler).
// Yeni ürün eklerken products.js'teki id ile en, ru ve de dosyalarına da çeviri ekleyin; çeviri yoksa Türkçe görünür.
(window.BUKETIA_I18N ||= {}).tr = {
  locale: "tr-TR",
  cart: {
    add: "Sepete ekle",
    remove: "Sepetten çıkar",
    open: (n) => `Sepeti görüntüle (${n})`,
    fab: (n) => `Sepet · ${n}`,
    title: "Sepetiniz",
    close: "Sepeti kapat",
    empty: "Sepetiniz boş. Beğendiğiniz tasarımları sepete ekleyin.",
    count: (n) => `${n} ürün`,
    removeItem: (code) => `${code} ürününü sepetten çıkar`,
    clear: "Sepeti temizle",
    checkout: "Siparişi tamamla",
    note: "Seçtiğiniz tüm ürünler tek siparişte, aynı teslimat bilgileriyle iletilir.",
    full: "Sepete en fazla 8 ürün eklenebilir."
  },
  time: (h, m) => `${h}.${m}`,
  count: (n) => `${n} tasarım`,
  empty: "Bu kategoriye yakında yeni tasarımlar eklenecek.",
  searchEmpty: "Aramanıza uygun ürün bulunamadı. Ürün kodunu veya adını kontrol edin.",
  imagePending: "Görsel eklenecek",
  priceNote: "Fiyat bilgisi WhatsApp üzerinden iletilir.",
  formError: "Lütfen zorunlu alanları tamamlayın.",
  orderStart: "Sipariş oluştur", zoomPhoto: "Fotoğrafı büyüt", closePhoto: "Kapat", backToProduct: "Ürüne dön",
  next: "Devam", stepOf: (n, total) => `Adım ${n} / ${total}`,
  stepQuestions: ["Ne zaman teslim edelim?", "Çiçekler kime gidiyor?", "Sizi nasıl arayalım?"],
  viewProduct: (name) => `${name} ürününü incele`,
  openNow: (t) => `Şu an açık · ${t}’${t.endsWith(".00") ? "ye" : "a"} kadar`,
  opensToday: (t) => `Şu an kapalı · ${t}’da açılır`,
  opensTomorrow: (t) => `Şu an kapalı · yarın ${t}’da açılır`,
  message: {
    intro: "Merhaba Buketia Flower, bu ürün için sipariş vermek istiyorum:",
    introCart: "Merhaba Buketia Flower, bu ürünler için tek sipariş vermek istiyorum:",
    product: "Ürün", productCode: "Ürün kodu", budget: "Bütçe", delivery: "Teslimat", recipient: "Alıcı", recipientPhone: "Alıcı telefonu", address: "Adres",
    courier: "Kurye ücreti: Buketia tarafından belirlenecek", card: "Kart notu", customer: "Siparişi veren", phone: "Telefon"
  },
  categories: {},
  products: {}
};
