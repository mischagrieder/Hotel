# 🏨 Website in 1–2 Prompts fertigstellen

Diese Anleitung zeigt, wie aus dem Template in wenigen Minuten die fertige Website
für ein konkretes Hotel wird. Es gibt **nur eine Datei zum Ausfüllen**: `js/content.js`.

---

## Der schnelle Weg (empfohlen)

1. **Repo kopieren:** Dieses Repository als Vorlage duplizieren
   (GitHub → „Use this template" oder einfach den Ordner kopieren).
2. **Infos sammeln:** Die Checkliste unten ausfüllen.
3. **Prompt geben:** Den fertigen Prompt (weiter unten) mit den Hotel-Infos an Claude/KI geben.
4. **Fotos rein:** Echte Fotos in den Ordner `images/` legen (siehe `images/README.md`).
5. **Veröffentlichen:** Auf GitHub pushen → GitHub Pages baut die Live-Seite (siehe `README.md`).

---

## 📋 Checkliste: Diese Infos brauchst du pro Hotel

- **Name & Slogan** des Hotels
- **Kurzbeschreibung** (2–3 Sätze „Über uns")
- **Zimmer**: je Zimmer Name, kurze Beschreibung, Preis, Größe, 3–4 Ausstattungsmerkmale
- **Ausstattung/Services** (WLAN, Frühstück, Parkplatz, Wellness, Restaurant, Haustiere …)
- **Adresse** (für Karte & Anfahrt)
- **Kontakt**: Telefon, E-Mail, Öffnungszeiten der Rezeption
- **Buchung**: per E-Mail-Anfrage ODER Link zu einem Buchungssystem (Booking.com o. Ä.)
- **Social Media** (Instagram, Facebook, TripAdvisor) – optional
- **Farben/Logo** – falls das Hotel eine Hausfarbe/CI hat
- **Rechtliches** für Impressum (Firma, Inhaber:in, Adresse, UID/USt-ID)
- **Fotos** (Hero, Über-uns, Zimmer, Galerie)

---

## 🤖 Fertiger Prompt zum Kopieren

> Kopiere den Text unten, füge unten deine Hotel-Infos ein und schicke ihn an Claude.

```
Du arbeitest mit dem Hotel-Website-Template in diesem Repo.
Bitte fülle die Datei js/content.js vollständig mit den folgenden Hotel-Infos aus.
Passe außerdem den "theme"-Abschnitt an die Markenfarben an (falls angegeben) und
trage die rechtlichen Angaben im "legal"-Abschnitt ein. Verändere sonst nichts an der
Technik. Wenn Infos fehlen, lass die entsprechenden Felder sinnvoll leer oder weg.

Hier sind die Infos:

- Hotelname:
- Slogan/Tagline:
- Über uns (2–3 Sätze):
- Zimmer (je: Name, Beschreibung, Preis, Größe, Ausstattung):
  1)
  2)
  3)
- Ausstattung/Services:
- Adresse:
- Telefon:
- E-Mail:
- Rezeptions-/Öffnungszeiten:
- Buchung (E-Mail-Anfrage oder Buchungslink):
- Social Media (Instagram/Facebook/TripAdvisor):
- Markenfarben (falls vorhanden, z. B. Haupt- und Akzentfarbe als Hex):
- Rechtliches (Firma, Inhaber:in, Adresse, USt-ID/UID):
- Fotos: (liegen im Ordner images/ – Dateinamen nennen, oder "Platzhalter behalten")
```

### Optionaler 2. Prompt (Feinschliff)

```
Sieh dir die Seite noch einmal an und optimiere: Formulierungen einladender machen,
Reihenfolge der Zimmer nach Preis sortieren, fehlende Alt-Texte ergänzen und prüfen,
dass alle Kontaktlinks funktionieren. Passe bei Bedarf die Akzentfarbe an die Fotos an.
```

---

## 🎨 Nur Farben/Schriften ändern?

Schneller Weg ohne alles neu auszufüllen – im `theme`-Block in `js/content.js`:

```js
theme: {
  colorPrimary: "#1b1b1b",   // dunkler Grundton
  colorAccent:  "#c8a45c",   // Akzent (Buttons, Linien) – Hausfarbe hier eintragen
  colorBg:      "#faf8f5",   // Seitenhintergrund
  colorText:    "#2e2b28",
  fontHeading:  "'Cormorant Garamond', Georgia, serif",
  fontBody:     "'Inter', system-ui, sans-serif"
}
```

---

## ✅ Vor dem Ausliefern kurz prüfen

- [ ] Alle Demo-Texte („Seeblick", „Rapperswil" …) durch echte Angaben ersetzt?
- [ ] Fotos getauscht und komprimiert?
- [ ] Telefon/E-Mail als klickbare Links korrekt?
- [ ] Impressum & Datenschutz ausgefüllt und rechtlich geprüft?
- [ ] Buchungsweg (E-Mail-Anfrage oder Link) funktioniert?
- [ ] Auf dem Handy getestet?
