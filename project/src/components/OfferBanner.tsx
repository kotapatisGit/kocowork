import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const OfferBanner: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Get the stored end time or set a new one
      let endTime = localStorage.getItem('offerEndTime');
      if (!endTime) {
        const newEndTime = new Date();
        newEndTime.setDate(newEndTime.getDate() + 7);
        endTime = newEndTime.getTime().toString();
        localStorage.setItem('offerEndTime', endTime);
      }

      const now = new Date().getTime();
      const difference = parseInt(endTime) - now;

      // If the countdown is finished, reset it to 7 days
      if (difference <= 0) {
        const newEndTime = new Date();
        newEndTime.setDate(newEndTime.getDate() + 7);
        localStorage.setItem('offerEndTime', newEndTime.getTime().toString());
        return {
          days: 7,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
              <div className="grid grid-cols-4 gap-2 text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold">{timeLeft.days}</span>
                  <span className="text-xs font-medium">days</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold">{timeLeft.hours}</span>
                  <span className="text-xs font-medium">hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold">{timeLeft.minutes}</span>
                  <span className="text-xs font-medium">minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold">{timeLeft.seconds}</span>
                  <span className="text-xs font-medium">seconds</span>
                </div>
              </div>
            ) : (
              <>
                <span className="text-xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Upto 40% OFF
                </span>
                <div className="grid grid-cols-4 gap-1 mt-1 text-gray-600">
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-extrabold">{timeLeft.days}</span>
                    <span className="text-[12px] font-semibold pl-1">days</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-extrabold">{timeLeft.hours}</span>
                    <span className="text-[12px] font-semibold pl-1">hours</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-extrabold">{timeLeft.minutes}</span>
                    <span className="text-[12px] font-semibold pl-1">mins</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-extrabold">{timeLeft.seconds}</span>
                    <span className="text-[12px] font-semibold pl-1">secs</span>
                  </div>
                </div>
              </>
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

            {/* <div className="space-y-1 mb-4">
              {['Monthly Pass', 'Flexi Pass', 'Private Cabins'].map((plan, index) => (
                <div key={index} className="flex items-center gap-2 text-xs">
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                  <span className="text-focus-black font-semibold text-sm">{plan}</span>
                </div>
              ))}
            </div> */}

            <button 
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group w-full bg-founders-fire hover:from-orange-600 hover:to-red-600 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner; 