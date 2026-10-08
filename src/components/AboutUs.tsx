import Link from "next/link";
import classes from "./AboutUs.module.css";
import { serviceHref } from "@/lib/site";

export default function AboutUs() {
  return (
    <section id="o-nama" className={classes.aboutUs}>
      <div className="page-container">
        <div className={classes.aboutContent}>
          <h2 className={classes.title}>O nama</h2>
          <div className={classes.textContent}>
            <p>
              Firma SMG Transport je osnovana 1. novembra 2022. godine. Vršimo
              usluge{" "}
              <Link href={serviceHref("domaci-transport")}>transporta robe, stvari</Link>,
              kao i{" "}
              <Link href={serviceHref("selidbe-banja-luka")}>selidbe</Link> sa
              organizovanim utovarom i istovarom.
            </p>
            <p>
              SMG Transport se takođe bavi{" "}
              <Link href={serviceHref("slep-sluzba-banja-luka")}>
                asistencijom u slučaju kvara ili saobraćajne nezgode
              </Link>
              , prevozimo Vaše vozilo na željenu lokaciju.
            </p>
            <p>Dostupni smo 00-24h 365 dana u godini.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
