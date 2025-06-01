import React from 'react';
import { Heart, Building } from 'lucide-react';

interface VisionSectionProps {
  isVisible: boolean;
}

const VisionSection: React.FC<VisionSectionProps> = ({ isVisible }) => {
  return (
    <div 
      className={`py-20 px-4 md:px-6 bg-focus-black transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-blank-slate mb-8">
              Our <span className="text-founders-fire">Vision</span>
            </h2>
            <p className="text-xl text-blank-slate leading-relaxed mb-8">
              Our vision is to expand KOCO from Hyderabad to all corners of India and beyond. We are creating 
              a thriving ecosystem of flexible working spaces, virtual office solutions, and startup support 
              that fuels growth and innovation.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-founders-fire to-signal-blue rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-blank-slate" />
              </div>
              <span className="text-lg font-semibold text-blank-slate">Building a Better India</span>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-founders-fire/10 to-signal-blue/10 rounded-3xl p-8 backdrop-blur-sm border border-founders-fire/20">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-founders-fire rounded-full mb-6">
                  <Building className="w-8 h-8 text-blank-slate" />
                </div>
                <h3 className="text-2xl font-bold text-blank-slate mb-4">Expanding Horizons</h3>
                <p className="text-blank-slate/90">
                  From Hyderabad to every corner of India, we're building a network that empowers entrepreneurs and businesses nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionSection; 