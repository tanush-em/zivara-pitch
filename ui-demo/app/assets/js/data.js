/* Zivara seed data — fabricated catalogue for demo only */
(function () {
  const IMG = window.ZIVARA_IMAGES;
  if (!IMG) throw new Error("images.js must load before data.js");

  const shopMeta = {
    SHOP01: {
      slug: "varnika-jewellery-studio",
      locality: "T. Nagar",
      city: "Chennai",
      rating: 4.8,
      reviewCount: 214,
      description:
        "Flagship curated bridal and temple jewellery studio in T. Nagar. Known for kasu malas, antique finishes and same-week rental availability.",
      categories: ["temple", "bridal", "kundan", "sets"],
      hours: "10:00 AM – 8:30 PM",
      phone: "+91 98765 41001",
      whatsapp: "+91 98765 41001",
      status: "active",
      featured: true,
      distanceKm: 2.4,
    },
    SHOP02: {
      slug: "aarna-bridal-jewels",
      locality: "Adyar",
      city: "Chennai",
      rating: 4.6,
      reviewCount: 128,
      description: "Boutique bridal pieces with soft polki and reception-ready sets. Strong WhatsApp enquiry culture, now digitised on Zivara.",
      categories: ["bridal", "polki", "reception"],
      hours: "11:00 AM – 8:00 PM",
      phone: "+91 98765 41002",
      whatsapp: "+91 98765 41002",
      status: "active",
      featured: true,
      distanceKm: 5.1,
    },
    SHOP03: {
      slug: "meera-heritage-jewellery",
      locality: "Mylapore",
      city: "Chennai",
      rating: 4.7,
      reviewCount: 176,
      description: "Heritage temple jewellery and festival stacks rooted in South Indian craft references.",
      categories: ["temple", "traditional", "festival"],
      hours: "10:30 AM – 8:00 PM",
      phone: "+91 98765 41003",
      whatsapp: "+91 98765 41003",
      status: "active",
      featured: false,
      distanceKm: 3.8,
    },
    SHOP04: {
      slug: "kalyani-luxe-studio",
      locality: "Nungambakkam",
      city: "Chennai",
      rating: 4.5,
      reviewCount: 92,
      description: "Luxe imitation jewellery for engagements and cocktail functions. Clean modern finishes.",
      categories: ["modern", "engagement", "fashion"],
      hours: "11:00 AM – 9:00 PM",
      phone: "+91 98765 41004",
      whatsapp: "+91 98765 41004",
      status: "active",
      featured: true,
      distanceKm: 4.2,
    },
    SHOP05: {
      slug: "thulasi-fashion-jewels",
      locality: "Anna Nagar",
      city: "Chennai",
      rating: 4.4,
      reviewCount: 151,
      description: "Affordable fashion jewellery and guest looks for festivals and family functions.",
      categories: ["fashion", "festival", "guest"],
      hours: "10:00 AM – 9:00 PM",
      phone: "+91 98765 41005",
      whatsapp: "+91 98765 41005",
      status: "active",
      featured: false,
      distanceKm: 6.7,
    },
  };

  const productExtras = {
    ZV001: { shopId: "SHOP01", rental: 2200, purchase: 8900, deposit: 1500, occasion: ["wedding", "reception"], finish: "antique-gold", material: "premium imitation", featured: true, trending: true, newArrival: false, colour: "gold", heaviness: "medium" },
    ZV002: { shopId: "SHOP01", rental: 2800, purchase: 11200, deposit: 1800, occasion: ["wedding"], finish: "temple-gold", material: "premium imitation", featured: true, trending: true, newArrival: false, colour: "gold", heaviness: "heavy" },
    ZV003: { shopId: "SHOP02", rental: 3200, purchase: 14500, deposit: 2000, occasion: ["wedding", "engagement"], finish: "kundan", material: "premium imitation", featured: true, trending: false, newArrival: true, colour: "gold-pearl", heaviness: "heavy" },
    ZV004: { shopId: "SHOP02", rental: 3500, purchase: 16800, deposit: 2200, occasion: ["wedding", "reception"], finish: "polki", material: "premium imitation", featured: true, trending: true, newArrival: false, colour: "gold-green", heaviness: "heavy" },
    ZV005: { shopId: "SHOP01", rental: 2600, purchase: 9800, deposit: 1600, occasion: ["wedding"], finish: "bright-gold", material: "premium imitation", featured: true, trending: false, newArrival: false, colour: "gold", heaviness: "medium" },
    ZV006: { shopId: "SHOP02", rental: 2400, purchase: 9200, deposit: 1500, occasion: ["wedding", "engagement"], finish: "bright-gold", material: "premium imitation", featured: false, trending: false, newArrival: true, colour: "gold", heaviness: "medium" },
    ZV007: { shopId: "SHOP04", rental: 1800, purchase: 7200, deposit: 1200, occasion: ["reception", "engagement"], finish: "filigree", material: "premium imitation", featured: false, trending: true, newArrival: true, colour: "gold", heaviness: "light" },
    ZV008: { shopId: "SHOP05", rental: 1400, purchase: 4800, deposit: 900, occasion: ["festival", "function"], finish: "traditional", material: "fashion jewellery", featured: false, trending: false, newArrival: false, colour: "gold", heaviness: "light" },
    ZV009: { shopId: "SHOP01", rental: 900, purchase: 3200, deposit: 600, occasion: ["wedding", "festival"], finish: "temple-gold", material: "premium imitation", featured: true, trending: true, newArrival: false, colour: "gold", heaviness: "medium" },
    ZV010: { shopId: "SHOP03", rental: 850, purchase: 2900, deposit: 550, occasion: ["wedding", "function"], finish: "temple-gold", material: "premium imitation", featured: false, trending: true, newArrival: false, colour: "gold-pearl", heaviness: "light" },
    ZV011: { shopId: "SHOP05", rental: 450, purchase: 1400, deposit: 300, occasion: ["festival", "function"], finish: "colour", material: "fashion jewellery", featured: false, trending: false, newArrival: true, colour: "multicolour", heaviness: "light" },
    ZV012: { shopId: "SHOP02", rental: 750, purchase: 2600, deposit: 500, occasion: ["wedding"], finish: "bright-gold", material: "premium imitation", featured: false, trending: false, newArrival: false, colour: "gold", heaviness: "medium" },
    ZV013: { shopId: "SHOP04", rental: 1100, purchase: 3800, deposit: 700, occasion: ["reception", "engagement"], finish: "chandbali", material: "premium imitation", featured: true, trending: false, newArrival: true, colour: "gold", heaviness: "medium" },
    ZV014: { shopId: "SHOP01", rental: 1200, purchase: 4200, deposit: 800, occasion: ["wedding"], finish: "antique-gold", material: "premium imitation", featured: true, trending: true, newArrival: false, colour: "gold", heaviness: "medium" },
    ZV015: { shopId: "SHOP04", rental: 1000, purchase: 3600, deposit: 700, occasion: ["wedding", "engagement"], finish: "bright-gold", material: "premium imitation", featured: false, trending: false, newArrival: false, colour: "gold", heaviness: "light" },
    ZV016: { shopId: "SHOP02", rental: 950, purchase: 3400, deposit: 650, occasion: ["wedding"], finish: "coral-gold", material: "premium imitation", featured: false, trending: false, newArrival: true, colour: "gold-coral", heaviness: "light" },
    ZV017: { shopId: "SHOP05", rental: 350, purchase: 980, deposit: 250, occasion: ["festival", "function"], finish: "glass", material: "fashion jewellery", featured: false, trending: true, newArrival: false, colour: "multicolour", heaviness: "light" },
    ZV018: { shopId: "SHOP03", rental: 1600, purchase: 5600, deposit: 1000, occasion: ["wedding", "festival"], finish: "antique-gold", material: "premium imitation", featured: true, trending: true, newArrival: false, colour: "gold", heaviness: "medium" },
    ZV019: { shopId: "SHOP02", rental: 1900, purchase: 6800, deposit: 1200, occasion: ["reception"], finish: "bright-gold", material: "premium imitation", featured: true, trending: false, newArrival: true, colour: "gold", heaviness: "medium" },
    ZV020: { shopId: "SHOP01", rental: 2100, purchase: 7800, deposit: 1400, occasion: ["wedding"], finish: "layered-gold", material: "premium imitation", featured: false, trending: true, newArrival: false, colour: "gold", heaviness: "heavy" },
    ZV021: { shopId: "SHOP05", rental: 800, purchase: 2400, deposit: 500, occasion: ["wedding-guest", "function"], finish: "fashion-gold", material: "fashion jewellery", featured: false, trending: false, newArrival: false, colour: "gold", heaviness: "light" },
    ZV022: { shopId: "SHOP01", rental: 650, purchase: 2100, deposit: 400, occasion: ["wedding"], finish: "beaded", material: "premium imitation", featured: false, trending: false, newArrival: true, colour: "gold-pearl", heaviness: "light" },
    ZV023: { shopId: "SHOP03", rental: 700, purchase: 2300, deposit: 450, occasion: ["wedding", "engagement"], finish: "classic-gold", material: "premium imitation", featured: true, trending: false, newArrival: false, colour: "gold", heaviness: "light" },
    ZV024: { shopId: "SHOP02", rental: 900, purchase: 3100, deposit: 600, occasion: ["wedding", "reception"], finish: "polki", material: "premium imitation", featured: false, trending: true, newArrival: false, colour: "gold-pearl", heaviness: "light" },
    ZV025: { shopId: "SHOP01", rental: 4800, purchase: 18900, deposit: 3000, occasion: ["wedding"], finish: "temple-gold", material: "premium imitation", featured: true, trending: true, newArrival: false, colour: "gold", heaviness: "heavy" },
    ZV026: { shopId: "SHOP02", rental: 5200, purchase: 21000, deposit: 3200, occasion: ["wedding"], finish: "bridal-gold", material: "premium imitation", featured: true, trending: false, newArrival: true, colour: "gold", heaviness: "heavy" },
    ZV027: { shopId: "SHOP04", rental: 3900, purchase: 15200, deposit: 2500, occasion: ["wedding", "engagement"], finish: "showroom", material: "premium imitation", featured: false, trending: false, newArrival: false, colour: "gold", heaviness: "heavy" },
    ZV028: { shopId: "SHOP05", rental: 400, purchase: 1200, deposit: 250, occasion: ["festival", "function"], finish: "beaded", material: "fashion jewellery", featured: false, trending: false, newArrival: true, colour: "multicolour", heaviness: "light" },
    ZV029: { shopId: "SHOP01", rental: 1100, purchase: 3900, deposit: 700, occasion: ["wedding"], finish: "bridal", material: "premium imitation", featured: false, trending: true, newArrival: false, colour: "gold", heaviness: "medium" },
    ZV030: { shopId: "SHOP05", rental: 500, purchase: 1500, deposit: 300, occasion: ["festival"], finish: "glass-stack", material: "fashion jewellery", featured: false, trending: true, newArrival: false, colour: "multicolour", heaviness: "light" },
  };

  const descriptions = {
    necklace: "A statement necklace designed for South Indian bridal and festive styling. Pair with silk sarees or lehengas.",
    earrings: "Handcrafted-look earrings with classic silhouette and wearable weight for full-day events.",
    bangles: "Stack-ready bangles that complete temple and bridal looks. Available for short rental windows.",
    choker: "Close-fit choker with editorial presence — ideal for reception and engagement outfits.",
    "maang-tikka": "Centre-part maang tikka that anchors the bridal face framing.",
    "complete-set": "Coordinated jewellery set — necklace, earrings and accents curated as one rental bundle.",
    miscellaneous: "Accent piece to complete a look — armlet, hathphool or festival stack.",
  };

  function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function makeAvailability(seed) {
    const blocked = new Set();
    for (let i = 0; i < 4; i++) {
      const d = 3 + ((seed * 7 + i * 3) % 20);
      blocked.add(d);
    }
    return { blockedDays: [...blocked], note: "Demo availability — not live inventory" };
  }

  const products = Object.keys(IMG.products).map((id, idx) => {
    const base = IMG.products[id];
    const ex = productExtras[id];
    const images = [base.hero, base.detail, base.lifestyle].filter(Boolean);
    if (images.length < 2) images.push(base.hero);
    return {
      id,
      shopId: ex.shopId,
      name: base.name,
      slug: slugify(base.name),
      category: base.category,
      subcategory: base.category,
      style: base.style || [],
      occasion: ex.occasion,
      finish: ex.finish,
      material: ex.material,
      description: `${base.name}. ${descriptions[base.category] || descriptions.miscellaneous}`,
      images,
      rentalPrice: ex.rental,
      purchasePrice: ex.purchase,
      deposit: ex.deposit,
      availability: "available",
      availableDates: makeAvailability(idx + 1),
      tags: [...(base.style || []), ...ex.occasion],
      rating: 4.3 + ((idx * 17) % 7) / 10,
      reviewCount: 12 + ((idx * 13) % 90),
      featured: ex.featured,
      trending: ex.trending,
      newArrival: ex.newArrival,
      colour: ex.colour,
      heaviness: ex.heaviness,
      views: 120 + idx * 37,
      enquiries: 3 + (idx % 12),
      status: idx === 27 ? "pending" : idx === 28 ? "flagged" : "approved",
    };
  });

  const lookProductMap = {
    LOOK01: ["ZV002", "ZV009", "ZV014", "ZV023"],
    LOOK02: ["ZV005", "ZV012", "ZV015", "ZV022"],
    LOOK03: ["ZV001", "ZV010", "ZV014", "ZV023"],
    LOOK04: ["ZV007", "ZV013", "ZV021", "ZV024"],
    LOOK05: ["ZV004", "ZV013", "ZV016", "ZV024"],
    LOOK06: ["ZV008", "ZV011", "ZV017", "ZV028"],
    LOOK07: ["ZV019", "ZV013", "ZV015", "ZV024"],
    LOOK08: ["ZV025", "ZV009", "ZV014", "ZV029"],
    LOOK09: ["ZV002", "ZV010", "ZV018", "ZV023"],
    LOOK10: ["ZV003", "ZV012", "ZV015", "ZV022"],
    LOOK11: ["ZV001", "ZV009", "ZV014", "ZV025"],
    LOOK12: ["ZV006", "ZV013", "ZV016", "ZV024"],
  };

  const lookShop = {
    LOOK01: "SHOP01", LOOK02: "SHOP01", LOOK03: "SHOP03", LOOK04: "SHOP04",
    LOOK05: "SHOP02", LOOK06: "SHOP05", LOOK07: "SHOP02", LOOK08: "SHOP01",
    LOOK09: "SHOP01", LOOK10: "SHOP02", LOOK11: "SHOP03", LOOK12: "SHOP04",
  };

  const looks = Object.keys(IMG.looks).map((id) => {
    const base = IMG.looks[id];
    const productIds = lookProductMap[id];
    const pieces = productIds.map((pid) => products.find((p) => p.id === pid));
    const original = pieces.reduce((s, p) => s + p.rentalPrice, 0);
    const rentalPrice = Math.round(original * 0.82);
    return {
      id,
      name: base.name,
      occasion: base.occasion,
      style: base.style || [],
      description: `A complete ${base.occasion.replace("-", " ")} look styled around ${base.name.toLowerCase()}. Rent as a bundle and save versus booking pieces separately.`,
      heroImage: base.hero,
      productIds,
      rentalPrice,
      originalRentalTotal: original,
      savings: original - rentalPrice,
      shopId: lookShop[id],
      featured: ["LOOK01", "LOOK05", "LOOK08", "LOOK12", "LOOK03"].includes(id),
    };
  });

  const shops = Object.keys(IMG.shops).map((id) => {
    const base = IMG.shops[id];
    const meta = shopMeta[id];
    const shopProducts = products.filter((p) => p.shopId === id);
    return {
      id,
      name: base.name,
      slug: meta.slug,
      locality: meta.locality,
      city: meta.city,
      rating: meta.rating,
      reviewCount: meta.reviewCount,
      description: meta.description,
      categories: meta.categories,
      image: base.hero,
      hours: meta.hours,
      phone: meta.phone,
      whatsapp: meta.whatsapp,
      productCount: shopProducts.length,
      status: meta.status,
      featured: meta.featured,
      distanceKm: meta.distanceKm,
    };
  });

  const customers = [
    { id: "C01", name: "Ananya Krishnan", avatar: "", email: "ananya@demo.zivara", phone: "+91 90000 10001", locality: "T. Nagar" },
    { id: "C02", name: "Meera Subramanian", avatar: "", email: "meera@demo.zivara", phone: "+91 90000 10002", locality: "Adyar" },
    { id: "C03", name: "Priya Venkat", avatar: "", email: "priya@demo.zivara", phone: "+91 90000 10003", locality: "Mylapore" },
    { id: "C04", name: "Divya Ramesh", avatar: "", email: "divya@demo.zivara", phone: "+91 90000 10004", locality: "Anna Nagar" },
    { id: "C05", name: "Sneha Iyer", avatar: "", email: "sneha@demo.zivara", phone: "+91 90000 10005", locality: "Nungambakkam" },
    { id: "C06", name: "Kavya Mohan", avatar: "", email: "kavya@demo.zivara", phone: "+91 90000 10006", locality: "Velachery" },
    { id: "C07", name: "Lakshmi Narayan", avatar: "", email: "lakshmi@demo.zivara", phone: "+91 90000 10007", locality: "Besant Nagar" },
    { id: "C08", name: "Riya Sharma", avatar: "", email: "riya@demo.zivara", phone: "+91 90000 10008", locality: "Alwarpet" },
    { id: "C09", name: "Nisha Patel", avatar: "", email: "nisha@demo.zivara", phone: "+91 90000 10009", locality: "Kodambakkam" },
    { id: "C10", name: "Aishwarya Rao", avatar: "", email: "aish@demo.zivara", phone: "+91 90000 10010", locality: "Saidapet" },
    { id: "C11", name: "Tanvi Menon", avatar: "", email: "tanvi@demo.zivara", phone: "+91 90000 10011", locality: "T. Nagar" },
  ].map((c, i) => ({
    ...c,
    savedProductIds: [],
    savedLookIds: [],
    savedShopIds: [],
    recentlyViewed: products.slice(i, i + 4).map((p) => p.id),
    bookingIds: [],
    preferences: { style: ["temple", "bridal", "kundan"][i % 3], budget: 3000 + (i % 4) * 500 },
  }));

  const bookingStatuses = ["new", "confirmed", "picked-up", "rented", "returned", "completed"];
  const bookings = [];
  for (let i = 0; i < 16; i++) {
    const product = products[i % products.length];
    const start = new Date();
    start.setDate(start.getDate() + (i % 14) - 3);
    const end = new Date(start);
    end.setDate(end.getDate() + 2);
    bookings.push({
      id: `B${String(i + 1).padStart(3, "0")}`,
      customerId: customers[i % customers.length].id,
      productIds: [product.id],
      lookId: i % 5 === 0 ? looks[i % looks.length].id : null,
      shopId: product.shopId,
      startDate: start.toISOString().slice(0, 10),
      endDate: end.toISOString().slice(0, 10),
      status: bookingStatuses[i % bookingStatuses.length],
      rentalTotal: product.rentalPrice,
      deposit: product.deposit,
      createdAt: new Date(Date.now() - i * 86400000).toISOString(),
    });
  }

  const enquiries = [];
  for (let i = 0; i < 12; i++) {
    const product = products[(i * 3) % products.length];
    enquiries.push({
      id: `E${String(i + 1).padStart(3, "0")}`,
      customerId: customers[i % customers.length].id,
      shopId: product.shopId,
      productId: product.id,
      lookId: null,
      type: i % 3 === 0 ? "purchase" : "rental",
      message: i % 2 === 0
        ? "Is this available for next Saturday? Prefer store pickup."
        : "Interested in buying — can I visit the shop this weekend?",
      status: ["open", "contacted", "converted", "closed"][i % 4],
      createdAt: new Date(Date.now() - i * 3600000 * 18).toISOString(),
      intent: i % 3 === 0 ? "buy" : "rent",
    });
  }

  const reviews = [
    { shopId: "SHOP01", name: "Ananya K.", rating: 5, text: "Found my temple bridal set without hopping across T. Nagar. Pickup was smooth." },
    { shopId: "SHOP01", name: "Meera S.", rating: 5, text: "Rental deposit process was clear. Pieces looked exactly like the photos." },
    { shopId: "SHOP02", name: "Priya V.", rating: 4, text: "Loved the polki options for reception. Wish more green-stone pieces." },
    { shopId: "SHOP03", name: "Divya R.", rating: 5, text: "Heritage chokers are beautiful. Staff confirmed fit over WhatsApp quickly." },
    { shopId: "SHOP04", name: "Sneha I.", rating: 4, text: "Modern pieces for engagement — lightweight and photogenic." },
    { shopId: "SHOP05", name: "Kavya M.", rating: 4, text: "Great for festival guest looks under ₹1000 rental." },
  ];

  const editorial = IMG.editorial.map((e, i) => ({
    ...e,
    title: [
      "Temple light on gold",
      "Hands, henna, heritage",
      "Reception glow",
      "Silk and statement",
      "Guest look edit",
      "Kanchipuram evening",
      "Soft polki stories",
      "Festival stacks",
      "Bridal close-up",
      "Chennai wedding week",
    ][i] || e.role,
  }));

  const currentUser = {
    id: "C01",
    name: "Ananya Krishnan",
    email: "ananya@demo.zivara",
    phone: "+91 90000 10001",
    locality: "T. Nagar, Chennai",
  };

  const retailerShopId = "SHOP01";

  const intelligence = [
    { title: "Temple jewellery demand up", body: "Temple jewellery searches increased 28% this week while matching inventory remains limited in Adyar and Anna Nagar." },
    { title: "Supply gap: green-stone polki", body: "Reception queries mentioning emerald / green accents outpace listed SKUs 3:1." },
    { title: "Price opportunity under ₹3,000", body: "Highest enquiry conversion sits in the ₹1,500–₹3,000 rental band for guest and festival looks." },
    { title: "Emerging style: layered chokers", body: "Layered bridal chokers rising in Explore saves; consider featuring LOOK07 and ZV020." },
    { title: "Shop opportunity: Mylapore evenings", body: "Meera Heritage shows strong weekend views but lower booking conversion — nudge calendar availability." },
  ];

  window.ZivaraData = {
    products,
    looks,
    shops,
    customers,
    bookings,
    enquiries,
    reviews,
    editorial,
    currentUser,
    retailerShopId,
    intelligence,
    getProduct: (id) => products.find((p) => p.id === id || p.slug === id),
    getLook: (id) => looks.find((l) => l.id === id),
    getShop: (id) => shops.find((s) => s.id === id || s.slug === id),
    getCustomer: (id) => customers.find((c) => c.id === id),
    productsByShop: (shopId) => products.filter((p) => p.shopId === shopId),
    looksForProduct: (productId) => looks.filter((l) => l.productIds.includes(productId)),
  };
})();
