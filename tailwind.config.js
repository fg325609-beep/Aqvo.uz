/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#991B1B',   // primary deep red
          dark: '#631419',      // header / darker maroon
          darker: '#33090A',    // certificates section bg
          light: '#E5B7B9',     // banner strip pink-red
        },
        accent: {
          DEFAULT: '#EC9E59',   // orange CTA / submit button
          dark: '#D2540B',
        },
      },
      fontFamily: {
        display: ['"Montserrat"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-left': 'marqueeLeft 40s linear infinite',
        'marquee-right': 'marqueeRight 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
