/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#020817',
        'electric-cyan': '#00BFFF',
        'light-gray': '#E2E8F0',
        'panel-blue': 'rgba(30, 41, 59, 0.9)',
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'sans-serif'],
        display: ['Exo 2', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}