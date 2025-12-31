import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ArrowRight, Sparkles } from 'lucide-react';

const NewYearOffer: React.FC = () => {
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
      {/* Mobile: Small compact popup */}
      <div className="lg:hidden">
        {!isExpanded ? (
          <div 
            onClick={() => setIsExpanded(true)}
            className="relative bg-gradient-to-br from-[#0f1629]/95 via-[#1a1f3a]/95 to-[#2d1b4e]/95 backdrop-blur-xl border-2 border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer hover:scale-[1.02] transition-transform"
          >
            <div className="p-3 flex items-center gap-2 relative z-10">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-yellow-300/90 font-bold">New Year</div>
                <div className="text-lg font-bold text-gradient bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  20% OFF
                </div>
              </div>
              <ChevronDown className="w-5 h-5 text-white/80" />
            </div>
            {/* Static fireworks background - mobile */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute top-1 right-2 w-16 h-16 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.3)_0%,_transparent_70%)]" />
              <div className="absolute bottom-1 left-2 w-14 h-14 rounded-full bg-[radial-gradient(circle_at_center,_rgba(138,43,226,0.3)_0%,_transparent_70%)]" />
            </div>
          </div>
        ) : (
          <div className="relative bg-gradient-to-br from-[#0f1629]/95 via-[#1a1f3a]/95 to-[#2d1b4e]/95 backdrop-blur-xl border-2 border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Static fireworks background effects */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
              <div className="absolute top-4 right-8 w-32 h-32 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.3)_0%,_rgba(255,140,0,0.2)_20%,_rgba(255,69,0,0.1)_40%,_transparent_70%)]" />
              <div className="absolute top-4 right-8 w-32 h-32">
                <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gradient-to-b from-yellow-400/40 via-orange-500/30 to-transparent rotate-0 origin-bottom" />
                <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gradient-to-b from-yellow-400/40 via-orange-500/30 to-transparent rotate-45 origin-bottom" />
                <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gradient-to-b from-yellow-400/40 via-orange-500/30 to-transparent rotate-90 origin-bottom" />
                <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gradient-to-b from-yellow-400/40 via-orange-500/30 to-transparent rotate-[135deg] origin-bottom" />
              </div>
              <div className="absolute bottom-8 left-6 w-28 h-28 rounded-full bg-[radial-gradient(circle_at_center,_rgba(138,43,226,0.3)_0%,_rgba(75,0,130,0.2)_20%,_rgba(255,20,147,0.1)_40%,_transparent_70%)]" />
              <div className="absolute bottom-8 left-6 w-28 h-28">
                <div className="absolute top-0 left-1/2 w-0.5 h-10 bg-gradient-to-b from-purple-400/40 via-pink-500/30 to-transparent rotate-30 origin-bottom" />
                <div className="absolute top-0 left-1/2 w-0.5 h-10 bg-gradient-to-b from-purple-400/40 via-pink-500/30 to-transparent rotate-60 origin-bottom" />
                <div className="absolute top-0 left-1/2 w-0.5 h-10 bg-gradient-to-b from-purple-400/40 via-pink-500/30 to-transparent rotate-120 origin-bottom" />
              </div>
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,191,255,0.3)_0%,_rgba(30,144,255,0.2)_20%,_rgba(65,105,225,0.1)_40%,_transparent_70%)]" />
              <div className="absolute top-[20%] right-[15%] w-1.5 h-1.5 rounded-full bg-yellow-300/50" />
              <div className="absolute top-[40%] right-[25%] w-1.5 h-1.5 rounded-full bg-pink-400/50" />
              <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-blue-400/50" />
              <div className="absolute bottom-[45%] left-[35%] w-1.5 h-1.5 rounded-full bg-purple-400/50" />
              <div className="absolute top-[60%] right-[40%] w-1.5 h-1.5 rounded-full bg-orange-400/50" />
              <div className="absolute top-[15%] left-[10%] w-2 h-4 bg-gradient-to-b from-red-500/40 to-pink-500/30 rounded-sm rotate-45" />
              <div className="absolute top-[25%] right-[30%] w-3 h-3 bg-gradient-to-br from-yellow-400/40 to-orange-400/30 rounded-full" />
              <div className="absolute bottom-[20%] right-[15%] w-2 h-4 bg-gradient-to-b from-blue-500/40 to-purple-500/30 rounded-sm rotate-12" />
              <div className="absolute bottom-[35%] left-[25%] w-4 h-2 bg-gradient-to-r from-green-400/40 to-teal-400/30 rounded-sm rotate-[-30deg]" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
            
            <div className="p-4 relative z-10">
              <div className="flex items-center justify-between mb-3 cursor-pointer" onClick={() => setIsExpanded(false)}>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-yellow-300">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <span className="font-bold">New Year Special</span>
                </div>
                <ChevronUp className="w-5 h-5 text-white/80" />
              </div>
              
              {/* Timer display for mobile */}
              <div className="grid grid-cols-4 gap-2 mb-3 text-white">
                <div className="flex flex-col items-center rounded-lg py-2">
                  <span className="text-xl font-bold">{timeLeft.days}</span>
                  <span className="text-xs font-medium">days</span>
                </div>
                <div className="flex flex-col items-center rounded-lg py-2">
                  <span className="text-xl font-bold">{timeLeft.hours}</span>
                  <span className="text-xs font-medium">hours</span>
                </div>
                <div className="flex flex-col items-center rounded-lg py-2">
                  <span className="text-xl font-bold">{timeLeft.minutes}</span>
                  <span className="text-xs font-medium">mins</span>
                </div>
                <div className="flex flex-col items-center rounded-lg py-2">
                  <span className="text-xl font-bold">{timeLeft.seconds}</span>
                  <span className="text-xs font-medium">secs</span>
                </div>
              </div>
              
              <div className="text-center mb-3">
                <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  Flat 20% OFF
                </div>
                <p className="text-sm text-white/90 font-semibold">
                  Ring in 2026 with a celebration discount on select memberships when you book this week.
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
                className="group relative w-full backdrop-blur-sm text-white text-sm font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 border border-white/20"
              >
                <span>🎉 Claim Offer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop: Existing design */}
      <div className="hidden lg:block relative bg-gradient-to-br from-[#0f1629]/95 via-[#1a1f3a]/95 to-[#2d1b4e]/95 backdrop-blur-xl border-2 border-white/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Static fireworks background effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
          {/* Firework burst 1 - top right */}
          <div className="absolute top-4 right-8 w-32 h-32 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,215,0,0.3)_0%,_rgba(255,140,0,0.2)_20%,_rgba(255,69,0,0.1)_40%,_transparent_70%)]" />
          <div className="absolute top-4 right-8 w-32 h-32">
            <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gradient-to-b from-yellow-400/40 via-orange-500/30 to-transparent rotate-0 origin-bottom" />
            <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gradient-to-b from-yellow-400/40 via-orange-500/30 to-transparent rotate-45 origin-bottom" />
            <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gradient-to-b from-yellow-400/40 via-orange-500/30 to-transparent rotate-90 origin-bottom" />
            <div className="absolute top-0 left-1/2 w-0.5 h-12 bg-gradient-to-b from-yellow-400/40 via-orange-500/30 to-transparent rotate-[135deg] origin-bottom" />
          </div>

          {/* Firework burst 2 - bottom left */}
          <div className="absolute bottom-8 left-6 w-28 h-28 rounded-full bg-[radial-gradient(circle_at_center,_rgba(138,43,226,0.3)_0%,_rgba(75,0,130,0.2)_20%,_rgba(255,20,147,0.1)_40%,_transparent_70%)]" />
          <div className="absolute bottom-8 left-6 w-28 h-28">
            <div className="absolute top-0 left-1/2 w-0.5 h-10 bg-gradient-to-b from-purple-400/40 via-pink-500/30 to-transparent rotate-30 origin-bottom" />
            <div className="absolute top-0 left-1/2 w-0.5 h-10 bg-gradient-to-b from-purple-400/40 via-pink-500/30 to-transparent rotate-60 origin-bottom" />
            <div className="absolute top-0 left-1/2 w-0.5 h-10 bg-gradient-to-b from-purple-400/40 via-pink-500/30 to-transparent rotate-120 origin-bottom" />
          </div>

          {/* Firework burst 3 - center top */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,191,255,0.3)_0%,_rgba(30,144,255,0.2)_20%,_rgba(65,105,225,0.1)_40%,_transparent_70%)]" />
          
          {/* Sparkle particles */}
          <div className="absolute top-[20%] right-[15%] w-1.5 h-1.5 rounded-full bg-yellow-300/50" />
          <div className="absolute top-[40%] right-[25%] w-1.5 h-1.5 rounded-full bg-pink-400/50" />
          <div className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 rounded-full bg-blue-400/50" />
          <div className="absolute bottom-[45%] left-[35%] w-1.5 h-1.5 rounded-full bg-purple-400/50" />
          <div className="absolute top-[60%] right-[40%] w-1.5 h-1.5 rounded-full bg-orange-400/50" />
          
          {/* Confetti pieces */}
          <div className="absolute top-[15%] left-[10%] w-2 h-4 bg-gradient-to-b from-red-500/40 to-pink-500/30 rounded-sm rotate-45" />
          <div className="absolute top-[25%] right-[30%] w-3 h-3 bg-gradient-to-br from-yellow-400/40 to-orange-400/30 rounded-full" />
          <div className="absolute bottom-[20%] right-[15%] w-2 h-4 bg-gradient-to-b from-blue-500/40 to-purple-500/30 rounded-sm rotate-12" />
          <div className="absolute bottom-[35%] left-[25%] w-4 h-2 bg-gradient-to-r from-green-400/40 to-teal-400/30 rounded-sm rotate-[-30deg]" />
        </div>

        {/* Overlay gradient for depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
        
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex flex-col gap-1 relative z-10">
            <div className="flex items-center gap-2 text-xs lg:text-sm uppercase tracking-[0.3em] text-yellow-300 drop-shadow-[0_2px_8px_rgba(255,215,0,0.6)]">
              <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-300" />
              <span className="font-bold">New Year Special</span>
            </div>
            {isExpanded ? (
              <div className="grid grid-cols-4 gap-2 text-white bg-clip-text drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
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
                <span className="text-xl lg:text-3xl font-bold text-gradient bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,215,0,0.4)]">
                  Flat 20% OFF
                </span>
                <div className="grid grid-cols-4 gap-1 mt-1 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
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
            className="text-white/80 hover:text-white transition-colors ml-3 relative z-10"
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
          <div className="px-4 pb-4 relative z-10">
            <div className="text-center mb-3">
              <div className="text-2xl lg:text-3xl font-bold text-gradient bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-1 drop-shadow-[0_2px_8px_rgba(255,215,0,0.5)]">
                Flat 20% OFF
              </div>
              <p className="text-sm lg:text-lg text-white/90 font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                Ring in 2026 with a celebration discount on select memberships when you book this week.
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
              className="group relative w-full backdrop-blur-sm text-white text-sm lg:text-xl font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 border border-white/20"
            >
              <span>🎉 Claim Offer</span>
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewYearOffer; 