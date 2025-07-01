import React, { useState } from 'react';
import { Check } from 'lucide-react';

type Duration = 12 | 24;

const KOCOVirtual: React.FC = () => {
  const [duration, setDuration] = useState<Duration>(12);
  
  const durationOptions: Duration[] = [12, 24];
  const pricePerMonth: Record<Duration, number> = {
    12: 2499,
    24: 1999
  };

  const totalPrice = pricePerMonth[duration] * duration;

  const features = [
    'Premium business address',
    'Company registration support',
    'GST registration support',
    'Secured Mail Handling (Self Pickup)',
  ];

  return (
    <div className="max-w-6xl mx-auto bg-blank-slate rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-8 md:p-12">
        <div className="text-center mb-8">
          <h3 className="text-6xl font-bold text-focus-black mb-6">KOCO Virtual</h3>
          
          <div className="flex flex-col items-center mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-focus-black">₹{pricePerMonth[duration]}</span>
              <span className="text-2xl text-focus-black">/month</span>
            </div>
            <div className="text-xl font-semibold text-focus-black mt-2">
              Total: ₹{totalPrice.toLocaleString()} for {duration} months
            </div>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <p className="text-focus-black font-semibold mb-4">Duration</p>
            <div className="flex justify-center gap-4">
              {durationOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setDuration(option)}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    duration === option
                      ? 'bg-founders-fire text-blank-slate'
                      : 'bg-blank-slate border-2 border-founders-fire text-focus-black hover:bg-founders-fire hover:text-blank-slate'
                  }`}
                >
                  {option} Months
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-1 gap-6">
            {features.slice(0, Math.ceil(features.length / 2)).map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-6 w-6 text-legacy-green mr-3 flex-shrink-0 mt-1" />
                <span className="text-focus-black text-xl font-semibold">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {features.slice(Math.ceil(features.length / 2)).map((feature, index) => (
              <div key={index} className="flex items-start">
                <Check className="h-6 w-6 text-legacy-green mr-3 flex-shrink-0 mt-1" />
                <span className="text-focus-black text-xl font-semibold">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactForm = document.querySelector('#contact');
              const planSelect = document.querySelector('#plan') as HTMLSelectElement;
              
              if (contactForm && planSelect) {
                const options = Array.from(planSelect.options);
                const optionToSelect = options.find(option => option.text === 'KOCO Virtual');
                if (optionToSelect) {
                  planSelect.value = optionToSelect.value;
                }
                
                contactForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-block bg-founders-fire text-blank-slate font-semibold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default KOCOVirtual; 