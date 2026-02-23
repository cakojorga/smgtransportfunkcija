import classes from "./HeroSection.module.css"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <>
      <div className="page-container">
        <section className={classes.hero}>
          <div className={classes.heroText}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Pouzdan transport i šlep služba za vaše potrebe
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Vršimo usluge prevoza robe i vozila kako u domaćem tako i u
              međunarodnom saobraćaju. Profesionalno, brzo i sigurno.
            </motion.p>
              <motion.a href="#kontakt" className={classes.ctaButton}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Kontaktirajte nas
              </motion.a>
          </div>
        </section>
      </div>
    </>
  );
}