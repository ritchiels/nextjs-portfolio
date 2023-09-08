/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        'cadet-blue': '#93B7BE',
        'lapiz-lazuli': '#376996',
        'french-gray': '#C5CBD3',
        'white-smoke': '#F1EDEE'
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        robotoslab: ['Roboto Slab', 'serif']
      }
    },
  },
  plugins: [],
}
