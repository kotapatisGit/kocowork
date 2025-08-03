import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import AnimatedIntroSection from './components/AnimatedIntroSection';
import ImpactSection from './components/ImpactSection';
import FullscreenImageSection from './components/FullscreenImageSection';
import FeaturesSection from './components/FeaturesSection';
import AboutUs from './components/AboutUs';
import PricingSection from './components/Pricing/PricingSection';
import FAQSection from './components/FAQSection';
import ContactForm from './components/Contact/ContactForm';
import ContactUsPage from './components/Contact/ContactUsPage';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AnimatedIntroSection />
                <ImpactSection />
                <FullscreenImageSection />
                <FeaturesSection />
                <PricingSection />
                <FAQSection />
                <div className="py-20 bg-focus-black">
                  <ContactForm />
                </div>
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
