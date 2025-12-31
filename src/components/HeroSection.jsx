import classes from "./HeroSection.module.css"

export default function HeroSection() {
  return (
    <>
      <div className="page-container">
        <section className={classes.hero}>
          <div className={classes.heroText}>
            <h1>
              Pouzdan transport i šlep služba za vaše potrebe
            </h1>
            <p>
              Vršimo usluge prevoza robe i vozila kako u domaćem tako i u
              međunarodnom saobraćaju. Profesionalno, brzo i sigurno.
            </p>
              <a href="#kontakt" className={classes.ctaButton}>
                Kontaktirajte nas
              </a>
          </div>
        </section>
      </div>
    </>
  );
}