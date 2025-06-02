import React from 'react';

interface HeroSectionProps {
  isVisible: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isVisible }) => {
  return (
    <div 
      className={`relative pt-16 pb-20 px-4 md:px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="w-[90vw] mx-auto bg-signal-blue rounded-3xl shadow-lg p-8 md:p-12">
        <div className="container mx-auto">
          {/* About Us Title with Square */}
          <div className="flex items-center gap-3 mb-8 md:mb-16">
            {/* <div className="w-4 h-4 bg-founders-fire rounded-sm animate-pulse" /> */}
            <h2 className="text-2xl md:text-5xl font-bold text-blank-slate">About KOCOwork</h2>
          </div>

          {/* Hero Statement */}
          <div className="text-center max-w-5xl mx-auto mb-10 md:mb-20">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold bg-blank-slate text-transparent bg-clip-text leading-tight mb-8">
              Your Vision Deserves a Space
            </h1>
            <div className="relative">
              <p className="text-xl md:text-3xl text-blank-slate leading-relaxed font-medium max-w-4xl mx-auto">
                KOCOwork is a space for all where individuals and businesses unite to flourish and build a better India. 
                Whether you're a solo entrepreneur, a remote worker, or a growing company, our flexible working spaces 
                are designed to help you thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 