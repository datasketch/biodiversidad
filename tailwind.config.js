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
      colors: {}
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
