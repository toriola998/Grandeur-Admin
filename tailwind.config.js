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
        'bright-green': '#34A853',
        'light-green': '#f4fdfa',
        'light-green-2': '#E0FBF1',
        'dark-grey': '#333333',
        'grey': '#D9D9D9',
        'grey-1': '#737373',
        'grey-2': '#EEEEEE',
        'grey-3': '#d8d8d8',
        'white': '#FFFFFF',
        'light-grey': '#FAFAFA',
        'red': '#FF3939',
        'red-2': '#DB353A',
        'yellow': '#EEFF08'
      }
    },
  },
  plugins: [],
}