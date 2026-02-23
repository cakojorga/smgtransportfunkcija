import classes from "./MainNav.module.css";


export default function MainNav() {
  return (
    <>
      <div className="page-container">
        <nav className={classes.nav}>
          <a href="/">
         
            <img
              src="/logonav.webp"
              alt="SMG Transport Logo - Transport i Šlep Služba Banja Luka"
              fetchPriority="high"
              loading="eager"
            />
          </a>
          <ul className={classes.navList}>
            <li className={classes.navItem}>
              <a href="#o-nama">O nama</a>
            </li>
            <li className={classes.navItem}>
              <a href="#galerija">Galerija</a>
            </li>
            <li className={classes.navItem}>
              <a href="#kontakt">Kontakt</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
