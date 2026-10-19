// Kategori sayfaları (/seferihisar-celenk/ vb.). build.mjs her kategori için, products.js'teki `categories` alanı
// `match` listesindeki kategorilerden birini içeren tüm ürünleri listeleyen bir sayfa üretir; ürün sayfalarının sayfa yolu da buraya bağlanır.
// Metinler yalnızca gerçekten sunulan hizmeti anlatmalı (fiyat, süre gibi doğrulanmamış vaat eklemeyin).
// `primary`: ürün sayfasının sayfa yolunda gösterilecek kategori sayfası (ürünün ana kategorisi `match` içindeyse).
export const categories = [
  {
    slug: "seferihisar-celenk",
    name: "Çelenk",
    match: ["Çelenk"],
    heading: "Seferihisar çelenk siparişi",
    title: "Seferihisar Çelenk Siparişi · Cenaze ve Açılış | Buketia",
    description: "Seferihisar’da çelenk siparişi: cenaze ve taziye, açılış, düğün ve tören için ayaklı çelenkler. Şerit yazısıyla aynı gün teslimat; Buketia Flower’dan WhatsApp ile sipariş verin.",
    lead: "Cenaze ve taziye, açılış, düğün ve törenler için ayaklı çelenkleri Seferihisar Camikebir’deki mağazamızda hazırlıyor, şerit yazısıyla birlikte aynı gün teslim ediyoruz.",
    intro: [
      "Çelenk çoğu zaman kısa sürede yetişmesi gereken bir sipariştir. Aşağıdan tasarımı seçin, ürün kodunu WhatsApp’tan iletin; teslimat adresini, saati ve şeritte yazmasını istediğiniz metni yazmanız yeterli.",
      "Seferihisar merkezin yanı sıra Sığacık, Ürkmez, Doğanbey, Ulamış ve komşu ilçe Urla’ya da çelenk gönderiyoruz. Kurye ücreti adrese göre belirlenir ve sipariş onayından önce size bildirilir."
    ],
    occasions: [
      ["Cenaze ve taziye", "Cenaze ya da taziye adresine sade renklerde, şerit yazılı ayaklı çelenk."],
      ["Açılış ve kutlama", "Yeni iş yeri, mağaza ya da ofis açılışı için canlı renklerde ayaklı çelenk."],
      ["Düğün, nişan ve tören", "Düğün, nişan ve resmi törenler için tebrik çelengi."]
    ],
    faq: [
      ["Çelengi aynı gün gönderebilir misiniz?", "Evet. Seferihisar ve çevresine aynı gün çelenk teslimatı yapıyoruz; teslimat saatini sipariş sırasında birlikte belirleriz."],
      ["Şerit yazısı ekleniyor mu?", "Evet. Şeritte yazmasını istediğiniz metni sipariş sırasında iletin; çelenge ekleyelim."],
      ["Çelenk fiyatları ne kadar?", "Fiyat bilgisi WhatsApp üzerinden iletilir. Adrese göre belirlenen kurye ücretini de sipariş onayından önce bildiririz."]
    ],
    // İsteğe bağlı alanlar (yalnız bu kategoride): şerit yazısı örnekleri ve kısa rehber. Taziye dili sade ve saygılı kalmalı;
    // şerit uzunluğu, tek/çift şerit ve son sipariş saati sahip onayı bekliyor, yazmayın.
    ribbonsTitle: "Çelenk şeridine ne yazılır?",
    ribbonsIntro: "Köşeli parantez içindeki yerlere kendi adınızı ya da kurumunuzun adını yazın. Metni sipariş sırasında iletmeniz yeterli; yazımı WhatsApp’tan sizinle teyit ederiz.",
    guideTitle: "Şerit yazısı ve renk seçimi",
    ribbons: [
      { title: "Cenaze ve taziye çelengi yazıları", items: [
        "Merhuma rahmet, ailesine başsağlığı dileriz · [Gönderen]",
        "Allah rahmet eylesin · [Ad Soyad]",
        "Başınız sağ olsun · [Ad Soyad] ve ailesi",
        "Acınızı paylaşıyoruz · [Kurum adı]",
        "Huzur içinde uyusun · [Gönderen]",
        "Saygıyla anıyoruz · [Kurum adı] çalışanları",
        "Sevgili [Ad], seni hiç unutmayacağız · [Gönderen]"
      ] },
      { title: "Açılış çelengi yazıları", items: [
        "Hayırlı olsun, bol kazançlar · [Gönderen]",
        "Yeni iş yerinize hayırlı uğurlu olsun · [Kurum adı]",
        "Başarılarınızın devamını dileriz · [Ad Soyad]",
        "Bereketli, bol müşterili günler · [Gönderen]",
        "Yeni şubeniz hayırlı olsun · [Kurum adı] ailesi",
        "Nice başarılı yıllara · [Kurum adı]"
      ] },
      { title: "Düğün ve nişan çelengi yazıları", items: [
        "Ömür boyu mutluluklar dileriz · [Gönderen]",
        "Bir yastıkta kocayın · [Ad Soyad] ve ailesi",
        "Nişanınız hayırlı olsun · [Gönderen]",
        "Sevgiyle, nice mutlu yıllara · [Kurum adı]"
      ] }
    ],
    guide: [
      ["Şeride ne yazılır?", "Çelenk şeridinde genellikle iki bölüm olur: kısa bir dilek ve gönderenin adı. Mesajı birkaç kelimede tutmak yazının uzaktan da okunmasını sağlar. Kişi olarak gönderiyorsanız adınızı ve soyadınızı, aile adına gönderiyorsanız “… ve ailesi” biçimini kullanın."],
      ["Kurum adı nasıl yazılır?", "Şirket, dernek, okul ya da kamu kurumu adına gönderilen çelenkte kurumun tam adını yazın; kısaltma kullanacaksanız alıcının tanıdığı biçimi seçin. “Yönetim Kurulu”, “çalışanları” ya da “ailesi” gibi eklerle çelengin kimin adına geldiği netleşir. Yazımı sipariş sırasında WhatsApp’tan sizinle teyit ederiz."],
      ["Cenaze çelengi tasarımları", "Cenaze ve taziye için beyaz ve krem tonlar en çok tercih edilen renklerdir. Krem gerberalı <a href=\"/urun/clk-017/\">CLK-017</a>, iki katlı <a href=\"/urun/clk-018/\">CLK-018</a> ve krem papatyalı <a href=\"/urun/clk-021/\">CLK-021</a> sade görünümleriyle bu tür törenlere uygundur."],
      ["Açılış çelengi tasarımları", "Açılış, yıl dönümü ve kutlamalarda canlı renkler öne çıkar. Sarı ve turuncu tonlu <a href=\"/urun/clk-005/\">CLK-005</a> ile <a href=\"/urun/clk-009/\">CLK-009</a> ya da kırmızı-beyaz tasarımlar iş yerinin önünde uzaktan fark edilir."],
      ["Renk seçimi", "Kararsız kaldığınızda beyaz ve krem her durumda saygılı bir seçimdir. Kırmızı ve canlı tonlar kutlamaya, beyaz ve krem anmaya daha yakındır. Kurumunuzun renklerine uygun bir çelenk isterseniz WhatsApp’tan yazın, tasarımı birlikte seçelim."]
    ]
  },
  {
    slug: "seferihisar-buket",
    name: "Buket",
    match: ["Buket"],
    heading: "Seferihisar buket çiçek",
    title: "Seferihisar Buket Çiçek · Gül Buketi ve Doğum Günü Buketleri | Buketia Flower",
    description: "Seferihisar’da buket çiçek siparişi: gül buketi, doğum günü, sevgiliye ve geçmiş olsun buketleri. 100’den fazla tasarım, aynı gün teslimat; Buketia Flower’dan WhatsApp ile sipariş verin.",
    lead: "Gül buketlerinden mevsim çiçekli buketlere, 100’den fazla tasarımı Seferihisar’daki mağazamızda hazırlıyoruz. Beğendiğiniz buketin kodunu WhatsApp’tan iletin, aynı gün teslim edelim.",
    intro: [
      "Doğum günü, yıl dönümü, sevgiliye, yeni iş ya da geçmiş olsun: buketlerimizi Seferihisar Camikebir’deki mağazamızda taze çiçeklerle hazırlıyoruz. Renk tercihinizi ve bütçenizi söylemeniz yeterli.",
      "Hangi buketi seçeceğinizden emin değilseniz “Bize Bırak” seçeneğiyle bütçenizi belirleyin, buketinizi biz tasarlayalım. Kart notunuzu da buketin yanına ekleriz."
    ],
    occasions: [
      ["Gül buketi", "Kırmızı, pembe ve pudra tonlarda güllerle romantik buketler."],
      ["Doğum günü", "Neşeli renklerde, kart notlu kutlama buketleri."],
      ["Geçmiş olsun ve teşekkür", "Ferah, sade tonlarda mevsim çiçekli buketler."]
    ],
    faq: [
      ["Buketi aynı gün gönderebilir misiniz?", "Evet. Seferihisar, Sığacık, Ürkmez, Urla ve çevresine aynı gün teslimat yapıyoruz; saati sipariş sırasında birlikte belirleriz."],
      ["Kart notu ekleyebilir miyim?", "Evet. Sipariş sırasında yazdığınız notu kartla birlikte buketin yanına ekleriz."],
      ["Buket fiyatları ne kadar?", "Fiyat bilgisi WhatsApp üzerinden iletilir. Bütçenizi söylerseniz size uygun tasarımları önerebiliriz."]
    ]
  },
  {
    slug: "sevgiliye-cicek-seferihisar",
    name: "Sevgiliye",
    match: ["Sevgiliye"],
    heading: "Sevgiliye çiçek · Seferihisar",
    title: "Sevgiliye Çiçek Seferihisar · Gül Buketi ve Gül Kutusu | Buketia Flower",
    description: "Seferihisar’da sevgiliye çiçek: kırmızı gül buketi, isme özel gül kutusu ve romantik aranjmanlar. Yıl dönümü ve evlilik teklifi için aynı gün teslimat; Buketia Flower.",
    lead: "Yıl dönümü, evlilik teklifi ya da sebepsiz bir sürpriz için gül buketleri ve isme özel gül kutularını Seferihisar’daki mağazamızda hazırlıyor, aynı gün teslim ediyoruz.",
    intro: [
      "Sevgilinize göndereceğiniz çiçeği aşağıdaki tasarımlardan seçin; teslimat adresini, saati ve kart notunuzu WhatsApp’tan iletin.",
      "Sığacık’taki bir otele, Urla’daki bir davet yerine ya da eve; Seferihisar ve çevresinin her yerine aynı gün gönderiyoruz."
    ],
    occasions: [
      ["Evlilik teklifi", "Kırmızı güller ve isme özel gül kutusuyla unutulmaz bir an."],
      ["Yıl dönümü", "Pudra ve kırmızı tonlarda romantik buketler."],
      ["Sebepsiz sürpriz", "Kart notunuzla birlikte, “aklımdasın” demenin en güzel yolu."]
    ],
    faq: [
      ["Sevgilime aynı gün çiçek gönderebilir miyim?", "Evet. Seferihisar ve çevresine aynı gün teslimat yapıyoruz; teslimat saatini sipariş sırasında birlikte belirleriz."],
      ["İsme özel gül kutusu hazırlıyor musunuz?", "Evet. Sipariş sırasında yazılacak ismi iletmeniz yeterli."],
      ["Fiyatları nasıl öğrenebilirim?", "Fiyat bilgisi WhatsApp üzerinden iletilir. Bütçenizi söylerseniz size uygun tasarımları önerebiliriz."]
    ]
  },
  {
    slug: "seferihisar-orkide-aranjman",
    name: "Orkide ve aranjman",
    match: ["Özel Aranjman", "Orkide"],
    heading: "Seferihisar orkide ve aranjman",
    title: "Seferihisar Orkide ve Çiçek Aranjmanı | Buketia Flower",
    description: "Seferihisar’da orkide, gül kutusu ve sepet aranjmanları: ev, ofis, yeni iş ve özel günler için. Aynı gün teslimat; Buketia Flower’dan WhatsApp ile sipariş verin.",
    lead: "Uzun süre dayanan orkideler, hasır sepette mevsim çiçekleri ve gül kutuları: ev, ofis ve özel günler için aranjmanları Seferihisar’daki mağazamızda hazırlıyoruz.",
    intro: [
      "Aranjmanlar, buketten farklı olarak vazo gerektirmeden olduğu yerde sergilenir; bu yüzden ofise, yeni bir eve ya da hastane ziyaretine gönderilecek çiçekte sıkça tercih edilir.",
      "Tasarımı aşağıdan seçin, ürün kodunu ve teslimat bilgilerini WhatsApp’tan iletin; Seferihisar ve çevresine aynı gün teslim edelim."
    ],
    occasions: [
      ["Yeni iş ve terfi", "Ofise gönderilecek şık orkideler ve aranjmanlar."],
      ["Yeni ev", "Uzun ömürlü bir orkide ya da sepet aranjman."],
      ["Geçmiş olsun", "Vazo gerektirmeyen, ferah tonlarda aranjmanlar."]
    ],
    faq: [
      ["Orkideyi aynı gün gönderebilir misiniz?", "Evet. Seferihisar ve çevresine aynı gün teslimat yapıyoruz; saati sipariş sırasında birlikte belirleriz."],
      ["Ofise teslimat yapıyor musunuz?", "Evet. İş yeri adını ve alıcının adını sipariş sırasında iletmeniz yeterli."],
      ["Fiyatları nasıl öğrenebilirim?", "Fiyat bilgisi WhatsApp üzerinden iletilir. Bütçenizi söylerseniz size uygun tasarımları önerebiliriz."]
    ]
  },
  {
    slug: "yapay-cicek-seferihisar",
    name: "Yapay çiçek",
    match: ["Yapay Buket", "Yapay Aranjman"],
    heading: "Seferihisar yapay çiçek",
    title: "Seferihisar Yapay Çiçek · Yapay Buket ve Aranjman | Buketia Flower",
    description: "Solmayan yapay buket ve yapay çiçek aranjmanları: ev dekorasyonu, ofis ve hediye için. Seferihisar’daki Buketia Flower’dan WhatsApp ile sipariş verin.",
    lead: "Solmayan, bakım istemeyen yapay buketler ve aranjmanlar: ev ve ofis dekorasyonu ya da uzun süre saklanacak bir hediye için Seferihisar’daki mağazamızda hazırlıyoruz.",
    intro: [
      "Yapay çiçekler su ve bakım istemez, mevsimden bağımsız aynı görünümü korur. Bu yüzden dekorasyon, mezar süslemesi ya da uzun süre saklanacak hediyeler için tercih edilir.",
      "Beğendiğiniz tasarımın kodunu WhatsApp’tan iletin; renk tercihinizi konuşup mağazadan teslim alabilir ya da adresinize gönderilmesini isteyebilirsiniz."
    ],
    occasions: [
      ["Ev dekorasyonu", "Salon, giriş ya da mutfak için solmayan buket ve aranjmanlar."],
      ["Ofis ve iş yeri", "Bakım gerektirmeyen, her mevsim aynı görünen tasarımlar."],
      ["Kalıcı hediye", "Uzun süre saklanacak, anı olarak kalacak bir çiçek."]
    ],
    faq: [
      ["Yapay çiçekler bakım ister mi?", "Hayır. Su gerektirmez; tozunu ara sıra almanız yeterlidir."],
      ["Mağazadan teslim alabilir miyim?", "Evet. Camikebir, 52. Sokak No: 7/C adresindeki mağazamızdan teslim alabilir ya da adrese gönderilmesini isteyebilirsiniz."],
      ["Fiyatları nasıl öğrenebilirim?", "Fiyat bilgisi WhatsApp üzerinden iletilir."]
    ]
  }
];
