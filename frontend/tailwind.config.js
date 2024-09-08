/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths as needed
  ],
  theme: {
    colors: {
      blue: "#4A90E2",
      customPink: "#FF69B4",
      teal: "#2D9CDB",
      green: "#27AE60",
      red: "#E74C3C",
      cyan: "#ECF9F9",
      paleBlue: "#D0EFFF",
      gray: "#95A5A6",
      lightGray: "#F5F7FA",
      darkGray: "#2C3E50",
    },
    extend: {},
  },
  plugins: [],
};
