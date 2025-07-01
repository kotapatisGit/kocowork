import React, { useEffect, useRef } from 'react';
import { animate, createScope, onScroll } from 'animejs';

const FeaturesSection: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scope = useRef<any>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scope.current = createScope({ root: rootRef.current }).add(() => {
      // Initial setup
      animate('.features-container', {
        translateY: '100px',
        scale: 0.9,
        duration: 0
      });

      // Hide content initially
      animate('.features-content', {
        translateY: 50,
        scale: 0.95,
        duration: 0
      });

      // Scroll-triggered animations
      animate('.features-container', {
        translateY: '0px',
        scale: 1,
        duration: 1200,
        ease: 'out(1)',
        autoplay: onScroll({
          target: rootRef.current!,
          sync: true
        })
      });

      // Content animation triggered by scroll
      animate('.features-content', {
        translateY: 0,
        scale: 1,
        duration: 1000,
        ease: 'out(3)',
        delay: 200,
        autoplay: onScroll({
          target: rootRef.current!,
          sync: true
        })
      });
    });

    return () => {
      scope.current?.revert();
    };
  }, []);

  const leftFeatures = [
    '24/7 Secure Access',
    'Free Parking (2W & 4W)',
    'Quiet Work Zones',
    'High-Speed Wi-Fi & Ethernet',
    'Smart Meeting Rooms',
    'Personal Lockers',
    'Complimentary Tea & Coffee'
  ];

  const rightFeatures = [
    'Multi-Layer Security',
    '24/7 Air Conditioning',
    'Abundant Natural Light',
    'Enterprise Network Security',
    'Print & Scan Facility',
    'On-Demand IT Support',
    'On-Site Leon\'s and Creamstone'
  ];

  return (
    <div ref={rootRef} className="relative pb-20 bg-blank-slate overflow-hidden">
      {/* Main container with max width and padding */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="features-container relative">
          {/* Background with gradient and subtle pattern */}
          <div className="absolute inset-0 rounded-[2.5rem] bg-founders-fire shadow-2xl overflow-hidden">
          </div>
          
          {/* Content wrapper */}
          <div className="relative z-20 px-8 py-10 sm:px-12 lg:px-16">
            <div className="features-content">
              {/* Title with subtle text shadow */}
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-blank-slate text-center mb-10 tracking-tight leading-none">
                Your KOCO Benefits
              </h2>
              
              {/* Features Grid with improved spacing and hover effects */}
              <div className="grid md:grid-cols-2 gap-x-20 gap-y-10 max-w-6xl px-4 md:px-40">
                {/* Left Column */}
                <div className="space-y-8">
                  {leftFeatures.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 group transition-transform duration-300 hover:translate-x-2 justify-start md:justify-start"
                    >
                      {/* Enhanced Checkmark */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                        <svg className="w-5 h-5 text-blank-slate" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {/* Feature Text with hover effect */}
                      <span className="text-xl md:text-2xl text-blank-slate font-bold tracking-wide group-hover:text-opacity-90 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Right Column */}
                <div className="space-y-8">
                  {rightFeatures.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-4 group transition-transform duration-300 hover:translate-x-2 justify-start md:justify-start"
                    >
                      {/* Enhanced Checkmark */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                        <svg className="w-5 h-5 text-blank-slate" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {/* Feature Text with hover effect */}
                      <span className="text-xl md:text-2xl font-bold text-blank-slate tracking-wide group-hover:text-opacity-90 transition-colors duration-300">
                        {feature}   
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection; 