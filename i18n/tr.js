// Türkçe dil dosyası: app.js'in ekrana yazdığı dinamik metinler ve ürün çevirileri (yalnızca bu dili konuşan sayfa yükler).
// Yeni ürün eklerken products.js'teki id ile en, ru ve de dosyalarına da çeviri ekleyin; çeviri yoksa Türkçe görünür.
(window.BUKETIA_I18N ||= {}).tr = {
  locale: "tr-TR",
  cart: {
    prev: "Önceki ürün",
    next: "Sonraki ürün",
    position: (i, n) => `${i} / ${n}`,
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
  searchAsk: (q) => `Merhaba Buketia Flower, sitenizde "${q}" aradım. Bu tarz bir tasarım hazırlayabilir misiniz?`,
  searchAskLink: "WhatsApp’tan bize sorun ↗",
  phoneInvalid: "Lütfen geçerli bir telefon numarası yazın (en az 10 rakam).",
  sentNotice: "Mesajınız WhatsApp’ta hazır. Siparişin bize ulaşması için WhatsApp’ta Gönder’e dokunun.",
  sentFallback: "WhatsApp açılmadıysa buraya dokunun ↗",
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
  // Kart notu önerileri: sipariş formunda kart notu kutusunun altında (app.js) ve /cicek-notu-ornekleri/ rehberinde (build.mjs) kullanılır.
  // Anahtarlar products.js'teki occasions etiketleridir; açık ürünün etiketi olan grup öne alınır. Notlar özgün ve kısa olmalı.
  cardIdeasTitle: "Fikir ister misiniz?",
  cardIdeas: {
    "ogretmenler-gunu": { label: "Öğretmenler Günü", notes: [
      "Sabrınız ve emeğiniz için teşekkür ederiz. Öğretmenler Gününüz kutlu olsun!",
      "İyi ki öğretmenimsiniz. Öğrettiğiniz her şey için teşekkürler.",
      "Sınıfımıza kattığınız her şey için minnettarız. — 4-A velileri",
      "Okumayı ve yazmayı sizinle sevdim. Gününüz kutlu olsun, öğretmenim.",
      "Yıllar geçti ama öğrettikleriniz hâlâ bizimle. Öğretmenler Gününüz kutlu olsun.",
      "Her sabah bizi güler yüzle karşıladığınız için teşekkürler."
    ] },
    "dogum-gunu": { label: "Doğum günü", notes: [
      "Nice mutlu yaşlara! Yeni yaşın sana güzellikler getirsin.",
      "İyi ki doğdun, iyi ki varsın. Bu yıl dileklerin bir bir gerçek olsun.",
      "Bugün senin günün, tadını çıkar! Doğum günün kutlu olsun.",
      "Bir yaş daha büyüdün ama gülüşün hep aynı kalsın. Nice yıllara!",
      "Doğum gününüz kutlu olsun; sağlıkla, huzurla nice yıllara."
    ] },
    sevgiliye: { label: "Sevgiliye", notes: [
      "Seninle her gün biraz daha güzel. Seni seviyorum.",
      "Aklımdasın, hem de her an.",
      "Bu çiçekler sadece bir bahane; asıl söylemek istediğim: iyi ki varsın.",
      "Birlikte nice yıllara, sevgilim.",
      "Gülümsemen için gönderildi."
    ] },
    "gecmis-olsun": { label: "Geçmiş olsun", notes: [
      "Geçmiş olsun! En kısa zamanda sağlığına kavuşmanı diliyoruz.",
      "Çabuk iyileş, seni yeniden aramızda görmek için sabırsızlanıyoruz.",
      "Bu çiçekler odanı biraz aydınlatsın. Acil şifalar dileriz.",
      "Dinlen, kendine iyi bak. Hep yanındayız."
    ] },
    "yeni-dogan": { label: "Yeni doğan", notes: [
      "Aramıza hoş geldin minik! Anne ve babasına da tebrikler.",
      "Bebeğiniz sağlıkla, mutlulukla büyüsün. Gözünüz aydın!",
      "Evinize gelen bu mutluluğu en içten dileklerimizle kutlarız.",
      "Hoş geldin bebek, hayatın çiçekler gibi renkli olsun."
    ] },
    "tebrik-kutlama": { label: "Tebrik", notes: [
      "Tebrikler! Bu başarıyı fazlasıyla hak ettin.",
      "Yeni işinizde bol şans ve bereket dileriz.",
      "Emeğinin karşılığını aldığın bu günü kutlarız. Nice başarılara!",
      "Yeni evinizde huzur ve mutluluk dileriz.",
      "Mezuniyetin kutlu olsun, yolun hep açık olsun."
    ] },
    "cenaze-taziye": { label: "Taziye", notes: [
      "Başınız sağ olsun. Acınızı yürekten paylaşıyoruz.",
      "Merhuma Allah’tan rahmet, ailesine ve sevenlerine sabır diliyoruz.",
      "Güzel anılarıyla hep kalbimizde yaşayacak. Başınız sağ olsun.",
      "Bu zor günde düşüncelerimiz sizinle."
    ] },
    tesekkur: { label: "Teşekkür", notes: [
      "Her şey için teşekkür ederim, iyi ki varsın.",
      "Desteğin benim için çok değerliydi. Minnettarım.",
      "Küçük bir teşekkür, büyük bir sevgiyle.",
      "Yaptığınız iyiliği unutmayacağız. Çok teşekkürler."
    ] }
  },
  categories: {},
  products: {}
};
