/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#94a3b8",
        dark: "#0f172a",
      },
      textColor: {
        default: {
          dark: "#94a3b8",
          light: "#0f172a"
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}

