/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths as needed
  ],
  theme: {
    colors: {
      blue: "#4A90E2",
      lightGray: "#D3D3D3",
      darkGray: "#343A40",
      pastelBlue: "#AEDFF7",
    },
    extend: {},
  },
  plugins: [],
};
