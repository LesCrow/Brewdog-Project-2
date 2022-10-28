/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-blue": "#15616D",
        backcolor: "#FFECD1",
      },
    },
  },
  plugins: [],
};
