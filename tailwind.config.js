/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#D41111',
          'dark-red': '#8B0000',
          black: '#111111',
          'dark-gray': '#1E1E1E',
          'light-gray': '#F5F5F5',
          'mid-gray': '#C9C9C9',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #111111 0%, #1E1E1E 50%, #8B0000 100%)',
      },
    },
  },
  plugins: [],
}
