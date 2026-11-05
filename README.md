# Pan Pizza Hause – Website

Statische Seite (HTML/CSS/JS). Sprachen: DE, EN, TR, AR, RU, PL, UA (wird automatisch erkannt).

## Speisekarte ändern (ohne Programmieren)
Öffne `speisekarte.csv` in Excel oder Google Sheets (Trennzeichen Semikolon, UTF-8). Jede Zeile ist ein Gericht.
- **Kategorie:** vorspeisen, pizza, pasta, salate, desserts, getraenke
- **Name / EN / TR / AR / RU / PL / UK:** Name auf Deutsch; die anderen Spalten sind optional (leer = Deutsch bzw. Englisch)
- **Tags:** chicken, beef, veggie, fish, spicy, alcohol (mit Komma) – daraus entstehen die Filter
- **Klein / Mittel / Groß:** Preise bei Pizza, oder **Preis** bei allem mit nur einem Preis (Komma als Dezimalzeichen)
- **Zutaten:** durch Komma getrennt, deutsch (bekannte Zutaten werden automatisch übersetzt)
- **Allergene:** Buchstaben a–o, Zusatzstoffe als Zahlen, z. B. `a,g,7,8`
- **Menge:** z. B. `0,33 l`
- Sonderzeilen: Kategorie `extra` (Zutat hinzufügen, Preise je Größe), `kaeserand` (Aufpreis), `sosse` (Tag `gratis` = zählt zu den Gratis-Soßen), `einstellung` (Anzahl Gratis-Soßen pro Pizza)
- Speichern, hochladen, fertig: Preise erscheinen automatisch auf der Seite.

## Fotos
Foto eines Gerichts: `images/photos/<name-klein-mit-bindestrichen>.jpg`, z. B. `spicy-chicken.jpg` (Umlaute ae/oe/ue). Ohne Foto erscheint eine Zeichnung.
Weitere Fotos: `hero-poster.jpg` (Startbild), `restaurant-1.jpg`, `restaurant-2.jpg`, `restaurant-3.jpg`.

## Einstellungen in app.js
`OPENING` (Öffnungszeiten), `LOCATIONS` (Adresse), `DELIVERY` (Lieferando/Uber-Eats-Links), `GOOGLE_REVIEW_URL`, `REVIEWS` (Beispiel-Bewertungen ersetzen).

## Rechtliches
`impressum.html` und `datenschutz.html` sind Muster: ausfüllen und prüfen lassen.
