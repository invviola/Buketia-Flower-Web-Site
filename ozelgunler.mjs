// Özel gün sayfaları. build.mjs her kayıt için bir sayfa ve ana sayfada bir duyuru bandı üretir.
// Ürünler önce `featured` kodlarından, sonra products.js'te `occasions` etiketinde `tag` olan fotoğraflı ürünlerden gelir (en çok 16).
// Kurallar: adreste yıl olmaz. Bölge × özel gün sayfası açmayın (kapı sayfası riski). Doğrulanmamış vaat yazmayın:
// okula teslim saati, toplu sipariş indirimi, son sipariş saati ve kurye ücreti sahip onayı bekliyor; bunlar için "WhatsApp'tan teyit ederiz" deyin.
// Ana sayfadaki duyuru bandı showFrom–showUntil arasında görünür (app.js, İstanbul tarihi).
// Kart notu örnekleri i18n/tr.js cardIdeas[tag] alanından gelir (sipariş formundaki öneriler de aynı listeyi kullanır).
// Liste boşken duyuru bandı ve alt bilgideki özel gün bağlantısı basılmaz. Yayındaki sayfa klasörünü de silin; build eski klasörü silmez.
export const occasions = [];
