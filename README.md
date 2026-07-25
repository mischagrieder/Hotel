# Hotel-Website-Template

Ein elegantes, **wiederverwendbares Website-Template für Hotels** – reines HTML/CSS/JS,
ohne Build-Prozess. Die komplette Seite wird aus **einer einzigen Datei** gespeist:
[`js/content.js`](js/content.js). Ideal, um für ein neues Hotel in wenigen Minuten eine
fertige, professionelle Website zu erstellen.

👉 **Neue Website erstellen?** Die Schritt-für-Schritt-Anleitung steht in
**[AUSFUELLEN.md](AUSFUELLEN.md)** (inkl. fertigem Copy-Paste-Prompt).

---

## Was ist drin?

- **One-Page-Design** mit den Abschnitten: Hero · Über uns · Zimmer & Suiten ·
  Ausstattung · Galerie (mit Lightbox) · Bewertungen · Lage (Google-Maps) · Kontakt/Anfrage · Footer
- **Impressum & Datenschutz** als Vorlage (Pflicht im DACH-Raum)
- **Responsiv** (Handy, Tablet, Desktop) inkl. mobilem Menü
- **Elegantes Standard-Design**, Farben & Schriften mit einem Handgriff austauschbar
- **Anfrageformular** (per E-Mail oder Formspree) und/oder Link zu einem Buchungssystem
- **Automatisches Deployment** auf GitHub Pages

---

## Projektstruktur

```
.
├── index.html            → Startseite (Struktur; Inhalte kommen aus content.js)
├── impressum.html        → Impressum (füllt sich aus content.js)
├── datenschutz.html      → Datenschutz (füllt sich aus content.js)
├── css/style.css         → komplettes Design; Farben/Fonts als CSS-Variablen
├── js/
│   ├── content.js        → ⭐ HIER alles ausfüllen (Name, Zimmer, Preise, Kontakt …)
│   └── main.js           → rendert content.js in die Seite (nicht anfassen nötig)
├── images/               → Bilder (aktuell Platzhalter) · siehe images/README.md
├── AUSFUELLEN.md         → Anleitung + fertiger Prompt für neue Hotels
└── .github/workflows/deploy.yml → Auto-Deploy auf GitHub Pages
```

---

## Lokale Vorschau

Da die Seite JavaScript-Dateien lädt, am besten über einen kleinen lokalen Server öffnen:

```bash
# im Projektordner:
python3 -m http.server 8000
# dann im Browser öffnen:  http://localhost:8000
```

(Alternativ: die VS-Code-Erweiterung „Live Server".)

---

## Veröffentlichen auf GitHub Pages

1. Repository nach GitHub pushen.
2. **Einmalig:** Im Repo auf **Settings → Pages** gehen und bei
   *„Build and deployment → Source"* **„GitHub Actions"** auswählen.
3. Beim nächsten Push auf `main` (bzw. den konfigurierten Branch) baut der Workflow
   [`deploy.yml`](.github/workflows/deploy.yml) die Seite automatisch.
4. Die öffentliche URL erscheint danach unter **Settings → Pages** und im Action-Log.

> Hinweis: Deployt der Workflow von einem anderen Branch als dem Standard-Branch, ggf.
> unter *Settings → Environments → github-pages → Deployment branches* diesen Branch erlauben –
> oder einfach in den `main`-Branch mergen.

---

## Anpassen in Kürze

| Was                     | Wo                                            |
|-------------------------|-----------------------------------------------|
| Texte, Zimmer, Preise   | `js/content.js`                               |
| Farben & Schriften      | `js/content.js` → `theme` (oder `css/style.css` → `:root`) |
| Bilder                  | Ordner `images/` (siehe `images/README.md`)   |
| Impressum/Datenschutz   | `js/content.js` → `legal`                     |
| Buchungsweg             | `js/content.js` → `booking`                   |

Viel Erfolg! 🏔️
