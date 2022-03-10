module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans':'Inter'
      },
      spacing: {
        'fit-100vh': 'calc(100vh - 56px)'
      },
      minHeight: {
        '10em': '10em'
      },
      height: {
        '80vh': '80vh'
      }
    },
  },
  plugins: [],
}