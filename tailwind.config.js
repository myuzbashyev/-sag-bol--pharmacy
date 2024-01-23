/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: {
        sx: "440px",
        xs: "640px",
        sm: "768px",
        md: "960px",
      },
      colors: {
        "forest-green": "#013A20",
        "emerald-green": "#478C5C",
        lint: "#BACC81",
        "lint-1": "#CDD193",
        "lint-search": "#cdd19366",
        white: "#fff",
        black: "#000",
        search: "#e5e7e8",
        app: "#f3f4f6",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        montserrat: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
