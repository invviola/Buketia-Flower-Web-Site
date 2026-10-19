// Özel gün sayfaları (/ogretmenler-gunu-cicek-seferihisar/ vb.). build.mjs her kayıt için bir sayfa üretir; ürünler önce `featured`
// kodlarından, sonra products.js'te `occasions` etiketinde `tag` olan fotoğraflı ürünlerden gelir (en çok 16).
// Kurallar: adreste yıl olmaz ve sayfa gün geçince silinmez (gelecek yıl dateText ile showFrom/showUntil güncellenir).
// Bölge × özel gün sayfası açmayın (kapı sayfası riski). Doğrulanmamış vaat yazmayın: okula teslim saati, toplu sipariş indirimi,
// son sipariş saati ve kurye ücreti sahip onayı bekliyor; bunlar için "WhatsApp'tan teyit ederiz" deyin.
// Ana sayfadaki duyuru bandı showFrom–showUntil arasında görünür (app.js, İstanbul tarihi).
// Kart notu örnekleri i18n/tr.js cardIdeas[tag] alanından gelir (sipariş formundaki öneriler de aynı listeyi kullanır).
export const occasions = [
  {
    slug: "ogretmenler-gunu-cicek-seferihisar",
    tag: "ogretmenler-gunu",
    name: "Öğretmenler Günü",
    heading: "Öğretmenler Günü çiçekleri · Seferihisar",
    title: "Öğretmenler Günü Çiçeği Seferihisar · 24 Kasım | Buketia",
    description: "24 Kasım Öğretmenler Günü için orkide, buket ve aranjman; öğretmene çiçek notu örnekleri. Seferihisar ve çevresine teslim; Buketia Flower’dan sipariş.",
    dateText: "24 Kasım 2026 Salı",
    band: "Öğretmenler Günü · 24 Kasım Salı: tasarımları gör",
    showFrom: "2026-10-20",
    showUntil: "2026-11-25",
    featured: ["BKT-019", "BKT-010", "BKT-014", "BKT-016", "BKT-017", "BKT-007", "ORK-002", "ORK-003", "OAR-002"],
    lead: "Bir öğretmene teşekkür etmenin en sade yolu, üzerinde birkaç satır not olan bir çiçek. 24 Kasım için buketleri, orkideleri ve sepet aranjmanlarını Seferihisar Camikebir’deki mağazamızda hazırlıyoruz.",
    introTitle: "Öğretmene hangi çiçek?",
    notesTitle: "Öğretmene kısa kart notu örnekleri",
    intro: [
      "Öğretmene gidecek çiçekte ilk düşünülmesi gereken şey ölçü. Çok iri bir buket sınıfta yer kaplar, okul çıkışı eve taşımak da zahmetli olur. Bu sayfaya elde rahat taşınan buketleri ve uzun süre dayanan orkideleri seçtik.",
      "Renkte sarı, turuncu ve beyaz gibi aydınlık tonlar sınıf ortamına iyi gider. Ayçiçekli Güneşli Gün (BKT-010) ile rengârenk Yaz Şenliği (BKT-019) bu yüzden listenin başında. Daha sakin bir seçim isterseniz beyaz papatyalı ve lilyumlu buketlere bakabilirsiniz.",
      "Beğendiğiniz tasarıma dokunup siparişi oluşturun. Teslimat günü, alıcının adı ve kart notunuz tek bir WhatsApp mesajında bize gelir; fiyatı ve ayrıntıları oradan birlikte netleştiririz."
    ],
    sections: [
      {
        eyebrow: "Erkek öğretmene",
        title: "Erkek öğretmen için çiçek seçimi",
        paragraphs: [
          "Erkek öğretmene çiçek alırken pembe ve pastel tonlar yerine yeşil, sarı ve beyaz ağırlıklı tasarımlar daha dengeli durur. Koyu yeşil ambalajlı Orman Buketi (BKT-016), ayçiçeği ve solidagolu sade bir buket ya da tek renk bir orkide iyi birer seçenek.",
          "Orkide, vazo ve su değişimi istemediği için okul müdürüne ya da idari kadroya gönderilecek çiçekte de pratik bir tercih; masada haftalarca güzel görünür."
        ]
      },
      {
        eyebrow: "Sınıf adına",
        title: "Veliler adına ortak çiçek",
        paragraphs: [
          "Sınıf adına tek bir çiçek göndermek isteyen velilerin siparişi tek kişinin vermesi yeterli. Alıcıya öğretmenin adını, kart notuna da sınıfın adını yazın; örneğin “4-A sınıfı öğrencileri ve velileri”.",
          "Aynı okulda birden fazla öğretmene çiçek gidecekse tasarımları sepete ekleyip tek siparişte gönderebilirsiniz. Hangi çiçeğin kime gideceğini ve her birinin notunu WhatsApp’ta sizinle tek tek teyit ederiz."
        ]
      }
    ],
    notesIntro: "Kart notu kısa olduğunda daha içten okunur. Aşağıdaki örnekleri olduğu gibi kullanabilir ya da kendi cümlenizle değiştirebilirsiniz; sipariş formundaki kart notu kutusunun altında da aynı öneriler var.",
    faq: [
      ["Öğretmenler Günü ne zaman?", "Her yıl 24 Kasım’da kutlanır. 2026’da Salı gününe denk geliyor."],
      ["Siparişi ne zaman vermeliyim?", "Bu haftalarda sipariş yoğun olduğu için birkaç gün önceden yazmanızı öneririz. Teslimat gününü ve saat aralığını formda seçebilirsiniz; uygunluğunu WhatsApp’tan teyit ederiz."],
      ["Çiçeği okula gönderebilir miyim?", "Teslimat adresini ve istediğiniz saati sipariş sırasında yazın. Okul, ev ya da başka bir adres için uygunluğu sizinle WhatsApp’tan konuşup netleştiririz."],
      ["Kart notuna ne yazacağımı bilmiyorum.", "Bu sayfadaki örneklerden birini seçebilir ya da <a href=\"/cicek-notu-ornekleri/\">çiçek notu örnekleri</a> rehberimize bakabilirsiniz. Notunuzu kartla birlikte çiçeğin yanına ekleriz."],
      ["Fiyatları nereden öğrenebilirim?", "Fiyatlar sitede yazmıyor; seçtiğiniz tasarımın fiyatını WhatsApp’tan iletiyoruz. Bütçenizi söylerseniz o aralıkta tasarım da önerebiliriz."]
    ],
    related: [
      ["/seferihisar-buket/", "Tüm buketler"],
      ["/seferihisar-orkide-aranjman/", "Orkide ve aranjmanlar"],
      ["/cicek-notu-ornekleri/", "Çiçek notu örnekleri"]
    ]
  }
];
