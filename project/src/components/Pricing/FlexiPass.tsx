import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface PlanOption {
  months: number;
  price: number;
}

const FlexiPass: React.FC = () => {
  const planOptions: PlanOption[] = [
    { months: 3, price: 10999 },
    { months: 6, price: 11999 },
    { months: 9, price: 12999 },
    { months: 12, price: 13999 },
  ];

  const [selectedPlan, setSelectedPlan] = useState<PlanOption>(planOptions[0]);

  return (
    <div className="bg-blank-slate rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border-2 border-founders-fire shadow-lg transform hover:-translate-y-1">
      <div className="bg-founders-fire text-blank-slate text-center py-1 px-4 text-sm font-medium">
        Most Popular
      </div>
      
      <div className="p-6">
        <h4 className="text-3xl font-bold text-focus-black mb-4 font-darker">Flexi Pass</h4>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-focus-black font-darker">₹{selectedPlan.price}</span>
          <span className="text-focus-black ml-1 text-xl font-semibold">/package</span>
        </div>

        <div className="mb-6">
          <p className="text-focus-black font-semibold mb-3">Duration: {selectedPlan.months} Months</p>
          <div className="flex justify-between gap-2">
            {planOptions.map((option) => (
              <button
                key={option.months}
                onClick={() => setSelectedPlan(option)}
                className={`flex-1 py-2 px-3 rounded-md font-semibold transition-all duration-300 ${
                  selectedPlan.months === option.months
                    ? 'bg-founders-fire text-blank-slate'
                    : 'bg-blank-slate border-2 border-founders-fire text-focus-black hover:bg-founders-fire hover:text-blank-slate'
                }`}
              >
                {option.months}m
              </button>
            ))}
          </div>
        </div>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-legacy-green mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-focus-black font-semibold text-[1.05rem] lg:text-xl">Hot Desk</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-legacy-green mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-focus-black font-semibold text-[1.05rem] lg:text-xl">30 Days of Access</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-legacy-green mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-focus-black font-semibold text-[1.05rem] lg:text-xl">Upto 8 hours of Usage per day</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-legacy-green mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-focus-black font-semibold text-[1.05rem] lg:text-xl">Valid for {selectedPlan.months} months</span>
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
              const optionToSelect = options.find(option => 
                option.text === `Flexi Pass (${selectedPlan.months} months)`
              );
              if (optionToSelect) {
                planSelect.value = optionToSelect.value;
              }
              
              contactForm.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="block w-full text-center py-2 px-4 rounded-md font-medium transition-colors duration-300 bg-founders-fire hover:bg-opacity-90 text-blank-slate text-lg lg:text-xl"
        >
          Get Started
        </a> */}
      </div>
    </div>
  );
};

export default FlexiPass; 