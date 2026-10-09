"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./MainNav.module.css";
import logo from "../assets/logonav.jpg";
import { PhoneIcon } from "./icons";
import { SITE } from "@/lib/site";

type NavLink = { href: string; label: string };

const LINKS_BEFORE: NavLink[] = [{ href: "/#o-nama", label: "O nama" }];
const LINKS_AFTER: NavLink[] = [
  { href: "/#galerija", label: "Galerija" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function MainNav({ serviceLinks }: { serviceLinks: NavLink[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen && !servicesOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      // Tap na pozadinu zatvara meni kroz onClick, da klik ne prođe do sadržaja ispod.
      if (target === backdropRef.current) return;
      if (!navRef.current?.contains(target)) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      setServicesOpen(false);
      servicesButtonRef.current?.focus();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, servicesOpen]);

  // Na početnoj je zaglavlje providno preko hero fotografije dok se ne skroluje.
  const overHero = pathname === "/" && !scrolled && !menuOpen;
  const headerClass = [
    classes.header,
    scrolled || menuOpen ? classes.scrolled : "",
    overHero ? classes.overHero : "",
  ].join(" ");

  const renderLink = (link: NavLink) => (
    <li key={link.href} className={classes.navItem}>
      <Link href={link.href} onClick={closeAll}>
        {link.label}
      </Link>
    </li>
  );

  return (
    <>
      <header className={headerClass}>
        <div className="page-container">
          <nav ref={navRef} className={classes.nav} aria-label="Glavna navigacija">
            <Link
              href="/"
              className={classes.logo}
              aria-label="SMG Transport - početna"
              onClick={closeAll}
            >
              <Image
                src={logo}
                alt="SMG Transport Logo - Transport i Šlep Služba Banja Luka"
                height={56}
                preload
              />
            </Link>

            <a
              href={`tel:${SITE.phone}`}
              className={classes.navCta}
              aria-label={`Pozovite ${SITE.phoneDisplay}`}
            >
              <PhoneIcon width={18} height={18} />
              <span>{SITE.phoneDisplay}</span>
            </a>

            <button
              type="button"
              className={`${classes.menuToggle} ${menuOpen ? classes.menuToggleOpen : ""}`}
              aria-expanded={menuOpen}
              aria-controls="glavni-meni"
              aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>

            <ul
              id="glavni-meni"
              className={`${classes.navList} ${menuOpen ? classes.navListOpen : ""}`}
            >
              {LINKS_BEFORE.map(renderLink)}
              <li className={`${classes.navItem} ${classes.hasDropdown}`}>
                <button
                  ref={servicesButtonRef}
                  type="button"
                  className={classes.dropdownToggle}
                  aria-expanded={servicesOpen}
                  aria-controls="meni-usluge"
                  onClick={() => setServicesOpen((open) => !open)}
                >
                  Usluge
                  <svg
                    className={`${classes.chevron} ${servicesOpen ? classes.chevronOpen : ""}`}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <ul
                  id="meni-usluge"
                  className={`${classes.dropdown} ${servicesOpen ? classes.dropdownOpen : ""}`}
                >
                  {serviceLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={closeAll}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {LINKS_AFTER.map(renderLink)}
            </ul>
          </nav>
        </div>
      </header>
      {menuOpen && (
        <div
          ref={backdropRef}
          className={classes.backdrop}
          onClick={closeAll}
          aria-hidden="true"
        />
      )}
    </>
  );
}
