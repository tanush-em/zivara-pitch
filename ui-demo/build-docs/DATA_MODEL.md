# ZIVARA DATA MODEL

Use local JSON, SQLite, or lightweight mock API. UI should behave as though records persist.

## Shop
id, name, slug, locality, city, rating, reviewCount, description, categories[], image, hours, phone, whatsapp, productCount, status.

## Product
id, shopId, name, slug, category, subcategory, style[], occasion[], finish, material, description, images[], rentalPrice, purchasePrice, deposit, availability, availableDates[], tags[], rating, reviewCount, featured, trending, newArrival.

## Look
id, name, occasion, style, description, heroImage, productIds[], rentalPrice, originalRentalTotal, savings, shopId, featured.

## Booking
id, customerId, productIds[], lookId?, shopId, startDate, endDate, status, rentalTotal, deposit, createdAt.

## Customer
id, name, avatar, email, phone, savedProductIds[], savedLookIds[], savedShopIds[], recentlyViewed[], bookingIds[], preferences.

## Enquiry
id, customerId, shopId, productId?, lookId?, type, message, status, createdAt.

## Seed data
30 products: 8 necklaces, 5 earrings, 4 bangles, 4 chokers, 3 maang tikka, 3 complete sets, 3 miscellaneous.
12 complete looks.
5 fictional Chennai shops.
Flagship: Varnika Jewellery Studio, T. Nagar, Chennai.
Other fictional examples: Aarna Bridal Jewels, Meera Heritage Jewellery, Kalyani Luxe Studio, Thulasi Fashion Jewels.

Use editorial names such as Lakshmi Temple Bridal Set, Kaveri Kasu Mala, Meenakshi Antique Choker, Thanjavur Heritage Jhumka, Sahana Kundan Drops.

Seed 10+ customers and 20+ combined bookings/enquiries.
