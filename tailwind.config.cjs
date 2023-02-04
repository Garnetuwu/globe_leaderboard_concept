/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'selected': '#EEBA2B',
        'green': '#53E590',
        'break': '#363636',
        'primary-background': '#040D16',
        'card-background': '#161920',
        'caption': '#93A2AE'
      },
      text: {
        'xs': '12px',
        'sm': '14px',
        'md': '22px',
        'lg': '30px',
        'xl': '40px'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
