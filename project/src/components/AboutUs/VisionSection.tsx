import React from 'react';

interface VisionSectionProps {
  isVisible: boolean;
}

const VisionSection: React.FC<VisionSectionProps> = ({ isVisible }) => {
  return (
    <div 
      className={`px-4 md:px-6 lg:px-0 bg-focus-black transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto lg:max-w-none lg:mx-0">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0">
          <div className="lg:w-1/2 lg:pl-8 xl:pl-12 2xl:pl-16">
            <h2 className="text-4xl md:text-5xl mt-4 md:mt-0 font-bold text-blank-slate mb-8">
              Our <span className="text-founders-fire">Vision</span>
            </h2>
            <p className="text-xl md:text-2xl text-blank-slate leading-relaxed mb-8">
              Our vision is to expand KOCO from Hyderabad to all corners of India and beyond. We are creating 
              a thriving ecosystem of flexible working spaces, virtual office solutions, and startup support 
              that fuels growth and innovation.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold text-blank-slate">-- Building a Better India</span>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pr-8 xl:pr-12 2xl:pr-16">
            <img 
              src="/images/charminar.png" 
              alt="KOCO Vision Banner" 
              className="w-full max-w-[40%] h-auto rounded-lg shadow-lg ml-auto"
            />
          </div>    
        </div>
      </div>
    </div>
  );
};

export default VisionSection; 