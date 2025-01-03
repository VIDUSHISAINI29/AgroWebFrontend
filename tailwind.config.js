/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /tw-translate-x-\[.*\]/, // Safelist dynamic translate-x classes
    },
  ],
  theme: {
    extend: {
      translate: {
        '-224': '-224px', // Add negative translation
        '224': '224px',    // Add positive translation
      },

    },
  },
  plugins: [require('tailwindcss-primeui')],
  prefix: 'tw-'
}

