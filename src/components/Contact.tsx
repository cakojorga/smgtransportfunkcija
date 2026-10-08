"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import classes from "./Contact.module.css";
import { LocationIcon, MailIcon, PersonIcon, PhoneIcon } from "./icons";
import { SITE } from "@/lib/site";

type ContactItem = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
  className?: string;
};

const items: ContactItem[] = [
  {
    title: "Lokacija",
    icon: <LocationIcon />,
    content: (
      <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
        {SITE.street}
      </a>
    ),
  },
  {
    title: "Email",
    icon: <MailIcon />,
    content: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>,
    className: classes.email,
  },
  {
    title: "Telefon",
    icon: <PhoneIcon />,
    content: <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>,
  },
  {
    title: "Ime",
    icon: <PersonIcon />,
    content: <p>{SITE.owner}</p>,
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className={classes.contact}>
      <div className="page-container">
        <h2 className={classes.title}>Kontakt</h2>
        <div className={classes.contactContent}>
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className={classes.contactItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <div className={classes.iconWrapper}>{item.icon}</div>
              <div
                className={
                  item.className
                    ? `${item.className} ${classes.contactInfo}`
                    : classes.contactInfo
                }
              >
                <h3>{item.title}</h3>
                {item.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
