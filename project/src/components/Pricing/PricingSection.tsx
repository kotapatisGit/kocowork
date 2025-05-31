import React from 'react';
import WorkspacePricing from './WorkspacePricing';
import VirtualPricing from './VirtualPricing';

const PricingSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Flexible Plans for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of workspace options and virtual office plans designed to support businesses of all sizes.
          </p>
        </div>

        <WorkspacePricing />
        <VirtualPricing />
      </div>
    </div>
  );
};

export default PricingSection;