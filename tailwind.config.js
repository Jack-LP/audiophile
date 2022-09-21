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
      },
      fontFmily: {
        body: ['Manrope'],
      },
    },
  },
  plugins: [],
};
