import React from 'react';
import { Users } from 'lucide-react';

interface FounderSectionProps {
  isVisible: boolean;
}

const FounderSection: React.FC<FounderSectionProps> = ({ isVisible }) => {
  return (
    <div 
      className={`py-10 mt-20 px-4 md:px-6 transition-all duration-1000 delay-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="w-full">
                <div className="aspect-square w-full max-w-[400px] mx-auto bg-gradient-to-br from-founders-fire/10 to-signal-blue/10 rounded-3xl overflow-hidden border-4 border-founders-fire/20 shadow-2xl">
                  {/* Placeholder for founder's image */}
                  <img 
                    // src="@/assets/images/founder-pic.jpeg"
                    src="/images/founder-pic.jpeg"
                    alt="Vennela Keertana Kotapati, Founder of KOCO"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.setAttribute('style', 'display: flex');
                    }}
                  />
                  {/* Fallback content */}
                  <div className="w-full h-full bg-gradient-to-br from-founders-fire to-signal-blue hidden items-center justify-center">
                    <div className="text-center text-blank-slate">
                      <div className="w-24 h-24 bg-blank-slate/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Users className="w-12 h-12" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-focus-black mb-16">
              Founder's <span className="text-founders-fire">Message</span>
            </h2>

            <div className="relative">
              {/* <div className="text-6xl text-founders-fire/20">"</div> */}
              <blockquote className="text-2xl md:text-3xl font-bold text-focus-black leading-relaxed italic mb-8 relative z-10">
                KOCO is built on one idea: together we grow and build a better India
              </blockquote>
              {/* <div className="text-6xl text-founders-fire/20 absolute -bottom-4 -right-2">"</div> */}
            </div>
            
            <div className="flex items-center gap-4 mt-12">
              <div className="w-16 h-1 bg-gradient-to-r from-founders-fire to-signal-blue rounded-full" />
              <cite className="text-3xl font-bold text-focus-black not-italic">
                Vennela Keertana Kotapati
              </cite>
            </div>
            <p className="text-founders-fire text-2xl font-bold mt-2 ml-20">Founder of KOCOwork</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection; 