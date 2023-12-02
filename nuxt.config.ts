// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['nuxt-swiper','@pinia/nuxt','@nuxtjs/color-mode'],
  colorMode:{
    classSuffix:''
  },
  // plugins:[
  //   { src: '~/utils/tilt.js', mode: 'client' },
  // ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  
})
