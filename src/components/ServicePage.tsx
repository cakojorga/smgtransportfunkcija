import Image from "next/image";
import Link from "next/link";
import classes from "./ServicePage.module.css";
import { PhoneIcon, MailIcon } from "./icons";
import { SITE, SITE_URL } from "@/lib/site";
import { serviceHref, services, type Service } from "@/lib/services";

const highlights = [
  "Dostupni 00-24h, 365 dana u godini",
  "Sjedište u Banjoj Luci, vozimo širom BiH",
  "Organizovan utovar i istovar",
  "Domaće i međunarodne relacije",
];

function structuredData(service: Service) {
  const url = `${SITE_URL}${serviceHref(service.slug)}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.h1,
        serviceType: service.name,
        description: service.metaDescription,
        url,
        image: `${SITE_URL}${service.image.src}`,
        areaServed: [
          { "@type": "City", name: SITE.city },
          { "@type": "Country", name: SITE.countryName },
        ],
        provider: {
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#business`,
          name: SITE.name,
          telephone: SITE.phone,
          url: SITE_URL,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Početna", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: service.name, item: url },
        ],
      },
    ],
  };
}

export default function ServicePage({ service }: { service: Service }) {
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <article className={classes.servicePage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(service)) }}
      />
      <div className="page-container">
        <nav aria-label="Putanja" className={classes.breadcrumbs}>
          <ol>
            <li>
              <Link href="/">Početna</Link>
            </li>
            <li aria-current="page">{service.name}</li>
          </ol>
        </nav>

        <header className={classes.intro}>
          <div className={classes.introText}>
            <h1>{service.h1}</h1>
            <p className={classes.lead}>{service.lead}</p>
            <div className={classes.actions}>
              <a href={`tel:${SITE.phone}`} className={classes.primaryButton}>
                <PhoneIcon width={20} height={20} />
                Pozovite {SITE.phoneDisplay}
              </a>
              <a href={`mailto:${SITE.email}`} className={classes.secondaryButton}>
                <MailIcon width={20} height={20} />
                Pošaljite email
              </a>
            </div>
          </div>
          <div className={classes.introImage}>
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              preload
              sizes="(max-width: 968px) 100vw, 520px"
            />
          </div>
        </header>

        <div className={classes.content}>
          {service.sections.map((section) => (
            <section key={section.heading} className={classes.section}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className={classes.section}>
            <h2>Zašto SMG Transport</h2>
            <ul className={classes.highlights}>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={classes.section}>
            <h2>Česta pitanja</h2>
            <div className={classes.faq}>
              {service.faq.map((item) => (
                <div key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className={classes.cta}>
          <p className={classes.ctaTitle}>Trebate uslugu? Javite nam se 0-24h.</p>
          <a href={`tel:${SITE.phone}`} className={classes.ctaButton}>
            <PhoneIcon width={20} height={20} />
            {SITE.phoneDisplay}
          </a>
        </aside>

        <nav aria-label="Ostale usluge" className={classes.otherServices}>
          <h2>Ostale usluge</h2>
          <ul>
            {otherServices.map((other) => (
              <li key={other.slug}>
                <Link href={serviceHref(other.slug)}>{other.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </article>
  );
}
