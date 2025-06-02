import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FullscreenImageSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Placeholder image URL - replace with your actual image later
  const imageUrl = "../../assets/images/workspace-image.jpeg";

  return (
    <motion.section 
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          scale,
          opacity
        }}
      >
        <div className="relative w-full h-full">
          <img
            src={imageUrl}
            alt="Office Space"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center text-white px-6"
        style={{ opacity }}
      >
        <div className="text-center max-w-4xl">
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Experience Modern Workspaces
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl opacity-90"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Where innovation meets comfort, and productivity finds its home.
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </motion.div> */}
    </motion.section>
  );
};

export default FullscreenImageSection; 