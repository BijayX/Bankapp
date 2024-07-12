/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],  
      },
      colors: {
        'reen-green': '#4ade80',
        'reen-purple': '#7c3aed',
        'bg-gcolor':'#33B786',
        'blueis':'#46237A',
        'txtcol':'#555555',
        
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

