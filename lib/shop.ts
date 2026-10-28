/**
 * SS Mobile shop details (Sanjeev Nagar, Nashik).
 * Baad mein Instagram link yahi update kar dena.
 */
export const shop = {
  name: "SS Mobile",
  area: "Sanjeev Nagar",
  ownerTitle: "Avinash Dugdhe",
  contactName: "AVINASH DUGDHE SS MOBILE",
  tagline: "Mobiles · Smart TVs · Speakers · Home Theater · Service",
  phoneDisplay: "+91 89569 44121",
  phoneTel: "+918956944121",
  whatsapp: "918956944121",
  whatsappDisplay: "+91 89569 44121",
  instagram: "https://www.instagram.com/ss_mobile_ashoknagar?srtk=MWMzdXQ2ZDZ6MGt4dg==",
  ownerInstagram: "https://www.instagram.com/avinash_dugdhe?xtok=MTVtc2JsMDRmc2R6MQ==",
  ownerInstagramLabel: "Avinash Dugdhe",
  secondOwnerInstagram: "",
  secondOwnerInstagramLabel: "",
  facebook: "https://facebook.com/119316701256865",
  address: "SS Mobile, Ambad Satpur Link Rd, Sanjeev Nagar, Nashik 422010",
  city: "Nashik",
  pincode: "422010",
  mapsQuery: "19.9690,73.7288",
  mapsShortUrl: "https://maps.app.goo.gl/zDDiJnxebWMUZHYy6",
  placeId: "ChIJXeDJwp3t3TsRxSssmLYDUcQ",
  mapsEmbed: "https://maps.google.com/maps?q=19.9690,73.7288+(SS+Mobile+Sanjeev+Nagar)&t=h&z=18&ie=UTF8&iwloc=&output=embed",
  hours: "Open Daily · 10:00 AM – 10:00 PM",
  brands: ["Samsung", "Apple iPhone", "Vivo", "Oppo", "Xiaomi / Redmi", "Realme", "OnePlus", "Smart TVs", "Home Theater", "JBL / boAt"],
  offers: [
    "Latest 5G smartphones — all major brands (Samsung, Vivo, Oppo, Xiaomi, Realme, iPhone, OnePlus)",
    "All-brand Smart LED TVs, 4K Android TVs & Google TVs",
    "Bluetooth speakers, soundbars, party speakers & Home Theater systems",
    "Genuine accessories, covers, tempered glass, neckbands, earbuds & fast chargers",
    "Expert mobile repair, display replacement & battery service",
    "Best exchange / buyback value on old phones + Easy 0% EMI options",
  ],
};

export const categories = [
  { id: "all", label: "All" },
  { id: "mobiles", label: "New Mobiles" },
  { id: "tv_audio", label: "Smart TV & Speakers" },
  { id: "accessories", label: "Accessories" },
  { id: "repair", label: "Repair & Service" },
  { id: "exchange", label: "Exchange & EMI" },
  { id: "staff", label: "Staff & Billing" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export function googleReviewUrl() {
  if (shop.placeId) {
    return `https://search.google.com/local/writereview?placeid=${shop.placeId}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapsQuery)}`;
}

export function mapsDirectionsUrl() {
  if (shop.mapsShortUrl) return shop.mapsShortUrl;
  if (shop.placeId) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapsQuery)}&query_place_id=${shop.placeId}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapsQuery)}`;
}

export function mapsEmbedUrl() {
  if (shop.mapsEmbed) return shop.mapsEmbed;
  return `https://maps.google.com/maps?q=${encodeURIComponent(shop.mapsQuery)}&t=h&z=18&ie=UTF8&iwloc=&output=embed`;
}

export function whatsappUrl() {
  const num = shop.whatsapp.replace(/\D/g, "");
  if (!num || num.includes("X")) return "#";
  return `https://wa.me/${num}`;
}

export function vcard() {
  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:DUGDHE SS MOBILE;AVINASH;;;`,
    `FN:${shop.contactName}`,
    `ORG:${shop.name} ${shop.area}`,
    shop.phoneTel.includes("X") ? "" : `TEL;TYPE=CELL,VOICE,PREF:${shop.phoneTel}`,
    `ADR;TYPE=WORK:;;${shop.address};;;;India`,
    shop.instagram.endsWith("instagram.com/") ? "" : `URL:${shop.instagram}`,
    shop.ownerInstagram ? `URL:${shop.ownerInstagram}` : "",
    shop.facebook.endsWith("facebook.com/") ? "" : `URL:${shop.facebook}`,
    "END:VCARD",
  ]
    .filter(Boolean)
    .join("\n");
}
