import React from 'react';
import { Check } from 'lucide-react';

const PrivateCabins: React.FC = () => {
  const privateCabinsFeatures = [
    'Fully customizable office space',
    'Flexible cabin sizes (1 to 20 people)',
    'Complimentary client discussion rooms',
    'Custom furniture and design options',
    '24/7 access to your cabin',
    'Access to all common areas',
    'Reception services',
    'Kitchen, pantry and cafeteria access'
  ];

  const cabinHighlights = [
    {
      title: 'Single Seater',
      description: 'Perfect for freelancers and remote workers'
    },
    {
      title: '2 Seater',
      description: 'Ideal for small teams'
    },
    {
      title: '3-4 Seater',
      description: 'Ideal for startups'
    },
    {
      title: 'Large Teams',
      description: 'Customizable spaces for teams up to 20 people'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-founders-fire rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-8 md:p-12 text-white">
        <div className="text-center mb-8">
          <div className="inline-block bg-white bg-opacity-20 text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            Limited Offices Available
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Private Cabins</h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Fully customizable private office spaces designed around your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <div className="grid grid-cols-1 gap-5">
              {privateCabinsFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-blank-slate mr-3 flex-shrink-0 mt-1" />
                  <span className="text-blank-slate text-xl font-semibold opacity-90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <h4 className="text-xl font-semibold mb-4">Available Configurations:</h4>
              <div className="space-y-6">
                {cabinHighlights.map((cabin, index) => (
                  <div key={index} className="border-b border-white border-opacity-20 last:border-0 pb-4 last:pb-0">
                    <h5 className="text-lg font-semibold mb-2">{cabin.title}</h5>
                    <p className="opacity-90">{cabin.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const contactForm = document.querySelector('#contact');
                  const planSelect = document.querySelector('#plan') as HTMLSelectElement;
                  
                  if (contactForm && planSelect) {
                    const options = Array.from(planSelect.options);
                    const optionToSelect = options.find(option => option.text === 'Private Cabins');
                    if (optionToSelect) {
                      planSelect.value = optionToSelect.value;
                    }
                    
                    contactForm.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-block bg-white text-founders-fire font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Enquire Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateCabins; 