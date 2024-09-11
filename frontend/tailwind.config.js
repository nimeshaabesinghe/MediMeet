/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths as needed
  ],
  theme: {
    colors: {
      blue: "#4A90E2",
      lightGray: "#808080	",
      darkGray: "#333333",
      pastelBlue: "#AEDFF7",
      customPink: "#9B6FCE",
      teal: "#2D9CDB",
      purple: "#a03b99",
      red: "#E74C3C",
      cyan: "#ECF9F9",
      white: "#FFFFFF",
      skyBlue: "#0000FF",
    },
    extend: {},
  },
  plugins: [],
};
