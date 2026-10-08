import HeroSection from "@/components/HeroSection";
import ContentLine from "@/components/ContentLine";
import AboutUs from "@/components/AboutUs";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import LegacyHashRedirect from "@/components/LegacyHashRedirect";

export default function Home() {
  return (
    <main>
      <JsonLd />
      <LegacyHashRedirect />
      <HeroSection />
      <ContentLine />
      <AboutUs />
      <Gallery />
      <Contact />
    </main>
  );
}
