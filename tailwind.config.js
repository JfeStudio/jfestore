const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./public/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        lora: ['"Lora", serif'],
        poppins: ['"Poppins", sans-serif'],
      },
      colors: {
        warning: "#f97316",
        dark: "#1e293b",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      addComponents({
        ".bg-hover-brand": {
          backgroundColor: "#f3f4f6",
          "&:hover": {
            backgroundColor: "#e5e5e5",
          },
        },
        ".bg-hover": {
          backgroundColor: "#1e293b",
          "&:hover": {
            backgroundColor: "#1f2937",
          },
        },
        ".bg-hover-darkside": {
          backgroundColor: "transparant",
          "&:hover": {
            backgroundColor: "#475569",
            opacity: ".3",
          },
        },
      });
    }),
  ],
};
