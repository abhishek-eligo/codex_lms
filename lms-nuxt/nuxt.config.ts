import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['~/assets/css/variables.css'],
  typescript: {
    strict: true
  },
  app: {
    head: {
      title: 'Enterprise LMS',
      meta: [
        { name: 'description', content: 'Enterprise-grade LMS built with Nuxt 3' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  }
})
