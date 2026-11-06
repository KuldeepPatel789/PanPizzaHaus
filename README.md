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
Alle Fotos kommen in den Ordner `images/photos/`, Dateiendung **.jpg**, alles **klein** geschrieben (GitHub unterscheidet Groß/Klein).
- **Gerichte:** Dateiname = Name des Gerichts, deutsch ODER englisch, z. B. `gemischter-salat.jpg` oder `mixed-salad.jpg`. Die komplette Liste steht in `foto-namen.txt`. Ohne Foto erscheint eine Zeichnung.
- **Einblicke (großes Foto mit Zitat):** `einblick-1.jpg`, `einblick-2.jpg`, `einblick-3.jpg` ... ohne Lücken, beliebig viele. Sie wechseln automatisch, mit Pfeilen links/rechts.
- **Startbild:** `images/hero.mp4` (Video) und `images/hero-poster.jpg` (Standbild) ersetzen, am besten in Full-HD.

## Bewertungen
Stehen in `app.js` bei `REVIEWS`, beliebig viele. Pro Seite zeigt die Seite je nach Bildschirm 1, 2, 4 oder 8 Bewertungen, dann geht es mit den Pfeilen weiter.

## Einstellungen in app.js
`OPENING` (Öffnungszeiten), `LOCATIONS` (Adresse), `DELIVERY` (Lieferando/Uber-Eats-Links), `GOOGLE_REVIEW_URL`, `REVIEWS` (Beispiel-Bewertungen ersetzen).

## Rechtliches
`impressum.html` und `datenschutz.html` sind Muster: ausfüllen und prüfen lassen.
