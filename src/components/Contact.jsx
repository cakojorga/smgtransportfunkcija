import classes from "./Contact.module.css"

export default function Contact() {
  return (
    <section id="kontakt" className={classes.contact}>
      <div className="page-container">
        <h2 className={classes.title}>Kontakt</h2>
        <div className={classes.contactContent}>
          <div className={classes.contactItem}>
            <div className={classes.iconWrapper}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={classes.contactInfo}>
              <h3>Lokacija</h3>
              <a
                href="https://maps.app.goo.gl/Rh6r1YfYQ5aUXqrXA"
                target="_blank"
              >
                Bistrica BB
              </a>
            </div>
          </div>

          <div className={classes.contactItem}>
            <div className={classes.iconWrapper}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={`${classes.email} ${classes.contactInfo}`}>
              <h3>Email</h3>
              <a href="mailto:milan.granolic02@gmail.com">
                milan.granolic02@gmail.com
              </a>
            </div>
          </div>

          <div className={classes.contactItem}>
            <div className={classes.iconWrapper}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={classes.contactInfo}>
              <h3>Telefon</h3>
              <a href="tel:+38765213074">+387 65 213 074</a>
            </div>
          </div>

          <div className={classes.contactItem}>
            <div className={classes.iconWrapper}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={classes.contactInfo}>
              <h3>Ime</h3>
              <p>Milan Granolić</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

