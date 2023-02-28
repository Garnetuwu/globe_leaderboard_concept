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
        'caption': '#93A2AE',
        'dark-black': '#03060D'
      },
      text: {
        'xs': '12px',
        'sm': '14px',
        'md': '22px',
        'lg': '30px',
        'xl': '40px'
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
