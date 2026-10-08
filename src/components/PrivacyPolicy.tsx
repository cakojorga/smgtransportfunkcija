import classes from "./PrivacyPolicy.module.css";
import { LANG, PRIVACY_LAST_UPDATED, SITE } from "@/lib/site";

const lastUpdated = new Date(PRIVACY_LAST_UPDATED).toLocaleDateString(LANG, {
  timeZone: "UTC",
});

export default function PrivacyPolicy() {
  return (
    <section id="privacy-policy" className={classes.privacyPolicy}>
      <div className="page-container">
        <div className={classes.privacyContent}>
          <h1 className={classes.title}>Politika Privatnosti</h1>
          <p className={classes.lastUpdated}>
            Posljednje ažuriranje: <time dateTime={PRIVACY_LAST_UPDATED}>{lastUpdated}</time>
          </p>

          <div className={classes.section}>
            <h2>1. Uvod</h2>
            <p>
              SMG Transport (&quot;mi&quot;, &quot;nas&quot;, &quot;naš&quot;) poštuje vašu privatnost i posvećen je zaštiti vaših ličnih podataka.
              Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, čuvamo i štitimo vaše lične podatke kada
              posjetite našu web stranicu smgtransport.ba.
            </p>
          </div>

          <div className={classes.section}>
            <h2>2. Podaci koje prikupljamo</h2>
            <p>Prikupljamo sljedeće vrste podataka:</p>
            <ul>
              <li><strong>Kontakt podaci:</strong> ime, email adresa i broj telefona kada nas kontaktirate telefonom ili putem email-a</li>
              <li><strong>Podaci o posjeti:</strong> anonimna statistika posjeta (posjećene stranice, tip uređaja i pretraživača, država iz koje dolazi posjeta) koja ne može da vas lično identifikuje</li>
              <li><strong>Tehnički podaci:</strong> IP adresa i vrijeme pristupa, koje automatski bilježi server na kojem je stranica smještena, radi sigurnosti i ispravnog rada stranice</li>
            </ul>
          </div>

          <div className={classes.section}>
            <h2>3. Kako koristimo vaše podatke</h2>
            <p>Vaše lične podatke koristimo za:</p>
            <ul>
              <li>Odgovaranje na vaše upite i zahtjeve</li>
              <li>Pružanje naših usluga transporta i šlep službe</li>
              <li>Poboljšanje funkcionalnosti naše web stranice</li>
              <li>Ispunjenje zakonskih obaveza</li>
            </ul>
          </div>

          <div className={classes.section}>
            <h2>4. Dijeljenje podataka</h2>
            <p>
              Ne prodajemo, ne iznajmljujemo niti dijelimo vaše lične podatke sa trećim stranama, osim u slučajevima kada
              je to neophodno za pružanje naših usluga ili kada to zahtijeva zakon.
            </p>
          </div>

          <div className={classes.section}>
            <h2>5. Analitika posjeta</h2>
            <p>
              Za praćenje posjećenosti koristimo Vercel Web Analytics, uslugu kompanije Vercel Inc. na čijoj je
              infrastrukturi smještena naša web stranica. Ova usluga ne koristi kolačiće i ne čuva podatke pomoću kojih
              se posjetilac može lično identifikovati – podaci se prikupljaju isključivo u zbirnom, anonimnom obliku.
            </p>
          </div>

          <div className={classes.section}>
            <h2>6. Bezbjednost podataka</h2>
            <p>
              Preduzimamo odgovarajuće tehničke i organizacione mjere za zaštitu vaših ličnih podataka od neovlašćenog
              pristupa, gubitka ili uništenja.
            </p>
          </div>

          <div className={classes.section}>
            <h2>7. Vaša prava</h2>
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
            <h2>8. Kolačići (Cookies)</h2>
            <p>
              Naša web stranica ne koristi kolačiće za praćenje niti za oglašavanje. Ako se to u budućnosti promijeni,
              o tome ćemo vas obavijestiti na ovoj stranici.
            </p>
          </div>

          <div className={classes.section}>
            <h2>9. Promjene u Politici privatnosti</h2>
            <p>
              Zadržavamo pravo da ažuriramo ovu Politiku privatnosti u bilo kom trenutku. Sve promjene će biti objavljene
              na ovoj stranici sa datumom posljednjeg ažuriranja.
            </p>
          </div>

          <div className={classes.section}>
            <h2>10. Kontakt</h2>
            <p>
              Ako imate pitanja u vezi sa ovom Politikom privatnosti, možete nas kontaktirati:
            </p>
            <ul>
              <li><strong>Email:</strong> {SITE.email}</li>
              <li><strong>Telefon:</strong> {SITE.phoneDisplay}</li>
              <li><strong>Adresa:</strong> {SITE.street}, {SITE.city}, {SITE.countryName}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
