import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToWorkspace = () => {
    const element = document.querySelector('#workspace');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.pexels.com/photos/7147442/pexels-photo-7147442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}
    >
      <div className="absolute inset-0 bg-focus-black bg-opacity-50"></div>
      
      <div className={`container mx-auto px-4 z-10 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blank-slate mb-6 leading-tight font-darker">
          Where Great Work Happens
        </h1>
        <p className="text-xl md:text-2xl text-blank-slate mb-8 max-w-3xl mx-auto font-darker">
          Flexible workspaces designed for productivity, collaboration, and growth.
          Join our community of entrepreneurs, freelancers, and innovators.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={scrollToWorkspace}
            className="bg-founders-fire hover:bg-opacity-90 text-blank-slate font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Explore Workspaces
          </button>
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-transparent border-2 border-blank-slate text-blank-slate font-medium py-3 px-8 rounded-md hover:bg-blank-slate hover:text-focus-black transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToWorkspace}
          className="text-blank-slate p-2 rounded-full"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;