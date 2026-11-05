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
  rev_sub:["Google-Bewertungen","Google yorumları","Google reviews","تقييمات Google","Отзывы Google","Opinie Google","Відгуки Google"],
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
Object.assign(T, {
  hero_t:["Fluffig. Dick belegt. Direkt aus der Pfanne.","Kabarık. Bol malzemeli. Doğrudan tavadan.","Fluffy. Loaded. Straight from the pan.","هشة. غنية بالإضافات. مباشرة من المقلاة.","Воздушная. Щедрая. Прямо со сковороды.","Puszysta. Obficie obłożona. Prosto z patelni.","Пухка. Щедра. Просто з пательні."],
  open_h:["Öffnungszeiten","Çalışma saatleri","Opening hours","ساعات العمل","Часы работы","Godziny otwarcia","Години роботи"],
  open_now:["Jetzt geöffnet","Şu an açık","Open now","مفتوح الآن","Сейчас открыто","Teraz otwarte","Зараз відкрито"],
  open_closed:["Jetzt geschlossen","Şu an kapalı","Closed now","مغلق الآن","Сейчас закрыто","Teraz zamknięte","Зараз зачинено"],
  opt_remove:["Zutaten weglassen (kostenlos)","Malzeme çıkar (ücretsiz)","Leave out ingredients (free)","إزالة مكونات (مجانًا)","Убрать ингредиенты (бесплатно)","Pomiń składniki (za darmo)","Прибрати інгредієнти (безкоштовно)"],
  opt_extras:["Extras hinzufügen","Ekstra ekle","Add extras","أضف إضافات","Добавить добавки","Dodaj dodatki","Додати добавки"],
  opt_sauces:["Soßen","Soslar","Sauces","الصلصات","Соусы","Sosy","Соуси"],
  opt_free:["gratis","ücretsiz","free","مجانًا","бесплатно","gratis","безкоштовно"],
  opt_add:["In die Wunschliste","İstek listesine ekle","Add to wish list","أضف إلى القائمة","В список желаний","Do listy życzeń","До списку бажань"],
  ck_title:["Cookies & Datenschutz","Çerezler ve gizlilik","Cookies & privacy","ملفات تعريف الارتباط والخصوصية","Cookies и конфиденциальность","Pliki cookie i prywatność","Cookies і конфіденційність"],
  ck_text:["Wir nutzen nur technisch notwendigen Speicher. Optional merken wir uns deine Sprache und deine Wunschliste in deinem Browser. Externe Dienste laden wir nicht.","Yalnızca teknik olarak gerekli depolama kullanıyoruz. İsteğe bağlı olarak dilini ve istek listeni tarayıcında saklarız. Harici hizmet yüklemiyoruz.","We only use technically necessary storage. Optionally we remember your language and wish list in your browser. We load no external services.","نستخدم التخزين الضروري تقنيًا فقط. اختياريًا نحفظ لغتك وقائمة رغباتك في متصفحك. لا نحمّل أي خدمات خارجية.","Мы используем только технически необходимое хранилище. По желанию мы запоминаем в браузере ваш язык и список желаний. Внешние сервисы не загружаются.","Używamy tylko technicznie niezbędnej pamięci. Opcjonalnie zapamiętujemy w przeglądarce Twój język i listę życzeń. Nie ładujemy usług zewnętrznych.","Ми використовуємо лише технічно необхідне сховище. За бажанням запам’ятовуємо в браузері вашу мову та список бажань. Зовнішні сервіси не завантажуються."],
  ck_func:["Komfort: Sprache & Wunschliste merken","Konfor: dil ve istek listesini hatırla","Comfort: remember language & wish list","الراحة: تذكّر اللغة وقائمة الرغبات","Удобство: запоминать язык и список желаний","Wygoda: zapamiętaj język i listę życzeń","Зручність: запам’ятовувати мову та список бажань"],
  ck_all:["Alle akzeptieren","Tümünü kabul et","Accept all","قبول الكل","Принять все","Zaakceptuj wszystkie","Прийняти всі"],
  ck_only:["Nur notwendige","Yalnızca gerekli olanlar","Necessary only","الضروري فقط","Только необходимые","Tylko niezbędne","Лише необхідні"],
  ck_save:["Auswahl speichern","Seçimi kaydet","Save selection","حفظ الاختيار","Сохранить выбор","Zapisz wybór","Зберегти вибір"],
  ck_settings:["Cookie-Einstellungen","Çerez ayarları","Cookie settings","إعدادات الكوكيز","Настройки cookies","Ustawienia cookies","Налаштування cookies"],
  menu_note:["Alle Preise in Euro inkl. MwSt. Weitere Auskünfte zu Allergenen gibt dir unser Team gern.","Tüm fiyatlar Euro olarak KDV dahildir. Alerjenler hakkında ekibimiz memnuniyetle bilgi verir.","All prices in euros incl. VAT. Our team is happy to give more information on allergens.","جميع الأسعار باليورو شاملة ضريبة القيمة المضافة. يسعد فريقنا بتقديم معلومات إضافية عن مسببات الحساسية.","Все цены в евро, включая НДС. Подробнее об аллергенах охотно расскажет наша команда.","Wszystkie ceny w euro z VAT. Więcej informacji o alergenach chętnie udzieli nasz zespół.","Усі ціни в євро з ПДВ. Докладніше про алергени охоче розповість наша команда."],
  alc_note:["Alkohol nur an Personen ab 16 Jahren (Bier, Wein, Sekt) bzw. ab 18 Jahren (Spirituosen und Mischgetränke).","Alkol yalnızca 16 yaşından itibaren (bira, şarap, köpüklü şarap), 18 yaşından itibaren (sert içkiler ve karışık içecekler) servis edilir.","Alcohol is served only from age 16 (beer, wine, sparkling wine) or 18 (spirits and mixed drinks).","يُقدَّم الكحول فقط لمن بلغ 16 عامًا (البيرة والنبيذ) أو 18 عامًا (المشروبات الروحية والمختلطة).","Алкоголь подаём только с 16 лет (пиво, вино, игристое) и с 18 лет (крепкие и смешанные напитки).","Alkohol podajemy od 16 lat (piwo, wino, sekt) lub od 18 lat (wysokoprocentowe i drinki).","Алкоголь подаємо з 16 років (пиво, вино, ігристе) та з 18 років (міцні та змішані напої)."],
  rv_btn:["Bewertung auf Google schreiben","Google’da yorum yaz","Write a Google review","اكتب تقييمًا على Google","Написать отзыв в Google","Napisz opinię w Google","Написати відгук у Google"],
  rv_title:["Wie war dein Besuch?","Ziyaretin nasıldı?","How was your visit?","كيف كانت زيارتك؟","Как вам визит?","Jak minęła wizyta?","Як минув ваш візит?"],
  rv_hint:["Wähle, was dir gefallen hat. Wir formulieren daraus einen Text, den du anpassen kannst.","Beğendiklerini seç. Bunlardan düzenleyebileceğin bir metin oluşturalım.","Pick what you liked. We will turn it into a text you can edit.","اختر ما أعجبك وسنكتب لك نصًا يمكنك تعديله.","Выберите, что понравилось. Мы составим текст, который можно изменить.","Wybierz, co Ci się podobało. Przygotujemy tekst, który możesz zmienić.","Оберіть, що сподобалось. Ми складемо текст, який можна змінити."],
  rv_gen:["Text erstellen","Metin oluştur","Create text","إنشاء النص","Составить текст","Utwórz tekst","Створити текст"],
  rv_again:["Neu formulieren","Yeniden yaz","Rephrase","إعادة الصياغة","Перефразировать","Sformułuj inaczej","Сформулювати інакше"],
  rv_copy:["Kopieren & bei Google einfügen","Kopyala ve Google’a yapıştır","Copy & paste on Google","انسخ والصق في Google","Копировать и вставить в Google","Kopiuj i wklej w Google","Копіювати й вставити в Google"],
  rv_copied:["Kopiert! Füge den Text jetzt bei Google ein.","Kopyalandı! Metni şimdi Google’a yapıştır.","Copied! Now paste the text on Google.","تم النسخ! الصق النص الآن في Google.","Скопировано! Теперь вставьте текст в Google.","Skopiowano! Wklej tekst teraz w Google.","Скопійовано! Тепер вставте текст у Google."],
  rv_note:["Bitte nur bewerten, wenn du wirklich bei uns warst. Passe den Text gern an deine Worte an.","Lütfen yalnızca gerçekten bizde bulunduysan yorum yap. Metni kendi kelimelerinle düzenleyebilirsin.","Please only review if you really visited us. Feel free to edit the text into your own words.","يرجى التقييم فقط إذا زرتنا فعلًا. يمكنك تعديل النص بكلماتك.","Оставляйте отзыв, только если действительно были у нас. Смело правьте текст своими словами.","Oceń nas tylko, jeśli naprawdę nas odwiedziłeś. Śmiało popraw tekst po swojemu.","Залишайте відгук лише якщо справді були в нас. Сміливо змінюйте текст своїми словами."],
  a_food:["Leckeres Essen","Lezzetli yemek","Tasty food","طعام لذيذ","Вкусная еда","Smaczne jedzenie","Смачна їжа"],
  a_crust:["Fluffiger Teig & knuspriger Rand","Kabarık hamur ve çıtır kenar","Fluffy dough & crispy edge","عجينة هشة وحافة مقرمشة","Воздушное тесто и хрустящий край","Puszyste ciasto i chrupiący brzeg","Пухке тісто й хрустка скоринка"],
  a_staff:["Freundliches Team","Güler yüzlü ekip","Friendly team","فريق ودود","Приветливая команда","Przyjazny zespół","Привітна команда"],
  a_speed:["Schneller Service","Hızlı servis","Fast service","خدمة سريعة","Быстрое обслуживание","Szybka obsługa","Швидке обслуговування"],
  a_mood:["Schöne Atmosphäre","Güzel atmosfer","Nice atmosphere","أجواء جميلة","Приятная атмосфера","Miła atmosfera","Приємна атмосфера"],
  a_value:["Faire Preise","Uygun fiyatlar","Fair prices","أسعار عادلة","Честные цены","Uczciwe ceny","Чесні ціни"],
  p_food:["Das Essen war richtig lecker.","Yemekler gerçekten çok lezzetliydi.","The food was really delicious.","كان الطعام لذيذًا حقًا.","Еда была по-настоящему вкусной.","Jedzenie było naprawdę pyszne.","Їжа була справді смачною."],
  p_crust:["Der Teig ist herrlich fluffig und der Rand schön knusprig.","Hamur harika kabarık, kenarları da güzel çıtırdı.","The dough is wonderfully fluffy and the edge nicely crispy.","العجينة هشة بشكل رائع والحافة مقرمشة تمامًا.","Тесто чудесно воздушное, а края приятно хрустят.","Ciasto jest cudownie puszyste, a brzeg przyjemnie chrupiący.","Тісто чудово пухке, а краї приємно хрумтять."],
  p_staff:["Das Team war sehr freundlich und aufmerksam.","Ekip çok güler yüzlü ve ilgiliydi.","The team was very friendly and attentive.","كان الفريق ودودًا جدًا ومهتمًا.","Команда была очень приветливой и внимательной.","Zespół był bardzo miły i uważny.","Команда була дуже привітною та уважною."],
  p_speed:["Es ging erfreulich schnell.","Servis memnuniyet verici derecede hızlıydı.","Everything came out pleasantly quickly.","كل شيء وصل بسرعة مرضية.","Всё подали приятно быстро.","Wszystko podano przyjemnie szybko.","Усе подали приємно швидко."],
  p_mood:["Die Atmosphäre ist gemütlich.","Atmosfer çok samimi.","The atmosphere is cosy.","الأجواء مريحة ودافئة.","Атмосфера уютная.","Atmosfera jest przytulna.","Атмосфера затишна."],
  p_value:["Die Preise sind fair für das, was man bekommt.","Fiyatlar aldığın şeye göre adil.","The prices are fair for what you get.","الأسعار عادلة مقابل ما تحصل عليه.","Цены справедливые за такое качество.","Ceny są uczciwe jak na to, co się dostaje.","Ціни чесні за таку якість."],
  i1:["Wir waren zum ersten Mal hier und sind begeistert.","İlk kez geldik ve çok memnun kaldık.","First time here and we’re impressed.","زرنا المكان لأول مرة وأعجبنا كثيرًا.","Были здесь впервые и остались довольны.","Byliśmy tu pierwszy raz i jesteśmy zachwyceni.","Були тут уперше й залишились у захваті."],
  i2:["Kleiner Tipp für alle Pizzafans:","Pizza severler için küçük bir ipucu:","A quick tip for pizza lovers:","نصيحة سريعة لمحبي البيتزا:","Небольшой совет для любителей пиццы:","Mała wskazówka dla fanów pizzy:","Невелика порада для любителів піци:"],
  i3:["Schöner Besuch bei Pan Pizza Hause!","Pan Pizza Hause’ta güzel bir ziyaretti!","Lovely visit to Pan Pizza Hause!","زيارة جميلة إلى Pan Pizza Hause!","Отличный визит в Pan Pizza Hause!","Świetna wizyta w Pan Pizza Hause!","Чудовий візит до Pan Pizza Hause!"],
  o1:["Wir kommen gern wieder.","Tekrar geleceğiz.","We’ll gladly come back.","سنعود بكل سرور.","С радостью вернёмся.","Chętnie wrócimy.","Із задоволенням повернемось."],
  o2:["Absolute Empfehlung!","Kesinlikle tavsiye ederim!","Highly recommended!","أنصح به بشدة!","Очень рекомендую!","Gorąco polecam!","Дуже рекомендую!"],
  o3:["Danke an das ganze Team.","Tüm ekibe teşekkürler.","Thanks to the whole team.","شكرًا لكل الفريق.","Спасибо всей команде.","Dziękujemy całemu zespołowi.","Дякуємо всій команді."]
});
const ING_NEW = {
  "Ananas":["Ananas","Ananas","Pineapple","أناناس","Ананас","Ananas","Ананас"],"Brokkoli":["Brokkoli","Brokoli","Broccoli","بروكلي","Брокколи","Brokuły","Броколі"],
  "Cherry-Tomaten":["Cherry-Tomaten","Cherry domates","Cherry tomatoes","طماطم كرزية","Помидоры черри","Pomidorki koktajlowe","Помідори чері"],
  "Chillisoße":["Chillisoße","Acı biber sosu","Chilli sauce","صلصة الشطة","Соус чили","Sos chili","Соус чилі"],"Spinat":["Spinat","Ispanak","Spinach","سبانخ","Шпинат","Szpinak","Шпинат"],
  "Weichkäse":["Weichkäse","Yumuşak peynir","Soft cheese","جبن طري","Мягкий сыр","Ser miękki","М’який сир"],"Bacon":["Bacon","Bacon","Bacon","بيكون","Бекон","Boczek","Бекон"],
  "Rinderbacon":["Rinderbacon","Dana bacon","Beef bacon","بيكون بقري","Говяжий бекон","Boczek wołowy","Яловичий бекон"],"Pastirma":["Pastirma","Pastırma","Pastirma","بسطرمة","Пастырма","Pastirma","Пастирма"],
  "Peperoni-Wurst":["Peperoni-Wurst","Acılı sosis","Pepperoni sausage","نقانق حارة","Колбаса пепперони","Kiełbasa pepperoni","Ковбаса пепероні"],"Peperoni":["Peperoni","Acı biber","Hot peppers","فلفل حار","Острый перец","Papryczki peperoni","Гострий перець"],
  "Salami":["Salami","Salam","Salami","سلامي","Салями","Salami","Салямі"],"Schinken":["Schinken","Jambon","Ham","هام","Ветчина","Szynka","Шинка"],"Shrimps":["Shrimps","Karides","Shrimps","روبيان","Креветки","Krewetki","Креветки"],
  "Sucuk":["Sucuk","Sucuk","Sucuk","سجق","Суджук","Sucuk","Суджук"],"Thunfisch":["Thunfisch","Ton balığı","Tuna","تونة","Тунец","Tuńczyk","Тунець"],"Eisberg":["Eisbergsalat","Göbek marul","Iceberg lettuce","خس آيسبرغ","Салат айсберг","Sałata lodowa","Салат айсберг"],
  "Karotten":["Karotten","Havuç","Carrots","جزر","Морковь","Marchewka","Морква"],"Gurken":["Gurken","Salatalık","Cucumber","خيار","Огурцы","Ogórki","Огірки"],"Feta":["Feta","Beyaz peynir","Feta","جبنة فيتا","Фета","Feta","Фета"],
  "Brot":["Brot","Ekmek","Bread","خبز","Хлеб","Chleb","Хліб"],"Kartoffeln":["Kartoffeln","Patates","Potatoes","بطاطس","Картофель","Ziemniaki","Картопля"],"Nudeln":["Nudeln","Makarna","Pasta","معكرونة","Паста","Makaron","Паста"],
  "Ketchup":["Ketchup","Ketçap","Ketchup","كاتشب","Кетчуп","Ketchup","Кетчуп"],"Mayo":["Mayo","Mayonez","Mayo","مايونيز","Майонез","Majonez","Майонез"],
  "Knoblauchsoße":["Knoblauchsoße","Sarımsak sosu","Garlic sauce","صلصة الثوم","Чесночный соус","Sos czosnkowy","Часниковий соус"],"Scharfe Soße":["Scharfe Soße","Acı sos","Hot sauce","صلصة حارة","Острый соус","Ostry sos","Гострий соус"]
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
  fish:["Fisch","Balık","Fish","سمك","Рыба","Ryby","Риба"],
  spicy:["Scharf","Acılı","Spicy","حار","Острое","Ostre","Гостре"],
  alcohol:["Alkohol","Alkollü","Alcohol","كحولي","Алкоголь","Alkohol","Алкоголь"]
};
const ALG = {
  a:["Gluten","Gluten","Gluten","غلوتين","Глютен","Gluten","Глютен"], b:["Krebstiere","Kabuklular","Crustaceans","قشريات","Ракообразные","Skorupiaki","Ракоподібні"],
  c:["Eier","Yumurta","Eggs","بيض","Яйца","Jaja","Яйця"], d:["Fisch","Balık","Fish","سمك","Рыба","Ryby","Риба"],
  e:["Erdnüsse","Yer fıstığı","Peanuts","فول سوداني","Арахис","Orzeszki ziemne","Арахіс"], f:["Soja","Soya","Soy","صويا","Соя","Soja","Соя"],
  g:["Milch","Süt","Milk","حليب","Молоко","Mleko","Молоко"], h:["Weichtiere","Yumuşakçalar","Molluscs","رخويات","Моллюски","Mięczaki","Молюски"],
  i:["Schalenfrüchte","Kabuklu yemişler","Tree nuts","مكسرات","Орехи","Orzechy","Горіхи"], j:["Sellerie","Kereviz","Celery","كرفس","Сельдерей","Seler","Селера"],
  k:["Senf","Hardal","Mustard","خردل","Горчица","Gorczyca","Гірчиця"], l:["Sesam","Susam","Sesame","سمسم","Кунжут","Sezam","Кунжут"],
  n:["Sulfite","Sülfitler","Sulphites","كبريتيت","Сульфиты","Siarczyny","Сульфіти"], o:["Lupinen","Acı bakla","Lupin","ترمس","Люпин","Łubin","Люпин"]
};
const ADD = {1:"chininhaltig",2:"coffeinhaltig",3:"genetisch verändert",4:"mit Phosphat",5:"Farbstoff",6:"Chinolingelb",7:"Konservierungsstoffe",8:"mit Antioxidationsmittel",9:"mit Geschmacksverstärker",10:"geschwärzt",11:"geschwefelt",12:"gewachst",13:"mit Süßungsmittel"};
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

// Lieferdienste: Link eintragen, sobald die Registrierung fertig ist. Ohne Link erscheint kein Button.
// Vorerst die Startseiten. Später durch die Links zu euren eigenen Restaurant-Seiten ersetzen.
const DELIVERY = [
  {name:"Lieferando", url:"https://www.lieferando.de/"},
  {name:"Uber Eats", url:"https://www.ubereats.com/de"}
];

// Google-Bewertungslink (Place-ID aus dem Google-Unternehmensprofil): https://search.google.com/local/writereview?placeid=DEINE_PLACE_ID
const GOOGLE_REVIEW_URL = "";

// Öffnungszeiten (0 = Sonntag ... 6 = Samstag). null = geschlossen. Platzhalter – bitte anpassen.
const OPENING = {0:["12:00","22:00"],1:["11:00","22:00"],2:["11:00","22:00"],3:["11:00","22:00"],4:["11:00","22:00"],5:["11:00","23:00"],6:["11:00","23:00"]};

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

// Zitate mit Korrektur-Effekt: {{falsch|richtig}} = Wort wird durchgestrichen, das bessere geschrieben;
// ((falsch|richtig)) = Wort wird getippt, gelöscht, dann das bessere getippt. Immer von „gut" zu „besser/lustiger".
QSETS[0][2] = ["Ein Biss, und der Tag bekommt {{Extra-Käse|dreifachen Käse}}.","Bir ısırık, ve gün {{ekstra peynirli|üç kat peynirli}} olur.","One bite, and the day gets {{extra cheese|triple cheese}}.","قضمة واحدة، ويصبح يومك {{بجبن إضافي|بثلاثة أضعاف الجبن}}.","Один укус — и день становится {{с двойным сыром|с тройным сыром}}.","Jeden kęs i dzień dostaje {{podwójny ser|potrójny ser}}.","Один укус — і день стає {{з подвійним сиром|з потрійним сиром}}."];
QSETS[1][2] = ["Aus einer einfachen Pfanne wird ((ein gutes Abendessen|ein kleines Festmahl)).","Sade bir tava ((güzel bir akşam yemeğine|küçük bir şölene)) dönüşür.","A simple pan becomes ((a good dinner|a little feast)).","مقلاة بسيطة تتحول إلى ((عشاء جيد|وليمة صغيرة)).","Простая сковорода превращается в ((хороший ужин|маленький пир)).","Zwykła patelnia zamienia się w ((dobrą kolację|małą ucztę)).","Проста пательня стає ((доброю вечерею|маленьким бенкетом))."];
QSETS[2][2] = ["Geteilte Pizza ist {{doppelte Freude|endlose Freude}}.","Paylaşılan pizza {{çifte mutluluktur|bitmeyen mutluluktur}}.","Shared pizza is {{double the joy|endless joy}}.","البيتزا المشتركة {{فرحة مضاعفة|فرحة لا تنتهي}}.","Пицца на двоих — {{двойная радость|бесконечная радость}}.","Pizza na pół to {{podwójna radość|niekończąca się radość}}.","Піца на двох — {{подвійна радість|нескінченна радість}}."];
QSETS[3][2] = ["Ein Team, das lacht, backt ((gute Pizza|die beste Pizza)).","Gülen bir ekip ((iyi pizza|en iyi pizzayı)) pişirir.","A team that laughs bakes ((good pizza|the best pizza)).","الفريق الذي يضحك يخبز ((بيتزا جيدة|أفضل بيتزا)).","Команда, которая смеётся, печёт ((хорошую пиццу|лучшую пиццу)).","Zespół, który się śmieje, piecze ((dobrą pizzę|najlepszą pizzę)).","Команда, яка сміється, пече ((добру піцу|найкращу піцу))."];
QSETS[4][0] = ["Komm hungrig, geh {{satt|tanzend}}.","Aç gel, {{tok|dans ederek}} git.","Come hungry, leave {{satisfied|dancing}}.","تعال جائعًا، وعُد {{شبعانًا|راقصًا}}.","Приходите голодными, уходите {{сытыми|танцуя}}.","Przyjdź głodny, wyjdź {{najedzony|tańcząc}}.","Приходьте голодними, йдіть {{ситими|танцюючи}}."];
QSETS[4][3] = ["Frisch aus dem Ofen, direkt {{auf den Tisch|ins Herz}}.","Fırından çıkar, {{doğruca masaya|doğruca kalbe}} gider.","Fresh from the oven, straight to the {{table|heart}}.","طازجة من الفرن، {{مباشرة إلى الطاولة|مباشرة إلى القلب}}.","Свежая из печи — {{прямо на стол|прямо в сердце}}.","Prosto z pieca, {{prosto na stół|prosto do serca}}.","Свіжа з печі — {{просто на стіл|просто в серце}}."];

// Erscheinungsform je Zitat (4 pro Platz): rise = von unten hoch, type = tippen, flip = Wörter klappen auf,
// hot = Hitze-Flimmern, zoom, wave = Buchstabenwelle, write = Handschrift-Wisch, slideL/slideR, drop = Buchstaben fallen,
// bounce, blur, fix = Korrektur-Effekt (siehe oben)
const QFX = [
  ["rise","type","fix","press"],
  ["hot","zoom","fix","wave"],
  ["write","slideL","fix","slideR"],
  ["drop","type","fix","zoom"],
  ["fix","bounce","blur","fix"]
];


// Emoji hinter dem hervorgehobenen Wort (je Platz 4 Zitate)
const QEMO = [["😋","🍕","🧀","☁️"],["🔥","📖","🎉","🤫"],["☀️","😋","🎊","🍕"],["👨‍🍳","❤️","🏆","🤝"],["😄","🪑","🍴","❤️"]];

// Slogans mit Schreibmaschinen-Effekt über den Buttons
const TAGLINES = [
  ["Eine Pfanne. Endloser Appetit.","Tek tava. Bitmeyen iştah.","One Pan. Endless Cravings.","مقلاة واحدة. شهية لا تنتهي.","Одна сковорода. Бесконечный аппетит.","Jedna patelnia. Niekończący się apetyt.","Одна пательня. Нескінченний апетит."],
  ["Innen fluffig. Außen knusprig.","İçi kabarık. Dışı çıtır.","Fluffy inside. Crispy outside.","هشة من الداخل. مقرمشة من الخارج.","Внутри воздушная. Снаружи хрустящая.","W środku puszysta. Na zewnątrz chrupiąca.","Всередині пухка. Зовні хрустка."]
];


/* ===================== Laufzeit ===================== */
const LOC = {de:"de-DE",tr:"tr-TR",en:"en-GB",ar:"ar-EG-u-nu-latn",ru:"ru-RU",pl:"pl-PL",uk:"uk-UA"};
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let consent = null; try { consent = JSON.parse(localStorage.getItem("consent") || "null"); } catch (e) {}
const canStore = () => !!(consent && consent.functional);
const sget = k => { try { return canStore() ? localStorage.getItem(k) : null; } catch (e) { return null; } };
const sset = (k, v) => { try { if (canStore()) localStorage.setItem(k, v); } catch (e) {} };

// Sprache automatisch erkennen (gemerkte Wahl > Browsersprache > Deutsch)
function detectLang() {
  const s = sget("lang"); if (LANGS.includes(s)) return s;
  const list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "de"];
  for (const l of list) { const c = String(l).toLowerCase().slice(0, 2); if (LANGS.includes(c)) return c; if (c === "ua") return "uk"; }
  return "de";
}
let lang = detectLang(), cat = "pizza", tag = "all", wishInit = false;
const L = () => LANGS.indexOf(lang), tr = k => T[k][L()];
const eur = n => n.toLocaleString(LOC[lang], {style:"currency", currency:"EUR"});
const ING_DE = {}; Object.values(ING).forEach(a => ING_DE[a[0]] = a); Object.assign(ING_DE, ING_NEW);
const ingName = x => (ING_DE[x] || [])[L()] || x;
const slug = s => s.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const FALLBACK = {vorspeisen:"garlic-bread", pizza:"pizza-pepperoni", pasta:"penne", salate:"salad", desserts:"brownie", getraenke:"cola"};
const HAS_OPT = c => ["pizza","pasta","salate"].includes(c);

/* ===================== Speisekarte aus speisekarte.csv ===================== */
let MENU = [], EXTRAS = [], SAUCES = [], KAESE = null, FREE = 2, menuError = false;
const num = v => { const n = parseFloat(String(v || "").replace(",", ".")); return isNaN(n) ? null : n; };
function parseCSV(text) {
  text = text.replace(/^\uFEFF/, "");
  const delim = text.split("\n")[0].includes(";") ? ";" : ",";
  const rows = []; let row = [], cur = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += c; }
    else if (c === '"') q = true;
    else if (c === delim) { row.push(cur); cur = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && text[i + 1] === "\n") i++; row.push(cur); rows.push(row); row = []; cur = ""; }
    else cur += c;
  }
  if (cur || row.length) { row.push(cur); rows.push(row); }
  const head = rows.shift().map(h => h.trim());
  return rows.filter(r => r.some(x => x.trim())).map(r => Object.fromEntries(head.map((h, i) => [h, (r[i] || "").trim()])));
}
async function loadMenu() {
  try {
    const res = await fetch("speisekarte.csv?v=" + Date.now());
    if (!res.ok) throw new Error("csv");
    const rows = parseCSV(await res.text());
    MENU = []; EXTRAS = []; SAUCES = []; KAESE = null;
    rows.forEach(r => {
      const f = v => v || r.EN || r.Name, names = [r.Name, f(r.TR), r.EN || r.Name, f(r.AR), f(r.RU), f(r.PL), f(r.UK)];
      const k = (r.Kategorie || "").toLowerCase(), n3 = [num(r.Klein), num(r.Mittel), num(r["Groß"])], single = num(r.Preis);
      if (k === "extra") EXTRAS.push({names, p:[...n3, single]});
      else if (k === "kaeserand") KAESE = {names, p:n3};
      else if (k === "sosse") SAUCES.push({names, price:single || 0, free:/gratis/i.test(r.Tags)});
      else if (k === "einstellung") { if (/so(ss|ß)e/i.test(r.Name)) FREE = single == null ? 2 : single; }
      else if (k) {
        const sized = n3.some(x => x != null), codes = (r.Allergene || "").split(",").map(x => x.trim()).filter(Boolean);
        MENU.push({c:k, names, t:(r.Tags || "").split(/[,\s]+/).filter(Boolean), p:sized ? n3 : [single], sized,
          ing:(r.Zutaten || "").split(",").map(x => x.trim()).filter(Boolean),
          al:codes.filter(x => /^[a-z]$/i.test(x)).map(x => x.toLowerCase()), ad:codes.filter(x => /^\d+$/.test(x)),
          vol:r.Menge || "", g:r.Bild || ""});
      }
    });
    menuError = false;
  } catch (e) { menuError = true; }
}

/* ===================== Rendering ===================== */
const ADDLEG = "Zusatzstoffe: " + Object.entries(ADD).map(([n, t]) => n + " = " + t).join(", ") + ".";
function hoursHTML() {
  const rows = [1,2,3,4,5,6,0].map(d => { const h = OPENING[d], name = new Date(2024, 0, 7 + d).toLocaleDateString(LOC[lang], {weekday:"long"});
    return `<tr><td>${name}</td><td>${h ? h[0] + " – " + h[1] : "—"}</td></tr>`; }).join("");
  const now = new Date(), h = OPENING[now.getDay()], mins = now.getHours() * 60 + now.getMinutes(), toM = s => +s.slice(0, 2) * 60 + +s.slice(3);
  const open = !!h && mins >= toM(h[0]) && mins < toM(h[1]);
  return `<h4>${tr("open_h")}</h4><p class="open ${open ? "on" : "off"}">● ${tr(open ? "open_now" : "open_closed")}</p><table class="hours">${rows}</table>`;
}
function cardHTML(i, mi) {
  const name = i.names[L()], base = i.g || slug(i.names[0]);
  const fb = i.t.includes("alcohol") ? (/wein|prosecco|spritz|aperol|hugo|gin|limoncello|grappa/i.test(i.names[0]) ? "wine" : "beer") : (FALLBACK[i.c] || "cola");
  const tags = i.t.filter(k => TAGS[k]).map(k => `<span class="tag">${TAGS[k][L()]}</span>`).join("");
  const alg = i.al.length ? i.al.map(c => `<span class="badge" title="${ALG[c] ? ALG[c][L()] : c}">${c.toUpperCase()}</span>`).join("") : tr("none");
  const add = i.ad.map(n => `<span class="badge add" title="${ADD[n] || ""}">${n}</span>`).join("");
  const head = i.sized ? [tr("small"), tr("medium"), tr("large")] : [tr("price")];
  const prices = i.p.map((p, k) => p == null ? "" : `<button class="pbtn" data-w="${mi}:${k}" aria-label="${esc(tr("wish_add") + ": " + name + " " + (i.sized ? head[k] : ""))}"><small>${head[k]}</small>${eur(p)}<i aria-hidden="true">♡</i></button>`).join("");
  return `<article class="card"><img src="images/photos/${base}.jpg" onerror="this.onerror=null;this.src='images/${fb}.svg'" alt="${esc(name)}" loading="lazy"><div class="cb"><h3>${esc(name)}</h3><div>${tags}</div>` +
    (i.ing.length ? `<p><b>${tr("ingredients")}:</b> ${esc(i.ing.map(ingName).join(", "))}</p>` : "") +
    `<p><b>${tr("allergens")}:</b> ${alg} ${add}</p>${i.vol ? `<p class="vol">${esc(i.vol)}</p>` : ""}<div class="prices">${prices}</div></div></article>`;
}
function renderPage() {
  document.documentElement.lang = lang; document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => el.textContent = tr(el.dataset.i18n));
  $("#lang-select").value = lang; $("#yr").textContent = new Date().getFullYear();
  $("#deliv-links").innerHTML = `<a class="btn dl" href="#standorte">${tr("dinein")}</a>` +
    DELIVERY.filter(d => d.url).map(d => `<a class="btn solid dl" href="${d.url}" target="_blank" rel="noopener">${d.name}</a>`).join("");

  const cats = Object.keys(CATS).filter(k => MENU.some(i => i.c === k));
  if (cats.length && !cats.includes(cat)) cat = cats[0];
  $("#cats").innerHTML = "";
  cats.forEach(k => { const b = document.createElement("button"); b.textContent = CATS[k][L()]; if (k === cat) b.setAttribute("aria-current", "true"); b.onclick = () => { cat = k; renderPage(); }; $("#cats").append(b); });

  // Filter nur mit Merkmalen, die es in dieser Kategorie wirklich gibt
  const here = Object.keys(TAGS).filter(k => MENU.some(i => i.c === cat && i.t.includes(k)));
  if (tag !== "all" && !here.includes(tag)) tag = "all";
  $("#chips").innerHTML = "";
  if (here.length) ["all", ...here].forEach(k => { const b = document.createElement("button"); b.textContent = k === "all" ? tr("all") : TAGS[k][L()]; b.setAttribute("aria-pressed", k === tag); b.onclick = () => { tag = k; renderPage(); }; $("#chips").append(b); });

  const items = MENU.map((i, mi) => [i, mi]).filter(([i]) => i.c === cat && (tag === "all" || i.t.includes(tag)));
  $("#cards").innerHTML = menuError ? '<p class="empty">speisekarte.csv konnte nicht geladen werden.</p>' : items.map(([i, mi]) => cardHTML(i, mi)).join("");
  $("#empty").hidden = items.length > 0 || menuError || !MENU.length;
  $("#menu-notes").innerHTML = esc(tr("menu_note")) + (cat === "getraenke" ? "<br>" + esc(tr("alc_note")) : "") + "<br><small>" + esc(ADDLEG) + "</small>";

  $("#loc-list").innerHTML = LOCATIONS.map(l => `<div class="loc"><h3>${l.name}</h3><p>${l.street}<br>${l.city}</p><p><a href="tel:${l.phone.replace(/\s/g, "")}">${l.phone}</a><br><a href="mailto:${l.mail}">${l.mail}</a></p>${hoursHTML()}</div>`).join("");
  const avg = REVIEWS.reduce((s, r) => s + r.s, 0) / REVIEWS.length;
  $("#avg").textContent = avg.toLocaleString("en-GB", {maximumFractionDigits:1});
  $("#rev-list").innerHTML = REVIEWS.map(r => `<figure class="rev"><div class="stars" aria-label="${r.s}/5">${"★".repeat(r.s)}${"☆".repeat(5 - r.s)}</div><blockquote>${r.t}</blockquote><figcaption>${r.n}<span class="lg">${r.l}</span> · Google</figcaption></figure>`).join("");
}
function render() { renderPage(); renderWish(); }

/* ===================== Preise, Optionen, Wunschliste ===================== */
function unitPrice(it, k, o) {
  let p = it.p[k] || 0;
  if (o) {
    const pizza = it.c === "pizza";
    (o.add || []).forEach(n => { const e = EXTRAS.find(x => x.names[0] === n); if (e) p += (pizza ? e.p[k] : (e.p[3] != null ? e.p[3] : e.p[1])) || 0; });
    if (o.kaese && KAESE) p += KAESE.p[k] || 0;
    let free = 0;
    SAUCES.forEach(s => { if (!(o.sauce || []).includes(s.names[0])) return; if (s.free && free < FREE) free++; else p += s.price; });
  }
  return p;
}
let wish = []; try { wish = JSON.parse(sget("wish") || "[]"); } catch (e) { wish = []; }
const saveWish = () => sset("wish", JSON.stringify(wish));
function addWish(m, k, o) {
  if (o) { o.rem.sort(); o.add.sort(); }
  const sig = JSON.stringify([m, k, o]), f = wish.find(w => w.sig === sig);
  if (f) f.q++; else wish.push({m, k, o, q:1, sig});
  saveWish(); renderWish();
}
function renderWish() {
  const rows = wish.filter(w => MENU[w.m] && MENU[w.m].p[w.k] != null && w.q > 0), box = $("#wish");
  box.hidden = !rows.length;
  document.body.classList.toggle("has-wish", rows.length > 0);
  if (!wishInit && rows.length) { wishInit = true; if (window.matchMedia("(max-width:1099px)").matches) box.classList.add("collapsed"); }
  document.body.classList.toggle("wish-open", rows.length > 0 && !box.classList.contains("collapsed"));
  let sum = 0, cnt = 0;
  $("#wish-list").innerHTML = rows.map(w => {
    const it = MENU[w.m], line = unitPrice(it, w.k, w.o) * w.q, i = wish.indexOf(w); sum += line; cnt += w.q;
    const size = it.sized ? [tr("small"), tr("medium"), tr("large")][w.k] : "", o = w.o;
    const det = o ? [...o.rem.map(x => "−" + ingName(x)), ...o.add.map(x => "+" + ingName(x)), o.kaese && KAESE ? "+" + KAESE.names[L()] : "", ...o.sauce.map(x => { const s = SAUCES.find(s => s.names[0] === x); return s ? s.names[L()] : x; })].filter(Boolean).join(", ") : "";
    return `<li><div><strong>${esc(it.names[L()])}</strong> ${size ? `<small>${size}</small>` : ""}${det ? `<br><small class="det">${esc(det)}</small>` : ""}<br><span class="q"><button data-q="${i}|-1" aria-label="−1">−</button> ${w.q} <button data-q="${i}|1" aria-label="+1">+</button></span></div>` +
      `<div class="lp">${eur(line)}<button data-q="${i}|x" aria-label="${esc(tr("remove"))}" title="${esc(tr("remove"))}">✕</button></div></li>`;
  }).join("");
  $("#wish-sum").textContent = eur(sum); $("#wish-mini").textContent = cnt + " · " + eur(sum);
}

const openModal = id => { $(id).hidden = false; document.body.classList.add("modal-open"); };
const closeModals = () => { $$(".modal").forEach(m => m.hidden = true); document.body.classList.remove("modal-open"); };

function openOptions(m, k) {
  const it = MENU[m], pizza = it.c === "pizza", size = it.sized ? [tr("small"), tr("medium"), tr("large")][k] : "";
  const exP = e => pizza ? e.p[k] : (e.p[3] != null ? e.p[3] : e.p[1]);
  $("#opt-body").innerHTML = `<h3>${esc(it.names[L()])} <small>${size}</small></h3>` +
    (it.ing.length ? `<fieldset><legend>${tr("opt_remove")}</legend><div class="opts">${it.ing.map((x, i) => `<label><input type="checkbox" data-r="${i}" checked> ${esc(ingName(x))}</label>`).join("")}</div></fieldset>` : "") +
    `<fieldset><legend>${tr("opt_extras")}</legend><div class="opts">${EXTRAS.filter(e => exP(e) != null).map(e => `<label><input type="checkbox" data-e="${EXTRAS.indexOf(e)}"> ${esc(ingName(e.names[0]))} <em>+${eur(exP(e))}</em></label>`).join("")}</div></fieldset>` +
    (pizza && KAESE && KAESE.p[k] != null ? `<fieldset><label class="big"><input type="checkbox" data-k> ${esc(KAESE.names[L()])} <em>+${eur(KAESE.p[k])}</em></label></fieldset>` : "") +
    (pizza && SAUCES.length ? `<fieldset><legend>${tr("opt_sauces")}</legend><div class="opts">${SAUCES.map((s, i) => `<label><input type="checkbox" data-s="${i}"> ${esc(s.names[L()])} <em data-sp="${i}"></em></label>`).join("")}</div></fieldset>` : "") +
    `<div class="opt-foot"><span>${tr("total")}: <strong id="opt-sum"></strong></span><button id="opt-add" class="btn solid dl">${tr("opt_add")}</button></div>`;
  const read = () => ({
    rem:$$("#opt-body [data-r]").filter(c => !c.checked).map(c => it.ing[+c.dataset.r]),
    add:$$("#opt-body [data-e]").filter(c => c.checked).map(c => EXTRAS[+c.dataset.e].names[0]),
    kaese:!!($("#opt-body [data-k]") || {}).checked,
    sauce:$$("#opt-body [data-s]").filter(c => c.checked).map(c => SAUCES[+c.dataset.s].names[0])
  });
  const calc = () => {
    $("#opt-sum").textContent = eur(unitPrice(it, k, read()));
    let free = 0;
    SAUCES.forEach((s, i) => { const box = $(`#opt-body [data-s="${i}"]`); if (!box) return; const isFree = s.free && free < FREE; if (box.checked && isFree) free++; $(`[data-sp="${i}"]`).textContent = isFree ? tr("opt_free") : "+" + eur(s.price); });
  };
  $("#opt-body").onchange = calc; calc();
  $("#opt-add").onclick = () => { addWish(m, k, read()); closeModals(); };
  openModal("#opt");
}

/* ===================== Google-Bewertung (Textbausteine, jedes Mal anders) ===================== */
const ASP = ["food","crust","staff","speed","mood","value"];
const pick = a => a[Math.floor(Math.random() * a.length)], shuffle = a => a.map(x => [Math.random(), x]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
function openReview() {
  $("#rv-body").innerHTML = `<h3>${tr("rv_title")}</h3><p class="note">${tr("rv_hint")}</p><div class="opts">${ASP.map(a => `<label><input type="checkbox" data-a="${a}"> ${tr("a_" + a)}</label>`).join("")}</div>` +
    `<button id="rv-gen" class="btn solid dl">${tr("rv_gen")}</button><div id="rv-out" hidden><textarea id="rv-text" rows="6"></textarea><div class="opt-foot"><button id="rv-again" class="btn dl">${tr("rv_again")}</button><button id="rv-copy" class="btn solid dl">${tr("rv_copy")}</button></div><p class="note" id="rv-msg"></p></div><p class="note">${tr("rv_note")}</p>`;
  const gen = () => {
    const sel = $$("#rv-body [data-a]").filter(c => c.checked).map(c => c.dataset.a); if (!sel.length) return;
    $("#rv-text").value = [tr(pick(["i1","i2","i3"])), ...shuffle(sel).map(a => tr("p_" + a)), tr(pick(["o1","o2","o3"]))].join(" ");
    $("#rv-out").hidden = false; $("#rv-msg").textContent = "";
  };
  $("#rv-gen").onclick = gen; $("#rv-again").onclick = gen;
  $("#rv-copy").onclick = async () => {
    try { await navigator.clipboard.writeText($("#rv-text").value); } catch (e) { $("#rv-text").select(); document.execCommand("copy"); }
    $("#rv-msg").textContent = tr("rv_copied");
    if (GOOGLE_REVIEW_URL) window.open(GOOGLE_REVIEW_URL, "_blank", "noopener");
  };
  openModal("#rv");
}

/* ===================== Cookie-Hinweis ===================== */
function showCookie(force) { if (consent && !force) return; $("#ck").hidden = false; $("#ck-func").checked = !!(consent && consent.functional); }
function saveConsent(f) {
  consent = {necessary:true, functional:f, ts:Date.now()};
  try { localStorage.setItem("consent", JSON.stringify(consent)); } catch (e) {}
  if (f) { sset("lang", lang); saveWish(); } else ["lang","wish"].forEach(k => { try { localStorage.removeItem(k); } catch (e) {} });
  $("#ck").hidden = true;
}

/* ===================== Karussell (Handy: Auto-Scroll + Pfeile) ===================== */
function initCarousels() {
  const mq = window.matchMedia("(max-width:760px)");
  $$(".car").forEach(car => {
    const tk = car.querySelector(".track"); let hold = 0;
    const step = () => tk.clientWidth * 0.86, pause = () => { hold = Date.now() + 9000; };
    car.querySelector(".prev").onclick = () => { pause(); tk.scrollBy({left:-step(), behavior:"smooth"}); };
    car.querySelector(".next").onclick = () => { pause(); tk.scrollBy({left:step(), behavior:"smooth"}); };
    ["touchstart","pointerdown"].forEach(ev => tk.addEventListener(ev, pause, {passive:true}));
    setInterval(() => {
      if (!mq.matches || REDUCED || Date.now() < hold || document.hidden) return;
      if (Math.abs(tk.scrollLeft) + tk.clientWidth >= tk.scrollWidth - 8) tk.scrollTo({left:0, behavior:"smooth"}); else tk.scrollBy({left:step(), behavior:"smooth"});
    }, 3800);
  });
}

/* ===================== Ereignisse ===================== */
document.addEventListener("click", e => {
  const add = e.target.closest("[data-w]");
  if (add) { const [m, k] = add.dataset.w.split(":").map(Number); if (HAS_OPT(MENU[m].c) && EXTRAS.length) openOptions(m, k); else addWish(m, k, null); return; }
  const q = e.target.closest("[data-q]");
  if (q) { const [i, d] = q.dataset.q.split("|"), w = wish[+i]; if (!w) return; w.q = d === "x" ? 0 : Math.max(0, w.q + Number(d)); wish = wish.filter(x => x.q > 0); saveWish(); renderWish(); return; }
  if (e.target.closest("[data-close]") || e.target.classList.contains("modal")) closeModals();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModals(); });
$("#wish-clear").onclick = () => { wish = []; saveWish(); renderWish(); };
$("#wish-toggle").onclick = () => { $("#wish").classList.toggle("collapsed"); renderWish(); };
$("#rv-open").onclick = openReview;
$("#ck-all").onclick = () => saveConsent(true);
$("#ck-only").onclick = () => saveConsent(false);
$("#ck-save").onclick = () => saveConsent($("#ck-func").checked);
$("#ck-open").onclick = e => { e.preventDefault(); showCookie(true); };

const fmt = s => s
  .replace(/\{\{(.+?)\|(.+?)\}\}/g, (m, w, r) => `<em class="fix"><s style="--n:${[...w].length}">${w}</s> <b style="--n:${[...r].length}">${r}</b></em>`)
  .replace(/\(\((.+?)\|(.+?)\)\)/g, (m, w, r) => `<em class="erase" data-a="${w}" data-b="${r}"><span class="slot"></span></em>`)
  .replace(/\[\[(.+?)\]\]/g, "<em>$1</em>");
const REDUCED = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
const qIdx = QSETS.map(() => 0), qTok = QSETS.map(() => 0);

// Text in Wörter/Buchstaben zerlegen (für Tipp-, Wellen-, Fall- und Flip-Effekte). Arabisch immer wortweise.
function splitUnits(root, byWord) {
  let i = 0;
  (function walk(node) {
    [...node.childNodes].forEach(ch => {
      if (ch.nodeType === 3) {
        const frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(part); return; }
          const wd = document.createElement("span");
          if (byWord) { wd.className = "u"; wd.style.setProperty("--i", i++); wd.textContent = part; }
          else {
            wd.className = "wd";
            [...part].forEach(c => { const u = document.createElement("span"); u.className = "u"; u.style.setProperty("--i", i++); u.textContent = c; wd.append(u); });
          }
          frag.append(wd);
        });
        ch.replaceWith(frag);
      } else if (ch.nodeType === 1 && !ch.matches("em.erase")) walk(ch);
    });
  })(root);
}

// Falsches Wort tippen, löschen, richtiges Wort tippen
function runErase(el, n, token) {
  el.querySelectorAll("em.erase").forEach(em => {
    const a = [...em.dataset.a], b = [...em.dataset.b], slot = em.querySelector(".slot"), seq = [];
    if (REDUCED) { slot.textContent = em.dataset.b; em.classList.add("done"); return; }
    for (let i = 1; i <= a.length; i++) seq.push([a.slice(0, i).join(""), i === a.length ? 900 : 85]);
    for (let i = a.length - 1; i >= 0; i--) seq.push([a.slice(0, i).join(""), i === 0 ? 250 : 45]);
    for (let i = 1; i <= b.length; i++) seq.push([b.slice(0, i).join(""), 85]);
    let k = 0;
    const step = () => {
      if (qTok[n] !== token) return;
      if (k >= seq.length) { em.classList.add("done"); return; }
      slot.textContent = seq[k][0];
      const d = seq[k][1]; k++;
      setTimeout(step, d);
    };
    setTimeout(step, 900);
  });
}

function fxDuration(el, fx) {
  const len = (el.textContent || "").length, er = el.querySelector("em.erase");
  if (er) { const a = [...er.dataset.a].length, b = [...er.dataset.b].length; return 900 + a * 85 + 900 + a * 45 + 250 + b * 85; }
  if (el.querySelector("em.fix")) return 2900;
  return ({type: len * 38 + 300, wave: len * 35 + 700, drop: len * 30 + 600, write: 1800})[fx] || 1400;
}

function renderQuoteAt(n) {
  const el = document.querySelector(`[data-quote="${n}"]`), L = LANGS.indexOf(lang);
  let fx = QFX[n][qIdx[n]];
  const token = ++qTok[n];
  el.className = "qt";
  el.innerHTML = fmt(QSETS[n][qIdx[n]][L]);
  if (fx === "fix") fx = "rise";
  const ar = lang === "ar";
  if (["type", "wave", "drop"].includes(fx)) splitUnits(el, ar);
  else if (fx === "flip") splitUnits(el, true);
  const ems = el.querySelectorAll("em");
  if (ems.length) ems[ems.length - 1].insertAdjacentHTML("afterend", `<span class="emo">${QEMO[n][qIdx[n]]}</span>`);
  void el.offsetWidth;
  el.className = `qt fx-${fx}` + (fx === "rise" || fx === "press" ? " anim" : "");
  runErase(el, n, token);
  return fxDuration(el, fx);
}
function scheduleQuote(n, extra) {
  if (REDUCED) return;
  const dur = renderQuoteAt(n);
  qTok[n] += 0;
  setTimeout(() => { qIdx[n] = (qIdx[n] + 1) % QSETS[n].length; scheduleQuote(n, 0); }, dur + 2200 + (extra || 0));
}
let quoteStarted = false;
function renderQuote() {
  QSETS.forEach((_, n) => renderQuoteAt(n));
  if (!quoteStarted && !REDUCED) {
    quoteStarted = true;
    QSETS.forEach((_, n) => setTimeout(() => { qIdx[n] = (qIdx[n] + 1) % QSETS[n].length; scheduleQuote(n, 0); }, fxDuration(document.querySelector(`[data-quote="${n}"]`), QFX[n][qIdx[n]]) + 2200 + n * 350));
  }
}

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
sel.onchange = () => { lang = sel.value; sset("lang", lang); render(); renderQuote(); typeTagline(); };
render(); renderQuote(); typeTagline(); showCookie(); initCarousels();
loadMenu().then(render);
