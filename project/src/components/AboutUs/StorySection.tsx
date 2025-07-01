import React from 'react';

interface StorySectionProps {
  isVisible: boolean;
}

const StorySection: React.FC<StorySectionProps> = ({ isVisible }) => {
  return (
    <div 
      className={`py-10 md:py-20 px-4 md:px-6 bg-blank-slate transition-all duration-1000 delay-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto">
        <div className="max-w-[90%] mx-auto">
          <div className="text-center md:mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-focus-black mb-6">
              Our Story & <span className="text-founders-fire">Roots</span>
            </h2>
          </div>
          
          <div className="bg-focus-black w-full mx-auto rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <p className="text-xl md:text-2xl  text-blank-slate leading-relaxed text-left">
              KOCOwork was founded by <span className="font-bold text-founders-fire">Vennela Keertana Kotapati</span>, 
              reflecting the entrepreneurial spirit and values of the Kotapati family. As a proud subsidiary of 
              <span className="font-bold text-signal-blue"> KVPL Pvt. Ltd. (Kotapati Venture Private Limited)</span>, 
              our venture is part of a broader legacy of building sustainable, transformative businesses across 
              industries including real estate, glass manufacturing, education, and working spaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection; 