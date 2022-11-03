/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navBlue: {
          DEFAULT: "#15616D",
          400: "#508486",
        },
        cream: "#E2DBC5",
      },
    },
  },
  plugins: [],
};
