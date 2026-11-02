/* ===== EDIT HERE: texts, menu, locations ===== */
const T = {
  de: {
    nav_home:"Start", nav_menu:"Speisekarte", nav_locations:"Standorte", nav_jobs:"Jobs", nav_contact:"Kontakt",
    hero_h:"Dick belegt, saftig, knusprig am Rand.",
    hero_p:"Unser Teig geht mit etwas Öl direkt in der Pfanne auf. Dann kommen Käse und jede Menge Belag drauf.",
    order:"Bestellen", reserve:"Reservieren", soon:"bald verfügbar", see_menu:"Zur Speisekarte",
    soon_note:"Online bestellen und Tisch reservieren: Wir bauen das gerade auf und melden uns in Kürze.",
    menu_h:"Speisekarte", small:"Klein", medium:"Mittel", large:"Groß", price:"Preis", all:"Alle",
    empty:"In dieser Kategorie gibt es dazu nichts. Wähle einen anderen Filter.",
    sample_note:"Beispielpreise – bitte durch die echten Preise ersetzen.",
    loc_h:"Standorte", jobs_h:"Jobs", jobs_p:"Du willst im Team mitarbeiten? Schreib uns kurz, wer du bist und was du kannst.",
    contact_h:"Kontakt", contact_p:"Fragen, Lob oder Gruppenreservierung? Schreib uns eine Mail.",
    imprint:"Impressum", privacy:"Datenschutz"
  },
  tr: {
    nav_home:"Ana Sayfa", nav_menu:"Menü", nav_locations:"Şubeler", nav_jobs:"İş İlanları", nav_contact:"İletişim",
    hero_h:"Bol malzemeli, sulu, kenarları çıtır.",
    hero_p:"Hamurumuz biraz yağla doğrudan tavada kabarır. Üzerine peynir ve bol malzeme gelir.",
    order:"Sipariş ver", reserve:"Rezervasyon", soon:"çok yakında", see_menu:"Menüye git",
    soon_note:"Online sipariş ve masa rezervasyonu üzerinde çalışıyoruz, çok yakında burada olacak.",
    menu_h:"Menü", small:"Küçük", medium:"Orta", large:"Büyük", price:"Fiyat", all:"Hepsi",
    empty:"Bu kategoride bu filtreye uygun ürün yok. Başka bir filtre seç.",
    sample_note:"Örnek fiyatlardır – lütfen gerçek fiyatlarla değiştirin.",
    loc_h:"Şubeler", jobs_h:"İş İlanları", jobs_p:"Ekibimize katılmak ister misin? Bize kendinden ve neler yapabildiğinden kısaca bahset.",
    contact_h:"İletişim", contact_p:"Sorun, övgün ya da grup rezervasyonun mu var? Bize e-posta yaz.",
    imprint:"Künye (Impressum)", privacy:"Gizlilik"
  },
  en: {
    nav_home:"Home", nav_menu:"Menu", nav_locations:"Locations", nav_jobs:"Jobs", nav_contact:"Contact",
    hero_h:"Thick-topped, juicy, crispy at the edge.",
    hero_p:"Our dough rises in the pan with a little oil. Then it gets piled high with cheese and toppings.",
    order:"Order", reserve:"Reserve", soon:"coming soon", see_menu:"See the menu",
    soon_note:"Online ordering and table booking are almost ready. Check back soon.",
    menu_h:"Menu", small:"Small", medium:"Medium", large:"Large", price:"Price", all:"All",
    empty:"Nothing in this category matches that filter. Pick another one.",
    sample_note:"Sample prices – please replace with your real prices.",
    loc_h:"Locations", jobs_h:"Jobs", jobs_p:"Want to join the team? Tell us briefly who you are and what you can do.",
    contact_h:"Contact", contact_p:"Questions, praise or a group booking? Send us an email.",
    imprint:"Imprint", privacy:"Privacy"
  }
};

const CATS = {
  vorspeisen:{de:"Vorspeisen",tr:"Başlangıçlar",en:"Starters"},
  pizza:{de:"Pizza",tr:"Pizza",en:"Pizza"},
  pasta:{de:"Pasta",tr:"Makarna",en:"Pasta"},
  salate:{de:"Salate",tr:"Salatalar",en:"Salads"},
  desserts:{de:"Desserts",tr:"Tatlılar",en:"Desserts"},
  getraenke:{de:"Getränke",tr:"İçecekler",en:"Drinks"}
};
const TAGS = {
  chicken:{de:"Chicken",tr:"Tavuk",en:"Chicken"},
  beef:{de:"Rind",tr:"Dana",en:"Beef"},
  veggie:{de:"Veggie",tr:"Vejetaryen",en:"Veggie"},
  spicy:{de:"Scharf",tr:"Acılı",en:"Spicy"}
};

// p = [klein, mittel, groß] or [einzelpreis]
const MENU = [
  {c:"vorspeisen",n:"Knoblauchbrot",t:["veggie"],p:[4.5],d:{de:"Mit Kräuterbutter überbacken",tr:"Otlu tereyağı ile fırınlanmış",en:"Baked with herb butter"}},
  {c:"vorspeisen",n:"Mozzarella Sticks",t:["veggie"],p:[5.9],d:{de:"Mit Tomatendip",tr:"Domates dip soslu",en:"With tomato dip"}},
  {c:"vorspeisen",n:"Chicken Wings",t:["chicken","spicy"],p:[7.5],d:{de:"Knusprig, mit scharfer Sauce",tr:"Çıtır, acı soslu",en:"Crispy, with hot sauce"}},
  {c:"pizza",n:"Margherita",t:["veggie"],p:[7.9,10.9,14.9],d:{de:"Tomatensauce, Käse, Basilikum",tr:"Domates sosu, peynir, fesleğen",en:"Tomato sauce, cheese, basil"}},
  {c:"pizza",n:"Pepperoni",t:["beef"],p:[8.9,12.4,16.4],d:{de:"Rindersalami, Käse",tr:"Dana salam, peynir",en:"Beef salami, cheese"}},
  {c:"pizza",n:"BBQ Chicken",t:["chicken"],p:[9.4,13.4,17.4],d:{de:"Hähnchen, BBQ-Sauce, rote Zwiebeln",tr:"Tavuk, BBQ sos, kırmızı soğan",en:"Chicken, BBQ sauce, red onion"}},
  {c:"pizza",n:"Chicken Pesto",t:["chicken"],p:[9.4,13.4,17.4],d:{de:"Hähnchen, Pesto, Tomaten",tr:"Tavuk, pesto, domates",en:"Chicken, pesto, tomato"}},
  {c:"pizza",n:"Veggie Supreme",t:["veggie"],p:[8.9,12.4,16.4],d:{de:"Paprika, Champignons, Mais, Oliven",tr:"Biber, mantar, mısır, zeytin",en:"Pepper, mushrooms, corn, olives"}},
  {c:"pizza",n:"Hot Diavola",t:["beef","spicy"],p:[9.4,13.4,17.4],d:{de:"Scharfe Rindersalami, Jalapeños",tr:"Acılı dana salam, jalapeno",en:"Hot beef salami, jalapeños"}},
  {c:"pasta",n:"Penne Arrabbiata",t:["veggie","spicy"],p:[9.5],d:{de:"Scharfe Tomatensauce, Knoblauch",tr:"Acılı domates sosu, sarımsak",en:"Spicy tomato sauce, garlic"}},
  {c:"pasta",n:"Pasta Alfredo",t:["chicken"],p:[10.9],d:{de:"Sahnesauce, Hähnchen, überbacken",tr:"Krema sos, tavuk, fırınlanmış",en:"Cream sauce, chicken, baked"}},
  {c:"pasta",n:"Bolognese",t:["beef"],p:[10.5],d:{de:"Rinderhack, Tomatensauce",tr:"Dana kıyma, domates sosu",en:"Minced beef, tomato sauce"}},
  {c:"salate",n:"Caesar Chicken",t:["chicken"],p:[9.5],d:{de:"Römersalat, Hähnchen, Parmesan",tr:"Marul, tavuk, parmesan",en:"Romaine, chicken, parmesan"}},
  {c:"salate",n:"Gemischter Salat",t:["veggie"],p:[7.5],d:{de:"Saisonales Gemüse, Hausdressing",tr:"Mevsim sebzeleri, ev yapımı sos",en:"Seasonal veg, house dressing"}},
  {c:"desserts",n:"Tiramisu",t:["veggie"],p:[5.5],d:{de:"Hausgemacht",tr:"Ev yapımı",en:"Homemade"}},
  {c:"desserts",n:"Brownie",t:["veggie"],p:[5.5],d:{de:"Warm, mit Vanilleeis",tr:"Sıcak, vanilyalı dondurmalı",en:"Warm, with vanilla ice cream"}},
  {c:"getraenke",n:"Cola",t:[],p:[2.5,3.5,4.5],d:{de:"0,25 l / 0,4 l / 0,5 l",tr:"0,25 l / 0,4 l / 0,5 l",en:"0.25 l / 0.4 l / 0.5 l"}},
  {c:"getraenke",n:"Limonade",t:[],p:[2.5,3.5,4.5],d:{de:"0,25 l / 0,4 l / 0,5 l",tr:"0,25 l / 0,4 l / 0,5 l",en:"0.25 l / 0.4 l / 0.5 l"}}
];

// Placeholder locations – replace with real ones
const LOCATIONS = [
  {name:"Standort 1 – Stadt A",street:"Musterstraße 1",city:"12345 Stadt A",phone:"01234 567890",mail:"stadt-a@example.com"},
  {name:"Standort 2 – Stadt B",street:"Beispielweg 2",city:"23456 Stadt B",phone:"02345 678901",mail:"stadt-b@example.com"},
  {name:"Standort 3 – Stadt C",street:"Probeplatz 3",city:"34567 Stadt C",phone:"03456 789012",mail:"stadt-c@example.com"}
];
/* ===== end of editable part ===== */

let lang = "de", cat = "pizza", tag = "all";
try { lang = localStorage.getItem("lang") || lang; } catch (e) {}
if (!T[lang]) lang = "de";
const $ = s => document.querySelector(s);
const eur = n => n.toLocaleString({de:"de-DE",tr:"tr-TR",en:"en-GB"}[lang],{style:"currency",currency:"EUR"});

function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t[el.dataset.i18n]);
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  $("#yr").textContent = new Date().getFullYear();

  $("#cats").innerHTML = "";
  Object.keys(CATS).forEach(k => {
    const b = document.createElement("button");
    b.textContent = CATS[k][lang];
    if (k === cat) b.setAttribute("aria-current", "true");
    b.onclick = () => { cat = k; render(); };
    $("#cats").append(b);
  });

  $("#chips").innerHTML = "";
  ["all", ...Object.keys(TAGS)].forEach(k => {
    const b = document.createElement("button");
    b.textContent = k === "all" ? t.all : TAGS[k][lang];
    b.setAttribute("aria-pressed", k === tag);
    b.onclick = () => { tag = k; render(); };
    $("#chips").append(b);
  });

  const items = MENU.filter(i => i.c === cat && (tag === "all" || i.t.includes(tag)));
  const sized = MENU.some(i => i.c === cat && i.p.length === 3);
  const head = sized ? [t.small, t.medium, t.large] : [t.price];
  $("#menu-table").innerHTML =
    `<thead><tr><th>${CATS[cat][lang]}</th>${head.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>` +
    items.map(i => {
      const tags = i.t.map(k => `<span class="tag">${TAGS[k][lang]}</span>`).join("");
      const prices = i.p.map(p => `<td>${eur(p)}</td>`).join("");
      return `<tr><td><strong>${i.n}</strong><small>${i.d[lang]}</small><br>${tags}</td>${prices}</tr>`;
    }).join("") + "</tbody>";
  $("#empty").hidden = items.length > 0;
  $("#menu-table").hidden = items.length === 0;

  $("#loc-list").innerHTML = LOCATIONS.map(l =>
    `<div class="loc"><h3>${l.name}</h3><p>${l.street}<br>${l.city}</p><p><a href="tel:${l.phone.replace(/\s/g,"")}">${l.phone}</a><br><a href="mailto:${l.mail}">${l.mail}</a></p></div>`
  ).join("");
}

document.querySelectorAll(".lang button").forEach(b => b.onclick = () => {
  lang = b.dataset.lang;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  render();
});
render();
