/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
          "66": "66px",
          "30v": "30vh",
          "40v": "40vh",
          "50v": "50vh",
          "55v": "55vh",
          "60v": "60vh",
          "68v": "68vh",
          "70v": "70vh",
          "72v": "72vh",
          "40": "40rem",
          "80v": "80vh",
          "90v": "90vh",
          "100v": "100vh",
      },
  },
    fontFamily: {
      Josefin: ['Josefin Sans', 'sans-serif'],
  },
  },
  plugins: [],
}