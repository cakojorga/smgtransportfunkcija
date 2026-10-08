import type { Metadata } from "next";

export const SITE_URL = "https://smgtransport.ba";

export const SITE = {
  name: "SMG Transport",
  owner: "Milan Granolić",
  foundingDate: "2022-11-01",
  phone: "+38765213074",
  phoneDisplay: "+387 65 213 074",
  email: "milan.granolic02@gmail.com",
  street: "Bistrica BB",
  city: "Banja Luka",
  region: "Republika Srpska",
  country: "BA",
  countryName: "Bosna i Hercegovina",
  geo: { latitude: 44.77, longitude: 17.19 },
  mapsUrl: "https://maps.app.goo.gl/Rh6r1YfYQ5aUXqrXA",
  facebook: "https://www.facebook.com/profile.php?id=100088164771809",
  instagram: "https://www.instagram.com/smg_transport22/",
} as const;

// Srpski jezik, latinica, ijekavica (BiH).
export const LANG = "sr-Latn-BA";
export const OG_LOCALE = "sr_BA";

export const SERVICES_PATH = "/usluge";

export const serviceHref = (slug: string) => `${SERVICES_PATH}/${slug}`;

export const PRIVACY_PATH = "/politika-privatnosti";

// Ažurirati ručno kada se promijeni tekst politike privatnosti.
export const PRIVACY_LAST_UPDATED = "2026-10-08";

export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "SMG Transport logo - šlep služba i transport Banja Luka, 065/213-074",
};

export const BASE_OPEN_GRAPH = {
  type: "website",
  images: [OG_IMAGE],
  siteName: SITE.name,
  locale: OG_LOCALE,
} satisfies Metadata["openGraph"];
