/** @type {import('tailwindcss').Config} */
module.exports = {

  // change html , js to js, jsx , tx , tsx
  content: ["./src/**/*.{js,jsx,tx,tsx}"],
  theme: {
    extend: {},
  },

  // change plugins [] =>
  plugins: [require("@tailwindcss/line-clamp")],
}