/* Zivara shared runtime */
(function () {
  const D = () => window.ZivaraData;
  const STORAGE = {
    wishlist: "zivara_wishlist_v1",
    bookings: "zivara_bookings_v1",
    enquiries: "zivara_enquiries_v1",
    recently: "zivara_recent_v1",
    retailerBookings: "zivara_retailer_bookings_v1",
    retailerEnquiries: "zivara_retailer_enquiries_v1",
  };

  function $(sel, root = document) { return root.querySelector(sel); }
  function $$(sel, root = document) { return [...root.querySelectorAll(sel)]; }

  function formatINR(n) {
    return "₹" + Number(n || 0).toLocaleString("en-IN");
  }

  function qs(name) {
    return new URLSearchParams(location.search).get(name);
  }

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /* Wishlist */
  function getWishlist() {
    return loadJSON(STORAGE.wishlist, { products: [], looks: [], shops: [] });
  }
  function setWishlist(w) { saveJSON(STORAGE.wishlist, w); }
  function toggleWish(type, id) {
    const w = getWishlist();
    const key = type === "product" ? "products" : type === "look" ? "looks" : "shops";
    const i = w[key].indexOf(id);
    let added;
    if (i >= 0) { w[key].splice(i, 1); added = false; }
    else { w[key].push(id); added = true; }
    setWishlist(w);
    toast(added ? "Saved to wishlist" : "Removed from wishlist");
    syncWishButtons();
    return added;
  }
  function isWished(type, id) {
    const w = getWishlist();
    const key = type === "product" ? "products" : type === "look" ? "looks" : "shops";
    return w[key].includes(id);
  }

  function heartSVG(filled) {
    return filled
      ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 21s-7.2-4.6-9.5-8.2C.7 9.8 2.2 6 6 6c2 0 3.2 1.2 4 2.2C10.8 7.2 12 6 14 6c3.8 0 5.3 3.8 3.5 6.8C19.2 16.4 12 21 12 21z"/></svg>'
      : '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12.1 20.3C7.4 16.7 3.5 13.2 3.5 9.2A4.5 4.5 0 0 1 8 4.7c1.7 0 3.2.9 4.1 2.2A4.9 4.9 0 0 1 16.2 4.7a4.5 4.5 0 0 1 4.5 4.5c0 4-3.9 7.5-8.6 11.1z"/></svg>';
  }

  function syncWishButtons(root = document) {
    $$("[data-wish]", root).forEach((btn) => {
      const type = btn.dataset.wish;
      const id = btn.dataset.id;
      const on = isWished(type, id);
      btn.classList.toggle("saved", on);
      btn.innerHTML = heartSVG(on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-wish]");
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    toggleWish(btn.dataset.wish, btn.dataset.id);
  });

  /* Recently viewed */
  function trackView(productId) {
    const list = loadJSON(STORAGE.recently, []);
    const next = [productId, ...list.filter((id) => id !== productId)].slice(0, 12);
    saveJSON(STORAGE.recently, next);
  }
  function getRecentlyViewed() {
    return loadJSON(STORAGE.recently, []).map((id) => D().getProduct(id)).filter(Boolean);
  }

  /* User bookings / enquiries persistence */
  function getUserBookings() {
    return loadJSON(STORAGE.bookings, []);
  }
  function addUserBooking(booking) {
    const list = getUserBookings();
    list.unshift(booking);
    saveJSON(STORAGE.bookings, list);
    const rb = getRetailerBookings();
    rb.unshift(booking);
    saveJSON(STORAGE.retailerBookings, rb);
    return booking;
  }
  function getRetailerBookings() {
    const seeded = D().bookings;
    const local = loadJSON(STORAGE.retailerBookings, null);
    if (!local) {
      saveJSON(STORAGE.retailerBookings, seeded);
      return [...seeded];
    }
    return local;
  }
  function updateRetailerBooking(id, patch) {
    const list = getRetailerBookings().map((b) => (b.id === id ? { ...b, ...patch } : b));
    saveJSON(STORAGE.retailerBookings, list);
    return list;
  }
  function getRetailerEnquiries() {
    const seeded = D().enquiries;
    const local = loadJSON(STORAGE.retailerEnquiries, null);
    if (!local) {
      saveJSON(STORAGE.retailerEnquiries, seeded);
      return [...seeded];
    }
    return local;
  }
  function updateRetailerEnquiry(id, patch) {
    const list = getRetailerEnquiries().map((e) => (e.id === id ? { ...e, ...patch } : e));
    saveJSON(STORAGE.retailerEnquiries, list);
    return list;
  }
  function addEnquiry(enquiry) {
    const list = getRetailerEnquiries();
    list.unshift(enquiry);
    saveJSON(STORAGE.retailerEnquiries, list);
    const userList = loadJSON(STORAGE.enquiries, []);
    userList.unshift(enquiry);
    saveJSON(STORAGE.enquiries, userList);
    return enquiry;
  }

  /* Toast */
  function ensureToastHost() {
    let host = $(".toast-host");
    if (!host) {
      host = document.createElement("div");
      host.className = "toast-host";
      document.body.appendChild(host);
    }
    return host;
  }
  function toast(msg) {
    const host = ensureToastHost();
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    host.appendChild(el);
    setTimeout(() => el.remove(), 2400);
  }

  /* Icons */
  const icons = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z"/></svg>',
    explore: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="m8.5 15.5 2-6 6-2-2 6-6 2z"/></svg>',
    shops: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 9h16l-1.2-4H5.2L4 9zm1 0v10h14V9M9 19v-6h6v6"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12.1 20.3C7.4 16.7 3.5 13.2 3.5 9.2A4.5 4.5 0 0 1 8 4.7c1.7 0 3.2.9 4.1 2.2A4.9 4.9 0 0 1 16.2 4.7a4.5 4.5 0 0 1 4.5 4.5c0 4-3.9 7.5-8.6 11.1z"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="3.5"/><path d="M5 19.5c1.5-3.2 4-4.8 7-4.8s5.5 1.6 7 4.8"/></svg>',
  };

  function basePath() {
    // Detect if we're in retailer/ or admin/
    const path = location.pathname.replace(/\\/g, "/");
    if (path.includes("/retailer/") || path.includes("/admin/")) return "../";
    return "";
  }

  function renderConsumerNav(active) {
    const base = basePath();
    const links = [
      { href: "index.html", label: "Discover", id: "home" },
      { href: "explore.html", label: "Jewellery", id: "explore" },
      { href: "looks.html", label: "Looks", id: "looks" },
      { href: "shops.html", label: "Shops", id: "shops" },
      { href: "ai-stylist.html", label: "AI Stylist", id: "ai" },
      { href: "wishlist.html", label: "Wishlist", id: "wishlist" },
      { href: "profile.html", label: "Profile", id: "profile" },
    ];
    const top = document.createElement("header");
    top.className = "topnav";
    top.innerHTML = `
      <div class="topnav-inner">
        <a class="brand" href="${base}index.html">ZIVARA</a>
        <nav class="nav-links">
          ${links.map((l) => `<a href="${base}${l.href}" class="${active === l.id ? "active" : ""}">${l.label}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <a class="icon-btn" href="${base}search.html" aria-label="Search" title="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          </a>
          <a class="btn btn-sm btn-ghost" href="${base}retailer/index.html">Retailer</a>
        </div>
      </div>`;
    const banner = $(".demo-banner");
    document.body.prepend(top);
    if (banner) document.body.prepend(banner);

    const bottom = document.createElement("nav");
    bottom.className = "bottom-nav";
    bottom.setAttribute("aria-label", "Mobile");
    const mobile = [
      { href: "index.html", label: "Home", id: "home", icon: icons.home },
      { href: "explore.html", label: "Explore", id: "explore", icon: icons.explore },
      { href: "shops.html", label: "Shops", id: "shops", icon: icons.shops },
      { href: "wishlist.html", label: "Wishlist", id: "wishlist", icon: icons.heart },
      { href: "profile.html", label: "Profile", id: "profile", icon: icons.user },
    ];
    bottom.innerHTML = mobile.map((m) =>
      `<a href="${base}${m.href}" class="${active === m.id ? "active" : ""}">${m.icon}<span>${m.label}</span></a>`
    ).join("");
    document.body.appendChild(bottom);
    document.body.classList.add("has-bottom-nav");
  }

  function renderDashNav(surface, active) {
    const isRetailer = surface === "retailer";
    const links = isRetailer
      ? [
          { href: "index.html", label: "Dashboard", id: "dash" },
          { href: "inventory.html", label: "Inventory", id: "inventory" },
          { href: "product-editor.html", label: "Add Product", id: "editor" },
          { href: "bookings.html", label: "Bookings", id: "bookings" },
          { href: "enquiries.html", label: "Enquiries", id: "enquiries" },
          { href: "calendar.html", label: "Calendar", id: "calendar" },
          { href: "analytics.html", label: "Analytics", id: "analytics" },
          { href: "profile.html", label: "Shop Profile", id: "profile" },
        ]
      : [
          { href: "index.html", label: "Overview", id: "dash" },
          { href: "shops.html", label: "Shops", id: "shops" },
          { href: "products.html", label: "Products", id: "products" },
          { href: "customers.html", label: "Customers", id: "customers" },
          { href: "bookings.html", label: "Bookings", id: "bookings" },
          { href: "leads.html", label: "Leads", id: "leads" },
          { href: "revenue.html", label: "Revenue", id: "revenue" },
          { href: "intelligence.html", label: "Intelligence", id: "intel" },
        ];
    const shell = document.createElement("div");
    shell.className = "dash-shell";
    const main = document.createElement("div");
    main.className = "dash-main";
    const move = [...document.body.children].filter((el) => el.tagName !== "SCRIPT");
    move.forEach((el) => main.appendChild(el));

    const side = document.createElement("aside");
    side.className = "dash-side";
    side.innerHTML = `
      <a class="brand" href="../index.html">ZIVARA</a>
      <div class="eyebrow" style="color:rgba(255,252,247,.45);margin-bottom:14px">${isRetailer ? "Retailer OS" : "Admin Control"}</div>
      ${links.map((l) => `<a href="${l.href}" class="${active === l.id ? "active" : ""}">${l.label}</a>`).join("")}
      <div style="margin-top:28px">
        <a href="../index.html">← Consumer</a>
        <a href="${isRetailer ? "../admin/index.html" : "../retailer/index.html"}">${isRetailer ? "Admin" : "Retailer"}</a>
      </div>`;

    const mobile = document.createElement("div");
    mobile.className = "mobile-dash-nav";
    mobile.innerHTML = links.map((l) =>
      `<a href="${l.href}" class="${active === l.id ? "active" : ""}">${l.label}</a>`
    ).join("");
    main.prepend(mobile);

    shell.appendChild(side);
    shell.appendChild(main);
    document.body.appendChild(shell);
  }

  /* Card renderers */
  function productCard(p, opts = {}) {
    const ratio = opts.tall ? "tall" : opts.square ? "square" : "";
    return `
      <article class="masonry-item">
        <a class="media-card" href="${basePath()}product.html?id=${p.id}">
          <div class="media ${ratio}">
            <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
            ${p.trending ? '<span class="badge">Trending</span>' : p.newArrival ? '<span class="badge">New</span>' : ""}
            <button class="icon-btn save" data-wish="product" data-id="${p.id}" aria-label="Save">${heartSVG(isWished("product", p.id))}</button>
          </div>
          <div class="meta">
            <div class="name">${p.name}</div>
            <div class="price">Rent ${formatINR(p.rentalPrice)} · Buy ${formatINR(p.purchasePrice)}</div>
          </div>
        </a>
      </article>`;
  }

  function lookCard(l) {
    return `
      <article class="masonry-item">
        <a class="media-card look-card" href="${basePath()}look.html?id=${l.id}">
          <div class="media">
            <img src="${l.heroImage}" alt="${l.name}" loading="lazy" />
            <span class="badge">Look</span>
            <button class="icon-btn save" data-wish="look" data-id="${l.id}" aria-label="Save">${heartSVG(isWished("look", l.id))}</button>
          </div>
          <div class="meta">
            <div class="name">${l.name}</div>
            <div class="price">Bundle rent ${formatINR(l.rentalPrice)} · Save ${formatINR(l.savings)}</div>
          </div>
        </a>
      </article>`;
  }

  function shopCard(s) {
    return `
      <a class="media-card shop-card" href="${basePath()}shop.html?id=${s.id}">
        <div class="media landscape">
          <img src="${s.image}" alt="${s.name}" loading="lazy" />
        </div>
        <div class="meta">
          <div class="name">${s.name}</div>
          <div class="price">${s.locality}, ${s.city} · ★ ${s.rating} · ${s.productCount} pieces</div>
        </div>
      </a>`;
  }

  function editorialCard(e) {
    return `
      <article class="masonry-item">
        <a class="media-card editorial-card" href="${basePath()}explore.html">
          <div class="media">
            <img src="${e.hero}" alt="${e.title}" loading="lazy" />
            <div class="overlay-text"><div class="eyebrow" style="color:#fff">Inspiration</div><div class="h3">${e.title}</div></div>
          </div>
        </a>
      </article>`;
  }

  /* NL search interpreter */
  function interpretQuery(q) {
    const text = (q || "").toLowerCase();
    const filters = {
      query: q,
      occasion: null,
      category: null,
      style: null,
      maxRent: null,
      intent: null,
      colour: null,
      location: null,
      chips: [],
    };
    const occasions = ["wedding", "reception", "engagement", "festival", "function", "guest"];
    occasions.forEach((o) => {
      if (text.includes(o) || (o === "guest" && text.includes("wedding guest"))) {
        filters.occasion = o === "guest" ? "wedding-guest" : o;
        filters.chips.push({ label: `Occasion: ${filters.occasion}`, key: "occasion" });
      }
    });
    const cats = [
      ["necklace", "necklace"], ["earring", "earrings"], ["jhumka", "earrings"],
      ["bangle", "bangles"], ["choker", "choker"], ["tikka", "maang-tikka"],
      ["set", "complete-set"], ["maang", "maang-tikka"],
    ];
    cats.forEach(([needle, cat]) => {
      if (text.includes(needle) && !filters.category) {
        filters.category = cat;
        filters.chips.push({ label: `Type: ${cat}`, key: "category" });
      }
    });
    const styles = ["temple", "kundan", "polki", "traditional", "modern", "bridal", "fashion"];
    styles.forEach((s) => {
      if (text.includes(s) && !filters.style) {
        filters.style = s;
        filters.chips.push({ label: `Style: ${s}`, key: "style" });
      }
    });
    const priceMatch = text.match(/under\s*₹?\s*(\d+)/) || text.match(/below\s*₹?\s*(\d+)/) || text.match(/₹\s*(\d+)/);
    if (priceMatch) {
      filters.maxRent = Number(priceMatch[1]);
      filters.chips.push({ label: `Under ${formatINR(filters.maxRent)}`, key: "price" });
    }
    if (text.includes("rent")) { filters.intent = "rent"; filters.chips.push({ label: "Intent: rent", key: "intent" }); }
    if (text.includes("buy") || text.includes("purchase")) { filters.intent = "buy"; filters.chips.push({ label: "Intent: buy", key: "intent" }); }
    ["pink", "red", "green", "gold", "maroon", "purple"].forEach((c) => {
      if (text.includes(c) && !filters.colour) {
        filters.colour = c;
        filters.chips.push({ label: `Colour cue: ${c}`, key: "colour" });
      }
    });
    if (text.includes("chennai") || text.includes("t. nagar") || text.includes("adyar")) {
      filters.location = "Chennai";
      filters.chips.push({ label: "Near: Chennai", key: "location" });
    }
    return filters;
  }

  function filterProducts(filters) {
    return D().products.filter((p) => {
      if (filters.category && p.category !== filters.category) return false;
      if (filters.occasion && !p.occasion.some((o) => o.includes(filters.occasion) || filters.occasion.includes(o))) return false;
      if (filters.style && !p.style.some((s) => s.includes(filters.style))) return false;
      if (filters.maxRent && p.rentalPrice > filters.maxRent) return false;
      if (filters.colour) {
        const c = filters.colour;
        const blob = (p.colour + " " + p.name + " " + p.tags.join(" ")).toLowerCase();
        if (c === "pink" && !(blob.includes("pink") || blob.includes("coral") || p.occasion.includes("engagement"))) {
          // soft match — keep pink saree jewellery as bridal/engagement-friendly
          if (!p.occasion.includes("wedding") && !p.occasion.includes("engagement")) return false;
        } else if (c !== "pink" && !blob.includes(c) && c !== "gold") {
          /* allow gold as default metal */
        }
      }
      if (filters.query) {
        const q = filters.query.toLowerCase();
        const stop = ["under", "for", "a", "the", "and", "with", "jewellery", "jewelry", "traditional"];
        const tokens = q.split(/\s+/).filter((t) => t.length > 2 && !stop.includes(t) && !/^\d+$/.test(t));
        const blob = [p.name, p.category, p.finish, p.material, ...p.style, ...p.occasion, ...p.tags].join(" ").toLowerCase();
        if (tokens.length && !tokens.some((t) => blob.includes(t))) {
          // if structured filters already matched, keep; else require token hit
          if (!filters.category && !filters.style && !filters.occasion && !filters.maxRent) return false;
        }
      }
      if (filters.shopId && p.shopId !== filters.shopId) return false;
      if (filters.rentBuy === "rent" && !p.rentalPrice) return false;
      return true;
    });
  }

  /* Recommendation scorer */
  function scoreProduct(p, prefs) {
    let score = 0;
    if (prefs.occasion && p.occasion.some((o) => o.includes(prefs.occasion) || prefs.occasion.includes(o))) score += 0.25;
    if (prefs.style && p.style.some((s) => s.includes(prefs.style))) score += 0.25;
    if (prefs.budget) {
      const diff = Math.abs(p.rentalPrice - prefs.budget) / prefs.budget;
      score += Math.max(0, 0.2 * (1 - Math.min(diff, 1)));
    }
    if (prefs.colour) {
      const blob = (p.colour + " " + p.name).toLowerCase();
      if (blob.includes(prefs.colour) || (prefs.colour === "pink" && (blob.includes("coral") || p.style.includes("bridal")))) score += 0.15;
    }
    const pop = (p.trending ? 0.08 : 0) + (p.featured ? 0.05 : 0) + Math.min(p.views / 2000, 0.02);
    score += Math.min(0.15, pop);
    if (prefs.heaviness && p.heaviness === prefs.heaviness) score += 0.05;
    return Math.min(0.99, score);
  }

  function recommendLooks(prefs, count = 3) {
    return D().looks
      .map((l) => {
        const pieces = l.productIds.map((id) => D().getProduct(id));
        const pieceScores = pieces.map((p) => scoreProduct(p, prefs));
        const avg = pieceScores.reduce((a, b) => a + b, 0) / pieceScores.length;
        let bonus = 0;
        if (prefs.occasion && (l.occasion.includes(prefs.occasion) || prefs.occasion.includes(l.occasion))) bonus += 0.2;
        if (prefs.style && l.style.some((s) => s.includes(prefs.style))) bonus += 0.15;
        if (prefs.budget && l.rentalPrice <= prefs.budget) bonus += 0.1;
        const score = Math.min(0.98, avg + bonus);
        const reasons = [];
        if (prefs.occasion) reasons.push(`Fits ${prefs.occasion.replace("-", " ")} styling`);
        if (prefs.style) reasons.push(`Aligned with ${prefs.style} aesthetic`);
        if (prefs.budget && l.rentalPrice <= prefs.budget) reasons.push(`Within ${formatINR(prefs.budget)} rental budget`);
        if (prefs.heaviness) reasons.push(`${prefs.heaviness} presence across the set`);
        if (prefs.colour) reasons.push(`Works with ${prefs.colour} saree / outfit cues`);
        reasons.push(`From ${D().getShop(l.shopId).name}`);
        return { look: l, score, reasons, pieces };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, count);
  }

  /* Fake AI processing */
  async function runAIProcess(container, steps, delay = 900) {
    container.innerHTML = `
      <div class="ai-process">
        <div class="ai-orb"></div>
        <div class="eyebrow">Zivara AI</div>
        <h2 class="h2 mt-1">Working on your look</h2>
        <ul class="ai-steps">${steps.map((s) => `<li>${s}</li>`).join("")}</ul>
      </div>`;
    const items = $$(".ai-steps li", container);
    for (let i = 0; i < items.length; i++) {
      items.forEach((el, idx) => {
        el.classList.toggle("active", idx === i);
        el.classList.toggle("done", idx < i);
      });
      await new Promise((r) => setTimeout(r, delay));
    }
    items.forEach((el) => { el.classList.add("done"); el.classList.remove("active"); });
  }

  function stars(n) {
    const full = Math.round(n);
    return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(full);
  }

  function mountDemoBanner() {
    if ($(".demo-banner")) return;
    const b = document.createElement("div");
    b.className = "demo-banner";
    b.innerHTML = `Zivara demo · fake data · no real payments · <a href="${basePath()}index.html">Consumer</a> · <a href="${basePath()}retailer/index.html">Retailer</a> · <a href="${basePath()}admin/index.html">Admin</a>`;
    document.body.prepend(b);
  }

  function nextBookingId() {
    return "B" + String(Date.now()).slice(-6);
  }
  function nextEnquiryId() {
    return "E" + String(Date.now()).slice(-6);
  }

  window.Zivara = {
    $, $$, qs, formatINR, toast, stars,
    getWishlist, toggleWish, isWished, syncWishButtons, heartSVG,
    trackView, getRecentlyViewed,
    getUserBookings, addUserBooking,
    getRetailerBookings, updateRetailerBooking,
    getRetailerEnquiries, updateRetailerEnquiry, addEnquiry,
    renderConsumerNav, renderDashNav, mountDemoBanner,
    productCard, lookCard, shopCard, editorialCard,
    interpretQuery, filterProducts, scoreProduct, recommendLooks, runAIProcess,
    basePath, nextBookingId, nextEnquiryId,
  };

  document.addEventListener("DOMContentLoaded", () => {
    syncWishButtons();
  });
})();
