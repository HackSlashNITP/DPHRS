/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#091d11",
          "200": "#09150e",
        },
        royalblue: "#4c75f2",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "6xl": "25px",
      "11xl": "30px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  
};
