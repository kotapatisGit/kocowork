import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const OfferBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="absolute top-20 right-6 z-30 max-w-[320px]">
      <div className="bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex flex-col">
            {isExpanded ? (
              <span className="font-bold text-gray-800 text-sm">Limited Time Offer</span>
            ) : (
              <span className="text-xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Upto 40% OFF
              </span>
            )}
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-gray-400 hover:text-gray-600 transition-colors ml-3"
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-4 h-4 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Content */}
        <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'} overflow-hidden`}>
          <div className="px-4 pb-4">
            <div className="text-center mb-3">
              <div className="text-2xl font-bold font-black text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-1">
                Upto 40% OFF
              </div>
              <p className="text-md text-focus-black font-semibold">
                On select membership plans
              </p>
            </div>

            <div className="space-y-1 mb-4">
              {['Monthly Pass', 'Flexi Pass', 'Private Cabins'].map((plan, index) => (
                <div key={index} className="flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                  <span className="text-focus-black font-semibold text-sm">{plan}</span>
                </div>
              ))}
            </div>

            <button className="group w-full bg-founders-fire hover:from-orange-600 hover:to-red-600 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2">
              <span>Claim Offer</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner; 