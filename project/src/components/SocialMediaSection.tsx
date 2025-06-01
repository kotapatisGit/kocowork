import React from 'react';

interface SocialMediaButtonProps {
  platform: string;
  text: string;
  icon: React.ReactNode;
  url: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ 
  text, 
  icon, 
  url 
}) => (
  <div className="flex items-center gap-8">
    <button 
      onClick={() => window.open(url, '_blank')}
      className="bg-[#0077B5] rounded-full h-[80px] w-[200px] flex items-center justify-center"
    >
      {icon}
    </button>
    <span className="text-white font-['VT323'] text-[28px] tracking-[0.15em] whitespace-nowrap uppercase">
      {text}
    </span>
  </div>
);

const ScrollingRow: React.FC<{ 
  buttons: SocialMediaButtonProps[], 
  direction: 'left' | 'right',
  speed: string 
}> = ({ buttons, direction, speed }) => {
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div 
        className={`inline-flex gap-32 ${animationClass}`}
        style={{ 
          animationDuration: speed,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite'
        }}
      >
        {/* Duplicate buttons for seamless scrolling */}
        {Array(10).fill(null).map((_, index) => (
          <div key={index} className="inline-flex gap-32">
            {buttons.map((button, buttonIndex) => (
              <SocialMediaButton key={`${index}-${buttonIndex}`} {...button} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const SocialMediaSection: React.FC = () => {
  const socialMediaData = [
    {
      platform: 'LinkedIn',
      text: 'FOLLOW ON',
      icon: (
        <svg viewBox="0 0 24 24" className="w-10 h-10">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      url: 'https://linkedin.com'
    }
  ];

  return (
    <>
      {/* Add custom CSS animations and fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
      `}</style>

      <section className="py-12 bg-black overflow-hidden">
        <ScrollingRow
          buttons={socialMediaData}
          direction="left"
          speed="20s"
        />
      </section>
    </>
  );
};

export default SocialMediaSection; 