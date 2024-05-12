/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e9fff9',
          150: '#c6d8d4',
          200: '#596475',
          300: '#212D40',
          400: '#1f2232',
        },
        secondary: '#f61067', 
        
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      height:{
        700: '790px'
      },
      boxShadow:{
        basic: '0 4px 6px rgba(0, 0, 0, 0.1)'
      },
      backgroundColor:{
        transparent: {
          100: 'rgba(255, 255, 255, 0.1)'
        }
      },
      animation: {
        'fade-in': 'fadeIn 1.75s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

