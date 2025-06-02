import React from 'react';
import { Heart, Building } from 'lucide-react';

interface VisionSectionProps {
  isVisible: boolean;
}

const VisionSection: React.FC<VisionSectionProps> = ({ isVisible }) => {
  return (
    <div 
      className={` px-4 md:px-6 bg-focus-black transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-blank-slate mb-8">
              Our <span className="text-founders-fire">Vision</span>
            </h2>
            <p className="text-2xl text-blank-slate leading-relaxed mb-8">
              Our vision is to expand KOCO from Hyderabad to all corners of India and beyond. We are creating 
              a thriving ecosystem of flexible working spaces, virtual office solutions, and startup support 
              that fuels growth and innovation.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold text-blank-slate">-- Building a Better India</span>
            </div>
          </div>
          <div className="lg:w-1/2">
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