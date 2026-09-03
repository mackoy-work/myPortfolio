export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    baseURL: '/myPortfolio/',
    head: {
      title: 'Mark Anthony Ogao-ogao — Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Sans:wght@300;400;500&display=swap',
        },
      ],
    },
  },

  compatibilityDate: '2025-03-16',
})
