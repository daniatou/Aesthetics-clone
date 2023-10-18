/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans'],
      }, 
      colors: {
        "primary-color" : "var(--primary-color)",
        "secondary-color" : "var(--secondary-color)"
      }
    },
  },
  plugins: [],
}

