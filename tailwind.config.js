/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [],
}

