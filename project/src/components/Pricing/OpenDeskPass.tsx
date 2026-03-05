import React from 'react';
import { Check } from 'lucide-react';

const OpenDeskPass: React.FC = () => {
  return (
    <div className="bg-blank-slate flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200 shadow-md h-full">
      <div className="p-6 flex flex-col flex-1">
        <h4 className="text-3xl font-bold text-focus-black mb-4 font-darker">Open Desk Pass</h4>
        
        <div className="mb-6 flex items-baseline">
          <span className="text-[2.75rem] font-bold text-focus-black font-darker">₹5999</span>
          <span className="text-focus-black text-xl font-semibold ml-2">/month</span>
        </div>
        
        <ul className="space-y-4 mb-8 flex-1">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-legacy-green mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-focus-black font-semibold text-[1.05rem] lg:text-xl">Hot desk</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-legacy-green mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-focus-black font-semibold text-[1.05rem] lg:text-xl">30 days of access</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-legacy-green mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-focus-black font-semibold text-[1.05rem] lg:text-xl">Upto 8 hours of usage per day</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-legacy-green mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-focus-black font-semibold text-[1.05rem] lg:text-xl">Open environment</span>
          </li>
        </ul>
        
        {/* <a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const contactForm = document.querySelector('#contact');
            const planSelect = document.querySelector('#plan') as HTMLSelectElement;
            
            if (contactForm && planSelect) {
              const options = Array.from(planSelect.options);
              const optionToSelect = options.find(option => option.text === 'Open Desk Pass');
              if (optionToSelect) {
                planSelect.value = optionToSelect.value;
              }
              
              contactForm.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="block w-full text-center py-3 px-4 rounded-md font-semibold transition-colors duration-300 bg-blank-slate border-2 border-founders-fire hover:bg-founders-fire hover:text-blank-slate text-focus-black text-lg lg:text-xl mt-auto"
        >
          Get Started
        </a> */}
      </div>
    </div>
  );
};

export default OpenDeskPass; 