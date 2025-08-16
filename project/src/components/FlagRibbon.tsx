import React from 'react';

type FlagRibbonProps = {
  className?: string;
};

const FlagRibbon: React.FC<FlagRibbonProps> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 600 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="fr_shadow" x="-20%" y="-30%" width="160%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.25" />
          </filter>
          {/* Inner ribbon shape used for clipping the flag */}
          <clipPath id="fr_inner_clip">
            <path d="M20,84 H476 L528,150 L476,216 H20 C0,216 0,202.5 0,150 C0,97.5 0,84 20,84 Z" />
          </clipPath>
        </defs>

        {/* Flag stripes clipped to the inner ribbon area */}
        <g clipPath="url(#fr_inner_clip)" filter="url(#fr_shadow)">
          {/* Inner height now effectively 132 (scaled). Each stripe ~ 44 */}
          <rect x="0" y="84" width="528" height="44" fill="#FF9933" />
          <rect x="0" y="128" width="528" height="44" fill="#FFFFFF" />
          <rect x="0" y="172" width="528" height="44" fill="#138808" />

          {/* Ashoka Chakra (stylized) */}
          <g transform="translate(264,150)">
            <circle r="18" fill="none" stroke="#000080" strokeWidth="3" />
            {/* 24 spokes */}
            {Array.from({ length: 24 }).map((_, i) => (
              <line
                key={i}
                x1="0"
                y1="0"
                x2="0"
                y2="-18"
                stroke="#000080"
                strokeWidth="1.5"
                transform={`rotate(${(360 / 24) * i})`}
              />
            ))}
            <circle r="3" fill="#000080" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default FlagRibbon;


