/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "home":"url('/src/pages/starter-code/assets/home/background-home-desktop.jpg')",
        'destination':"url('/src/pages/starter-code/assets/destination/background-destination-desktop.jpg')",
        'crew':"url('/src/pages/starter-code/assets/crew/background-crew-desktop.jpg')",
        'technology':"url('/src/pages/starter-code/assets/technology/background-technology-desktop.jpg')"
      },
       fontFamily:{
        'barlow-light':'barlow-light',
        'barlow-conLight':'barlow-conLight',
        'bellfair-reg':'bellfair-reg',
        'barlow-mid':'barlow-mid'
       },

       screens:{
        'sm': '480px',
        'md': '768px',
        'lg': '976px',
        'xl': '1024px',
        '1xl': '1025px',
        '2xl':'1190px',
        '3xl':'1250px',
        '4xl':'1440px',
      },

      fontSize:{
        'smaller':'0.7rem',
        1: '0.8rem',
        1.5:'0.9rem',
        2: '1rem',
        3: '1.125rem',
        4: '1.5rem',
        5: '1.75rem',
        6: '2rem',
        7: '2.5rem',
        8:  '3rem',
        9: '3.5rem',
  
      },

      backgroundColor:{
        'navBackground':'rgba(255, 255, 255, 0.03)'
      },

      animation:{
        'hover':'hover 2s ease-in-out infinite',
        'spin2':'spin2 10s linear infinite',
      },

        
      
      keyframes:{
        'hover':{
          '0%,100':{
            transform:'translateY(0)'
          },
          '50%':{
            transform:'translateY(-20px)'
          },

        },
        'spin2':{
          'to':{
            transform:'rotate(360deg)'
          },
        },
      },

      colors:{
        'color-2':"var(--text-color)",
        'outline-color':"var(--outline-color)",
        'color-3':"var(--color3)"

      }
    },
  },
  plugins: [],
}