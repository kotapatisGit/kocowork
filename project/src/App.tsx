import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimatedIntroSection from './components/AnimatedIntroSection';
import ImpactSection from './components/ImpactSection';
import FullscreenImageSection from './components/FullscreenImageSection';
import FeaturesSection from './components/FeaturesSection';
import AboutUs from './components/AboutUs';
import PricingSection from './components/Pricing/PricingSection';
import FAQSection from './components/FAQSection';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer';

const MainPage = () => {
  return (
    <>
      <Hero />
      <AnimatedIntroSection />
      <ImpactSection />
      <FullscreenImageSection />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <ContactForm />
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-founders-fire text-focus-black font-darker">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;