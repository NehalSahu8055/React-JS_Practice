/** @type {import('tailwindcss').Config} */
export default {
  content: ['*', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '1.5rem',
        '5xl': '2rem',
        '6xl': '2.5rem',
        '7xl': '3rem',
      },
      boxShadow: {
        folder: '0 10px 30px -15px',
      },
      colors: {
        'dark-navy': '#020c1b',
        // custom color goes here
      },

      fontFamily: {
        calibre: [
          'Calibre',
          'Inter',
          'San Francisco',
          'SF Pro Text',
          'sans-serif',
        ],
        sfmono: [
          'SF Mono',
          'Fira Code',
          'Fira Mono',
          'Roboto Mono',
          'monospace',
        ],
      },
      fontSize: {},
      lineHeight: {
        tighter: '1.1',
      },
      margin: {
        18: '4.1875rem',
      },
      screens: {
        tab: '768px',
        laptop: '1024px',
        desk: '1536px',
      },
      width: {},
      zIndex: {
        ham: '400',
        menu: '350',
        modal: '300',
        navbar: '250',
        main: '200',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
  ],
};
