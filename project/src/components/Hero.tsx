import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import OfferBanner from './OfferBanner';

const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const phrases = [
    "enable productivity",
    "foster innovation",
    "build community",
    "create success"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsChanging(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="hero-section relative min-h-screen bg-founders-fire"
    >
      <div className="relative min-h-screen flex flex-col pt-20">
        {/* Offer Banner */}
        <OfferBanner />

        {/* Main Content Container */}
        <div className="w-[95%] mx-auto relative">
          {/* Image Container */}
          <div className="w-full rounded-3xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/7147442/pexels-photo-7147442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Office Space"
              className="w-full h-[85vh] object-cover"
            />
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-3xl" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-end p-12">
            <div className="w-full flex justify-between items-end">
              {/* Text Content */}
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h1 className="text-4xl md:text-5xl font-bold text-cream leading-tight whitespace-nowrap">
                    For every professional, for every team
                  </h1>
                  <span 
                    className={`text-4xl md:text-7xl font-bold text-founders-fire leading-tight whitespace-nowrap transition-all duration-1000 ${
                      isChanging ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'
                    }`}
                  >
                    {phrases[currentPhraseIndex]}
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4">
                <button className="flex items-center justify-center gap-2 bg-black hover:bg-opacity-80 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 transform hover:-translate-y-1">
                  <span>WhatsApp Us</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-black hover:bg-opacity-80 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 transform hover:-translate-y-1">
                  <span>Find Your Plan</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;