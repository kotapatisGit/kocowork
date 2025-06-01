/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'founders-fire': '#FF4D3C',
        'founders-fire-dark': '#E63E2E',
        'legacy-green': '#3CB371',
        'focus-black': '#1A1A1A',
        'blank-slate': '#FFF5EE',
        'signal-blue': '#0066FF',
        'core-stack': '#8A2BE2',
        'cream': '#F5F5DC'
      },
      fontFamily: {
        'darker': ['Darker Grotesque', 'sans-serif']
      }
    },
  },
  plugins: [],
};