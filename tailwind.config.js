/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/img/image-hero.jpg')",
        ripplePattern: "url('/img/pattern-circles.svg')",
        zx7Banner: "url('/img/image-speaker-zx7.jpg')",
      },
      fontFmily: {
        sans: 'Manrope, sans-serif',
        mono: 'Space Mono',
      },
      colors: {
        'pale-orange': '#d87c49',
        charcoal: '#191919',
      },
    },
  },
  plugins: [],
};
