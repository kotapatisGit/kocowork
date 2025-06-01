import React, { useState } from 'react';
import MonthlyPass from './MonthlyPass';
import FlexiPass from './FlexiPass';
import OpenDeskPass from './OpenDeskPass';
import DayPass from './DayPass';
import HalfDayPass from './HalfDayPass';
import MeetingRooms from './MeetingRooms';
import PrivateCabins from './PrivateCabins';
import KOCOVirtual from './KOCOVirtual';

const PricingSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'workspace' | 'virtual'>('workspace');

  return (
    <div className="bg-focus-black py-20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-blank-slate mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-2xl font-semibold text-blank-slate max-w-4xl mx-auto">
            Flexible workspace and virtual office solutions designed to support your business growth.
          </p>
        </div>

        {/* Category Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-blank-slate border border-gray-200 rounded-lg shadow-sm">
            <button
              onClick={() => setActiveCategory('workspace')}
              className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 ${
                activeCategory === 'workspace' 
                  ? 'bg-founders-fire font-semibold text-xl text-white shadow-sm' 
                  : 'text-focus-black hover:text-gray-900'
              }`}
            >
              Workspace Plans
            </button>
            <button
              onClick={() => setActiveCategory('virtual')}
              className={`px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 ${
                activeCategory === 'virtual' 
                  ? 'bg-founders-fire font-semibold text-xl text-white shadow-sm' 
                  : 'text-focus-black hover:text-gray-900'
              }`}
            >
              Virtual Office
            </button>
          </div>
        </div>

        {/* Workspace Plans */}
        {activeCategory === 'workspace' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <DayPass />
              <HalfDayPass />
              <MeetingRooms />
              <MonthlyPass />
              <FlexiPass />
              <OpenDeskPass />
            </div>

            {/* Private Cabins - Large Component */}
            <PrivateCabins />
          </div>
        )}

        {/* Virtual Plans */}
        {activeCategory === 'virtual' && (
          <div>
            <KOCOVirtual />
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingSection;