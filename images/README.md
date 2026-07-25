# Bilder-Ordner

Hier liegen alle Bilder der Website. Aktuell sind es **stilvolle Platzhalter (SVG)**.
Zum Anpassen einfach durch echte Hotelfotos ersetzen.

## So ersetzt du ein Bild

1. Lege dein Foto in diesen Ordner (z. B. `hero.jpg`).
2. Trage den neuen Pfad in **`js/content.js`** ein (z. B. `image: "images/hero.jpg"`).
   - Am einfachsten: Foto **exakt so benennen** wie den Platzhalter (`hero`, `room-1`, …),
     dann musst du in `content.js` nur die Endung `.svg` → `.jpg` ändern.

## Welche Bilder werden gebraucht?

| Datei              | Wo                    | Empf. Format | Empf. Größe   |
|--------------------|-----------------------|--------------|---------------|
| `hero.jpg`         | großes Bild ganz oben | Querformat   | 1600×900 px   |
| `about.jpg`        | Abschnitt „Über uns"  | Hochformat   | 900×1120 px   |
| `room-1..3.jpg`    | Zimmer-Karten         | Querformat   | 900×600 px    |
| `gallery-1..6.jpg` | Galerie               | quadratisch  | 800×800 px    |
| `og-image.jpg`     | Vorschau beim Teilen  | Querformat   | 1200×630 px   |
| `favicon.svg`      | Browser-Tab-Symbol    | quadratisch  | 64×64 px      |
| `logo.svg` (opt.)  | Logo im Menü          | –            | Höhe ~40 px   |

## Tipps

- **Dateigröße:** Fotos vor dem Hochladen komprimieren (z. B. auf ~200–400 KB),
  damit die Seite schnell lädt. Tools: [squoosh.app](https://squoosh.app), TinyPNG.
- **Format:** `.jpg` für Fotos, `.png`/`.svg` für Logos/Grafiken. `.webp` ist noch kleiner.
- Anzahl der Galerie-/Zimmerbilder ist frei – die Liste in `content.js` bestimmt, wie viele angezeigt werden.
