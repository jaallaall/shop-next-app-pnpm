/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: "jit",
  content: [
    "./**/*.{ts,tsx}",
    "./public/**/*.html",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["dana", "sans-serif"],
    },
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1140px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        primary: {
          light: "#E3EBF7",
          DEFAULT: "#285192",
          dark: "#003eb2",
        },
        secondary: {
          100: "#F1F2F4",
        },
        info: {
          DEFAULT: "#092474",
          light: "#B4CBF9",
        },
        danger: {
          100: "#f9c2cd",
          DEFAULT: "#f97a93",
        },
        success: {
          100: "#EAF8F0",
          DEFAULT: "#D6FAE4",
          dark: "#0E7537",
          500: "#18a54e",
        },
      },
    },
  },
  plugins: [
    // require("tailwindcss-rtl"),
    plugin(({ addBase, theme }) => {
      addBase({
        ".scrollbar": {
          overflowY: "auto",
          scrollbarColor: theme("colors.blue-500"),
          scrollbarWidth: "thin",
        },
        ".scrollbar-none": {
          overflowY: "unset",
        },
        ".scrollbar::-webkit-scrollbar": {
          height: 4,
          width: 5,
        },
        ".scrollbar::-webkit-scrollbar-thumb": {
          backgroundColor: "#dbdbdb",
          borderRadius: 3,
        },
        ".scrollbar::-webkit-scrollbar-track-piece": {
          backgroundColor: "#F1F2F4",
          borderRadius: 3,
        },
      });
    }),
  ],
});
