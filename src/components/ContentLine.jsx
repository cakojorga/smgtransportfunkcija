import { useEffect, useRef, useState } from "react";
import classes from "./ContentLine.module.css"

export default function ContentLine() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    { 
      name: "Domaći transport", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.1 3.9 19 5 19S7 18.1 7 17H17C17 18.1 17.9 19 19 19S21 18.1 21 17H23V12L20 8ZM5 18C4.45 18 4 17.55 4 17S4.45 16 5 16S6 16.45 6 17S5.55 18 5 18ZM19 18C18.45 18 18 17.55 18 17S18.45 16 19 16S20 16.45 20 17S19.55 18 19 18ZM17 10H19.5L20.5 12H17V10Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: "Međunarodni transport", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
          <path d="M12 2C8.13 2 5 5.13 5 9H7C7 6.24 9.24 4 12 4S17 6.24 17 9H19C19 5.13 15.87 2 12 2Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: "Šlep služba", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 0.6 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      name: "Transport vozila", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 6.5H17.5L19.11 11H4.89L6.5 6.5ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16Z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className={`${classes.contentLine} ${isVisible ? classes.visible : ''}`}
    >
      <div className="page-container">
        <div className={classes.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={classes.serviceItem}>
              <div className={classes.iconWrapper}>
                <div className={classes.icon}>{service.icon}</div>
              </div>
              <h3 className={classes.serviceName}>{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
