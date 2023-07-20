/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'dark': 'var(--color-dark)',
        'light': 'var(--color-light)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
      },
      fontFamily: {
        martel: ['Martel', 'sans-serif'],
        bastiken: ['Bastiken', 'serif'],
      },
      fontSize: {
        'header1': "2.8rem",
        'header2': '1.8rem',
        md: '1rem',
        sm: '0.8rem',
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}