import React from 'react';
import { Building, Users, Lightbulb } from 'lucide-react';

interface DifferentiatorsSectionProps {
  isVisible: boolean;
}

const DifferentiatorsSection: React.FC<DifferentiatorsSectionProps> = ({ isVisible }) => {
  const differentiators = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Private Offices, Not Just Desks",
      description: "Our fully furnished private offices provide the privacy and professionalism your team needs without the constraints of traditional leases."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Built for Collaboration",
      description: "KOCO is more than a workspace; it's a community where ideas are shared and partnerships are forged."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Integrated Services Under One Roof",
      description: "From virtual office solutions to startup support, KOCO offers a complete ecosystem at an affordable price for entrepreneurs, freelancers, and growing teams."
    }
  ];

  return (
    <div 
      className={`py-20 px-4 md:px-6 bg-gradient-to-b from-blank-slate to-cream transition-all duration-1000 delay-400 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-focus-black mb-6">
            What Makes KOCO <span className="text-founders-fire">Different</span>
          </h2>
          <p className="text-xl text-focus-black max-w-3xl mx-auto">
            KOCO is not just a place to work—it's where businesses grow together. Real connections and a shared mission drive us to build a better India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className={`bg-blank-slate rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-founders-fire/20 ${
                isVisible 
                  ? `opacity-100 translate-y-0 delay-${(index + 1) * 200}` 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-founders-fire to-signal-blue rounded-full mb-6 mx-auto text-blank-slate">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-focus-black mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-focus-black/80 leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DifferentiatorsSection; 