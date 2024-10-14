module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',   // Custom green color
        secondary: '#FF4081', // Custom pink color
      },
      fontFamily: {
        body: ['"Roboto"', 'sans-serif'],
        heading: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
