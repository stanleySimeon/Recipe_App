const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        red: '#ff0000',
        green: '#00ff00',
        greenDark: '#008000',
        warning: '#ff0000',
        alert: '#F0AF09',
        yellow: '#ffff00',
        skyBlue: '#1950E6',
        blue: '#0000ff',
        blueSecond: '#009BD6',
        magenta: '#ff00ff',
        cyan: '#00ffff',
        black: '#000000',
        gray: '#808080',
        grayDark: '#404040',
        grayLight: '#c0c0c0',
        grayLighter: '#e0e0e0',
        grayLightest: '#f5f5f5',
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#00719c',
        metal: '#565584',
        tahiti: {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
      },
      container: {
        center: true,
        width: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        spacing: {
          sm: '8px',
          md: '16px',
          lg: '24px',
          xl: '48px',
        },
        borderRadius: {
          'none': '0',
          'sm': '0.125rem',
          DEFAULT: '0.25rem',
          DEFAULT: '4px',
          'md': '0.375rem',
          'lg': '0.5rem',
          'full': '9999px',
          'large': '12px',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
