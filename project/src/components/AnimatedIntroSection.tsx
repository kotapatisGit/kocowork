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
        opacity: 0,
        translateY: '100px',
        duration: 0
      });

      // Hide text initially
      animate('.slide-text', {
        opacity: 0,
        translateY: 50,
        scale: 0.95,
        duration: 0
      });

      // Scroll-triggered animations
      animate('.slide-section', {
        opacity: 1,
        translateY: '0px',
        duration: 1200,
        ease: 'out(4)',
        autoplay: onScroll({
          target: rootRef.current!,
          sync: true
        })
      });

      // Text animation triggered by scroll
      animate('.slide-text', {
        opacity: 1,
        translateY: 0,
        scale: 1,
        duration: 1000,
        ease: 'out(3)',
        autoplay: onScroll({
          target: rootRef.current!,
          sync: true
        })
      });

      // Hero section fade out animation
      const heroSection = document.querySelector('.hero-section');
      if (heroSection) {
        animate(heroSection, {
        //   opacity: [1, 0.9],
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
      className="relative min-h-screen bg-founders-fire py-20" // Added padding to account for navbar
    >
      <div className="slide-section w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800" />
        
        {/* Content */}
        <div className="relative z-40 min-h-screen flex items-center px-8">
          <div className="slide-text max-w-6xl">
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream leading-tight tracking-tight">
              Flexible shared office{' '}
              <span className="block text-cream">and coworking space</span>
              <span className="block text-cream">in Hyderabad</span>
              <span className="block text-3xl text-cream md:text-5xl lg:text-6xl xl:text-7xl ">
                near you.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedIntroSection; 