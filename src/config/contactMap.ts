/**
 * Google Maps — Medicure Devices & Solutions (Bhopal)
 *
 * Optional: override embed with Share → Embed a map → src URL in VITE_GOOGLE_MAPS_EMBED_URL
 */
const ADDRESS_QUERY =
  'Shop no. E, 36, Main Rd, C Sector, Nehru Nagar, Bhopal, Madhya Pradesh 462003'

export const GOOGLE_MAPS_EMBED_SRC =
  String(import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL ?? '').trim() ||
  `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_QUERY)}&z=16&hl=en&output=embed`

/** Opens Google Maps search for this address */
export const GOOGLE_MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_QUERY)}`
