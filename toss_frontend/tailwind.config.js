/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx}',
     './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
