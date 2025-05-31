import React, { useState } from 'react';
import PricingCard from './PricingCard';
import { Check } from 'lucide-react';

const WorkspacePricing: React.FC = () => {
  const [duration, setDuration] = useState<'monthly' | 'yearly'>('monthly');

  const workspaceOptions = [
    {
      name: 'Hot Desk',
      monthlyPrice: 199,
      yearlyPrice: 169,
      features: [
        'Access during business hours',
        'Shared workspace',
        'High-speed internet',
        'Access to common areas',
        'Bookable meeting rooms (2 hrs/month)',
      ],
      popular: false,
    },
    {
      name: 'Dedicated Desk',
      monthlyPrice: 299,
      yearlyPrice: 249,
      features: [
        'Access 24/7',
        'Your own dedicated desk',
        'High-speed internet',
        'Storage locker',
        'Bookable meeting rooms (5 hrs/month)',
        'Printing credits',
      ],
      popular: true,
    },
    {
      name: 'Private Office (1-2 People)',
      monthlyPrice: 599,
      yearlyPrice: 499,
      features: [
        'Access 24/7',
        'Private lockable office',
        'High-speed internet',
        'Dedicated phone line',
        'Bookable meeting rooms (10 hrs/month)',
        'Business address',
      ],
      popular: false,
    },
    {
      name: 'Private Office (3-4 People)',
      monthlyPrice: 999,
      yearlyPrice: 849,
      features: [
        'Access 24/7',
        'Private lockable office',
        'High-speed internet',
        'Dedicated phone line',
        'Bookable meeting rooms (15 hrs/month)',
        'Business address',
        'Reception services',
      ],
      popular: false,
    },
    {
      name: 'Private Office (5-8 People)',
      monthlyPrice: 1699,
      yearlyPrice: 1449,
      features: [
        'Access 24/7',
        'Private lockable office',
        'High-speed internet',
        'Dedicated phone line',
        'Bookable meeting rooms (20 hrs/month)',
        'Business address',
        'Reception services',
        'Mail handling',
      ],
      popular: false,
    },
    {
      name: 'Private Office (9-15 People)',
      monthlyPrice: 2899,
      yearlyPrice: 2449,
      features: [
        'Access 24/7',
        'Private lockable office',
        'High-speed internet',
        'Dedicated phone line',
        'Bookable meeting rooms (30 hrs/month)',
        'Business address',
        'Reception services',
        'Mail handling',
        'Dedicated office manager',
      ],
      popular: false,
    },
  ];

  return (
    <section id="workspace" className="py-12">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">Workspace Plans</h3>
      
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {workspaceOptions.map((option, index) => (
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

      <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <h4 className="text-xl font-bold text-blue-900 mb-2">Custom Enterprise Solution</h4>
            <p className="text-gray-700 mb-4">
              Need a tailored solution for your team? We offer custom office setups designed specifically for your business needs.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
              {[
                'Custom office layout',
                'Branded space options',
                'Dedicated support team',
                'Custom technology setup',
                'Flexible terms',
                'Scalable solutions',
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full md:w-auto inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-all duration-300"
            >
              Contact for Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspacePricing;