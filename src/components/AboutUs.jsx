import classes from "./AboutUs.module.css"

export default function AboutUs() {
  return (
    <section id="o-nama" className={classes.aboutUs}>
      <div className="page-container">
        <div className={classes.aboutContent}>
          <h2 className={classes.title}>O nama</h2>
          <div className={classes.textContent}>
            <p>
              Firma SMG Transport je osnovana 1. novembra 2022 godine. Vršimo
              usluge transporta robe, stvari, kao i selidbe sa organizovanim
              utovarom i istovarom.
            </p>
            <p>
              SMG Transport se takođe bavi asistencijom u slučaju kvara ili
              saobraćajne nezgode, prevozimo Vaše vozilo na željenu lokaciju.
            </p>
            <p>Dostupni smo 00-24h 365 dana u godini.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

