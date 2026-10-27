// Rehber sayfaları (/cicek-notu-ornekleri/ vb.). build.mjs her kayıt için bir sayfa üretir.
// Kart notu örnekleri i18n/tr.js cardIdeas alanından gelir; burada yalnız bölüm başlığı, kısa giriş ve ilgili sayfa bağlantısı yazılır.
// datePublished ilk yayın tarihidir; metin değişince dateModified güncellenir.
export const guides = [
  {
    slug: "cicek-notu-ornekleri",
    name: "Çiçek notu örnekleri",
    heading: "Çiçek kart notu örnekleri",
    title: "Çiçek Notu Örnekleri · Kart Notuna Ne Yazılır? | Buketia",
    description: "Öğretmenler Günü, doğum günü, sevgiliye, geçmiş olsun, yeni doğan ve taziye için kısa çiçek kart notu örnekleri. Kart notuna ne yazılır, nasıl imzalanır?",
    datePublished: "2026-10-20",
    dateModified: "2026-10-27",
    lead: "Çiçeği seçmek kolay, karta ne yazacağını bulmak zor. Siparişlerde en sık karşılaştığımız günler için kısa ve içten not örneklerini bir araya getirdik; olduğu gibi kullanabilir ya da kendi cümlenizle değiştirebilirsiniz.",
    sections: [
      { key: "ogretmenler-gunu", title: "Öğretmene çiçek notu", intro: "Öğretmene gönderilecek çiçek için sade bir teşekkür yeterli. Sınıf adına gönderiyorsanız sınıfın adını imza olarak ekleyin.", link: ["/seferihisar-buket/", "Buketler"] },
      { key: "dogum-gunu", title: "Doğum günü notları", intro: "Doğum günü notunda samimiyet ölçüyü belirler: yakın bir arkadaşa “sen”, iş arkadaşına “siz” diye yazmak notu doğru tona oturtur.", link: ["/seferihisar-buket/", "Doğum günü buketleri"] },
      { key: "sevgiliye", title: "Sevgiliye kart notu", intro: "Sevgiliye yazılan notta uzun cümleler yerine sizin ikinizin diliyle tek bir satır çoğu zaman daha etkili olur.", link: ["/sevgiliye-cicek-seferihisar/", "Sevgiliye çiçekler"] },
      { key: "gecmis-olsun", title: "Geçmiş olsun notları", intro: "Hastaneye ya da eve gönderilen çiçekte notu kısa ve umut veren bir dille yazın; hastalığın ayrıntısına girmeyin.", link: ["/seferihisar-orkide-aranjman/", "Vazo istemeyen aranjmanlar"] },
      { key: "yeni-dogan", title: "Yeni doğan bebeğe not", intro: "Yeni doğan notları hem bebeğe hem de anne babaya seslenebilir. Bebeğin adını biliyorsanız nota eklemek güzel bir dokunuş olur.", link: ["/seferihisar-orkide-aranjman/", "Orkide ve aranjmanlar"] },
      { key: "tebrik-kutlama", title: "Tebrik ve yeni iş notları", intro: "Terfi, mezuniyet, yeni iş yeri ya da yeni ev: tebrik notunda neyi kutladığınızı açıkça yazmak notu kişisel kılar.", link: ["/seferihisar-orkide-aranjman/", "Yeni iş için orkideler"] },
      { key: "cenaze-taziye", title: "Taziye ve cenaze notları", intro: "Taziye notunda süslü sözlerden kaçının; kısa, saygılı bir cümle ve açık bir imza yeterlidir. Çelenk şeridine yazılacak metinler için çelenk sayfamızdaki örneklere bakabilirsiniz.", link: ["/seferihisar-celenk/", "Çelenk ve şerit yazısı örnekleri"] },
      { key: "tesekkur", title: "Teşekkür notları", intro: "Teşekkür notunda neye teşekkür ettiğinizi tek kelimeyle bile belirtmek, notu sıradan bir “teşekkürler”den ayırır.", link: ["/seferihisar-buket/", "Buketler"] }
    ],
    tips: [
      ["Kısa tutun", "Kart küçüktür; iki üç cümle hem okunaklı durur hem de daha içten okunur."],
      ["İmzayı unutmayın", "Alıcı çiçeğin kimden geldiğini ilk bakışta anlamalı. Adınızı, birden fazla kişi gönderiyorsa grubun adını yazın."],
      ["Sürprizse belirtin", "Notun imzasız ya da “Seni seven biri” diye kalmasını istiyorsanız sipariş sırasında bunu söyleyin."],
      ["Yazımı kontrol edin", "Not, formda yazdığınız şekliyle karta aktarılır; özellikle isimleri bir kez daha kontrol edin."]
    ]
  }
];
