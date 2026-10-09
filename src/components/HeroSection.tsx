"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import classes from "./HeroSection.module.css";
import { PhoneIcon } from "./icons";
import { SITE } from "@/lib/site";
import heroImage from "../assets/hero.jpg";

const fadeUp = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } };

const features = ["Šlep služba 0-24h", "Transport vozila i robe", "BiH i inostranstvo"];

export default function HeroSection() {
  return (
    <section className={classes.hero}>
      <div className={classes.background}>
        <Image
          src={heroImage}
          alt="Kamion za prevoz automobila na autoputu"
          fill
          preload
          quality={80}
          sizes="100vw"
        />
      </div>
      <div className={classes.overlay} aria-hidden="true" />

      <div className={`page-container ${classes.inner}`}>
        <div className={classes.heroText}>
          <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            Pouzdan transport i <span className={classes.accent}>šlep služba</span> za
            vaše potrebe
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }}>
            Vršimo usluge prevoza robe i vozila kako u domaćem tako i u
            međunarodnom saobraćaju. Profesionalno, brzo i sigurno.
          </motion.p>
          <motion.div
            className={classes.actions}
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href={`tel:${SITE.phone}`} className={classes.primaryButton}>
              <PhoneIcon width={20} height={20} />
              Pozovite {SITE.phoneDisplay}
            </a>
            <a href="#kontakt" className={classes.secondaryButton}>
              Kontaktirajte nas
            </a>
          </motion.div>
        </div>

        <motion.ul
          className={classes.features}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {features.map((feature) => (
            <li key={feature}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12.5L10 17.5L19 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {feature}
            </li>
          ))}
        </motion.ul>
      </div>

      <a href="#usluge" className={classes.scrollHint} aria-label="Pogledajte usluge">
        <span />
      </a>
    </section>
  );
}
