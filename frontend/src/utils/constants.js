export const days = new Array(31).fill(null).map((_, index) => index + 1);

export const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

export const years = new Array(101).fill(null).map((_, index) => 2022 - index);

export const navLinks = [
  { page: "SHOP", to: "/shop" },
  {
    page: "BREWERY",
    to: "/brewery",
  },
  {
    page: "CONTACT",
    to: "/contact",
  },
];

export const typeBoxes = [
  "Sort by : ",
  "% alcohol (ascending)",
  "% alcohol (descending)",
  "price (ascending)",
  "price (descending)",
];
