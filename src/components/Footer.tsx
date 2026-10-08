import Link from "next/link";
import classes from "./Footer.module.css";
import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";
import { PRIVACY_PATH, SITE } from "@/lib/site";
import { serviceHref, services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="page-container">
        <div className={classes.footerContent}>
          <div className={classes.footerSection}>
            <p className={classes.footerTitle}>SMG Transport</p>
            <p className={classes.footerText}>
              Pouzdan partner za transport i šlep službu u Banjoj Luci i šire.
            </p>
          </div>

          <nav className={classes.footerSection} aria-label="Brzi linkovi">
            <p className={classes.footerSubtitle}>Brzi linkovi</p>
            <ul className={classes.footerLinks}>
              <li>
                <Link href="/#o-nama">O nama</Link>
              </li>
              <li>
                <Link href="/#galerija">Galerija</Link>
              </li>
              <li>
                <Link href="/#kontakt">Kontakt</Link>
              </li>
              <li>
                <Link href={PRIVACY_PATH}>Politika Privatnosti</Link>
              </li>
            </ul>
          </nav>

          <nav className={classes.footerSection} aria-label="Usluge">
            <p className={classes.footerSubtitle}>Usluge</p>
            <ul className={classes.footerLinks}>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={serviceHref(service.slug)}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={classes.footerSection}>
            <p className={classes.footerSubtitle}>Kontakt</p>
            <ul className={classes.footerContact}>
              <li>
                <LocationIcon width={16} height={16} />
                <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {SITE.street}
                </a>
              </li>
              <li>
                <MailIcon width={16} height={16} />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <PhoneIcon width={16} height={16} />
                <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.footerBottom}>
          <div className={classes.footerBottomLeft}>
            <p className={classes.copyright}>
              © {new Date().getFullYear()} SMG Transport. Sva prava zadržana.
            </p>
            <div className={classes.socialLinks}>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={classes.socialLink}
              >
                <FacebookIcon width={20} height={20} />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={classes.socialLink}
              >
                <InstagramIcon width={20} height={20} />
              </a>
            </div>
          </div>
          <p className={classes.credits}>
            Dizajn:{" "}
            <a
              href="https://www.linkedin.com/in/marko-jorgic/"
              target="_blank"
              rel="noopener"
            >
              Susxi Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
