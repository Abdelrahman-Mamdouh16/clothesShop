/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e5e7eb",
        },
        secondary: {
          DEFAULT: "#1e2939",
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}