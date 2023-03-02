/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        source_code: ['Source Code Pro, monospace'],
      },
    },
  },

  plugins: [],
};
