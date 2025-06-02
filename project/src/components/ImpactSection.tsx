import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedCounter: React.FC<{ value: number; duration: number; suffix?: string }> = ({ value, duration, suffix = '' }) => {
  const [count, setCount] = React.useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration / 16); // 16ms is roughly one frame
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const ImpactSection: React.FC = () => {
  return (
    <section className="py-20 bg-blank-slate">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-4 h-4 bg-founders-fire"></div>
          <h2 className="text-3xl font-bold text-focus-black">the KOCOwork Impact</h2>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-focus-black leading-tight max-w-6xl mx-auto">
            A community built on trust. 
            <span className="text-signal-blue"> Driven by results </span>
            and proven by retention
          </h1>
        </motion.div>

        {/* Statistics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Star Rating */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-[80px] md:text-[100px] font-black leading-none tracking-tighter text-focus-black mb-4" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              <AnimatedCounter value={4.9} duration={2000} suffix="/5" />
            </div>
            <div className="w-full h-2 bg-signal-blue rounded-full mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-black text-focus-black mb-2" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              Star Rating
            </h3>
            <p className="text-lg md:text-xl text-focus-black opacity-80">
              on Google Business
            </p>
          </motion.div>

          {/* Customers Served */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-[80px] md:text-[100px] font-black leading-none tracking-tighter text-focus-black mb-4" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              <AnimatedCounter value={367} duration={2000} suffix="+" />
            </div>
            <div className="w-full h-2 bg-signal-blue rounded-full mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-black text-focus-black mb-2" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              Professionals Served
            </h3>
            <p className="text-lg md:text-xl text-focus-black opacity-80">
              In the last 3 months
            </p>
          </motion.div>

          {/* Repeat Clients */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-[80px] md:text-[100px] font-black leading-none tracking-tighter text-focus-black mb-4" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              <AnimatedCounter value={81} duration={2000} suffix="%" />
            </div>
            <div className="w-full h-2 bg-signal-blue rounded-full mb-6"></div>
            <h3 className="text-2xl md:text-3xl font-black text-focus-black mb-2" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
              Repeat Clients
            </h3>
            <p className="text-lg md:text-xl text-focus-black opacity-80">
              with a great experience
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection; 