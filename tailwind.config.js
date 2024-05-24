/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        
        animate: {
          '0%, 25%': {
            width: '0%'
          },
          '35%, 65%': {
            width: '50%'
          },
         
        }
                },
      rotate:{
        '20':'-20deg'
      },
      fontFamily:{
        primary:'Nunito'
      },
      animation:{
        animate:'animate 10s infinite',
        
      }
    },
  },
  plugins: [],
}