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
        'command-blue': '#1C75AD',
        xiketic: '#0E1223',
        'eerie-black': '#1A1A1A',
        cultured: '#FBF9F8',
        bittersweet: '#ED6B60',
        forest: '#217866',
        'patricks-blue': '#192D7B'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
