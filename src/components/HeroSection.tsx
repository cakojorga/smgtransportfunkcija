"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import classes from "./HeroSection.module.css";
import heroImage from "../assets/img8.jpg";

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export default function HeroSection() {
  return (
    <div className="page-container">
      <section className={classes.hero}>
        <div className={classes.heroText}>
          <motion.h1 {...fadeUp} transition={{ duration: 0.5 }}>
            Pouzdan transport i šlep služba za vaše potrebe
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }}>
            Vršimo usluge prevoza robe i vozila kako u domaćem tako i u
            međunarodnom saobraćaju. Profesionalno, brzo i sigurno.
          </motion.p>
          <motion.a
            href="#kontakt"
            className={classes.ctaButton}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Kontaktirajte nas
          </motion.a>
        </div>
        <motion.div
          className={classes.heroImage}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src={heroImage}
            alt="Kombi SMG Transport sa prikolicom na kojoj prevozi drugi kombi"
            fill
            preload
            sizes="(max-width: 968px) 100vw, 560px"
          />
        </motion.div>
      </section>
    </div>
  );
}
