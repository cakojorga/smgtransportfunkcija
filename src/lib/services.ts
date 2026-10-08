import type { StaticImageData } from "next/image";
import { serviceHref } from "./site";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img5 from "../assets/img5.jpg";
import img7 from "../assets/img7.jpg";
import img9 from "../assets/img9.jpg";

export type ServiceSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type Service = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  image: StaticImageData;
  imageAlt: string;
  sections: ServiceSection[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "slep-sluzba-banja-luka",
    name: "Šlep služba",
    metaTitle: "Šlep služba Banja Luka 0-24h",
    metaDescription:
      "Šlep služba u Banjoj Luci 0-24h, 365 dana u godini. Pomoć pri kvaru ili saobraćajnoj nezgodi i prevoz vozila na željenu lokaciju. Pozovite 065 213 074.",
    h1: "Šlep služba Banja Luka – dostupni 0-24h",
    lead: "Kvar na putu ili saobraćajna nezgoda nikada ne dolaze u pravo vrijeme. Zato je šlep služba SMG Transport dostupna 00-24h, 365 dana u godini – jednim pozivom dobijate pomoć i prevoz vozila na lokaciju koju sami izaberete.",
    image: img1,
    imageAlt: "Šlep vozilo SMG Transport sa platformom za prevoz automobila",
    sections: [
      {
        heading: "Kada vam je potrebna šlep služba",
        paragraphs: [
          "Šlep služba je potrebna svaki put kada vozilo ne može sigurno nastaviti vožnju: nakon kvara motora, problema sa mjenjačem ili kočnicama, akumulatora koji ne može pokrenuti motor ili nakon saobraćajne nezgode. Prevoz je često potreban i kada neispravno vozilo stoji kod kuće, na parkingu ili u garaži, pa ga treba dovesti do auto-servisa.",
        ],
        list: [
          "Kvar vozila na putu, parkingu ili u garaži",
          "Saobraćajna nezgoda",
          "Prevoz neispravnog vozila do auto-servisa",
          "Prevoz vozila koje nije registrovano ili nije u voznom stanju",
          "Premještanje vozila sa jedne lokacije na drugu",
        ],
      },
      {
        heading: "Kako izgleda intervencija",
        paragraphs: [
          "Kada nas pozovete na 065 213 074, dovoljno je da nam kažete gdje se nalazite, o kakvom vozilu se radi i gdje želite da ga prevezemo. Na osnovu tih informacija dogovaramo dolazak i cijenu, tako da unaprijed znate šta možete očekivati.",
          "Vozilo pažljivo utovarujemo na platformu, pričvršćujemo ga za prevoz i dovozimo na dogovorenu adresu – do vašeg auto-servisa, kuće ili bilo koje druge lokacije u Banjoj Luci, okolini ili širom Bosne i Hercegovine.",
        ],
      },
      {
        heading: "Područje na kojem radimo",
        paragraphs: [
          "Nalazimo se na adresi Bistrica BB u Banjoj Luci, odakle izlazimo na intervencije u gradu i okolnim mjestima. Po dogovoru prevozimo vozila i na duže relacije unutar Bosne i Hercegovine, kao i u inostranstvo.",
        ],
      },
    ],
    faq: [
      {
        question: "Da li šlep služba radi noću, vikendom i praznicima?",
        answer:
          "Da. Dostupni smo 00-24h, svaki dan u godini, uključujući vikende i praznike.",
      },
      {
        question: "Koliko košta šlep služba?",
        answer:
          "Cijena zavisi od udaljenosti, mjesta na kojem se vozilo nalazi i vrste vozila. Pozovite nas, opišite situaciju i cijenu ćemo dogovoriti prije prevoza.",
      },
      {
        question: "Možete li prevesti vozilo do mog auto-servisa?",
        answer:
          "Da, vozilo prevozimo na lokaciju po vašem izboru – do servisa, kuće ili bilo koje druge adrese.",
      },
    ],
  },
  {
    slug: "transport-vozila",
    name: "Transport vozila",
    metaTitle: "Transport vozila Banja Luka – prevoz automobila",
    metaDescription:
      "Siguran transport automobila, oldtajmera i drugih vozila na prikolici iz Banje Luke po BiH i u inostranstvo. Dostupni 0-24h. Pozovite 065 213 074.",
    h1: "Transport vozila – siguran prevoz automobila",
    lead: "Bilo da ste kupili automobil u drugom gradu, selite se ili vozilo treba dovesti do servisa, SMG Transport prevozi vozila na prikolici – sigurno, bez novih kilometara i bez trošenja vašeg vozila.",
    image: img5,
    imageAlt: "Pokriven sportski automobil na prikolici SMG Transport",
    sections: [
      {
        heading: "Koja vozila prevozimo",
        paragraphs: [
          "Prevozimo putničke automobile, terenska vozila, oldtajmere i sportska vozila. Vozilo ne mora biti u voznom stanju – prevozimo i neispravna, oštećena ili neregistrovana vozila.",
        ],
        list: [
          "Putnički automobili i terenska vozila",
          "Oldtajmeri i kolekcionarska vozila",
          "Sportska i nova vozila",
          "Neispravna, oštećena i neregistrovana vozila",
        ],
      },
      {
        heading: "Zašto transport na prikolici",
        paragraphs: [
          "Kada se vozilo prevozi na prikolici, ne troše se gume, kočnice ni motor, a na kilometar-satu se ne pojavljuju novi kilometri. To je posebno važno pri kupovini i prodaji automobila, kao i kod vrijednih vozila kao što su oldtajmeri.",
          "Vozilo se na prikolici pričvršćuje tako da tokom cijelog puta ostane stabilno, a vozila osjetljiva na prašinu i vremenske uslove po potrebi prevozimo pokrivena.",
        ],
      },
      {
        heading: "Domaće i međunarodne relacije",
        paragraphs: [
          "Vozila prevozimo unutar Banje Luke, između gradova u Bosni i Hercegovini, a po dogovoru i iz inostranstva ili u inostranstvo – na primjer kada automobil kupite van zemlje. Za duže relacije javite nam se ranije kako bismo zajedno isplanirali termin preuzimanja i isporuke.",
        ],
      },
      {
        heading: "Kako da pripremite vozilo za transport",
        paragraphs: [
          "Prije preuzimanja iz vozila izvadite vrijedne lične stvari i pripremite ključeve i dokumentaciju vozila. Ako vozilo nije u voznom stanju, recite nam unaprijed da li se točkovi okreću i da li rade volan i kočnice – tako ćemo pripremiti odgovarajući način utovara i izbjeći zastoje na licu mjesta.",
        ],
      },
    ],
    faq: [
      {
        question: "Da li prevozite vozilo koje ne može da se pokrene?",
        answer:
          "Da. Prevozimo i neispravna vozila, kao i vozila oštećena u saobraćajnoj nezgodi.",
      },
      {
        question: "Kako da zakažem transport vozila?",
        answer:
          "Pozovite nas na 065 213 074 ili pošaljite email sa mjestom preuzimanja, odredištem i vrstom vozila, pa ćemo dogovoriti termin i cijenu.",
      },
      {
        question: "Da li prevozite vozila iz inostranstva?",
        answer:
          "Da, po dogovoru prevozimo vozila i na međunarodnim relacijama.",
      },
    ],
  },
  {
    slug: "medjunarodni-transport",
    name: "Međunarodni transport",
    metaTitle: "Međunarodni transport robe i vozila iz Banje Luke",
    metaDescription:
      "Međunarodni transport robe i vozila iz Banje Luke i BiH u inostranstvo i nazad, uz organizovan utovar i istovar. Pozovite SMG Transport: 065 213 074.",
    h1: "Međunarodni transport robe i vozila",
    lead: "SMG Transport prevozi robu i vozila i van granica Bosne i Hercegovine. Ako trebate nešto prevesti iz inostranstva ili u inostranstvo, preuzimamo organizaciju prevoza – od utovara do istovara na odredištu.",
    image: img2,
    imageAlt: "Bijeli kombi SMG Transport vuče prikolicu na kojoj se prevozi drugi kombi",
    sections: [
      {
        heading: "Šta prevozimo u međunarodnom saobraćaju",
        paragraphs: [
          "U međunarodnom saobraćaju prevozimo robu, stvari i vozila. Za robu i stvari koristimo kombi vozila, a automobile prevozimo na prikolici, tako da isti prevoz može obuhvatiti i teret i vozilo.",
        ],
        list: [
          "Roba za firme i privatna lica",
          "Lične stvari i namještaj pri selidbi u inostranstvo ili iz inostranstva",
          "Automobili kupljeni ili prodati u inostranstvu",
        ],
      },
      {
        heading: "Kako planiramo međunarodni prevoz",
        paragraphs: [
          "Za svaki međunarodni prevoz dogovaramo relaciju, termin preuzimanja i isporuke i način utovara. Što ranije znamo detalje – količinu i vrstu robe ili tip vozila – to lakše pripremamo prevoz i dajemo vam tačnu cijenu.",
          "Kada roba ili vozilo prelaze granicu, potrebna je odgovarajuća dokumentacija. O tome razgovaramo prilikom dogovora, kako na granici ne bi bilo iznenađenja.",
        ],
      },
      {
        heading: "Polazište u Banjoj Luci",
        paragraphs: [
          "Sjedište nam je u Banjoj Luci, a robu i vozila po dogovoru preuzimamo i u drugim mjestima širom Bosne i Hercegovine. Dostupni smo 00-24h, pa polazak možemo uskladiti sa vašim rasporedom.",
        ],
      },
      {
        heading: "Prevoz robe i vozila u jednom polasku",
        paragraphs: [
          "Kombi sa prikolicom može istovremeno prevesti i teret i automobil. To je praktično, na primjer, kada se selite iz inostranstva i želite da vaše stvari i vaše vozilo stignu zajedno, ili kada uz kupljeni automobil treba dovesti i dodatnu opremu. Jedan dobro organizovan polazak često je jednostavniji i povoljniji od dva odvojena prevoza.",
        ],
      },
    ],
    faq: [
      {
        question: "U koje zemlje vozite?",
        answer:
          "Relaciju dogovaramo za svaki prevoz pojedinačno. Pozovite nas i recite odakle i dokle treba prevesti robu ili vozilo.",
      },
      {
        question: "Koliko unaprijed treba zakazati međunarodni prevoz?",
        answer:
          "Preporučujemo da nas kontaktirate što ranije, kako bismo uskladili termin i pripremili sve što je potrebno za prevoz.",
      },
      {
        question: "Da li prevozite i automobile iz inostranstva?",
        answer:
          "Da. Automobile prevozimo na prikolici, a po potrebi u istom polasku možemo prevesti i robu ili stvari.",
      },
    ],
  },
  {
    slug: "domaci-transport",
    name: "Domaći transport",
    metaTitle: "Transport robe Banja Luka i BiH – domaći prevoz",
    metaDescription:
      "Domaći transport robe i stvari u Banjoj Luci i širom BiH, uz organizovan utovar i istovar. Brzo, sigurno i 0-24h. Pozovite SMG Transport: 065 213 074.",
    h1: "Domaći transport robe i stvari",
    lead: "Prevozimo robu i stvari unutar Banje Luke i između gradova u Bosni i Hercegovini. Bilo da se radi o jednom većem komadu ili o kompletnom tovaru, dogovaramo prevoz u terminu koji vama odgovara.",
    image: img9,
    imageAlt: "Vozni park SMG Transport – kombi vozila, terensko vozilo i prikolica",
    sections: [
      {
        heading: "Za privatna lica i firme",
        paragraphs: [
          "Privatnim licima pomažemo kada treba prevesti namještaj, bijelu tehniku ili stvari kupljene u drugom gradu. Firmama prevozimo robu do kupaca, između skladišta ili do mjesta gdje je oprema potrebna.",
        ],
        list: [
          "Prevoz namještaja i bijele tehnike",
          "Dostava robe kupcima i između skladišta",
          "Prevoz opreme i materijala",
          "Brza dostava u Banjoj Luci i okolini",
        ],
      },
      {
        heading: "Organizovan utovar i istovar",
        paragraphs: [
          "Uz prevoz organizujemo i utovar i istovar, tako da ne morate sami nositi teške stvari niti tražiti dodatnu pomoć. Teret u vozilu pričvršćujemo kako bi stigao neoštećen.",
        ],
      },
      {
        heading: "Gdje vozimo",
        paragraphs: [
          "Vozimo u Banjoj Luci i okolini, kao i do svih gradova u Bosni i Hercegovini. Dostupni smo 00-24h, pa prevoz možemo dogovoriti i van uobičajenog radnog vremena – rano ujutro, uveče ili vikendom.",
        ],
      },
      {
        heading: "Kako dogovoriti prevoz",
        paragraphs: [
          "Pozovite nas ili pošaljite email i navedite šta prevozite, približnu količinu ili dimenzije tereta, adresu preuzimanja i dostave i željeni termin. Ako na nekoj od adresa postoji sprat bez lifta ili otežan prilaz, recite nam unaprijed.",
          "Na osnovu tih informacija dogovaramo vozilo, vrijeme dolaska i cijenu, tako da tačno znate kada teret kreće i kada stiže na odredište.",
        ],
      },
    ],
    faq: [
      {
        question: "Da li pomažete oko utovara i istovara?",
        answer:
          "Da, utovar i istovar organizujemo kao dio usluge prevoza.",
      },
      {
        question: "Kako se računa cijena prevoza?",
        answer:
          "Cijena zavisi od udaljenosti, količine i vrste tereta i potrebe za utovarom i istovarom. Pozovite nas i dogovorićemo cijenu prije prevoza.",
      },
      {
        question: "Da li vozite i van Banje Luke?",
        answer:
          "Da. Robu i stvari prevozimo do svih gradova u Bosni i Hercegovini.",
      },
    ],
  },
  {
    slug: "selidbe-banja-luka",
    name: "Selidbe",
    metaTitle: "Selidbe Banja Luka – prevoz namještaja i stvari",
    metaDescription:
      "Selidbe stanova, kuća i poslovnih prostora u Banjoj Luci i širom BiH, uz organizovan utovar i istovar. Pozovite SMG Transport: 065 213 074.",
    h1: "Selidbe u Banjoj Luci i širom BiH",
    lead: "Selidba je mnogo lakša kada neko drugi brine o najtežem dijelu posla. SMG Transport organizuje utovar, prevoz i istovar vaših stvari – iz stana, kuće ili poslovnog prostora.",
    image: img7,
    imageAlt: "Otvoren kombi SMG Transport pripremljen za utovar stvari pri selidbi",
    sections: [
      {
        heading: "Šta obuhvata selidba",
        paragraphs: [
          "Dogovaramo termin, dolazimo na vašu adresu, utovaramo namještaj i stvari, prevozimo ih i istovaramo na novoj adresi. Vi birate da li selimo cijelo domaćinstvo ili samo nekoliko većih komada.",
        ],
        list: [
          "Selidbe stanova i kuća",
          "Selidbe kancelarija i poslovnih prostora",
          "Prevoz pojedinačnih komada namještaja",
          "Selidbe između gradova i u inostranstvo",
        ],
      },
      {
        heading: "Kako da se pripremite za selidbu",
        paragraphs: [
          "Sitnije stvari spakujte u kutije i označite ih po prostorijama – tako je istovar brži, a raspakivanje lakše. Ormare i komode ispraznite prije selidbe, a lomljive predmete dobro zaštitite.",
          "Prilikom dogovora recite nam na kojem spratu se nalaze stari i novi stan, da li postoji lift i kakav je pristup zgradi ili kući. Te informacije nam pomažu da selidbu isplaniramo bez zastoja.",
        ],
      },
      {
        heading: "Selidbe u Banjoj Luci i dalje",
        paragraphs: [
          "Selimo unutar Banje Luke, između gradova u Bosni i Hercegovini, a po dogovoru i u inostranstvo. Dostupni smo 00-24h, 365 dana u godini, pa selidbu možemo uskladiti sa vašim obavezama.",
        ],
      },
      {
        heading: "Zašto selidbu prepustiti nama",
        paragraphs: [
          "Za selidbu nije dovoljan samo kombi: stvari treba pažljivo iznijeti, složiti u vozilo tako da se ne pomjeraju tokom vožnje i unijeti ih na novu adresu. Uz organizovan utovar i istovar ne morate tražiti pomoć prijatelja niti iznajmljivati vozilo, a vrijeme koje uštedite možete posvetiti ostalim obavezama oko useljenja.",
        ],
      },
    ],
    faq: [
      {
        question: "Koliko ranije treba zakazati selidbu?",
        answer:
          "Što ranije nas kontaktirate, lakše ćemo uskladiti termin sa vašim planom.",
      },
      {
        question: "Da li radite selidbe vikendom?",
        answer:
          "Da. Dostupni smo 00-24h, 365 dana u godini, pa selidbu možemo dogovoriti i vikendom.",
      },
      {
        question: "Da li radite selidbe u inostranstvo?",
        answer:
          "Da, po dogovoru selimo i na međunarodnim relacijama, a uz stvari možemo prevesti i vaše vozilo.",
      },
    ],
  },
];

export { serviceHref };

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
