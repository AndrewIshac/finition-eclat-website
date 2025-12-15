# How to Change Title Font to Match Logo

## Step 1: Identify the Font in Your Logo

1. Go to **WhatTheFont**: https://www.whatfontis.com/
2. Upload your logo image (`public/logo.png.jpg`)
3. The tool will identify the font name

## Step 2: Choose Implementation Method

### Option A: If Font is Available on Google Fonts

1. Go to https://fonts.google.com/
2. Search for your font name
3. Select the font and click "Get font"
4. Copy the `<link>` tag provided

Then add it to `public/index.html` in the `<head>` section:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT_NAME:wght@400;600;700&display=swap" rel="stylesheet">
```

### Option B: If You Have the Font File (.ttf, .otf, .woff)

1. Create a `fonts` folder in `public/fonts/`
2. Add your font files there
3. Use `@font-face` in CSS (see below)

## Step 3: Apply Font to All Titles

After identifying the font, I'll help you update the CSS to use it for all titles.

**Common fonts that might match:**
- Playfair Display (elegant serif)
- Montserrat (modern sans-serif)
- Raleway (clean sans-serif)
- Cinzel (decorative serif)
- Lora (serif)
- Merriweather (serif)

---

## Quick Implementation (Example with Google Font)

If you want to try a popular elegant font like "Playfair Display":

1. Add to `public/index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
```

2. Then I'll update all the CSS files to use this font for titles.



