import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ContactForm from './ContactForm';
import Footer from '../Footer';

const ContactUsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-focus-black min-h-screen">
      <div className="container mx-auto px-4 py-8 mb-20">
        <button
          onClick={() => navigate('/')}
          className="inline-flex font-semibold items-center gap-2 bg-founders-fire text-white text-lg lg:text-2xl py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg mb-8"
        >
          <ArrowLeft className="h-5 w-5" />
          Go to Homepage
        </button>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
