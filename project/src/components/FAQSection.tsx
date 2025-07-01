import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What are KOCO\'s operating hours?",
      answer: "KOCO is open 24/7, all year round, for members — whether you\'re an early riser or a night owl."
    },
    {
      id: 2,
      question: "What exactly is a Flexi Pass?",
      answer: "The Flexi Pass gives you 30 days of hot desk access, usable over 3, 6, 9, or 12 months — your schedule, your way."
    },
    {
      id: 3,
      question: "Is parking available?",
      answer: "Yes, we offer complimentary parking for both two-wheelers and four-wheelers."
    },
    {
      id: 4,
      question: "Can I walk in without booking?",
      answer: "Walk-ins are welcome, but we recommend booking in advance to ensure availability."
    },
    {
      id: 5,
      question: "How do I book a space?",
      answer: "You can book via our website or by contacting our team directly."
    },
    {
      id: 6,
      question: "Is there a minimum commitment for monthly plans?",
      answer: "No — all our plans are flexible with no long-term lock-in."
    },
    {
      id: 7,
      question: "Do you offer facility tours?",
      answer: "Yes. Reach out to us anytime to schedule a walkthrough."
    },
    {
      id: 8,
      question: "Is storage available?",
      answer: "Yes, personal lockers are available with select plans or as an add-on."
    },
    {
      id: 9,
      question: "Can I bring food or drinks?",
      answer: "Yes. Outside food is allowed but should be consumed in the cafeteria. On-site food outlets are also available."
    },
    {
      id: 10,
      question: "What payment methods are accepted?",
      answer: "We accept UPI, credit/debit cards, bank transfers, and provide GST invoices for businesses."
    },
    {
      id: 11,
      question: "Is GST included in the pricing?",
      answer: "No — GST is excluded from listed prices and will be added at checkout as applicable."
    },
    {
      id: 12,
      question: "Does KOCO host events or networking sessions?",
      answer: "Yes. We regularly host events, founder meetups, and community mixers to help you connect and grow."
    },
    {
      id: 13,
      question: "Are KOCO plans and pricing flexible?",
      answer: "Yes, our plans are highly flexible and can be customized as per your requirements."
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120
      }
    }
  };

  return (
    <div className="relative py-16 bg-blank-slate overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-16 left-8 w-24 h-24 bg-founders-fire/8 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
          className="absolute top-32 right-16 w-28 h-28 bg-signal-blue/8 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear",
            delay: 8
          }}
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-core-stack/8 rounded-full blur-xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(#FF4D3C 1px, transparent 1px),
              linear-gradient(90deg, #FF4D3C 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -8 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            className="inline-block mb-6"
          >
          </motion.div>
          
          {/* Main Title with Gradient */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-focus-black via-founders-fire to-focus-black bg-clip-text text-transparent">
              Got Questions?
            </span>
            <br />
            <span className="text-founders-fire">We've Got Answers</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg text-focus-black font-semibold max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to know about KOCOwork amenities, plans, and more.
          </motion.p>
        </motion.div>

        {/* FAQ Grid with Masonry-style Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="group"
            >
              <div className="relative">
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blank-slate via-cream to-blank-slate rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-sm scale-105"></div>
                
                {/* Main Card */}
                <motion.div
                  whileHover={{ 
                    y: -4,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className={`relative md:w-[70%] mx-auto bg-white/90 backdrop-blur-sm rounded-2xl border border-blank-slate/60 shadow-md overflow-hidden transition-all duration-400 ${
                    openFAQ === faq.id 
                      ? 'shadow-xl border-founders-fire/40 bg-white' 
                      : 'hover:shadow-lg hover:border-founders-fire/30'
                  }`}
                >
                  {/* Animated Border */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r transition-all duration-400 ${
                    openFAQ === faq.id 
                      ? 'from-founders-fire via-signal-blue to-core-stack opacity-100' 
                      : 'from-transparent to-transparent opacity-0 group-hover:opacity-60 group-hover:from-founders-fire/60 group-hover:to-signal-blue/60'
                  }`} />
                  
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-5 text-left focus:outline-none focus:ring-3 focus:ring-founders-fire/25 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        {/* Question Number with Gradient */}
                        <div className="flex-shrink-0">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm transition-all duration-400 ${
                            openFAQ === faq.id 
                              ? 'bg-gradient-to-br from-signal-blue to-signal-blue scale-105' 
                              : 'bg-signal-blue group-hover:from-founders-fire/80 group-hover:to-founders-fire-dark/80'
                          }`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                        
                        {/* Question Text */}
                        <h3 className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                          openFAQ === faq.id 
                            ? 'text-signal-blue' 
                            : 'text-focus-black group-hover:text-signal-blue'
                        }`}>
                          {faq.question}
                        </h3>
                      </div>
                      
                      {/* Animated Chevron */}
                      <motion.div
                        animate={{ 
                          rotate: openFAQ === faq.id ? 180 : 0,
                          scale: openFAQ === faq.id ? 1.05 : 1
                        }}
                        transition={{ duration: 0.3, type: "spring" }}
                        className="flex-shrink-0"
                      >
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                          openFAQ === faq.id 
                            ? 'bg-founders-fire text-white' 
                            : 'bg-blank-slate text-focus-black/70 group-hover:bg-founders-fire/10 group-hover:text-founders-fire'
                        }`}>
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </motion.div>
                    </div>
                  </button>

                  {/* Answer with Smooth Animation */}
                  <AnimatePresence>
                    {openFAQ === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: { 
                            height: { duration: 0.3 },
                            opacity: { duration: 0.25, delay: 0.05 }
                          }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { 
                            height: { duration: 0.25 },
                            opacity: { duration: 0.15 }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <div className="ml-14">
                            {/* Decorative Line */}
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              className="h-px bg-gradient-to-r from-founders-fire/40 to-transparent mb-4"
                            />
                            
                            {/* Answer Text */}
                            <motion.p 
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                              className="text-base text-focus-black/80 font-semibold leading-relaxed"
                            >
                              {faq.answer}
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection; 