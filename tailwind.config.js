/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        white: '0 2px 4px 0 rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
};
