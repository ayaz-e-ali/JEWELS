/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1B1B1B',
        'light': '#F2F2F2',
        'primary': '#EAD9CE',
        'secondary': '#B4805D',
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