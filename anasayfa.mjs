// Dil ana sayfalarındaki iki metin bloğu (build.mjs basar, tarayıcıya ayrıca gönderilmez):
// howItWorks: Google puanının altındaki tek satırlık teslimat ve sipariş satırı (<!--build:howto-->).
// about: kataloğun altındaki "Seferihisar'daki çiçekçiniz" bölümü (<!--build:about-->).
// Yalnız doğrulanmış bilgi yazın: adres, çalışma saatleri, teslimat bölgeleri, WhatsApp ile sipariş, kart notu, "Bize Bırak".
// Son sipariş saati, kurye ücreti tutarı, ödeme yöntemi ve "kendi elimizle/aracısız" gibi iddialar sahip onayı bekliyor; yazmayın.
// links: build.mjs'ten gelen hazır bağlantılar ({ areas, categories: { slug: html }, occasion, guide }).
export const homeText = (links) => ({
  tr: {
    howItWorks: ["Seferihisar, Sığacık, Urla ve çevresine aynı gün teslimat", "Seçin → bilgileri yazın → WhatsApp’tan onaylayın"],
    about: {
      eyebrow: "Buketia Flower",
      title: "Seferihisar’daki çiçekçiniz",
      paragraphs: [
        "Buketia Flower, Seferihisar Camikebir’de, 52. Sokak No: 7/C’deki mağazasında buket, orkide, aranjman, çelenk ve yapay çiçek hazırlıyor. Bu sayfada gördüğünüz tasarımların hepsi kataloğumuzdan; her birinin kodu ve kendi sayfası var.",
        "Mağazamız haftanın her günü açık: Pazartesi’den Cumartesi’ye 08.30–20.30, Pazar günü 09.00–20.00 arasında uğrayabilir, telefonla ya da WhatsApp’tan bize ulaşabilirsiniz.",
        `Seferihisar merkezin yanı sıra ${links.areas} bölgelerine aynı gün teslimat yapıyoruz. Teslimat saatini ve adrese göre değişen kurye ücretini sipariş onayından önce sizinle netleştiririz.`,
        "Sipariş vermek için bir tasarıma dokunun; teslimat gününü ve saatini, alıcının bilgilerini ve kart notunuzu yazın. Bilgileriniz hazır bir WhatsApp mesajına dönüşür, mesajı gönderdiğinizde fiyatı ve ayrıntıları sizinle teyit ederiz. Birden fazla tasarımı sepete ekleyip tek siparişte de iletebilirsiniz.",
        "Doğum günü, yıl dönümü, geçmiş olsun ziyareti, yeni iş ya da yeni ev için kataloğu kategoriye göre süzebilir, ürün kodu ya da çiçek adıyla arama yapabilirsiniz. Her ürün sayfasında çiçeklerin, renklerin ve uygun olduğu günlerin listesi var; fotoğrafta gördüğünüzü sipariş verirken de kolayca tarif edersiniz.",
        "İsteme ve söz için çiçek-çikolata tasarımları, yeni doğan için aranjmanlar, cenaze, açılış ya da düğün için de şerit yazılı ayaklı çelenkler hazırlıyoruz. Çelenk siparişinde şeride yazılacak metni iletmeniz yeterli.",
        "Hangi çiçeği seçeceğinizden emin değilseniz “Bize Bırak” seçeneğiyle yalnız bütçenizi belirleyin; buketinizi mevsimin çiçekleriyle biz tasarlayalım. Kart notunu da çiçeğin yanına ekleriz.",
        `Aradığınızı daha hızlı bulmak için ${links.categories["seferihisar-buket"]("buketler")}, ${links.categories["seferihisar-orkide-aranjman"]("orkide ve aranjmanlar")}, ${links.categories["sevgiliye-cicek-seferihisar"]("sevgiliye çiçekler")}, ${links.categories["seferihisar-celenk"]("çelenkler")} ve ${links.categories["yapay-cicek-seferihisar"]("yapay çiçekler")} sayfalarına göz atabilirsiniz.`
      ]
    }
  },
  en: {
    howItWorks: ["Same-day delivery to Seferihisar, Sığacık, Urla and nearby", "Choose → add the details → confirm on WhatsApp"],
    about: {
      eyebrow: "Buketia Flower",
      title: "Your florist in Seferihisar",
      paragraphs: [
        "Buketia Flower prepares bouquets, orchids, arrangements, wreaths and faux flowers at our shop in Camikebir, 52. Sokak No: 7/C, Seferihisar. Every design on this page comes from our own catalogue.",
        "We are open every day: Monday to Saturday 08:30–20:30, Sunday 09:00–20:00. Visit us, call us or message us on WhatsApp.",
        "We deliver on the same day to Seferihisar, Sığacık, Ürkmez, Doğanbey, Ulamış, Akarca, Tepecik, Urla and Gümüldür. We confirm the delivery time and the courier fee with you before the order is final.",
        "Tap a design, enter the delivery date, the recipient’s details and your card message; your order becomes a ready WhatsApp message. Not sure what to choose? With “Leave It to Us” you set the budget and we design the bouquet."
      ]
    }
  },
  ru: {
    howItWorks: ["Доставка в день заказа: Сеферихисар, Сыгаджик, Урла и окрестности", "Выберите → заполните данные → подтвердите в WhatsApp"],
    about: {
      eyebrow: "Buketia Flower",
      title: "Ваш цветочный магазин в Сеферихисаре",
      paragraphs: [
        "Buketia Flower собирает букеты, орхидеи, композиции, венки и искусственные цветы в нашем магазине по адресу Camikebir, 52. Sokak No: 7/C, Сеферихисар. Все дизайны на этой странице — из нашего каталога.",
        "Мы работаем каждый день: с понедельника по субботу 08:30–20:30, в воскресенье 09:00–20:00. Приходите, звоните или пишите в WhatsApp.",
        "Доставляем в день заказа по Сеферихисару, Сыгаджику, Юркмезу, Доганбею, Уламышу, Акардже, Тепеджику, Урле и Гюмюльдюру. Время доставки и стоимость курьера согласуем с вами до подтверждения заказа.",
        "Выберите дизайн, укажите дату доставки, данные получателя и текст открытки — заказ превратится в готовое сообщение WhatsApp. Не знаете, что выбрать? С вариантом «Доверьтесь нам» вы указываете бюджет, а букет создаём мы."
      ]
    }
  },
  de: {
    howItWorks: ["Lieferung am selben Tag: Seferihisar, Sığacık, Urla und Umgebung", "Auswählen → Angaben eintragen → per WhatsApp bestätigen"],
    about: {
      eyebrow: "Buketia Flower",
      title: "Ihr Blumenladen in Seferihisar",
      paragraphs: [
        "Buketia Flower bindet Sträuße, Orchideen, Arrangements, Kränze und Kunstblumen in unserem Laden in Camikebir, 52. Sokak No: 7/C, Seferihisar. Alle Designs auf dieser Seite stammen aus unserem eigenen Katalog.",
        "Wir haben jeden Tag geöffnet: Montag bis Samstag 08:30–20:30 Uhr, Sonntag 09:00–20:00 Uhr. Besuchen Sie uns, rufen Sie an oder schreiben Sie uns per WhatsApp.",
        "Wir liefern am selben Tag nach Seferihisar, Sığacık, Ürkmez, Doğanbey, Ulamış, Akarca, Tepecik, Urla und Gümüldür. Lieferzeit und Kuriergebühr stimmen wir vor der Bestellbestätigung mit Ihnen ab.",
        "Design antippen, Lieferdatum, Empfänger und Kartentext eintragen – daraus wird eine fertige WhatsApp-Nachricht. Unsicher? Mit „Überlassen Sie es uns“ legen Sie nur das Budget fest, den Strauß gestalten wir."
      ]
    }
  }
});
