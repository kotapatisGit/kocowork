import React, { useState } from 'react';
import PricingCard from './PricingCard';

const VirtualPricing: React.FC = () => {
  const [duration, setDuration] = useState<'monthly' | 'yearly'>('monthly');

  const virtualOptions = [
    {
      name: 'Virtual Office Basic',
      monthlyPrice: 79,
      yearlyPrice: 67,
      features: [
        'Professional business address',
        'Mail handling & forwarding',
        'Local phone number',
        'Call answering service',
        'Access to meeting rooms (2 hrs/month)',
      ],
      popular: true,
    },
    {
      name: 'Virtual Office Pro',
      monthlyPrice: 129,
      yearlyPrice: 109,
      features: [
        'Professional business address',
        'Mail handling & forwarding',
        'Local phone number',
        'Call answering & message service',
        'Access to meeting rooms (5 hrs/month)',
        'Access to day office (2 days/month)',
        'Business lounge access',
      ],
      popular: false,
    },
  ];

  return (
    <section id="virtual" className="py-12">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">Virtual Office Plans</h3>
      
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-gray-200 rounded-lg">
          <button
            onClick={() => setDuration('monthly')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              duration === 'monthly' 
                ? 'bg-white text-blue-800 shadow-sm' 
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setDuration('yearly')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition ${
              duration === 'yearly' 
                ? 'bg-white text-blue-800 shadow-sm' 
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Yearly <span className="text-xs text-green-600 font-semibold">Save 15%</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {virtualOptions.map((option, index) => (
          <PricingCard
            key={index}
            name={option.name}
            price={duration === 'monthly' ? option.monthlyPrice : option.yearlyPrice}
            duration={duration}
            features={option.features}
            popular={option.popular}
          />
        ))}
      </div>
    </section>
  );
};

export default VirtualPricing;