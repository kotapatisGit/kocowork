import React from 'react';

const ImpactSection: React.FC = () => {
  return (
    <section className="py-20 bg-blank-slate">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-4 h-4 bg-founders-fire"></div>
          <h2 className="text-3xl font-bold text-focus-black">the KOCOwork Impact</h2>
        </div>

        {/* Main Content */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-focus-black leading-tight max-w-6xl mx-auto">
            A community built on trust. 
            <span className="text-blue-500"> Driven by results </span>
            and proven by retention
          </h1>
        </div>

        {/* Statistics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 ">
          {/* Star Rating */}
          <div className="text-center relative">
            <div className="text-[130px] md:text-[160px] font-black leading-none tracking-tighter bg-black bg-clip-text text-transparent" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              4.9/5
            </div>
            <div className="w-full h-1.5 bg-gradient-to-r from-red-500 via-founders-fire to-red-400 mb-8"></div>
            <h3 className="text-3xl md:text-4xl font-black text-focus-black mb-3" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              Star Rating
            </h3>
            <p className="text-xl md:text-2xl font-bold text-focus-black opacity-80">
              on Google Business.
            </p>
          </div>

          {/* Customers Served */}
          <div className="text-center relative">
            <div className="text-[130px] md:text-[160px] font-black leading-none tracking-tighter bg-black bg-clip-text text-transparent" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              367+
            </div>
            <div className="w-full h-1.5 bg-gradient-to-r from-red-500 via-founders-fire to-red-400 mb-8"></div>
            <h3 className="text-3xl md:text-4xl font-black text-focus-black mb-3" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              Customers Served
            </h3>
            <p className="text-xl md:text-2xl font-bold text-focus-black opacity-80">
              in Hyderabad in the last 3 months.
            </p>
          </div>

          {/* Repeat Clients */}
          <div className="text-center relative">
            <div className="text-[130px] md:text-[160px] font-black leading-none tracking-tighter bg-black bg-clip-text text-transparent" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              78%
            </div>
            <div className="w-full h-1.5 bg-gradient-to-r from-red-500 via-founders-fire to-red-400 mb-8"></div>
            <h3 className="text-3xl md:text-4xl font-black text-focus-black mb-3" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              Repeat Clients
            </h3>
            <p className="text-xl md:text-2xl font-bold text-focus-black opacity-80">
              with a great experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection; 