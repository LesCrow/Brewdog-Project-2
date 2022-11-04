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
        backcolor: "#FFECD1",
        default: "#FFECD1",
        button: "#15616D",
        cream: "#E2DBC5",
      },
      backgroundImage: {
        basic: "url('src/assets/Brewery_phone.png')",
      },
    },
  },
  plugins: [],
};
