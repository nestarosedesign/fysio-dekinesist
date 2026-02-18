# Stap voor stap






# ik heb een aantal templates gemaakt, die staan klaar als mappen.  hier in kan je de pagina maken die je wil.


## VOORBEREIDING

### Stap 1: Bereid je afbeelding voor
1. Zorg dat je een afbeelding hebt voor je artikel 
!!! 
probeer alle afbeeldingen zo klein mogleijk te krijgen, liefst .webp .png (tussen de 20 en 200 KB - .webp heeft de beste compressie - er zijn online een hoop gratis coverters, als je copilot hebt kan je het daar aan vragen, die kan bestanden omzetten )
!!!
2. Sla deze op in de `images/` map
3. Geef het een duidelijke naam: `blogpost2_1.webp` (of `blogpost3_1.webp`, etc.)




# DAAR GAAN WE MET DE SITE 
(Als je op visual studio code zit :  rechter muis in eender welk .html bestand en dan "open with live server" - dan kan je zelf mee kijken) 
### Kies het juiste template
- **Voor je 2e artikel:** open `blogpost2.html`
- **Voor je 3e artikel:** open `blogpost3.html`
- **Voor je 4e artikel:** open `blogpost4.html`
---

## STAP 1: VULT HET ARTIKEL IN

Open het bestand (bijv. `blogpost2.html`) en vervang alle `[VERVANG DIT...]` teksten met jouw content volgens de volgende stappen:

### 1. Metagegevens (bovenaan, in de `<head>`)
```
(Dit deel zie je zelf niet op je site maar is voor Betere SEO (Google ziet het als je links deelt etc.)) 

Zoek naar : <meta name="description" content="[BESCHRIJVING VAN JE ARTIKEL - VERVANG DIT]" />
Vervang door: <meta name="description" content="Korte beschrijving van je artikel (max 160 karakters)"
Voorbeeld: "Hoe je blessures voorkomt bij hardlopen: 5 essentiële tips voor sporters"
```

Doe hetzelfde voor:
- `<meta property="og:title"` - Titel van je artikel
- `<meta property="og:description"` - Beschrijving van je artikel
- `<title>` - Titel die in browser tab verschijnt

### 2. Artikelafbeelding
```
Zoek naar: <img src="images/[VERVANG DIT MET JE AFBEELDING - BV: blogpost2_1.webp]" 
Vervang door: <img src="images/blogpost2_1.webp" 
(hier zie je de mappenstructuur - eerst "map" dan "/" dan pas de naam van je afbeelding )
```

### 3. Artikelkop gegevens
```
Zoek naar: <span class="post-date">[VERVANG DIT MET DATUM - BV: 20 januari 2026]</span>
Vervang door: <span class="post-date">20 januari 2026</span>
(gebruik gewenste datum)
```

```
Zoek naar: <h1 class="post-title">[VERVANG DIT MET JE ARTIKEL TITEL]</h1>
Vervang door: <h1 class="post-title">Mijn artikel titel hier</h1>
```

```
Zoek naar: <p class="post-subtitle">[VERVANG DIT MET JE SUBTITEL/SAMENVATTING]</p>
Vervang door: <p class="post-subtitle">Een korte samenvatting van je artikel</p>
```

### 4. Artikelinhoud (de hoofdtekst)
Zoek het gedeelte met `<article class="post-content">` en vervang:

```
<h2>[VERVANG DIT MET JE EERSTE KOPJE]</h2>
vervang door:
<h2>Inleiding of eerste hoofdstuk</h2>

<p>[Vervang deze tekst met je artikelparagraaf. Je kunt meerdere paragrafen toevoegen.]</p>
vervang door:
<p>Hier komt je eerste alinea...</p>
<p>Dit kan je tweede alinea zijn...</p>
```

**Herhaal dit voor:**
- `<h3>[VERVANG DIT MET EEN SUBKOPJE]</h3>` → je subkopjes
- `<p>[Vervang deze tekst met meer inhoud.]</p>` → je alinea's

### 5. Lijstpunten (optioneel)
```
<ul>
  <li>[Lijst item 1 - vervang dit]</li>
  <li>[Lijst item 2 - vervang dit]</li>
  <li>[Lijst item 3 - vervang dit]</li>
</ul>
```
Vervang door je eigen punten, of verwijder het helemaal als je geen opsomming nodig hebt.

### 6. Afsluiting
```
<h2>[VERVANG DIT MET JE CONCLUSIE KOPJE]</h2>
vervang door:
<h2>Conclusie</h2>

<p>[Vervang deze tekst met je afsluitende inhoud.]</p>
vervang door:
<p>Hier je afsluitende tekst...</p>
```

---

## STAP 2: ZET JE ARTIKEL ONLINE

### Op blog.html

Open `blog.html` en zoek naar:
```
<!-- Blog Post 2 (DISABLED - uncomment to enable) --> (dit laat je zoals het is)
<!-- <a class="blog-card" href="blogpost2.html">
```

**Stap 1:** Verwijder de `<!-- ` aan het begin
**Stap 2:** Verwijder de ` -->` aan het einde

Dit maakt het commentaar ongedaan en toont je artikel op de blog pagina.

**Vervang ook in deze kaart:**
- `[VERVANG MET ARTIKEL TITEL]` → je artikel titel
- `[VERVANG MET DATUM]` → de artikel datum (bijv: "20 januari 2026")
- `[VERVANG MET ARTIKEL SAMENVATTING]` → korte samenvatting (max 1-2 zinnen!!)
- `images/blogpost2_1.webp` → de juiste afbeeldingsnaam

### Op index.html

Open `index.html` en zoek naar:
```
<!-- Blog post 2 (DISABLED - uncomment to enable) -->
<!-- <a href="blogpost2.html" class="blog-post">
```

**Stap 1:** Verwijder de `<!-- ` aan het begin
**Stap 2:** Verwijder de ` -->` aan het einde

**Vervang ook hier:**
- `[VERVANG MET ARTIKEL TITEL]` → je artikel titel
- `[VERVANG MET DATUM]` → de artikel datum (bijv: "2026-01-20")
- `[VERVANG MET ARTIKEL SAMENVATTING]` → korte samenvatting !!!! 
- `images/blogpost2_1.webp` → de juiste afbeeldingsnaam

---

## STAP 3: CONTROLEREN

1. **Open je website** in je browser
2. **Check de homepage** - zie je je artikel in het Blog-gedeelte?
3. **Klik op het artikel** - werkt de link?
4. **Lees het artikel** - ziet alles er goed uit?
5. **Controleer de afbeelding** - laadt deze correct?

---

## VEELGESTELDE VRAGEN

### Q: Wat als ik meer kopjes nodig heb?
**A:** Kopieer dit patroon:
```
<h2>Mijn kopje</h2>
<p>Mijn tekst hier</p>
```

### Q: Hoe voeg ik fettekst toe?
**A:** Gebruik `<strong>dit is vet</strong>`

### Q: Hoe voeg ik schuinschrift toe?
**A:** Gebruik `<em>dit is schuin</em>`

### Q: Kan ik mijn artikel verwijderen?
**A:** Ja! Voeg de `<!-- ` en ` -->` commentaartekens weer toe om het te verbergen.

### Q: Kan ik meerdere afbeeldingen toevoegen?
**A:** Ja, kopieer dit patroon:
```
<div class="post-image">
  <img src="images/blogpost2_2.webp" alt="Beschrijving van de afbeelding">
</div>
```

---

## CHECKLIST VOOR ELKE NIEUWE POST

- [ ] Afbeelding gemaakt en opgeslagen in `images/` map
- [ ] Artikel template geopend (blogpost2.html, 3.html of 4.html)
- [ ] Alle [VERVANG DIT...] teksten vervangen
- [ ] Metagegevens ingevuld (description, title, etc)
- [ ] Artikel datum ingevuld
- [ ] Afbeeldingsnaam correct ingevuld
- [ ] Links uitgecommentarieerd in `blog.html`
- [ ] Links uitgecommentarieerd in `index.html`
- [ ] Website getest en artikel zichtbaar
- [ ] Alle links werken

---

## VOORBEELD: Een complete blogpost toevoegen

### Ik wil een artikel over "Voetbalblessures" toevoegen:

1. **Afbeelding gereed:** `images/blogpost2_1.webp` ✓
2. **Open:** `blogpost2.html` ✓
3. **Vervang:**
   - Description: "Hoe voetballers blessures voorkomen en behandelen"
   - Title: "Voetbalblessures voorkomen - Gids voor voetballers"
   - Datum: "25 januari 2026"
   - H1: "Voetbalblessures: Preventie en behandeling"
   - Subtitel: "Alles wat je moet weten over de meest voorkomende voetbalblessures"
4. **Artikel inhoud**: Schrijf je artikel met kopjes en alinea's
5. **blog.html:** Uncomment de blog post 2 kaart en vul in
6. **index.html:** Uncomment de blog post 2 preview en vul in
7. **Test:** Website controleren!

---


Controleer of alle `[VERVANG DIT...]` labels weg zijn voordat je article online zet.
