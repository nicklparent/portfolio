/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#fffff1",
        dark: "#0f172a",
        darkStart: "#1e1621",
        darkEnd: "#3b355c",
        lightStart: "#d9d8d1",
        lightEnd: "#c2c9d2",
      },
      textColor: {
        default: {
          dark: "#94a3b8",
          light: "#0f172a"
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

