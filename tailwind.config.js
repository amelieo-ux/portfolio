const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#4DB6AD',
          '90': '#71c5bd',
          '80': '#94d3ce',
          '70': '#b8e2de',
          '110': "#46aba3",
          '120': "#419f97",
          '130': "#3c938c",
        },
        secondary: {
          '100': '#4C05746',
          '90': '#cd796b',
          '80': '#d99a90',
          '70': '#e6bcb5',
          '110': "#b64f3e",
          '120': "#a9493a",
          '130': "#9c4435",
        },
      },
      fontFamily: {
        sans: [
          'Raleway',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    }
  }
    variants: { // all the following default to ['responsive']
    mixBlendMode: ['responsive'],
    backgroundBlendMode: ['responsive'],
    isolation: ['responsive'],
  },

  plugins: [
    require('tailwindcss-blend-mode'), // no options to configure
  ],

}
