module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'fit-100vh': 'calc(100vh - 56px)'
      },
      gridTemplateColumns: {
        '1/4': '18em auto',
        '3/1': 'auto 18em'
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