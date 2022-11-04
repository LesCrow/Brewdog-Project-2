/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-blue": "#15616D",
        backcolor: "#FFECD1",
        default: "#FFECD1",
        button: "#15616D",
      },
      backgroundImage: {
        basic: "url('src/assets/Brewery_phone.png')",
      },
    },
  },
  plugins: [],
};
