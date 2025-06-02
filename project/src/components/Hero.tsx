import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import OfferBanner from './OfferBanner';

// Define styles outside the component
const animationStyles = `
  @keyframes bounce-in {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    60% {
      transform: translateY(-20%);
      opacity: 0.7;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes bounce-scale {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
`;

// Add styles to document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = animationStyles;
  document.head.appendChild(style);
}

const Hero: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const phrases = [
    "ambition meets opportunity",
    "we build for tomorrow",
    "ideas scale faster",
  ];

  const animateText = async (newText: string, direction: 'in' | 'out') => {
    setIsAnimating(true);
    const letters = newText.split('');
    
    if (direction === 'out') {
      for (let i = letters.length - 1; i >= 0; i--) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setDisplayText(prev => prev.slice(0, i));
      }
    } else {
      for (let i = 0; i <= letters.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setDisplayText(letters.slice(0, i).join(''));
      }
    }
    setIsAnimating(false);
  };

  useEffect(() => {
    const changePhrase = async () => {
      if (!isAnimating) {
        await animateText(phrases[currentPhraseIndex], 'out');
        const nextIndex = (currentPhraseIndex + 1) % phrases.length;
        setCurrentPhraseIndex(nextIndex);
        await animateText(phrases[nextIndex], 'in');
      }
    };

    const interval = setInterval(changePhrase, 4000);
    return () => clearInterval(interval);
  }, [currentPhraseIndex, isAnimating]);

  useEffect(() => {
    // Initialize first phrase
    if (displayText === '') {
      setDisplayText(phrases[0]);
    }
  }, []);

  return (
    <section className="hero-section relative h-[70vh] md:min-h-screen bg-founders-fire">
      <div className="relative min-h-screen flex flex-col pt-20 md:pt-20">
        {/* Offer Banner */}
        <OfferBanner />

        {/* Main Content Container */}
        <div className="w-full mx-auto relative">
          {/* Image Container */}
          <div className="w-[95%] mx-auto rounded-3xl overflow-hidden">
            <img 
              // src="https://images.pexels.com/photos/7147442/pexels-photo-7147442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              src="/images/hero-image.jpeg"
              alt="Office Space"
              className="w-full h-[55vh] md:h-[85vh] object-cover"
            />
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 rounded-3xl" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-end p-6 md:p-12">
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0">
              {/* Text Content */}
              <div className="hidden md:block max-w-full md:max-w-2xl">
                <div className="flex flex-col gap-y-1 md:gap-y-2">
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blank-slate leading-tight">
                    At KOCOwork
                  </h1>
                  <div className="h-[50px] md:h-[80px] flex items-center">
                    <span className="text-3xl md:text-4xl lg:text-6xl font-bold text-blank-slate leading-tight whitespace-nowrap inline-block">
                      {displayText.split('').map((letter, index) => (
                        <span
                          key={index}
                          className="inline-block"
                          style={{
                            animationDelay: `${index * 0.05}s`,
                            opacity: 0,
                            animation: `
                              bounce-in 0.5s ${index * 0.05}s forwards,
                              bounce-scale 2s ${index * 0.05}s infinite
                            `
                          }}
                        >
                          {letter === ' ' ? '\u00A0' : letter}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 md:gap-4 w-[80%] mx-0 md:mx-0 md:w-[200px]">
                <button 
                  onClick={() => window.open('http://wa.me/message/TTIMWUTXNJHXC1', '_blank')}
                  className="group relative flex items-center justify-between w-[30vh] md:w-full bg-blank-slate hover:text-blank-slate px-3 md:px-4 py-2 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <span className="relative z-10 text-base md:text-lg lg:text-xl text-focus-black font-bold transition-colors duration-500 group-hover:text-blank-slate">WhatsApp Us</span>
                  <div className="absolute right-0 w-10 md:w-12 h-full bg-focus-black flex items-center justify-center rounded-r-full">
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-blank-slate relative z-10" />
                  </div>
                  <div className="absolute w-10 md:w-12 h-full bg-legacy-green right-0 group-hover:w-full transition-all duration-500 -z-0" />
                </button>
                <button
                  onClick={() => window.open('http://maps.app.goo.gl/oTFFP61Pn8L22mFR7', '_blank')}
                  className="group relative flex items-center justify-between w-[30vh] md:w-full bg-focus-black hover:text-blank-slate px-3 md:px-4 py-2 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                  <span className="relative z-10 text-base md:text-lg lg:text-xl font-bold text-blank-slate transition-colors duration-500 group-hover:text-blank-slate">Locate Us</span>
                  <div className="absolute right-0 w-10 md:w-12 h-full bg-founders-fire flex items-center justify-center rounded-r-full">
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-blank-slate relative z-10" />
                  </div>
                  <div className="absolute w-10 md:w-12 h-full bg-signal-blue right-0 group-hover:w-full transition-all duration-500 -z-0" />
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