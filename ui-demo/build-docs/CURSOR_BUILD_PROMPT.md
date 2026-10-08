# ZIVARA MASTER CURSOR BUILD PROMPT

You are building Zivara, a high-fidelity mobile-first jewellery discovery + local marketplace prototype.

FIRST: read all specification files in this repository:
README.md
PRODUCT_BIBLE.md
DESIGN_SYSTEM.md
SCREEN_SPEC.md
USER_FLOWS.md
DATA_MODEL.md
AI_EXPERIENCES.md
RETAILER_SPEC.md
ADMIN_SPEC.md
IMAGE_MANIFEST.md

These files are authoritative. Do not simplify the concept into a generic ecommerce site.

## Stack
Prefer Next.js + TypeScript + Tailwind CSS + Framer Motion + local JSON/SQLite mock data + Lucide icons.

Avoid unnecessary infrastructure.

## Routes
Consumer:
/, /explore, /search, /jewellery/[slug], /looks, /looks/[slug], /shops, /shops/[slug], /wishlist, /profile, /ai-stylist, /visual-search, /saree-matcher, /book/[id]

Retailer:
/retailer, /retailer/inventory, /retailer/products/new, /retailer/products/[id], /retailer/bookings, /retailer/enquiries, /retailer/calendar, /retailer/analytics

Admin:
/admin, /admin/shops, /admin/products, /admin/customers, /admin/bookings, /admin/leads, /admin/revenue, /admin/intelligence

## Core visual rule
The consumer experience must be image-dominant and editorial:
**IMAGE → DISCOVERY → INSPIRATION → PRODUCT → SHOP → TRANSACTION**

Do not build every section as a generic rounded card grid.

## Build order
1. Design system
2. App shell/navigation
3. Home
4. Explore
5. Product
6. Looks
7. Shops
8. Wishlist/Profile
9. Rental flow
10. AI
11. Retailer
12. Admin
13. responsive QA
14. polish

## Home
Create a premium editorial homepage with:
- ZIVARA wordmark
- strong jewellery imagery
- concise headline
- natural-language search
- occasion chips
- trending in Chennai
- masonry discovery
- shop by occasion
- complete looks
- rental-price collection
- new arrivals
- featured stores
- AI Stylist CTA
- nearby shops
- editorial inspiration

Use asymmetric layouts and varied image proportions.

## Explore
Pinterest-style masonry containing products, looks, editorial cards, shops, collections and AI recommendation cards. Search and filters must work.

## Product
Large image gallery; save; rental/purchase prices; deposit; availability; date selection; shop; reserve; buy/enquire; contact simulation; similar products; complete look.

## Rental
Date selection must affect fake availability. Reservation must update local state and show a confirmation state. No real payment.

## Wishlist
Heart interactions must work and persist in localStorage/context.

## Search
Client-side filtering against fake data. Interpret common terms for occasion, style, budget, rent/buy and type; expose interpreted filter chips.

## AI Stylist
Guided visual flow, not just a chatbot. Inputs → processing animation → 3 recommended looks with reasoning, products, price and shop. Deterministic demo logic is fine.

## Visual Search / Saree Matcher
Allow image selection. Show believable processing states and deterministic demo results.

## Retailer
Operational shell with KPI dashboard, inventory, editable products, bookings, enquiries, calendar and analytics. Booking status transitions must work.

## Admin
Marketplace control tower with KPIs, shop/product moderation, bookings, leads, revenue and intelligence cards.

## Data
Seed 5 fictional shops, 30 products, 12 looks, 10+ customers and 20+ combined bookings/enquiries. Flagship: Varnika Jewellery Studio, T. Nagar, Chennai.

## Images
Follow IMAGE_MANIFEST.md. Never scatter image URLs across components. Centralize image mapping so assets can later be replaced by real pilot-shop photography.

## Responsive
Consumer must look excellent at 390px, 768px and 1440px. Mobile has bottom navigation, two-column masonry, horizontal chips and bottom-sheet filters. Desktop has expanded navigation and editorial layouts.

## Polish
Use restrained motion, strong typography, generous whitespace, subtle hover zoom, polished loading/empty/error states, accessibility, optimized/lazy images, and no console errors.

## Quality bar
If a screen looks like a generic dashboard template, redesign it.
If the first viewport does not communicate Zivara quickly, redesign it.
If the consumer experience feels like ordinary ecommerce, redesign it.
If imagery is weak or inconsistent, replace it.
The final demo should feel credible enough to show to a retailer, investor or early customer.
