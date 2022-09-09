/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      alkali: '#eace5d',
      alkaline: '#f1f165',
      lanthanoid: '#e8d19c',
      actinoid: '#f5ccda',
      transition: '#fac5b7',
      poor: '#acdfec',
      metalloid: '#9ee5d4',
      nonmetal: '#8ced8c',
      noble: '#e5bde5',
      solid: '#000',
      liquid: '#00D',
      gas: '#900',
      unknown: '#676',
    },
    extend: {
      gridTemplateColumns: {
        9: 'repeat(9, 40px)',
        18: 'repeat(18, 50px)',
      },
      gridTemplateRows: {
        5: 'repeat(5, 32px)',
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
      },
      gridColumnStart: {
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
      },
      gridRowStart: {
        10: '10',
        11: '11',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
      },
      gridAutoRows: {
        50: '50px',
      },
    },
  },
  plugins: [],
};
