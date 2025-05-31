import React, { useState } from 'react';
import { X, Minus, Check, Plus } from 'lucide-react';

const OfferBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div 
      className={`absolute top-32 left-1/2 -translate-x-1/2 z-20 transition-all duration-500 ease-in-out transform ${
        isExpanded ? 'scale-100' : 'scale-95'
      }`}
    >
      <div 
        className={`bg-black bg-opacity-90 backdrop-blur-lg text-white rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? 'w-[380px]' : 'w-[200px] cursor-pointer'
        }`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="font-semibold text-md">Limited Time Offer</span>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isExpanded ? (
              <Minus className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Content */}
        <div 
          className={`transition-all duration-500 ease-in-out ${
            isExpanded 
              ? 'max-h-[300px] opacity-100' 
              : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="p-4 pt-0">
            <p className="text-md font-semibold mb-3">
              We are proud to offer up to 40% off on select plans
            </p>
            <ul className="space-y-2 mb-3">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-red-500 text-2xl">—</span>
                <span className='text-l font-semibold'>Monthly Pass</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-red-500 text-2xl">—</span>
                <span className='text-l font-semibold'>Flexi Pass</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-red-500 text-2xl">—</span>
                <span className='text-l font-semibold'>Private Cabins</span>
              </li>
            </ul>
            <p className="text-md font-semibold mb-4">
              Find Your Plan and Contact Team to claim the offer.
            </p>
            <button 
              className="w-full py-3 px-4 rounded-xl font-medium text-white bg-gradient-to-r from-blue-600 via-blue-500 to-pink-500 hover:opacity-90 transition-opacity"
            >
              Claim Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner; 