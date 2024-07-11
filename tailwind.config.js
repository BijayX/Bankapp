/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'reen-green': '#4ade80',
        'reen-purple': '#7c3aed',
        'bg-gcolor':'#33B786'
      },
      borderRadius: {
        '4xl': '2rem', 
        '5xl': '2.5rem',
        '6xl': '5rem',
      },
    },
  },
  plugins: [],
}

