import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import MainNav from "@/components/MainNav";
import Footer from "@/components/Footer";
import { BASE_OPEN_GRAPH, LANG, OG_IMAGE, SITE_URL, serviceHref } from "@/lib/site";
import { services } from "@/lib/services";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

const title = "Šlep služba i transport Banja Luka 0-24h | SMG Transport";
const description =
  "Šlep služba, transport vozila i robe 0-24h u Banjoj Luci i širom BiH. Domaći i međunarodni transport, selidbe. Pozovite SMG Transport: 065 213 074.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | SMG Transport",
  },
  description,
  keywords: [
    "šlep služba Banja Luka",
    "transport Banja Luka",
    "transport vozila",
    "međunarodni transport",
    "domaći transport",
    "selidbe Banja Luka",
    "SMG Transport",
    "transport Bosna i Hercegovina",
  ],
  authors: [{ name: "SMG Transport" }],
  applicationName: "SMG Transport",
  alternates: { canonical: "/" },
  openGraph: {
    ...BASE_OPEN_GRAPH,
    url: "/",
    title,
    description:
      "Pouzdan partner za transport robe i vozila u domaćem i međunarodnom saobraćaju. Šlep služba 0-24h u Banjoj Luci i širom BiH.",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Pouzdan partner za transport robe i vozila u domaćem i međunarodnom saobraćaju.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
  verification: {
    google: "zaVGJjZ61x2McAgaQsqa3RiXBSw2PFKVi5nJYtHlRD0",
    other: { "msvalidate.01": "D59F6A25CCB51C3CEDBB15C44A6A27E3" },
  },
  other: {
    "geo.region": "BA",
    "geo.placename": "Banja Luka",
    "geo.position": "44.77;17.19",
    ICBM: "44.77, 17.19",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

const serviceLinks = services.map((service) => ({
  href: serviceHref(service.slug),
  label: service.name,
}));

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={LANG} className={montserrat.variable} data-scroll-behavior="smooth">
      <body>
        <MainNav serviceLinks={serviceLinks} />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
