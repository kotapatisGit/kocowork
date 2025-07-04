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
          <picture>
            <source srcSet="/images/workspace-image-min.webp" type="image/webp" />
            <img
              src="/images/workspace-image-min.jpeg"
              alt="Office Space"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
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
            className="text-xl md:text-2xl lg:text-3xl opacity-90"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Where innovation meets comfort, and productivity finds its home.
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default FullscreenImageSection; 