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
          200: '#596475',
          300: '#212D40',
          400: '#1f2232',
        },
        secondary: '#f61067', 
        
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

