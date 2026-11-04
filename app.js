/* ===== EDIT HERE: texts, menu, location, reviews =====
   Language order everywhere: DE, TR, EN, AR, RU, PL, UA */
const LANGS = ["de","tr","en","ar","ru","pl","uk"];
const T = {
  nav_home:["Start","Ana Sayfa","Home","الرئيسية","Главная","Start","Головна"],
  nav_menu:["Speisekarte","Menü","Menu","القائمة","Меню","Menu","Меню"],
  nav_locations:["Standort","Şube","Location","الفرع","Адрес","Lokal","Адреса"],
  nav_jobs:["Jobs","İş İlanları","Jobs","وظائف","Вакансии","Praca","Вакансії"],
  nav_contact:["Kontakt","İletişim","Contact","اتصل بنا","Контакты","Kontakt","Контакти"],
  hero_h:["Bestellen & Reservieren","Sipariş & Rezervasyon","Order & Reserve","الطلب والحجز","Заказ и бронирование","Zamówienia i rezerwacje","Замовлення та бронювання"],
  hero_soon:["bald verfügbar","çok yakında","coming soon","قريبًا","скоро","wkrótce","незабаром"],
  hero_p:["Fluffige Pfannenpizza, dick belegt und direkt in der Pfanne serviert. Online bestellen und Tischreservierung sind in Arbeit.","Kabarık tava pizza, bol malzemeli ve tavada servis. Online sipariş ve masa rezervasyonu üzerinde çalışıyoruz.","Fluffy pan pizza, loaded with toppings and served right in the pan. Online ordering and table booking are on the way.","بيتزا المقلاة الهشة والغنية بالإضافات، تُقدَّم ساخنة في المقلاة نفسها. نعمل حاليًا على الطلب عبر الإنترنت وحجز الطاولات.","Воздушная пицца на сковороде с щедрой начинкой, подаётся прямо в сковороде. Онлайн-заказ и бронирование столиков уже в разработке.","Puszysta pizza z patelni, obficie obłożona, podawana prosto w patelni. Zamawianie online i rezerwacja stolików już wkrótce.","Пухка піца на пательні з щедрою начинкою, подається просто в пательні. Онлайн-замовлення та бронювання столиків уже в розробці."],
  order:["Bestellen","Sipariş ver","Order","اطلب","Заказать","Zamów","Замовити"],
  reserve:["Reservieren","Rezervasyon","Reserve","احجز","Забронировать","Zarezerwuj","Забронювати"],
  soon:["bald verfügbar","çok yakında","coming soon","قريبًا","скоро","wkrótce","незабаром"],
  see_menu:["Zur Speisekarte","Menüye git","See the menu","عرض القائمة","К меню","Zobacz menu","До меню"],
  f1:["Fluffiger Teig","Kabarık hamur","Fluffy dough","عجينة هشة","Воздушное тесто","Puszyste ciasto","Пухке тісто"],
  f2:["Serviert in der Pfanne","Tavada servis","Served in the pan","تُقدَّم في المقلاة","Подаётся в сковороде","Podawana w patelni","Подається в пательні"],
  f3:["Reich belegt","Bol malzemeli","Generously topped","غنية بالإضافات","Щедрая начинка","Obficie obłożona","Щедра начинка"],
  menu_h:["Speisekarte","Menü","Menu","القائمة","Меню","Menu","Меню"],
  small:["Klein","Küçük","Small","صغير","Малая","Mała","Мала"],
  medium:["Mittel","Orta","Medium","وسط","Средняя","Średnia","Середня"],
  large:["Groß","Büyük","Large","كبير","Большая","Duża","Велика"],
  price:["Preis","Fiyat","Price","السعر","Цена","Cena","Ціна"],
  all:["Alle","Hepsi","All","الكل","Все","Wszystko","Усе"],
  ingredients:["Zutaten","İçindekiler","Ingredients","المكونات","Состав","Składniki","Склад"],
  allergens:["Allergene","Alerjenler","Allergens","مسببات الحساسية","Аллергены","Alergeny","Алергени"],
  none:["keine bekannt","bilinen yok","none known","لا يوجد","нет известных","brak znanych","невідомі відсутні"],
  empty:["Hier passt nichts zum gewählten Filter.","Seçili filtreye uygun ürün yok.","Nothing matches this filter.","لا توجد عناصر تطابق هذا الفلتر.","Нет блюд по выбранному фильтру.","Brak pozycji dla wybranego filtra.","Немає страв за обраним фільтром."],
  gal_h:["Einblicke","Görüntüler","A look inside","لمحة من الداخل","Заглянем внутрь","Zajrzyj do środka","Погляд всередині"],
  rev_h:["Das sagen unsere Gäste","Misafirlerimiz ne diyor","What our guests say","ماذا يقول ضيوفنا","Отзывы гостей","Opinie gości","Відгуки гостей"],
  rev_sub:["Google-Bewertungen (Beispiele)","Google yorumları (örnek)","Google reviews (samples)","تقييمات Google (أمثلة)","Отзывы Google (примеры)","Opinie Google (przykłady)","Відгуки Google (приклади)"],
  loc_h:["Standort","Şube","Location","الفرع","Адрес","Lokal","Адреса"],
  jobs_h:["Jobs","İş İlanları","Jobs","وظائف","Вакансии","Praca","Вакансії"],
  jobs_p:["Du willst im Team mitarbeiten? Schreib uns kurz, wer du bist und was du kannst.","Ekibimize katılmak ister misin? Bize kendinden ve neler yapabildiğinden kısaca bahset.","Want to join the team? Tell us briefly who you are and what you can do.","هل تريد الانضمام إلى فريقنا؟ أخبرنا باختصار من أنت وماذا تجيد.","Хотите работать в нашей команде? Коротко расскажите о себе и о том, что умеете.","Chcesz dołączyć do zespołu? Napisz krótko, kim jesteś i co potrafisz.","Хочете працювати в нашій команді? Коротко розкажіть про себе та що ви вмієте."],
  contact_h:["Kontakt","İletişim","Contact","اتصل بنا","Контакты","Kontakt","Контакти"],
  contact_p:["Fragen, Lob oder Gruppenreservierung? Schreib uns eine Mail.","Sorun, övgün ya da grup rezervasyonun mu var? Bize e-posta yaz.","Questions, praise or a group booking? Send us an email.","أسئلة أو ملاحظات أو حجز لمجموعة؟ راسلنا عبر البريد الإلكتروني.","Вопросы, отзывы или бронь для компании? Напишите нам на почту.","Pytania, pochwały lub rezerwacja dla grupy? Napisz do nas e-mail.","Питання, відгуки чи бронювання для компанії? Напишіть нам на пошту."],
  imprint:["Impressum","Künye (Impressum)","Imprint","بيانات النشر (Impressum)","Impressum","Impressum","Impressum"],
  privacy:["Datenschutz","Gizlilik","Privacy","الخصوصية","Конфиденциальность","Prywatność","Конфіденційність"],
  wish_h:["Wunschliste","İstek listesi","Wish list","قائمة الرغبات","Список желаний","Lista życzeń","Список бажань"],
  wish_add:["Zur Wunschliste hinzufügen","İstek listesine ekle","Add to wish list","أضف إلى قائمة الرغبات","Добавить в список желаний","Dodaj do listy życzeń","Додати до списку бажань"],
  total:["Summe","Toplam","Total","المجموع","Итого","Razem","Разом"],
  clear:["Leeren","Temizle","Clear","مسح","Очистить","Wyczyść","Очистити"],
  remove:["Entfernen","Kaldır","Remove","إزالة","Удалить","Usuń","Видалити"],
  wish_hint:["Nur eine Merkliste. Online bestellen ist bald verfügbar.","Sadece bir hatırlatma listesi. Online sipariş çok yakında.","Just a reminder list. Online ordering is coming soon.","قائمة تذكير فقط. الطلب عبر الإنترنت قريبًا.","Это только список для памяти. Онлайн-заказ скоро появится.","To tylko lista pomocnicza. Zamawianie online wkrótce.","Це лише список для нагадування. Онлайн-замовлення незабаром."]
};
const CATS = {
  vorspeisen:["Vorspeisen","Başlangıçlar","Starters","المقبلات","Закуски","Przystawki","Закуски"],
  pizza:["Pizza","Pizza","Pizza","بيتزا","Пицца","Pizza","Піца"],
  pasta:["Pasta","Makarna","Pasta","باستا","Паста","Makaron","Паста"],
  salate:["Salate","Salatalar","Salads","سلطات","Салаты","Sałatki","Салати"],
  desserts:["Desserts","Tatlılar","Desserts","حلويات","Десерты","Desery","Десерти"],
  getraenke:["Getränke","İçecekler","Drinks","مشروبات","Напитки","Napoje","Напої"]
};
const TAGS = {
  chicken:["Chicken","Tavuk","Chicken","دجاج","Курица","Kurczak","Курка"],
  beef:["Rind","Dana","Beef","لحم بقري","Говядина","Wołowina","Яловичина"],
  veggie:["Veggie","Vejetaryen","Veggie","نباتي","Вегетарианское","Wegetariańskie","Вегетаріанське"],
  spicy:["Scharf","Acılı","Spicy","حار","Острое","Ostre","Гостре"]
};
const ALG = {
  A:["Gluten","Gluten","Gluten","غلوتين","Глютен","Gluten","Глютен"],
  C:["Ei","Yumurta","Egg","بيض","Яйца","Jajka","Яйця"],
  D:["Fisch","Balık","Fish","سمك","Рыба","Ryby","Риба"],
  F:["Soja","Soya","Soy","صويا","Соя","Soja","Соя"],
  G:["Milch","Süt","Milk","حليب","Молоко","Mleko","Молоко"],
  H:["Schalenfrüchte","Kuruyemiş","Nuts","مكسرات","Орехи","Orzechy","Горіхи"],
  I:["Sellerie","Kereviz","Celery","كرفس","Сельдерей","Seler","Селера"],
  J:["Senf","Hardal","Mustard","خردل","Горчица","Gorczyca","Гірчиця"]
};
const ING = {
  dough:["Pfannenteig","Tava hamuru","Pan dough","عجينة المقلاة","Тесто для сковороды","Ciasto patelniowe","Тісто для пательні"],
  tomatosauce:["Tomatensauce","Domates sosu","Tomato sauce","صلصة الطماطم","Томатный соус","Sos pomidorowy","Томатний соус"],
  mozzarella:["Mozzarella","Mozzarella","Mozzarella","موزاريلا","Моцарелла","Mozzarella","Моцарела"],
  basil:["Basilikum","Fesleğen","Basil","ريحان","Базилик","Bazylia","Базилік"],
  cheese:["Käse","Peynir","Cheese","جبن","Сыр","Ser","Сир"],
  salami:["Rindersalami","Dana salam","Beef salami","سلامي لحم بقري","Говяжья салями","Salami wołowe","Яловича салямі"],
  hotsalami:["scharfe Rindersalami","Acılı dana salam","Hot beef salami","سلامي لحم حار","Острая говяжья салями","Ostre salami wołowe","Гостра яловича салямі"],
  chicken:["Hähnchen","Tavuk","Chicken","دجاج","Курица","Kurczak","Курка"],
  bbq:["BBQ-Sauce","BBQ sos","BBQ sauce","صلصة الشواء","Соус BBQ","Sos BBQ","Соус BBQ"],
  redonion:["rote Zwiebeln","Kırmızı soğan","Red onion","بصل أحمر","Красный лук","Czerwona cebula","Червона цибуля"],
  pesto:["Pesto","Pesto","Pesto","بيستو","Песто","Pesto","Песто"],
  tomato:["Tomaten","Domates","Tomato","طماطم","Помидоры","Pomidory","Помідори"],
  pepper:["Paprika","Biber","Pepper","فلفل حلو","Перец","Papryka","Перець"],
  mushroom:["Champignons","Mantar","Mushrooms","فطر","Шампиньоны","Pieczarki","Печериці"],
  corn:["Mais","Mısır","Corn","ذرة","Кукуруза","Kukurydza","Кукурудза"],
  olive:["Oliven","Zeytin","Olives","زيتون","Оливки","Oliwki","Оливки"],
  jalapeno:["Jalapeños","Jalapeno","Jalapeños","هالابينو","Халапеньо","Jalapeño","Халапеньо"],
  wbread:["Weizenbrot","Buğday ekmeği","Wheat bread","خبز القمح","Пшеничный хлеб","Chleb pszenny","Пшеничний хліб"],
  herbbutter:["Kräuterbutter","Otlu tereyağı","Herb butter","زبدة بالأعشاب","Масло с травами","Masło ziołowe","Масло з травами"],
  garlic:["Knoblauch","Sarımsak","Garlic","ثوم","Чеснок","Czosnek","Часник"],
  parsley:["Petersilie","Maydanoz","Parsley","بقدونس","Петрушка","Pietruszka","Петрушка"],
  breading:["Panade","Galeta unu","Breadcrumb coating","تغطية بالبقسماط","Панировка","Panierka","Паніровка"],
  tomatodip:["Tomatendip","Domates dip","Tomato dip","غموس الطماطم","Томатный дип","Dip pomidorowy","Томатний діп"],
  wings:["Hähnchenflügel","Tavuk kanat","Chicken wings","أجنحة دجاج","Куриные крылышки","Skrzydełka kurczaka","Курячі крильця"],
  chili:["Chili","Acı biber","Chili","شطة","Чили","Chili","Чилі"],
  penne:["Penne","Penne","Penne","بيني","Пенне","Penne","Пенне"],
  cream:["Sahnesauce","Krema sos","Cream sauce","صلصة الكريمة","Сливочный соус","Sos śmietanowy","Вершковий соус"],
  mince:["Rinderhack","Dana kıyma","Minced beef","لحم بقري مفروم","Говяжий фарш","Mielona wołowina","Яловичий фарш"],
  celery:["Sellerie","Kereviz","Celery","كرفس","Сельдерей","Seler","Селера"],
  onion:["Zwiebeln","Soğan","Onion","بصل","Лук","Cebula","Цибуля"],
  romaine:["Römersalat","Marul","Romaine lettuce","خس روماني","Салат ромэн","Sałata rzymska","Салат ромен"],
  parmesan:["Parmesan","Parmesan","Parmesan","بارميزان","Пармезан","Parmezan","Пармезан"],
  croutons:["Croûtons","Kruton","Croutons","خبز محمص","Сухарики","Grzanki","Грінки"],
  caesar:["Caesar-Dressing","Sezar sos","Caesar dressing","صلصة سيزر","Соус «Цезарь»","Sos Caesar","Соус «Цезар»"],
  leaf:["Blattsalat","Yeşil salata","Leaf salad","خس ورقي","Листовой салат","Sałata liściasta","Листовий салат"],
  cucumber:["Gurke","Salatalık","Cucumber","خيار","Огурец","Ogórek","Огірок"],
  dressing:["Hausdressing","Ev yapımı sos","House dressing","صلصة البيت","Фирменная заправка","Sos domowy","Фірмова заправка"],
  ladyfingers:["Löffelbiskuit","Kedi dili bisküvi","Ladyfingers","بسكويت الأصابع","Савоярди","Biszkopty","Савоярді"],
  mascarpone:["Mascarpone","Mascarpone","Mascarpone","ماسكاربوني","Маскарпоне","Mascarpone","Маскарпоне"],
  espresso:["Espresso","Espresso","Espresso","إسبريسو","Эспрессо","Espresso","Еспресо"],
  cocoa:["Kakao","Kakao","Cocoa","كاكاو","Какао","Kakao","Какао"],
  chocolate:["Schokolade","Çikolata","Chocolate","شوكولاتة","Шоколад","Czekolada","Шоколад"],
  butter:["Butter","Tereyağı","Butter","زبدة","Масло","Masło","Масло"],
  egg:["Ei","Yumurta","Egg","بيض","Яйцо","Jajko","Яйце"],
  walnuts:["Walnüsse","Ceviz","Walnuts","جوز","Грецкие орехи","Orzechy włoskie","Волоські горіхи"],
  vanillaice:["Vanilleeis","Vanilyalı dondurma","Vanilla ice cream","آيس كريم فانيلا","Ванильное мороженое","Lody waniliowe","Ванільне морозиво"],
  water:["Wasser","Su","Water","ماء","Вода","Woda","Вода"],
  sugar:["Zucker","Şeker","Sugar","سكر","Сахар","Cukier","Цукор"],
  co2:["Kohlensäure","Karbondioksit","Carbon dioxide","ثاني أكسيد الكربون","Газ (CO₂)","Dwutlenek węgla","Газ (CO₂)"],
  colouring:["Farbstoff","Renklendirici","Colouring","ملوّن","Краситель","Barwnik","Барвник"],
  caffeine:["Koffein","Kafein","Caffeine","كافيين","Кофеин","Kofeina","Кофеїн"],
  lemonjuice:["Zitronensaft","Limon suyu","Lemon juice","عصير ليمون","Лимонный сок","Sok z cytryny","Лимонний сік"]
};

// p = [klein, mittel, groß] oder [einzelpreis]; i = Zutaten (Schlüssel aus ING); a = Allergene; g = Bildname.
// Foto: images/photos/<g>.jpg (wird bevorzugt) – sonst die Zeichnung images/<g>.svg
const MENU = [
  {c:"vorspeisen",n:"Knoblauchbrot",g:"garlic-bread",t:["veggie"],p:[4.5],a:"AG",i:["wbread","herbbutter","garlic","parsley"]},
  {c:"vorspeisen",n:"Mozzarella Sticks",g:"mozzarella-sticks",t:["veggie"],p:[5.9],a:"ACG",i:["mozzarella","breading","tomatodip"]},
  {c:"vorspeisen",n:"Chicken Wings",g:"wings",t:["chicken","spicy"],p:[7.5],a:"AJ",i:["wings","chili","garlic"]},
  {c:"pizza",n:"Margherita",g:"pizza-margherita",t:["veggie"],p:[7.9,10.9,14.9],a:"AG",i:["dough","tomatosauce","mozzarella","basil"]},
  {c:"pizza",n:"Pepperoni",g:"pizza-pepperoni",t:["beef"],p:[8.9,12.4,16.4],a:"AG",i:["dough","tomatosauce","cheese","salami"]},
  {c:"pizza",n:"BBQ Chicken",g:"pizza-bbq",t:["chicken"],p:[9.4,13.4,17.4],a:"AGJ",i:["dough","cheese","chicken","bbq","redonion"]},
  {c:"pizza",n:"Chicken Pesto",g:"pizza-pesto",t:["chicken"],p:[9.4,13.4,17.4],a:"AGH",i:["dough","cheese","chicken","pesto","tomato"]},
  {c:"pizza",n:"Veggie Supreme",g:"pizza-veggie",t:["veggie"],p:[8.9,12.4,16.4],a:"AG",i:["dough","cheese","pepper","mushroom","corn","olive"]},
  {c:"pizza",n:"Hot Diavola",g:"pizza-diavola",t:["beef","spicy"],p:[9.4,13.4,17.4],a:"AG",i:["dough","cheese","hotsalami","jalapeno"]},
  {c:"pasta",n:"Penne Arrabbiata",g:"penne",t:["veggie","spicy"],p:[9.5],a:"AI",i:["penne","tomatosauce","chili","garlic","basil"]},
  {c:"pasta",n:"Pasta Alfredo",g:"alfredo",t:["chicken"],p:[10.9],a:"AG",i:["penne","cream","chicken","cheese"]},
  {c:"pasta",n:"Bolognese",g:"bolognese",t:["beef"],p:[10.5],a:"AGI",i:["penne","mince","tomatosauce","celery","onion"]},
  {c:"salate",n:"Caesar Chicken",g:"caesar",t:["chicken"],p:[9.5],a:"ACDGJ",i:["romaine","chicken","parmesan","croutons","caesar"]},
  {c:"salate",n:"Gemischter Salat",g:"salad",t:["veggie"],p:[7.5],a:"J",i:["leaf","tomato","cucumber","olive","onion","dressing"]},
  {c:"desserts",n:"Tiramisu",g:"tiramisu",t:["veggie"],p:[5.5],a:"ACG",i:["ladyfingers","mascarpone","espresso","cocoa"]},
  {c:"desserts",n:"Brownie",g:"brownie",t:["veggie"],p:[5.5],a:"ACGH",i:["chocolate","butter","egg","walnuts","vanillaice"]},
  {c:"getraenke",n:"Cola",g:"cola",t:[],p:[2.5,3.5,4.5],a:"",v:"0,25 / 0,4 / 0,5 l",i:["water","sugar","co2","colouring","caffeine"]},
  {c:"getraenke",n:"Limonade",g:"lemonade",t:[],p:[2.5,3.5,4.5],a:"",v:"0,25 / 0,4 / 0,5 l",i:["water","sugar","lemonjuice","co2"]}
];

// Nur ein Standort (Platzhalter)
const LOCATIONS = [
  {name:"Pan Pizza Hause",street:"Musterstraße 1",city:"12345 Musterstadt",phone:"01234 567890",mail:"info@example.com"}
];

// BEISPIEL-Bewertungen (erfunden). Vor dem echten Start durch echte Google-Bewertungen ersetzen!
const REVIEWS = [
  {n:"Marlene K.",l:"DE",s:5,t:"Der Teig ist wunderbar fluffig und der Rand knusprig. Eine Mittel reicht locker für zwei!"},
  {n:"Ayşe D.",l:"TR",s:5,t:"Pizza tavada servis edildiği için sıcak kalıyor, hamuru çok yumuşak. Personel de çok güler yüzlüydü."},
  {n:"Daniel R.",l:"EN",s:5,t:"Proper deep-pan pizza. Thick, cheesy and crisp at the edges. The BBQ Chicken is my favourite."},
  {n:"سامي ح.",l:"AR",s:5,t:"عجينة هشة جدًا وحواف مقرمشة. الحجم الوسط يكفي شخصين بسهولة!"},
  {n:"Анна П.",l:"RU",s:5,t:"Очень воздушное тесто и хрустящие края. Подача на сковороде — отличная идея, пицца долго остаётся горячей."},
  {n:"Kasia W.",l:"PL",s:5,t:"Najlepsza pizza patelniowa w okolicy! Grube ciasto, dużo sera i miła obsługa."},
  {n:"Олена М.",l:"UA",s:5,t:"Дуже смачна піца з хрусткими краями. Персонал привітний, обслуговування швидке."},
  {n:"Jonas B.",l:"DE",s:4,t:"Sehr leckere Pizza, das Tiramisu zum Nachtisch war ein Highlight. Am Wochenende etwas voll."}
];
/* ===== end of editable part ===== */

// Eigene Zitate (Reihenfolge der Sprachen wie oben: DE, TR, EN, AR, RU, PL, UA)
const QUOTES = [
  ["Der Rand knuspert, der Käse zieht Fäden, und plötzlich ist Montag gar nicht so schlimm.","Kenarlar çıtırdar, peynir uzar ve Pazartesi birden o kadar da kötü gelmez.","The edge crackles, the cheese stretches, and suddenly Monday isn't so bad.","الحواف مقرمشة والجبن يتمدد، وفجأة لا يبدو يوم الاثنين سيئًا إلى هذا الحد.","Хрустит корочка, тянется сыр — и понедельник вдруг уже не так страшен.","Brzeg chrupie, ser się ciągnie i nagle poniedziałek wcale nie jest taki zły.","Хрумтить скоринка, тягнеться сир — і понеділок раптом не такий страшний."],
  ["Wer Pizza teilt, teilt auch das beste Stück vom Tag.","Pizzayı paylaşan, günün en güzel anını paylaşır.","Share a pizza, share the best part of the day.","من يتشارك البيتزا يتشارك أجمل لحظات اليوم.","Кто делится пиццей, делится лучшей частью дня.","Kto dzieli się pizzą, dzieli się najlepszą częścią dnia.","Хто ділиться піцою, ділиться найкращою частиною дня."],
  ["Gutes braucht Zeit – und eine heiße Pfanne.","Güzel şeyler zaman ister, bir de sıcak bir tava.","Good things take time, and a hot pan.","الأشياء الجميلة تحتاج إلى وقت، ومقلاة ساخنة.","Хорошее требует времени и горячей сковороды.","Dobre rzeczy wymagają czasu i gorącej patelni.","Добре потребує часу та гарячої пательні."]
];

let lang = "de", cat = "pizza", tag = "all";
try { lang = localStorage.getItem("lang") || lang; } catch (e) {}
if (!LANGS.includes(lang)) lang = "de";
const $ = s => document.querySelector(s);
const eur = n => n.toLocaleString({de:"de-DE",tr:"tr-TR",en:"en-GB",ar:"ar-EG-u-nu-latn",ru:"ru-RU",pl:"pl-PL",uk:"uk-UA"}[lang],{style:"currency",currency:"EUR"});

function renderPage() {
  const L = LANGS.indexOf(lang), tr = k => T[k][L];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = tr(el.dataset.i18n));
  $("#lang-select").value = lang;
  $("#yr").textContent = new Date().getFullYear();

  $("#cats").innerHTML = "";
  Object.keys(CATS).forEach(k => {
    const b = document.createElement("button");
    b.textContent = CATS[k][L];
    if (k === cat) b.setAttribute("aria-current", "true");
    b.onclick = () => { cat = k; render(); };
    $("#cats").append(b);
  });

  $("#chips").innerHTML = "";
  ["all", ...Object.keys(TAGS)].forEach(k => {
    const b = document.createElement("button");
    b.textContent = k === "all" ? tr("all") : TAGS[k][L];
    b.setAttribute("aria-pressed", k === tag);
    b.onclick = () => { tag = k; render(); };
    $("#chips").append(b);
  });

  const items = MENU.filter(i => i.c === cat && (tag === "all" || i.t.includes(tag)));
  const sized = MENU.some(i => i.c === cat && i.p.length === 3);
  const head = sized ? [tr("small"), tr("medium"), tr("large")] : [tr("price")];
  $("#cards").innerHTML = items.map(i => {
    const tags = i.t.map(k => `<span class="tag">${TAGS[k][L]}</span>`).join("");
    const alg = i.a ? [...i.a].map(c => `<span class="badge" title="${ALG[c][L]}">${c} ${ALG[c][L]}</span>`).join("") : tr("none");
    const mi = MENU.indexOf(i);
    const prices = i.p.map((p, k) => `<button class="pbtn" data-w="${mi}:${k}" title="${tr("wish_add")}" aria-label="${tr("wish_add")}: ${i.n} ${sized ? head[k] : ""}"><small>${head[k]}</small>${eur(p)}<i aria-hidden="true">♡</i></button>`).join("");
    return `<article class="card"><img src="images/photos/${i.g}.jpg" onerror="this.onerror=null;this.src='images/${i.g}.svg'" alt="${i.n}" loading="lazy">` +
      `<div class="cb"><h3>${i.n}</h3><div>${tags}</div>` +
      `<p><b>${tr("ingredients")}:</b> ${i.i.map(k => ING[k][L]).join(", ")}</p><p><b>${tr("allergens")}:</b> ${alg}</p>` +
      `${i.v ? `<p class="vol">${i.v}</p>` : ""}<div class="prices">${prices}</div></div></article>`;
  }).join("");
  $("#empty").hidden = items.length > 0;

  $("#loc-list").innerHTML = LOCATIONS.map(l =>
    `<div class="loc"><h3>${l.name}</h3><p>${l.street}<br>${l.city}</p><p><a href="tel:${l.phone.replace(/\s/g,"")}">${l.phone}</a><br><a href="mailto:${l.mail}">${l.mail}</a></p></div>`
  ).join("");

  const avg = REVIEWS.reduce((s, r) => s + r.s, 0) / REVIEWS.length;
  $("#avg").textContent = avg.toLocaleString("en-GB", {maximumFractionDigits: 1});
  $("#rev-list").innerHTML = REVIEWS.map(r =>
    `<figure class="rev"><div class="stars" aria-label="${r.s}/5">${"★".repeat(r.s)}${"☆".repeat(5 - r.s)}</div><blockquote>${r.t}</blockquote><figcaption>${r.n}<span class="lg">${r.l}</span> · Google</figcaption></figure>`
  ).join("");
}

function render() { renderPage(); renderWish(); renderQuote(); }

// ----- Wunschliste (Merkzettel) -----
let wish = {};
try { wish = JSON.parse(localStorage.getItem("wish") || "{}"); } catch (e) { wish = {}; }
const saveWish = () => { try { localStorage.setItem("wish", JSON.stringify(wish)); } catch (e) {} };
function itemOf(key) {
  const [m, k] = key.split(":").map(Number), it = MENU[m];
  return it && it.p[k] != null ? { it, k } : null;
}
function renderWish() {
  const L = LANGS.indexOf(lang), tr = k => T[k][L];
  const keys = Object.keys(wish).filter(k => itemOf(k) && wish[k] > 0);
  $("#wish").hidden = keys.length === 0;
  document.body.classList.toggle("has-wish", keys.length > 0);
  let sum = 0;
  $("#wish-list").innerHTML = keys.map(key => {
    const { it, k } = itemOf(key), q = wish[key], price = it.p[k] * q;
    sum += price;
    const size = it.p.length === 3 ? [tr("small"), tr("medium"), tr("large")][k] : "";
    return `<li><div><strong>${it.n}</strong> ${size ? `<small>${size}</small>` : ""}<br><span class="q"><button data-q="${key}|-1" aria-label="−1">−</button> ${q} <button data-q="${key}|1" aria-label="+1">+</button></span></div>` +
      `<div class="lp">${eur(price)}<button data-q="${key}|x" aria-label="${tr("remove")}" title="${tr("remove")}">✕</button></div></li>`;
  }).join("");
  $("#wish-sum").textContent = eur(sum);
}
document.addEventListener("click", e => {
  const add = e.target.closest("[data-w]");
  if (add) { const k = add.dataset.w; wish[k] = (wish[k] || 0) + 1; saveWish(); renderWish(); return; }
  const q = e.target.closest("[data-q]");
  if (q) {
    const [k, d] = q.dataset.q.split("|");
    wish[k] = d === "x" ? 0 : Math.max(0, (wish[k] || 0) + Number(d));
    if (!wish[k]) delete wish[k];
    saveWish(); renderWish();
  }
});
$("#wish-clear").onclick = () => { wish = {}; saveWish(); renderWish(); };
$("#wish-toggle").onclick = () => $("#wish").classList.toggle("collapsed");

// ----- Zitat -----
let qi = new Date().getDate() % QUOTES.length;
function renderQuote() { $("#quote-text").textContent = QUOTES[qi][LANGS.indexOf(lang)]; }
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  setInterval(() => { qi = (qi + 1) % QUOTES.length; renderQuote(); }, 9000);

// ----- Sprach-Dropdown: Deutsch, Englisch, dann die übrigen -----
const NAMES = {de:"Deutsch", en:"English", tr:"Türkçe", ar:"العربية", ru:"Русский", pl:"Polski", uk:"Українська"};
const sel = $("#lang-select");
["de","en","tr","ar","ru","pl","uk"].forEach(c => sel.add(new Option(NAMES[c], c)));
sel.onchange = () => { lang = sel.value; try { localStorage.setItem("lang", lang); } catch (e) {} render(); };
render();
