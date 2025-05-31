import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimatedIntroSection from './components/AnimatedIntroSection';
import SocialMediaSection from './components/SocialMediaSection';
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
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;