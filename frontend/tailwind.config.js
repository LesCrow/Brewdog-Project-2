/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgreen: "#99C1B9",
        bargreen: "#15616D",
        backcolor: "#FFECD1",
        backpink: "#D88C9A",
      },
      backgroundImage: {
        basic: "url('src/assets/Brewery_phone.png')",
      },
    },
  },
  plugins: [],
};
