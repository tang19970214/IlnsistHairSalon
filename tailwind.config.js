const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  theme: {
    colors: {
      primary: '#E8A29E',
      gold1: '#97886F',
      gold2: '#DBC181',
      gold3: '#9B9167',

      white: colors.white,
      black: colors.black,
      gray: colors.gray
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
