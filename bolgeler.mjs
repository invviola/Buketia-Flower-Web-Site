// Teslimat bölgesi sayfaları (/sigacik-cicekci/ vb.). build.mjs bu listeden sayfaları, mağaza şemasındaki hizmet bölgelerini
// ve sayfalar arası bağlantıları üretir. Yalnızca gerçekten teslimat yapılan yerleri ekleyin; her bölgenin metni kendine özgü olmalı.
// dative/locative: "Sığacık’a" / "Sığacık’ta" gibi ekli yazımlar. featured: sayfada gösterilecek ürün kodları.
export const areas = [
  {
    slug: "sigacik-cicekci",
    name: "Sığacık",
    dative: "Sığacık’a",
    locative: "Sığacık’ta",
    region: "Seferihisar / İzmir",
    heading: "Sığacık çiçekçi",
    title: "Sığacık Çiçekçi · Aynı Gün Çiçek Teslimatı | Buketia Flower",
    description: "Sığacık’a aynı gün çiçek teslimatı: buket, gül kutusu, orkide ve çelenk. Seferihisar’daki Buketia Flower’dan WhatsApp ile sipariş verin.",
    lead: "Seferihisar merkezdeki mağazamızda hazırladığımız buketleri Sığacık’a aynı gün teslim ediyoruz. Kale içindeki evlere, otel ve pansiyonlara, marinaya çiçek göndermek için katalogdan seçin, WhatsApp’tan yazın.",
    intro: [
      "Sığacık; tarihi kalesi, yat limanı ve Teos antik kentine yakınlığıyla Seferihisar’ın en çok ziyaret edilen köşesi. Tatil için gelen sevdiklerinize ya da Sığacık’ta yaşayan yakınlarınıza çiçek göndermek istediğinizde adresi ve saati bize iletmeniz yeterli.",
      "Konaklama yerine sürpriz, deniz kenarında evlilik teklifi ya da bir kutlama için çiçeği istediğiniz saatte hazır ederiz; kart notunuzu da biz yazarız."
    ],
    occasions: [
      ["Otel ve pansiyona sürpriz", "Sığacık’ta konaklayan birine odasında karşılayacağı bir buket ya da gül kutusu."],
      ["Evlilik teklifi ve yıl dönümü", "Kırmızı güller, kalp aranjmanı veya isme özel gül kutusuyla unutulmaz bir an."],
      ["Açılış ve tören", "Sığacık’taki işletmelerin açılışları ve törenler için çelenk ve ayaklı aranjman."]
    ],
    featured: ["BKT-002", "BKT-005", "OAR-001", "BKT-001", "BKT-008", "BKT-006", "BKT-018", "CLK-012"]
  },
  {
    slug: "urkmez-cicekci",
    name: "Ürkmez",
    dative: "Ürkmez’e",
    locative: "Ürkmez’de",
    region: "Seferihisar / İzmir",
    heading: "Ürkmez çiçekçi",
    title: "Ürkmez Çiçekçi · Aynı Gün Çiçek Teslimatı | Buketia Flower",
    description: "Ürkmez’e aynı gün çiçek teslimatı: doğum günü buketi, aranjman, orkide ve çelenk. Seferihisar’daki Buketia Flower’dan WhatsApp ile sipariş verin.",
    lead: "Ürkmez’deki evlere ve yazlık sitelere aynı gün çiçek teslim ediyoruz. Katalogdan tasarımı seçin, adresi ve teslimat saatini WhatsApp’tan iletin; gerisini biz halledelim.",
    intro: [
      "Ürkmez, Seferihisar’ın sahil boyunca uzanan mahallesi; yaz aylarında yazlık sitelerle, kışın kalıcı sakinleriyle canlı. Site ve blok adı, kapı numarası gibi ayrıntıları sipariş sırasında birlikte netleştirerek çiçeğin doğru kapıya ulaşmasını sağlıyoruz.",
      "Doğum günü, geçmiş olsun ya da “aklımdasın” demek için bir buket, Ürkmez’de yaşayan büyüklerinize uzaktan da ulaşmanın kolay yolu."
    ],
    occasions: [
      ["Doğum günü", "Neşeli renklerde buketler ve kutlama aranjmanları, kart notunuzla birlikte."],
      ["Uzaktaki büyüklerinize", "Şehir dışından sipariş verin; Ürkmez’deki annenize, babanıza aynı gün ulaştıralım."],
      ["Yeni ev ve yazlık", "Yazlığa yerleşenlere hoş geldin çiçeği ya da uzun ömürlü bir orkide."]
    ],
    featured: ["BKT-009", "BKT-010", "BKT-019", "OAR-002", "BKT-004", "BKT-014", "BKT-007", "OAR-004"]
  },
  {
    slug: "doganbey-cicekci",
    name: "Doğanbey",
    dative: "Doğanbey’e",
    locative: "Doğanbey’de",
    region: "Seferihisar / İzmir",
    heading: "Doğanbey çiçekçi",
    title: "Doğanbey Çiçekçi · Aynı Gün Çiçek Teslimatı | Buketia Flower",
    description: "Doğanbey’e aynı gün çiçek teslimatı: buket, orkide, aranjman ve çelenk. Seferihisar’daki Buketia Flower’dan WhatsApp ile sipariş verin.",
    lead: "Doğanbey’e Seferihisar merkezdeki mağazamızdan aynı gün çiçek teslim ediyoruz. Taş evlere, kaplıca bölgesine ya da sahildeki yazlıklara; adresi WhatsApp’tan iletmeniz yeterli.",
    intro: [
      "Doğanbey, taş evleriyle bilinen eski köyü, kaplıcaları ve sahiliyle Seferihisar’ın sakin bölgelerinden. Merkeze uzak bir adrese çiçek göndermek zor olmasın diye teslimat saatini sizinle birlikte planlıyoruz.",
      "Kaplıcada dinlenen bir yakınınıza geçmiş olsun çiçeği ya da Doğanbey’de yaşayan bir dosta sürpriz buket; hepsini aynı gün hazırlıyoruz."
    ],
    occasions: [
      ["Geçmiş olsun", "Ferah, sade tonlarda buketler ve uzun süre dayanan orkideler."],
      ["Sürpriz ziyaret", "Doğanbey’deki dostlarınıza gelemediğiniz bir gün yerinize çiçek gitsin."],
      ["Cenaze ve taziye", "Taziye için çelenk ve beyaz tonlarda aranjmanlar, şerit yazısıyla."]
    ],
    featured: ["BKT-011", "BKT-018", "BKT-017", "BKT-016", "BKT-014", "BKT-013", "CLK-018", "CLK-021"]
  },
  {
    slug: "ulamis-cicekci",
    name: "Ulamış",
    dative: "Ulamış’a",
    locative: "Ulamış’ta",
    region: "Seferihisar / İzmir",
    heading: "Ulamış çiçekçi",
    title: "Ulamış Çiçekçi · Aynı Gün Çiçek Teslimatı | Buketia Flower",
    description: "Ulamış’a aynı gün çiçek teslimatı: buket, aranjman, orkide ve çelenk. Seferihisar’daki Buketia Flower’dan WhatsApp ile sipariş verin.",
    lead: "Seferihisar’a bağlı Ulamış’a aynı gün çiçek teslim ediyoruz. Katalogdan seçtiğiniz tasarımı, belirttiğiniz saatte kapıya götürüyoruz.",
    intro: [
      "Ulamış’ta yaşayan yakınlarınız için çiçeği merkezde aramanıza gerek yok: siparişi WhatsApp’tan verin, Seferihisar’daki mağazamızda hazırlayıp aynı gün Ulamış’taki adrese ulaştıralım.",
      "Köy ve mahalle adreslerinde ev tarifini ya da alıcının telefonunu sipariş sırasında almamız, teslimatı kolaylaştırıyor."
    ],
    occasions: [
      ["Anneler Günü ve özel günler", "Annenize, ananeye, babaanneye; renkli bir buket ya da saksıda orkide."],
      ["Düğün ve nişan", "Düğün, nişan ve kına için isteme çiçeği, gelin buketi ve ayaklı aranjmanlar."],
      ["Taziye", "Cenaze ve taziye için çelenk, isteğe göre şerit yazısıyla."]
    ],
    featured: ["BKT-004", "BKT-015", "BKT-012", "OAR-002", "BKT-003", "BKT-007", "CLK-010", "CLK-005"]
  },
  {
    slug: "akarca-cicekci",
    name: "Akarca",
    dative: "Akarca’ya",
    locative: "Akarca’da",
    region: "Seferihisar / İzmir",
    heading: "Akarca çiçekçi",
    title: "Akarca Çiçekçi · Aynı Gün Çiçek Teslimatı | Buketia Flower",
    description: "Seferihisar Akarca’ya aynı gün çiçek teslimatı: buket, gül kutusu, aranjman ve çelenk. Buketia Flower’dan WhatsApp ile sipariş verin.",
    lead: "Seferihisar Akarca’ya aynı gün çiçek teslim ediyoruz. Sevgiliye, doğum günü ya da yeni bir başlangıç için katalogdan seçin, WhatsApp’tan sipariş verin.",
    intro: [
      "Akarca, Seferihisar merkeze yakın mahallelerden; bu yüzden siparişleri gün içinde hızla hazırlayıp ulaştırabiliyoruz. Teslimat saatini siz belirleyin, çiçek o saatte kapıda olsun.",
      "Kart notunuzu sipariş sırasında yazın; buketin yanına özenle ekleyelim."
    ],
    occasions: [
      ["Sevgiliye", "Kırmızı ve pudra tonlarda güller, isme özel gül kutusu."],
      ["Yeni iş ve terfi", "Ofise ya da eve gönderilecek şık buketler ve orkideler."],
      ["Açılış", "Akarca’daki iş yerlerinin açılışları için çelenk ve aranjman."]
    ],
    featured: ["BKT-001", "OAR-001", "BKT-008", "BKT-006", "BKT-013", "BKT-019", "CLK-002", "CLK-014"]
  },
  {
    slug: "tepecik-cicekci",
    name: "Tepecik",
    dative: "Tepecik’e",
    locative: "Tepecik’te",
    region: "Seferihisar / İzmir",
    heading: "Tepecik çiçekçi",
    title: "Tepecik Çiçekçi · Aynı Gün Çiçek Teslimatı | Buketia Flower",
    description: "Seferihisar Tepecik’e aynı gün çiçek teslimatı: buket, orkide, aranjman ve çelenk. Buketia Flower’dan WhatsApp ile sipariş verin.",
    lead: "Seferihisar Tepecik’e aynı gün çiçek teslim ediyoruz. Katalogdan tasarımı seçin, adresi ve saati WhatsApp’tan iletin.",
    intro: [
      "Tepecik’teki evlere ve iş yerlerine Seferihisar merkezdeki mağazamızdan aynı gün teslimat yapıyoruz. Alıcının telefonunu paylaşırsanız teslimattan önce kendisiyle de iletişime geçebiliriz.",
      "Hangi çiçeği seçeceğinizden emin değilseniz bütçenizi söyleyin; “Bize Bırak” seçeneğiyle mevsimin en güzel çiçeklerinden buketinizi biz hazırlayalım."
    ],
    occasions: [
      ["Bize Bırak", "Bütçenizi belirleyin, tasarımı mevsim çiçekleriyle biz hazırlayalım."],
      ["Doğum günü ve yıl dönümü", "Renkli kutlama buketleri ve gül aranjmanları."],
      ["Tören ve taziye", "Törenler için çelenk ve ayaklı aranjmanlar."]
    ],
    featured: ["BKT-009", "BKT-012", "BKT-015", "BKT-002", "BKT-011", "OAR-004", "CLK-001", "CLK-016"]
  },
  {
    slug: "urla-cicek-siparisi",
    name: "Urla",
    dative: "Urla’ya",
    locative: "Urla’da",
    region: "Urla / İzmir",
    heading: "Urla çiçek siparişi",
    title: "Urla Çiçek Siparişi · Aynı Gün Teslimat | Buketia Flower",
    description: "Urla’ya aynı gün çiçek teslimatı: buket, gelin buketi, gül kutusu ve çelenk. Seferihisar’daki Buketia Flower’dan WhatsApp ile sipariş verin.",
    lead: "Komşu ilçe Urla’ya Seferihisar’daki mağazamızdan aynı gün çiçek teslim ediyoruz. Urla merkez, İskele ve bağ evlerine; adresi ve saati WhatsApp’tan iletin.",
    intro: [
      "Urla; İskele’si, bağ yolu ve bağ evleriyle düğünlerin, davetlerin ve hafta sonu kaçamaklarının adresi. Davet yerine, butik otele ya da eve göndereceğiniz çiçeği Seferihisar’da hazırlayıp yola çıkarıyoruz.",
      "Urla adresleri merkeze uzak olabildiği için teslimat saatini ve kurye ücretini sipariş onayından önce size bildiriyoruz."
    ],
    occasions: [
      ["Davet ve düğün", "Bağ evlerindeki düğün ve davetler için gelin buketi, masa ve ayaklı aranjmanlar."],
      ["Butik otele sürpriz", "Urla’da konaklayan birine odada karşılayacağı bir buket ya da gül kutusu."],
      ["Açılış", "Urla’daki işletmelerin açılışları için çelenk."]
    ],
    featured: ["BKT-006", "OAR-001", "BKT-001", "BKT-002", "BKT-013", "BKT-017", "OAR-004", "CLK-012"]
  },
  {
    slug: "gumuldur-cicek-siparisi",
    name: "Gümüldür",
    dative: "Gümüldür’e",
    locative: "Gümüldür’de",
    region: "Menderes / İzmir",
    heading: "Gümüldür çiçek siparişi",
    title: "Gümüldür Çiçek Siparişi · Aynı Gün Teslimat | Buketia Flower",
    description: "Gümüldür’e aynı gün çiçek teslimatı: buket, aranjman, orkide ve çelenk. Seferihisar’daki Buketia Flower’dan WhatsApp ile sipariş verin.",
    lead: "Menderes’e bağlı Gümüldür’e, Ürkmez üzerinden aynı gün çiçek teslim ediyoruz. Yazlık sitelere, evlere ve otellere; katalogdan seçin, WhatsApp’tan yazın.",
    intro: [
      "Gümüldür, Seferihisar’ın komşusu Menderes ilçesinin sahil beldesi. Seferihisar’daki mağazamızdan Gümüldür’e aynı gün teslimat yapıyoruz; site adı ve blok gibi ayrıntıları sipariş sırasında alıyoruz.",
      "Yaz tatilindeki bir yakınınıza sürpriz ya da Gümüldür’de yaşayan büyüklerinize bir buket; teslimat saatini birlikte belirleyelim."
    ],
    occasions: [
      ["Tatildekilere sürpriz", "Yazlıkta ya da otelde karşılayacakları neşeli bir buket."],
      ["Doğum günü", "Kutlama buketleri ve aranjmanlar, kart notunuzla."],
      ["Taziye ve tören", "Çelenk ve beyaz tonlarda aranjmanlar, şerit yazısıyla."]
    ],
    featured: ["BKT-010", "BKT-019", "BKT-009", "OAR-002", "BKT-005", "BKT-016", "CLK-006", "CLK-009"]
  }
];
