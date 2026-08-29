# Adding your own photos

This folder is split in two:

```
images/
├── hero/          3 photos used in the top hero section (square works best)
│   ├── flash-1.jpg
│   ├── flash-2.jpg
│   └── flash-3.jpg
└── gallery/        9 photos used in the "Work" section grid
    ├── wedding-1.jpg   wedding-2.jpg   wedding-3.jpg
    ├── party-1.jpg     party-2.jpg     party-3.jpg
    └── corporate-1.jpg corporate-2.jpg corporate-3.jpg
```

## Easiest way to update: keep the same filenames

Every image above is currently a colored placeholder. To swap in a real
photo, just replace the file — same name, same folder — with your own
photo. No HTML or CSS editing needed. If your new file is a PNG instead of
a JPG, either convert it to `.jpg`, or update the `src="..."` path for that
photo in `index.html` to match your new filename/extension.

## Recommended sizes

- **Hero photos** (`images/hero/`): roughly square, at least 700×700px.
- **Gallery photos** (`images/gallery/`): most are square (800×800px);
  the "tall" ones (`wedding-1.jpg`, `wedding-2.jpg`, `wedding-3.jpg`) look
  best as a portrait crop (800×1000px). The layout will crop to fit either
  way, so it's forgiving if your photo isn't an exact match.
- Keep individual files under ~500KB where you can (export at ~80% JPEG
  quality) so the site loads quickly.

## Adding more photos than the current 9

1. Add your new image file into `images/gallery/`.
2. Open `index.html`, find the `<div class="gallery-grid">` section, and
   copy one existing `.gallery-card` block.
3. Update its `src`, `alt` text, category tag, and date. Set
   `data-category` to `weddings`, `parties`, or `corporate` so the filter
   buttons pick it up correctly.

## Adding a new category

If you want a filter beyond Weddings / Parties / Corporate:

1. In `index.html`, add a new button inside `.filter-tabs`, e.g.
   `<button class="filter-tab" data-filter="graduations">Graduations</button>`
2. Set `data-category="graduations"` on the relevant `.gallery-card` blocks.

No other code changes are needed — the filtering logic in `script.js`
reads `data-filter` and `data-category` automatically.
