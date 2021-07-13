module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        0: '0ms',
        3000: '3000ms',
      },
      translate: {},
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
        '-4': '-4',
        '-5': '-5',
        '-6': '-6',
        '-7': '-7',
        '-8': '-8',
        '-9': '-9',
        '-10': '-10',
        '-11': '-11',
        '-12': '-12',
        '-13': '-13',
        50: '50',
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        sideDark: '#252525',
        overlay: '#3a3a3a',
        danger: '#e3342f',
        golden: '#ffda00',
      }),
      textColor: (theme) => ({
        ...theme('colors'),
        gradient: 'linear-gradient(45deg, #f3ec78, #af4261)',
      }),
    },
  },
  textColor: (theme) => theme('colors'),
  textColor: {
    gradient: '#f3ec78',
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
