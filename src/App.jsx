import './App.css'
import HeroSection from './components/HeroSection';
import MainNav from './components/MainNav'
import ContentLine from './components/ContentLine'
import AboutUs from './components/AboutUs'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

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
