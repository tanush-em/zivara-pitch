# Zivara UI Demo

High-fidelity static HTML prototype of Zivara — visual jewellery discovery + local marketplace + rental infrastructure (Chennai).

## Open locally

Serve the `app` folder over HTTP (remote images need network):

```bash
cd ui-demo/app
python3 -m http.server 8765
```

Then visit [http://localhost:8765](http://localhost:8765).

Or open `index.html` directly in a browser (some browsers restrict modules; this demo uses plain scripts so file:// usually works).

## Surfaces

| Surface | Entry |
|---------|-------|
| Consumer | `index.html` |
| Retailer OS | `retailer/index.html` |
| Admin | `admin/index.html` |

## Stack

- Hand-written CSS (`assets/css/zivara.css`)
- Vanilla JS (`assets/js/images.js`, `data.js`, `app.js`)
- Remote imagery from `build-docs/image-manifest.json` (Unsplash / Pexels / Wikimedia)
- `localStorage` for wishlist, bookings, enquiries, moderation state

Demo only — no real payments, auth, WhatsApp, or maps.
