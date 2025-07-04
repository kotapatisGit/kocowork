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
      // Fixed start time - December 2024 (you can change this to when you want the timer to start)
      const startTime = new Date('2025-06-02T00:00:00Z').getTime();
      const cycleDuration = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
      
      const now = new Date().getTime();
      const timeSinceStart = now - startTime;
      
      const timeInCurrentCycle = timeSinceStart % cycleDuration;
      const timeLeftInCycle = cycleDuration - timeInCurrentCycle;

      if (timeSinceStart < 0) {
        return {
          days: 7,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      return {
        days: Math.floor(timeLeftInCycle / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeLeftInCycle % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((timeLeftInCycle % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeLeftInCycle % (1000 * 60)) / 1000)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-20 right-6 z-30 max-w-[320px] lg:max-w-[400px]">
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
                  <span className="text-xl lg:text-2xl font-bold">{timeLeft.days}</span>
                  <span className="text-xs lg:text-lg font-medium">days</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl lg:text-2xl font-bold">{timeLeft.hours}</span>
                  <span className="text-xs lg:text-lg font-medium">hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl lg:text-2xl font-bold">{timeLeft.minutes}</span>
                  <span className="text-xs lg:text-lg font-medium">minutes</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl lg:text-2xl font-bold">{timeLeft.seconds}</span>
                  <span className="text-xs lg:text-lg font-medium">seconds</span>
                </div>
              </div>
            ) : (
              <>
                <span className="text-xl lg:text-3xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Upto 25% OFF
                </span>
                <div className="grid grid-cols-4 gap-1 mt-1 text-gray-600">
                  <div className="flex flex-col items-center">
                    <span className="text-lg lg:text-2xl font-extrabold">{timeLeft.days}</span>
                    <span className="text-[12px] lg:text-lg font-semibold pl-1">days</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg lg:text-2xl font-extrabold">{timeLeft.hours}</span>
                    <span className="text-[12px] lg:text-lg font-semibold pl-1">hours</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg lg:text-2xl font-extrabold">{timeLeft.minutes}</span>
                    <span className="text-[12px] lg:text-lg font-semibold pl-1">mins</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-lg lg:text-2xl font-extrabold">{timeLeft.seconds}</span>
                    <span className="text-[12px] lg:text-lg font-semibold pl-1">secs</span>
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
              <ChevronUp className="w-4 h-4 lg:w-6 lg:h-6 transition-transform duration-300" />
            ) : (
              <ChevronDown className="w-4 h-4 lg:w-6 lg:h-6 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Content */}
        <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'} overflow-hidden`}>
          <div className="px-4 pb-4">
            <div className="text-center mb-3">
              <div className="text-2xl lg:text-3xl font-bold text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-1">
                Upto 25% OFF
              </div>
              <p className="text-md lg:text-lg text-focus-black font-semibold">
                On select membership plans
              </p>
            </div>

            <button 
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group w-full bg-founders-fire hover:from-orange-600 hover:to-red-600 text-white text-sm lg:text-xl font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>

            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferBanner; 