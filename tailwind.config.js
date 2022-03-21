module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'purple-bright': '#7C5DFA',
      'purple-light': '#9277FF',
      'blue-very-dark': '#1E2139',
      'blue-dark': '#252945',
      'blue-very-light': '#DFE3FA',
      'blue-gray': '#888EB0',
      'blue-blue-gray': '#7E88C3',
      'black-tint': '#0C0E16',
      'red-bright': '#EC5757',
      'red-salmon': '#9277FF',
      'white-light': '#F8F8FB',
      'blue-black': '#141625',
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
