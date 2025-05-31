import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PricingSection from './components/Pricing/PricingSection';
import ContactForm from './components/Contact/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-blank-slate text-focus-black font-darker">
      <Navbar />
      <Hero />
      <PricingSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;