import { useEffect, useState } from 'react';
import './App.css'
import HeroSection from './components/HeroSection';
import MainNav from './components/MainNav'
import ContentLine from './components/ContentLine'
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setShowPrivacy(window.location.hash === '#privacy-policy');
    };
    
    checkHash();
    window.addEventListener('hashchange', checkHash);
    
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  if (showPrivacy) {
    return (
      <>
        <MainNav />
        <PrivacyPolicy />
        <Footer />
      </>
    );
  }

  return (
    <>
        <MainNav />
        <HeroSection />
        <ContentLine />
        <AboutUs />
        <Gallery />
        <Contact />
        <Footer />
    </>
  );
}

export default App
