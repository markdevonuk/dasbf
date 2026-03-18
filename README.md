# DASBF Website

Devon Ambulance Staff Benevolent Fund — static website for GitHub Pages.

## File Structure

```
dasbf/
├── index.html          ← Home page
├── about.html          ← About / Who's Who / FAQ
├── lottery.html        ← Lottery results & how it works
├── join.html           ← Join / membership info
├── css/
│   └── styles.css      ← All shared styles
├── js/
│   └── main.js         ← Hamburger menu + accordion
├── images/             ← Drop Joe's photos in here
│   ├── hero-main.jpg   ← Home page hero (landscape, dramatic)
│   ├── split-crew.jpg  ← Home page split section
│   ├── about-team.jpg  ← About page split section
│   ├── lottery-draw.jpg← Lottery page split section
│   └── join-crew.jpg   ← Join page split section
└── README.md
```

## Setup Steps

### 1. Add Photos
Drop Joe's photos into the `images/` folder with the names above,
or update the filenames in the HTML files to match.

Each photo reference looks like this in the HTML:
```html
<div class="split-photo" style="background-image: url('images/about-team.jpg');"></div>
```

### 2. Fill in the Blanks
Search all HTML files for `REPLACE:` comments — these mark everything
you need to update:
- Committee member names and roles (about.html)
- Prize structure / amounts (lottery.html)
- Sign-up form link (join.html — search for `#YOUR-FORM-LINK-HERE`)
- Facebook page URL (all pages — currently `https://www.facebook.com/DASBF`)

### 3. Push to GitHub Pages
1. Create a new GitHub repo (e.g. `dasbf-website`)
2. Push all these files to the `main` branch
3. Go to Settings → Pages → Source: Deploy from branch → `main` → `/root`
4. GitHub will give you a URL like: `https://your-username.github.io/dasbf-website`

### 4. Custom Domain (optional)
To use `www.dasbf.org`:
1. In GitHub Pages settings, add custom domain: `www.dasbf.org`
2. In your DNS provider, add a CNAME record:
   - Name: `www`
   - Value: `your-username.github.io`
3. Enable "Enforce HTTPS" once DNS propagates

## Notes
- No frameworks, no dependencies — pure HTML/CSS/JS
- Mobile-first — works on all screen sizes
- Accessible — uses semantic HTML and ARIA labels
- Images copyright Joe Cartwright (Paramedic) — credited in footer
