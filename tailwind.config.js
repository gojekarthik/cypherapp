/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#E6E9F3',    // Your custom primary color
        secondary: '#6767A4',  // Your custom secondary color
        customblack: '#080809',  // Your custom red color
      }
    },
  },
  plugins: [],
}

