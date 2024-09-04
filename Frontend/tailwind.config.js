/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonBgColor : "",
        lightBlue : "#ADD8E6",
        darkPink : "#6e1351",
        lightGrey : "#aca4a9",
        darkGrey : "#3c393b",
        headingColor : "#2a2729",
        textColor : "#575155",

      }
    },
  },
  plugins: [],
}

