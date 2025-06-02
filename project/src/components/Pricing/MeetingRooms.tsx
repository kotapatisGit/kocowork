import React, { useState } from 'react';
import { Check } from 'lucide-react';

type RoomCapacity = 4 | 6 | 8 | 10;

const MeetingRooms: React.FC = () => {
  const [capacity, setCapacity] = useState<RoomCapacity>(4);
  
  const capacityOptions: RoomCapacity[] = [4, 6, 8, 10];
  const pricePerHour: Record<RoomCapacity, number> = {
    4: 499,
    6: 749,
    8: 999,
    10: 1249
  };

  return (
    <div className="bg-blank-slate flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 shadow-md">
      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-3xl font-bold text-focus-black mb-4 font-darker">Meeting Rooms</h4>
        
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-[2.75rem] font-bold text-focus-black font-darker">₹{pricePerHour[capacity]}</span>
            <span className="text-focus-black text-xl font-semibold">/hour</span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-focus-black font-semibold mb-3">Room Capacity: {capacity} People</p>
          <div className="flex justify-between gap-2">
            {capacityOptions.map((option) => (
              <button
                key={option}
                onClick={() => setCapacity(option)}
                className={`flex-1 py-2 px-3 rounded-md font-semibold transition-all duration-300 ${
                  capacity === option
                    ? 'bg-founders-fire text-blank-slate'
                    : 'bg-blank-slate border-2 border-founders-fire text-focus-black hover:bg-founders-fire hover:text-blank-slate'
                }`}
              >
                {option} Pax
              </button>
            ))}
          </div>
        </div>
        
        <ul className="space-y-4 mb-8 flex-1">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-legacy-green mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-focus-black font-semibold text-[1.05rem]">Professional setup with 65 inch OLED display</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-legacy-green mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-focus-black font-semibold text-[1.05rem]">Whiteboard & flipchart included</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-legacy-green mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-focus-black font-semibold text-[1.05rem]">Complimentary refreshments</span>
          </li>
        </ul>
        
        <a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const contactForm = document.querySelector('#contact');
            const planSelect = document.querySelector('#plan') as HTMLSelectElement;
            
            if (contactForm && planSelect) {
              const options = Array.from(planSelect.options);
              const optionToSelect = options.find(option => option.text === 'Meeting Rooms');
              if (optionToSelect) {
                planSelect.value = optionToSelect.value;
              }
              
              contactForm.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="block w-full text-center py-3 px-4 rounded-md font-semibold transition-colors duration-300 bg-blank-slate border-2 border-founders-fire hover:bg-founders-fire hover:text-blank-slate text-focus-black text-lg mt-auto"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default MeetingRooms; 