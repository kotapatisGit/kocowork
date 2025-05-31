import React, { useState } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';

const OfferBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="absolute top-6 right-6 z-30 max-w-[320px]">
      <div className="bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg overflow-hidden">
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-800 text-sm">Limited Time Offer</span>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 pb-4">
          <div className="text-center mb-3">
            <div className="text-2xl font-black text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-1">
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

          <button className="group w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2">
            <span>Claim Offer</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner; 