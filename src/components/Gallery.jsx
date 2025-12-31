import { useState } from "react";
import classes from "./Gallery.module.css"
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: img1, alt: "SMG Transport - Kamion za transport robe Banja Luka" },
    { src: img2, alt: "SMG Transport - Međunarodni transport vozila" },
    { src: img3, alt: "SMG Transport - Šlep služba i transport vozila" },
    { src: img4, alt: "SMG Transport - Domaći transport robe" },
    { src: img5, alt: "SMG Transport - Transport vozila Banja Luka" },
    { src: img6, alt: "SMG Transport - Profesionalan transport i dostava" },
    { src: img7, alt: "SMG Transport - Transport i šlep služba BiH" },
    { src: img8, alt: "SMG Transport - Brza i sigurna dostava" },
    { src: img9, alt: "SMG Transport - Pouzdan partner za transport" }
  ];

  const openModal = (index) => {
    setSelectedImage(images[index].src);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex].src);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  };

  // Swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <>
      <section id="galerija" className={classes.gallery}>
        <div className="page-container">
          <div className={classes.galleryGrid}>
            {images.map((image, index) => (
              <div
                key={index}
                className={classes.galleryCard}
                onClick={() => openModal(index)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" fetchPriority="low" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className={classes.modal}
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          tabIndex={0}
        >
          <button
            className={`${classes.modalClose} ${classes.modalButton}`}
            onClick={closeModal}
            aria-label="Zatvori"
          >
            ×
          </button>
          <button
            className={`${classes.modalArrow} ${classes.modalArrowLeft} ${classes.modalButton}`}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Prethodna slika"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className={`${classes.modalArrow} ${classes.modalArrowRight} ${classes.modalButton}`}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Sledeća slika"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImage} alt={images[currentIndex].alt} loading="eager" fetchPriority="high" />
            <div className={classes.imageCounter}>
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

