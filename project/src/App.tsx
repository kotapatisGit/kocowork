import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import AnimatedIntroSection from './components/AnimatedIntroSection';
import ImpactSection from './components/ImpactSection';
import FullscreenImageSection from './components/FullscreenImageSection';
import FeaturesSection from './components/FeaturesSection';
import AboutUs from './components/AboutUs';
import PricingSection from './components/Pricing/PricingSection';
import FAQSection from './components/FAQSection';
// import ContactForm from './components/Contact/ContactForm';
// import ContactUsPage from './components/Contact/ContactUsPage';
import Layout from './components/Layout';
import BlogsPage from './components/Blogs';
import BlogPostRenderer from './components/Blogs/BlogPostRenderer';
import BlogCarousel from './components/BlogCarousel';

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
                <BlogCarousel />
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/contact" element={<ContactUsPage />} /> */}
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:routeName" element={<BlogPostRenderer />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
