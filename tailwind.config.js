/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pry': '#668151',
        'green': '#315c4f',
        'dark-grey': '#333333',
        'grey': '#D9D9D9',
        'grey-1': '#737373',
        'grey-2': '#EEEEEE',
        'white': '#FFFFFF',
        'light-grey': '#FAFAFA',
        'red': '#FF3939',
      }
    },
  },
  plugins: [],
}