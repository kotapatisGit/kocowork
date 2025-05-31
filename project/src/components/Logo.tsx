import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  width = 40, 
  height = 40, 
  color = 'currentColor'
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 5000 5000" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M1866.38 3916L1866.01 3916.36L770.003 2820.35L770 2820.35H770.006L1687.44 1902.91L1956.08 1902.89L1956.1 1902.91H1956.14L1956.12 1902.93L2499.85 2446.73L3043.58 1902.93L3043.56 1902.91H3043.6L3043.62 1902.89L3312.26 1902.91L4229.7 2820.35H4228.26L4229.7 2820.35L3133.69 3916.36L3133.32 3916L1866.38 3916ZM2027 3188L2027.18 3187.83L1893 3053.65L2365.5 2581.09L1821.76 2037.29L1039.05 2820L1944.39 3726L2499 3726V3726L3055.35 3726L3961.01 2820.33L3177.94 2037.29L2634.2 2581.09L3106.7 3053.65L2973.01 3187.35L2972.35 3188L2500 3661L2027 3188ZM2161.67 3053.67L2499.85 2715.45L2838.36 3053.99L2500 3392L2161.67 3053.67Z" fill={color}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M3079.74 1649.5L2500.37 1084L1921 1649.5H2283L2500.37 1438L2717.74 1649.5H3079.74Z" fill={color}/>
      <path d="M1834.11 2640.58L1834.11 2971.74L1502.95 2640.58L1834.11 2640.58Z" fill={color}/>
      <path d="M3165.27 2640.58L3165.27 2971.74L3496.44 2640.58L3165.27 2640.58Z" fill={color}/>
    </svg>
  );
};

export default Logo; 