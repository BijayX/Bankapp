/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '4.5': '65px',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],  
      },
      colors: {
        'reen-green': '#4ade80',
        'reen-purple': '#7c3aed',
        'bg-gcolor':'#33B786',
        'blueis':'#46237A',
        'txtcol':'#555555',
        'bgcol':'#8A8A8A',
        'bgcolor':'#f5fcf9',
        'sidecol':'#32c48c'
        
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

