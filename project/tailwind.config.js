/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'founders-fire': '#FF4D3C',
        'legacy-green': '#3CB371',
        'focus-black': '#1A1A1A',
        'blank-slate': '#FFFFFF',
        'signal-blue': '#0066FF',
        'core-stack': '#8A2BE2'
      },
      fontFamily: {
        'darker': ['Darker Grotesque', 'sans-serif']
      }
    },
  },
  plugins: [],
};