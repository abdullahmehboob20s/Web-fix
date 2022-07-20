/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  variants: {
    margin: ["hover"],
    margin: ["responsive", "hover"],
    negativeMargin: ["responsive", "hover"],
  },

  theme: {
    colors: {
      gray: {
        light: "#d3dbdb",
      },
      teal: {
        dark: "#183f43",
        medium: "#26515e",
      },
      blue: {
        bright: "#448897",
        muddy: "#536b6d",
      },
      orange: "#c46933",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },

    extend: {
      height: {
        90: "90vh",
        80: "80vh",
        70: "70vh",
        60: "60vh",
        50: "50vh",
      },
    },
  },
  plugins: [],
};
