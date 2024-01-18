/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-green": {
          DEFAULT: "#003626",
          light: "#003626",
          dark: "#003626",
        },
      },
    },
  },
  plugins: [],
};
