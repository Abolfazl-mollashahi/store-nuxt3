/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      keyframes:{
        img:{
          '50%': {transform:'translateY(3px)'}
        },
        divpro:{
          '0%' : {transform: 'translateX(-100%)'},
          '100%' : {transform: 'translateX(0px)'}
        },
      },
      animation:{
        imgs: 'img 1s ease-in-out infinite',
        product: 'divpro 0.5s ease-in-out',
        btn1: 'divpro 1s ease-in-out',
        btn2: 'divpro 1.3s ease-in-out',
        btn3: 'divpro 1.6s ease-in-out',
      },
      boxShadow:{
        shadowhite: '0px 5px 10px '
      },
      backgroundColor:{
        bgcart: 'linear-gradient (to left bottom ,rgb(245, 58, 58) 20%, rgb(8, 197, 30) 20% , rgb(38, 38, 234) 100%) '
      }
    },
  },
  plugins: [],
}

