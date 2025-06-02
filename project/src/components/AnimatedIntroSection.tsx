import React, { useEffect, useRef } from 'react';
import { animate, createScope, onScroll } from 'animejs';

const AnimatedIntroSection: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const scope = useRef<any>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scope.current = createScope({ root: rootRef.current }).add((scope) => {
      // Initial setup
      animate('.slide-section', {
        translateY: '100px',
        scale: 0.9,
        duration: 0
      });

      // Hide text initially
      animate('.slide-text', {
        translateY: 50,
        scale: 0.95,
        duration: 0
      });

      // Scroll-triggered animations
      animate('.slide-section', {
        translateY: '0px',
        scale: 1,
        duration: 1200,
        ease: 'out(1)',
        autoplay: onScroll({
          target: rootRef.current!,
          sync: true
        })
      });

      // Text animation triggered by scroll
      animate('.slide-text', {
        translateY: 0,
        scale: 1,
        duration: 1000,
        ease: 'out(3)',
        autoplay: onScroll({
          target: rootRef.current!,
          sync: true
        })
      });

      // Hero section scale animation
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        animate(heroSection, {
          scale: [1, 0.8],
          duration: 2000,
          ease: 'out(2)',
          autoplay: onScroll({
            target: rootRef.current!,
            sync: true
          })
        });
      }
    });

    return () => {
      scope.current?.revert();
    };
  }, []);

  return (
    <div 
      ref={rootRef}
      className="relative min-h-[50vh] md:min-h-[70vh] bg-blank-slate" // Added padding to account for navbar
    >
      <div className="slide-section w-full h-[50vh] md:h-full">
        <div className="absolute rounded-3xl inset-0 bg-founders-fire" />
        
        {/* Content */}
        <div className="relative z-40 min-h-[50vh] md:min-h-[70vh] flex items-center px-8">
          <div className="slide-text max-w-6xl">
            <h2 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl text-center flex flex-col items-center justify-center font-bold text-cream leading-tight tracking-tight">
               Your Vision, Deserves a Space {' '}
            </h2>
              <span className="block text-3xl text-cream md:text-5xl lg:text-6xl xl:text-7xl ">
                Flexible offices, 
              </span>
              <span className="block text-3xl text-cream md:text-5xl lg:text-6xl xl:text-7xl ">
               Cowork spaces
              </span>
              <span className="block text-3xl text-cream md:text-5xl lg:text-6xl xl:text-7xl ">
              in Hyderabad
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedIntroSection; 