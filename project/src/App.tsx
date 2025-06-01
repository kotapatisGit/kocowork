import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimatedIntroSection from './components/AnimatedIntroSection';
import SocialMediaSection from './components/SocialMediaSection';
import ImpactSection from './components/ImpactSection';
import FullscreenImageSection from './components/FullscreenImageSection';
import AboutUs from './components/AboutUs';
import PricingSection from './components/Pricing/PricingSection';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer';

function App() {
  // document.body.style.backgroundColor = '#FF462E'
  return (
    <div className="min-h-screen bg-founders-fire text-focus-black font-darker">
      <Navbar />
      <Hero />
      <AnimatedIntroSection />
      <SocialMediaSection />
      <ImpactSection />
      <FullscreenImageSection />
      <AboutUs />
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;