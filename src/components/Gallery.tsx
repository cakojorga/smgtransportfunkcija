"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import Image, { type StaticImageData } from "next/image";
import classes from "./Gallery.module.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

type GalleryImage = { src: StaticImageData; alt: string; title: string };

const images: GalleryImage[] = [
  {
    src: img1,
    alt: "Šlep vozilo SMG Transport sa platformom za automobile, noću pod uličnom rasvjetom",
    title: "Šlep služba - SMG Transport Banja Luka",
  },
  {
    src: img2,
    alt: "Bijeli kombi SMG Transport vuče prikolicu na kojoj se prevozi drugi kombi",
    title: "Transport vozila na prikolici - SMG Transport",
  },
  {
    src: img3,
    alt: "Terensko vozilo SMG Transport vuče prikolicu sa automobilom kroz naselje",
    title: "Prevoz automobila na prikolici - SMG Transport",
  },
  {
    src: img4,
    alt: "Terensko vozilo SMG Transport vuče plavu prikolicu-kiosk",
    title: "Prevoz prikolice - SMG Transport",
  },
  {
    src: img5,
    alt: "Pokriven sportski automobil učvršćen na prikolici za transport vozila",
    title: "Transport sportskog automobila - SMG Transport",
  },
  {
    src: img6,
    alt: "Oldtajmer na prikolici za transport vozila, parkiran uz drvored",
    title: "Transport oldtajmera - SMG Transport",
  },
  {
    src: img7,
    alt: "Otvoren kombi SMG Transport sa praznim tovarnim prostorom spreman za utovar",
    title: "Kombi za transport robe i selidbe - SMG Transport",
  },
  {
    src: img8,
    alt: "Kombi SMG Transport sa prikolicom na kojoj prevozi drugi kombi, pod vedrim nebom",
    title: "Međunarodni i domaći transport - SMG Transport",
  },
  {
    src: img9,
    alt: "Vozni park SMG Transport: dva kombija, terensko vozilo i prikolica za automobile",
    title: "Vozni park SMG Transport Banja Luka",
  },
];

const MIN_SWIPE_DISTANCE = 50;

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const isOpen = currentIndex !== null;

  const openModal = (index: number, trigger: HTMLElement) => {
    lastTrigger.current = trigger;
    setCurrentIndex(index);
  };

  const closeModal = useCallback(() => setCurrentIndex(null), []);

  const nextImage = useCallback(() => {
    setCurrentIndex((i) => (i === null ? i : (i + 1) % images.length));
  }, []);

  const prevImage = useCallback(() => {
    setCurrentIndex((i) =>
      i === null ? i : (i - 1 + images.length) % images.length
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      lastTrigger.current?.focus();
    };
  }, [isOpen, closeModal, nextImage, prevImage]);

  const onTouchStart = (e: TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStart.current === null || touchEnd.current === null) return;

    const distance = touchStart.current - touchEnd.current;
    if (distance > MIN_SWIPE_DISTANCE) nextImage();
    else if (distance < -MIN_SWIPE_DISTANCE) prevImage();
  };

  const current = currentIndex === null ? null : images[currentIndex];

  return (
    <>
      <section
        id="galerija"
        className={classes.gallery}
        aria-labelledby="galerija-naslov"
      >
        <div className="page-container">
          <h2 id="galerija-naslov" className="sr-only">
            Galerija
          </h2>
          <div className={classes.galleryGrid}>
            {images.map((image, index) => (
              <button
                key={image.src.src}
                type="button"
                className={classes.galleryCard}
                onClick={(e) => openModal(index, e.currentTarget)}
                aria-label={`Otvori sliku: ${image.title}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 968px) 50vw, 387px"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {current && currentIndex !== null && (
        <div
          className={classes.modal}
          onClick={closeModal}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Galerija slika"
        >
          <button
            ref={closeButtonRef}
            type="button"
            className={`${classes.modalClose} ${classes.modalButton}`}
            onClick={closeModal}
            aria-label="Zatvori"
          >
            ×
          </button>
          <button
            type="button"
            className={`${classes.modalArrow} ${classes.modalArrowLeft} ${classes.modalButton}`}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Prethodna slika"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className={`${classes.modalArrow} ${classes.modalArrowRight} ${classes.modalButton}`}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Sljedeća slika"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={current.src.src}
              src={current.src}
              alt={current.alt}
              title={current.title}
              sizes="90vw"
              quality={85}
              loading="eager"
              fetchPriority="high"
            />
            <div className={classes.imageCounter} aria-live="polite">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
