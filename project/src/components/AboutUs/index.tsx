import React, { useRef, useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import VisionSection from './VisionSection';
import DifferentiatorsSection from './DifferentiatorsSection';
import StorySection from './StorySection';
import FounderSection from './FounderSection';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    vision: false,
    differentiators: false,
    story: false,
    founder: false
  });

  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    vision: useRef<HTMLDivElement>(null),
    differentiators: useRef<HTMLDivElement>(null),
    story: useRef<HTMLDivElement>(null),
    founder: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    // Check if this is the first visit
    const hasVisitedAbout = localStorage.getItem('hasVisitedAbout');
    
    // If it's not the first visit, immediately show all sections
    if (hasVisitedAbout) {
      setIsVisible({
        hero: true,
        vision: true,
        differentiators: true,
        story: true,
        founder: true
      });
      return;
    }

    // For first visit, set up intersection observers and mark as visited
    localStorage.setItem('hasVisitedAbout', 'true');
    
    const observers = Object.entries(sectionRefs).map(([key, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section className="min-h-screen bg-blank-slate">
      <div className="bg-blank-slate">
        <div ref={sectionRefs.founder}>
          <FounderSection isVisible={isVisible.founder} />
        </div>
        <div ref={sectionRefs.hero}>
          <HeroSection isVisible={isVisible.hero} />
        </div>
      </div>

      <div ref={sectionRefs.vision}>
        <VisionSection isVisible={isVisible.vision} />
      </div>
{/* 
      <div ref={sectionRefs.differentiators}>
        <DifferentiatorsSection isVisible={isVisible.differentiators} />
      </div> */}

      <div ref={sectionRefs.story}>
        <StorySection isVisible={isVisible.story} />
      </div>

    </section>
  );
};

export default AboutUs; 