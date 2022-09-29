/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lavender-web': '#edeafaff',
        'black-chocolate': '#090f06ff',
        'hookers-green': '#4e6e5dff',
        'amazon': '#4e7b60ff',
        'middle-green': '#4e8862ff',
        'forest': '#4da167ff',
        'dark-pastel-green': '#3bc14aff',
        'persian-orange': '#d68c45ff',
      },
    },
  },
  plugins: [],
}