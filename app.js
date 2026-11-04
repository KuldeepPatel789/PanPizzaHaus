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
  jobs_p:["Du liebst gutes Essen und gute Laune? Werde Teil unseres Teams – wir freuen uns auf deine Bewerbung!","Lezzeti ve güzel enerjiyi seviyor musun? Ekibimize katıl, başvurunu sabırsızlıkla bekliyoruz!","Love great food and good vibes? Join our team – we can’t wait to hear from you!","هل تحب الطعام اللذيذ والأجواء الإيجابية؟ انضم إلى فريقنا، يسعدنا أن نسمع منك!","Любите вкусную еду и хорошее настроение? Присоединяйтесь к нашей команде — мы будем рады вашему отклику!","Kochasz dobre jedzenie i dobrą atmosferę? Dołącz do naszego zespołu – czekamy na Twoje zgłoszenie!","Любите смачну їжу та гарний настрій? Приєднуйтеся до нашої команди — ми будемо раді вашому відгуку!"],
  contact_h:["Kontakt","İletişim","Contact","اتصل بنا","Контакты","Kontakt","Контакти"],
  contact_p:["Fragen, Lob oder Gruppenreservierung? Schreib uns eine Mail.","Sorun, övgün ya da grup rezervasyonun mu var? Bize e-posta yaz.","Questions, praise or a group booking? Send us an email.","أسئلة أو ملاحظات أو حجز لمجموعة؟ راسلنا عبر البريد الإلكتروني.","Вопросы, отзывы или бронь для компании? Напишите нам на почту.","Pytania, pochwały lub rezerwacja dla grupy? Napisz do nas e-mail.","Питання, відгуки чи бронювання для компанії? Напишіть нам на пошту."],
  imprint:["Impressum","Künye (Impressum)","Imprint","بيانات النشر (Impressum)","Impressum","Impressum","Impressum"],
  privacy:["Datenschutz","Gizlilik","Privacy","الخصوصية","Конфиденциальность","Prywatność","Конфіденційність"],
  wish_h:["Wunschliste","İstek listesi","Wish list","قائمة الرغبات","Список желаний","Lista życzeń","Список бажань"],
  wish_add:["Zur Wunschliste hinzufügen","İstek listesine ekle","Add to wish list","أضف إلى قائمة الرغبات","Добавить в список желаний","Dodaj do listy życzeń","Додати до списку бажань"],
  total:["Summe","Toplam","Total","المجموع","Итого","Razem","Разом"],
  clear:["Leeren","Temizle","Clear","مسح","Очистить","Wyczyść","Очистити"],
  remove:["Entfernen","Kaldır","Remove","إزالة","Удалить","Usuń","Видалити"],
  wish_hint:["Nur eine Merkliste. Online bestellen ist bald verfügbar.","Sadece bir hatırlatma listesi. Online sipariş çok yakında.","Just a reminder list. Online ordering is coming soon.","قائمة تذكير فقط. الطلب عبر الإنترنت قريبًا.","Это только список для памяти. Онлайн-заказ скоро появится.","To tylko lista pomocnicza. Zamawianie online wkrótce.","Це лише список для нагадування. Онлайн-замовлення незабаром."],
  deliv:["Hunger? Setz dich zu uns und genieß die Pfannenpizza dampfend heiß – oder lass sie dir bequem über Lieferando oder Uber Eats nach Hause bringen.","Acıktın mı? Gel, sıcak sıcak tava pizzanın tadını bizde çıkar – ya da Lieferando veya Uber Eats ile doğrudan kapına getirelim.","Hungry? Pull up a chair and enjoy your pan pizza piping hot – or have it brought to your door with Lieferando or Uber Eats.","جائع؟ تفضّل بزيارتنا واستمتع ببيتزا المقلاة ساخنة عندنا، أو اطلبها إلى باب بيتك عبر Lieferando أو Uber Eats.","Проголодались? Приходите к нам за горячей пиццей на сковороде — или закажите доставку через Lieferando или Uber Eats.","Głodny? Wpadnij do nas na gorącą pizzę z patelni – albo zamów dostawę przez Lieferando lub Uber Eats.","Зголодніли? Приходьте до нас по гарячу піцу на пательні — або замовте доставку через Lieferando чи Uber Eats."],
  dinein:["Vor Ort genießen","Restoranda ye","Dine in","تناول الطعام لدينا","Поесть у нас","Zjedz u nas","Поїсти в нас"]
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

// Lieferdienste: Link eintragen, sobald die Registrierung fertig ist. Ohne Link erscheint kein Button.
// Vorerst die Startseiten. Später durch die Links zu euren eigenen Restaurant-Seiten ersetzen.
const DELIVERY = [
  {name:"Lieferando", url:"https://www.lieferando.de/"},
  {name:"Uber Eats", url:"https://www.ubereats.com/de"}
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

// Eigene Zitate (je ein Zitat pro Platz auf der Seite). Sprachen: DE, TR, EN, AR, RU, PL, UA
// Wörter in [[doppelten Klammern]] werden besonders hervorgehoben.
const QUOTES = [
  ["Der Rand knuspert, der Käse zieht Fäden, und plötzlich ist [[Montag]] gar nicht so schlimm.","Kenarlar çıtırdar, peynir uzar ve [[Pazartesi]] birden o kadar da kötü gelmez.","The edge crackles, the cheese stretches, and suddenly [[Monday]] isn’t so bad.","الحواف مقرمشة والجبن يتمدد، وفجأة لا يبدو [[يوم الاثنين]] سيئًا إلى هذا الحد.","Хрустит корочка, тянется сыр — и [[понедельник]] вдруг уже не так страшен.","Brzeg chrupie, ser się ciągnie i nagle [[poniedziałek]] wcale nie jest taki zły.","Хрумтить скоринка, тягнеться сир — і [[понеділок]] раптом не такий страшний."],
  ["Gutes braucht Zeit – und eine [[heiße Pfanne]].","Güzel şeyler zaman ister, bir de [[sıcak bir tava]].","Good things take time, and a [[hot pan]].","الأشياء الجميلة تحتاج إلى وقت، و[[مقلاة ساخنة]].","Хорошее требует времени и [[горячей сковороды]].","Dobre rzeczy wymagają czasu i [[gorącej patelni]].","Добре потребує часу та [[гарячої пательні]]."],
  ["Wer Pizza teilt, teilt auch [[das beste Stück vom Tag]].","Pizzayı paylaşan, [[günün en güzel anını]] paylaşır.","Share a pizza, share [[the best part of the day]].","من يتشارك البيتزا يتشارك [[أجمل لحظات اليوم]].","Кто делится пиццей, делится [[лучшей частью дня]].","Kto dzieli się pizzą, dzieli się [[najlepszą częścią dnia]].","Хто ділиться піцою, ділиться [[найкращою частиною дня]]."],
  ["Gute Pizza beginnt mit [[guten Menschen]].","İyi pizza, [[iyi insanlarla]] başlar.","Great pizza starts with [[great people]].","البيتزا الرائعة تبدأ مع [[أشخاص رائعين]].","Отличная пицца начинается с [[отличных людей]].","Świetna pizza zaczyna się od [[świetnych ludzi]].","Чудова піца починається з [[чудових людей]]."],
  ["Komm hungrig, geh [[glücklich]].","Aç gel, [[mutlu]] git.","Come hungry, leave [[happy]].","تعال جائعًا، وعُد [[سعيدًا]].","Приходите голодными, уходите [[счастливыми]].","Przyjdź głodny, wyjdź [[szczęśliwy]].","Приходьте голодними, йдіть [[щасливими]]."]
];

// Zweite Zitate je Platz (wechseln mit den ersten, am selben Ort)
const QUOTES2 = [
  ["Das Leben ist kurz. Iss zuerst den [[knusprigen Rand]].","Hayat kısa. Önce [[çıtır kenarı]] ye.","Life is short. Eat the [[crispy edge]] first.","الحياة قصيرة. ابدأ بتناول [[الحافة المقرمشة]] أولًا.","Жизнь коротка. Сначала съешьте [[хрустящий край]].","Życie jest krótkie. Najpierw zjedz [[chrupiący brzeg]].","Життя коротке. Спершу з’їжте [[хрустку скоринку]]."],
  ["Jede Pfanne erzählt eine [[köstliche Geschichte]].","Her tava [[lezzetli bir hikâye]] anlatır.","Every pan tells a [[delicious story]].","كل مقلاة تحكي [[قصة لذيذة]].","Каждая сковорода рассказывает [[вкусную историю]].","Każda patelnia opowiada [[smaczną historię]].","Кожна пательня розповідає [[смачну історію]]."],
  ["Gute Gesellschaft lässt jedes Stück [[besser schmecken]].","İyi arkadaşlık her dilimi [[daha lezzetli]] yapar.","Good company makes every slice [[taste better]].","الصحبة الطيبة تجعل كل شريحة [[أشهى]].","Хорошая компания делает каждый кусочек [[вкуснее]].","Dobre towarzystwo sprawia, że każdy kawałek [[smakuje lepiej]].","Гарна компанія робить кожен шматочок [[смачнішим]]."],
  ["Mit [[Leidenschaft]] gekocht, mit einem Lächeln serviert.","[[Tutkuyla]] pişirilir, gülümsemeyle servis edilir.","Cooked with [[passion]], served with a smile.","تُطهى بـ[[شغف]] وتُقدَّم بابتسامة.","Готовим со [[страстью]], подаём с улыбкой.","Gotowane z [[pasją]], podawane z uśmiechem.","Готуємо з [[пристрастю]], подаємо з усмішкою."],
  ["Dein Tisch [[wartet]] schon.","Masan seni [[bekliyor]].","Your table is [[waiting]].","طاولتك [[تنتظرك]].","Ваш столик уже [[ждёт]].","Twój stolik już [[czeka]].","Ваш столик уже [[чекає]]."]
];
// Dritte und vierte Zitate je Platz
const QUOTES3 = [
  ["Ein Biss, und der Tag bekommt [[Extra-Käse]].","Bir ısırık, ve gün [[ekstra peynirli]] olur.","One bite, and the day gets [[extra cheese]].","قضمة واحدة، ويصبح يومك [[بجبن إضافي]].","Один укус — и день становится [[с двойным сыром]].","Jeden kęs i dzień dostaje [[podwójny ser]].","Один укус — і день стає [[з подвійним сиром]]."],
  ["Aus einer einfachen Pfanne wird [[ein kleines Fest]].","Sade bir tava [[küçük bir şölene]] dönüşür.","A simple pan becomes [[a small celebration]].","مقلاة بسيطة تتحول إلى [[احتفال صغير]].","Простая сковорода превращается в [[маленький праздник]].","Zwykła patelnia zamienia się w [[małe święto]].","Проста пательня стає [[маленьким святом]]."],
  ["Geteilte Pizza ist [[doppelte Freude]].","Paylaşılan pizza [[çifte mutluluktur]].","Shared pizza is [[double the joy]].","البيتزا المشتركة [[فرحة مضاعفة]].","Пицца на двоих — [[двойная радость]].","Pizza na pół to [[podwójna radość]].","Піца на двох — [[подвійна радість]]."],
  ["Ein Team, das lacht, backt [[die beste Pizza]].","Gülen bir ekip [[en iyi pizzayı]] pişirir.","A team that laughs bakes [[the best pizza]].","الفريق الذي يضحك يخبز [[أفضل بيتزا]].","Команда, которая смеётся, печёт [[лучшую пиццу]].","Zespół, który się śmieje, piecze [[najlepszą pizzę]].","Команда, яка сміється, пече [[найкращу піцу]]."],
  ["Setz dich, atme durch, [[lass es dir schmecken]].","Otur, rahatla, [[her lokmanın tadını çıkar]].","Sit down, breathe out, [[enjoy every bite]].","اجلس، وخذ نفسًا، و[[استمتع بكل لقمة]].","Садитесь, выдохните, [[наслаждайтесь каждым кусочком]].","Usiądź, odetchnij, [[ciesz się każdym kęsem]].","Сідайте, видихніть, [[насолоджуйтесь кожним шматочком]]."]
];
const QUOTES4 = [
  ["Knusprig außen, [[weich wie eine Wolke]] innen.","Dışı çıtır, içi [[bulut gibi yumuşak]].","Crispy outside, [[soft as a cloud]] inside.","مقرمشة من الخارج، [[ناعمة كالسحاب]] من الداخل.","Снаружи хрустит, внутри [[мягкая, как облако]].","Na zewnątrz chrupiąca, w środku [[miękka jak chmurka]].","Зовні хрустка, всередині [[м’яка, як хмаринка]]."],
  ["Hitze, Hefe, Hingabe: das [[Geheimnis]] jedes guten Teigs.","Sıcaklık, maya, özen: her güzel hamurun [[sırrı]].","Heat, yeast, devotion: the [[secret]] of every good dough.","حرارة وخميرة وإخلاص: [[سر]] كل عجينة ناجحة.","Жар, дрожжи, душа: [[секрет]] любого хорошего теста.","Ciepło, drożdże, serce: [[sekret]] każdego dobrego ciasta.","Жар, дріжджі, душа: [[секрет]] кожного доброго тіста."],
  ["Die besten Gespräche beginnen mit [[dem ersten Stück]].","En güzel sohbetler [[ilk dilimle]] başlar.","The best conversations start with [[the first slice]].","أجمل الأحاديث تبدأ مع [[الشريحة الأولى]].","Лучшие разговоры начинаются с [[первого кусочка]].","Najlepsze rozmowy zaczynają się od [[pierwszego kawałka]].","Найкращі розмови починаються з [[першого шматочка]]."],
  ["Bei uns zählt [[jede Hand]] – und jedes Lächeln.","Bizde [[her el]] değerlidir, her gülümseme de.","Here, [[every hand]] counts, and every smile.","عندنا [[كل يد]] لها قيمة، وكل ابتسامة أيضًا.","У нас важна [[каждая пара рук]] и каждая улыбка.","U nas liczy się [[każda para rąk]] i każdy uśmiech.","У нас важить [[кожна пара рук]] і кожна усмішка."],
  ["Frisch aus dem Ofen, [[direkt ins Herz]].","Fırından çıkar, [[doğruca kalbe]] gider.","Fresh from the oven, [[straight to the heart]].","طازجة من الفرن، [[مباشرة إلى القلب]].","Свежая из печи — [[прямо в сердце]].","Prosto z pieca, [[prosto do serca]].","Свіжа з печі — [[просто в серце]]."]
];
const QSETS = QUOTES.map((q, i) => [q, QUOTES2[i], QUOTES3[i], QUOTES4[i]]);

// Slogans mit Schreibmaschinen-Effekt über den Buttons
const TAGLINES = [
  ["Eine Pfanne. Endloser Appetit.","Tek tava. Bitmeyen iştah.","One Pan. Endless Cravings.","مقلاة واحدة. شهية لا تنتهي.","Одна сковорода. Бесконечный аппетит.","Jedna patelnia. Niekończący się apetyt.","Одна пательня. Нескінченний апетит."],
  ["Innen fluffig. Außen knusprig.","İçi kabarık. Dışı çıtır.","Fluffy inside. Crispy outside.","هشة من الداخل. مقرمشة من الخارج.","Внутри воздушная. Снаружи хрустящая.","W środku puszysta. Na zewnątrz chrupiąca.","Всередині пухка. Зовні хрустка."]
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
  $("#deliv-links").innerHTML = `<a class="btn dl" href="#standorte">${tr("dinein")}</a>` + DELIVERY.filter(d => d.url).map(d => `<a class="btn solid dl" href="${d.url}" target="_blank" rel="noopener">${d.name}</a>`).join("");

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

function render() { renderPage(); renderWish(); }

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
const fmt = s => s.replace(/\[\[(.+?)\]\]/g, "<em>$1</em>");
const REDUCED = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
const qIdx = QSETS.map(() => 0);
function renderQuoteAt(n) {
  const el = document.querySelector(`[data-quote="${n}"]`), L = LANGS.indexOf(lang);
  el.innerHTML = fmt(QSETS[n][qIdx[n]][L]);
  el.classList.remove("anim"); void el.offsetWidth; el.classList.add("anim");
}
const renderQuote = () => QSETS.forEach((_, n) => renderQuoteAt(n));
if (!REDUCED) QSETS.forEach((q, n) => setInterval(() => { qIdx[n] = (qIdx[n] + 1) % q.length; renderQuoteAt(n); }, 4300 + n * 350));

// ----- Slogan: tippt sich selbst, bleibt kurz stehen, beginnt von vorn -----
let tagI = 0, tagTimer = null;
function typeTagline() {
  clearTimeout(tagTimer);
  const text = TAGLINES[tagI][LANGS.indexOf(lang)], el = $("#tag-text");
  el.parentElement.setAttribute("aria-label", text);
  if (REDUCED) { el.textContent = text; return; }
  let n = 0;
  (function step() {
    el.textContent = text.slice(0, n);
    if (n < text.length) { n++; tagTimer = setTimeout(step, 75); }
    else tagTimer = setTimeout(() => { tagI = (tagI + 1) % TAGLINES.length; typeTagline(); }, 2800);
  })();
}

// ----- Sprach-Dropdown: Deutsch, Englisch, dann die übrigen -----
const NAMES = {de:"Deutsch", en:"English", tr:"Türkçe", ar:"العربية", ru:"Русский", pl:"Polski", uk:"Українська"};
const sel = $("#lang-select");
["de","en","tr","ar","ru","pl","uk"].forEach(c => sel.add(new Option(NAMES[c], c)));
sel.onchange = () => { lang = sel.value; try { localStorage.setItem("lang", lang); } catch (e) {} render(); renderQuote(); typeTagline(); };
render(); renderQuote(); typeTagline();
