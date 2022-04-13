module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      './layouts/**/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['"open sans"', 'sans-serif'],
        oswald: ['oswald', 'sans-serif'],
        'open-sans-condensed': ['"open sans condensed"', 'sans-serif']
      },
      colors: {
        'blue-light': '#2B67C1',
        blue: '#247CE1',
        'blue-dark': '#054B85',
        green: '#008B6F',
        'green-dark': '#016E81',
        'grey-dark': '#003045',
        white: '#FFFFFF',
        'white-2': '#F1F1F1',
        'white-3': '#FBF9F8',
        'white-4': '#D1D1D1',
        red: '#E34065',
        orange: '#FFB341',
        yellow: '#FFEC41',
        black: '#0E1223',
        'blue-picker': '#013246'
      },
      backgroundImage: {
        'banner-home-desktop': 'url(/images/home/banner-home-desktop.png)'
      },
      screens: {
        xs: '320px',
        // => @media (min-width: 320px) { ... }

        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1366px',
        // => @media (min-width: 1366px) { ... }

        '2xl': '1536px'
        // => @media (min-width: 1536px) { ... }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
