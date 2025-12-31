import classes from "./PrivacyPolicy.module.css"

export default function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className={classes.privacyPolicy}>
      <div className="page-container">
        <div className={classes.privacyContent}>
          <h1 className={classes.title}>Politika Privatnosti</h1>
          <p className={classes.lastUpdated}>Poslednje ažuriranje: {new Date().toLocaleDateString('bs-BA')}</p>
          
          <div className={classes.section}>
            <h2>1. Uvod</h2>
            <p>
              SMG Transport ("mi", "nas", "naš") poštuje vašu privatnost i posvećen je zaštiti vaših ličnih podataka. 
              Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, čuvamo i štitimo vaše lične podatke kada 
              posetite našu web stranicu smgtransport.ba.
            </p>
          </div>

          <div className={classes.section}>
            <h2>2. Podaci koje prikupljamo</h2>
            <p>Prikupljamo sledeće vrste podataka:</p>
            <ul>
              <li><strong>Kontakt podaci:</strong> Ime, email adresa, broj telefona kada nas kontaktirate putem kontakt forme ili email-a</li>
              <li><strong>Tehnički podaci:</strong> IP adresa, tip pretraživača, operativni sistem, vreme posete (automatski prikupljeno)</li>
              <li><strong>Kolačići (Cookies):</strong> Koristimo kolačiće za poboljšanje korisničkog iskustva</li>
            </ul>
          </div>

          <div className={classes.section}>
            <h2>3. Kako koristimo vaše podatke</h2>
            <p>Vaše lične podatke koristimo za:</p>
            <ul>
              <li>Odgovaranje na vaše upite i zahteve</li>
              <li>Pružanje naših usluga transporta i šlep službe</li>
              <li>Poboljšanje funkcionalnosti naše web stranice</li>
              <li>Ispunjenje zakonskih obaveza</li>
            </ul>
          </div>

          <div className={classes.section}>
            <h2>4. Deljenje podataka</h2>
            <p>
              Ne prodajemo, ne iznajmljujemo niti delimo vaše lične podatke sa trećim stranama, osim u slučajevima kada 
              je to neophodno za pružanje naših usluga ili kada to zahteva zakon.
            </p>
          </div>

          <div className={classes.section}>
            <h2>5. Bezbednost podataka</h2>
            <p>
              Preduzimamo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka od neovlašćenog 
              pristupa, gubitka ili uništenja.
            </p>
          </div>

          <div className={classes.section}>
            <h2>6. Vaša prava</h2>
            <p>Imate pravo da:</p>
            <ul>
              <li>Pristupite svojim ličnim podacima</li>
              <li>Ispravite netačne podatke</li>
              <li>Zatražite brisanje vaših podataka</li>
              <li>Ograničite obradu vaših podataka</li>
              <li>Prenesete svoje podatke</li>
            </ul>
          </div>

          <div className={classes.section}>
            <h2>7. Kolačići (Cookies)</h2>
            <p>
              Naša web stranica koristi kolačiće za poboljšanje korisničkog iskustva. Možete kontrolisati kolačiće kroz 
              postavke vašeg pretraživača.
            </p>
          </div>

          <div className={classes.section}>
            <h2>8. Promene u Politici privatnosti</h2>
            <p>
              Zadržavamo pravo da ažuriramo ovu Politiku privatnosti u bilo kom trenutku. Sve promene će biti objavljene 
              na ovoj stranici sa datumom poslednjeg ažuriranja.
            </p>
          </div>

          <div className={classes.section}>
            <h2>9. Kontakt</h2>
            <p>
              Ako imate pitanja u vezi sa ovom Politikom privatnosti, možete nas kontaktirati:
            </p>
            <ul>
              <li><strong>Email:</strong> milan.granolic02@gmail.com</li>
              <li><strong>Telefon:</strong> +387 65 213 074</li>
              <li><strong>Adresa:</strong> Bistrica BB, Banja Luka, Bosna i Hercegovina</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

