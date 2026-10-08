import { LANG, SITE, SITE_URL } from "@/lib/site";
import { serviceHref, services } from "@/lib/services";

const businessId = `${SITE_URL}/#business`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "MovingCompany"],
      "@id": businessId,
      name: SITE.name,
      description:
        "Šlep služba, transport vozila i transport robe u domaćem i međunarodnom saobraćaju. Dostupni 00-24h, 365 dana u godini.",
      url: SITE_URL,
      logo: `${SITE_URL}/logonav.jpg`,
      image: `${SITE_URL}/og-image.jpg`,
      telephone: SITE.phone,
      email: SITE.email,
      foundingDate: SITE.foundingDate,
      founder: { "@type": "Person", name: SITE.owner },
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.street,
        addressLocality: SITE.city,
        addressRegion: SITE.region,
        addressCountry: SITE.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE.geo.latitude,
        longitude: SITE.geo.longitude,
      },
      hasMap: SITE.mapsUrl,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      areaServed: [
        { "@type": "City", name: SITE.city },
        { "@type": "Country", name: SITE.countryName },
      ],
      sameAs: [SITE.facebook, SITE.instagram],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Usluge",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${SITE_URL}${serviceHref(service.slug)}#service`,
            name: service.name,
            url: `${SITE_URL}${serviceHref(service.slug)}`,
            areaServed: SITE.countryName,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      inLanguage: LANG,
      publisher: { "@id": businessId },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
