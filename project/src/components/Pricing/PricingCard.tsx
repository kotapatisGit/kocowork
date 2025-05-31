import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: number;
  duration: 'monthly' | 'yearly';
  features: string[];
  popular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  name, 
  price, 
  duration, 
  features,
  popular = false
}) => {
  return (
    <div 
      className={`bg-blank-slate rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
        popular 
          ? 'border-2 border-founders-fire shadow-lg transform hover:-translate-y-1' 
          : 'border border-gray-200 shadow-md'
      }`}
    >
      {popular && (
        <div className="bg-founders-fire text-blank-slate text-center py-1 px-4 text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className="p-6">
        <h4 className="text-xl font-bold text-focus-black mb-4 font-darker">{name}</h4>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-focus-black font-darker">${price}</span>
          <span className="text-focus-black ml-1">/{duration === 'monthly' ? 'mo' : 'yr'}</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-legacy-green mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-focus-black">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            const contactForm = document.querySelector('#contact');
            const planSelect = document.querySelector('#plan') as HTMLSelectElement;
            
            if (contactForm && planSelect) {
              const options = Array.from(planSelect.options);
              const optionToSelect = options.find(option => option.text === name);
              if (optionToSelect) {
                planSelect.value = optionToSelect.value;
              }
              
              contactForm.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className={`block w-full text-center py-2 px-4 rounded-md font-medium transition-colors duration-300 ${
            popular 
              ? 'bg-founders-fire hover:bg-opacity-90 text-blank-slate' 
              : 'bg-focus-black bg-opacity-5 hover:bg-opacity-10 text-focus-black'
          }`}
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default PricingCard;