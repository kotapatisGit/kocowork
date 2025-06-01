import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#FFF5F5] py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* About Us Title with Square */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-4 h-4 bg-founders-fire rounded-sm" />
          <h2 className="text-3xl font-bold text-focus-black">About Us</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <h1 className="text-6xl pb-10 md:text-7xl font-extrabold bg-gradient-to-r from-[#FF462E] via-[#9333EA] to-[#3B82F6] text-transparent bg-clip-text leading-tight">
              A Hyderabad Story
            </h1>
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold text-focus-black">More Than Desks</h3>
              <p className="text-2xl text-focus-black font-semibold leading-relaxed">
                Our story began with the simple belief that Asia's time is now. We saw this continent, home to 60% of global talent, as a place of incredible untapped potential...
              </p>
              <button className="group relative flex items-center justify-between w-[250px] bg-focus-black hover:text-cream px-4 py-4 rounded-full text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 text-xl text-blank-slate transition-colors duration-500 group-hover:text-blank-slate">Read Our Story</span>
                <div className="absolute right-0 w-14 h-full bg-focus-black flex items-center justify-center rounded-r-full">
                  <ArrowRight className="w-5 h-5 text-cream relative z-10" />
                </div>
                <div className="absolute w-14 h-full bg-founders-fire right-0 group-hover:w-full transition-all duration-500 -z-0" />
              </button>
            </div>
          </div>

          {/* Right Content - Placeholder for Tweet */}
          <div className="w-full md:w-1/2">
            <div className="bg-black rounded-3xl p-8 text-white aspect-[4/3]">
              <p className="text-2xl">Placeholder for Tweet Content</p>
              <p className="text-gray-400 mt-4">This will be replaced with the actual tweet content later</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 