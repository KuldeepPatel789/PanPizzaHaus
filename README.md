# Pan Pizza House – Website

Statische Seite (HTML/CSS/JS), keine Build-Tools nötig. Sprachen: DE / TR / EN.

## Anpassen
Alles Wichtige steht oben in `app.js`: Texte (`T`), Speisekarte (`MENU`), Standorte (`LOCATIONS`).
Preise `[klein, mittel, groß]` oder ein einzelner Preis `[x]`. Filter-Tags: chicken, beef, veggie, spicy.

## Lokal testen
`python3 -m http.server` im Ordner, dann http://localhost:8000

## Kostenlos online (GitHub Pages)
1. Repo auf GitHub anlegen, Dateien hochladen.
2. Settings → Pages → Branch `main`, Ordner `/ (root)`.
3. Die Seite ist dann unter `https://<user>.github.io/<repo>/` erreichbar.
Eigene Domain später: Settings → Pages → Custom domain.

## Offen
- Bestellen/Reservieren: aktuell deaktiviert mit „bald verfügbar" (Buttons in `index.html`).
- Impressum und Datenschutz mit echten Angaben füllen.
- Eigenes Logo, Fotos und echte Texte einsetzen.
