export default defineNuxtConfig({
  devServer: {
    port: import.meta.env.NUXT_BASE_PORT || 8080,
    host: '0.0.0.0',
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://docs.google.com',
        changeOrigin: true,
        prependPath: true
      }
    }
  },
  devtools: { enabled: true },
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: `${import.meta.env.NUXT_TITLE} | %s`,
      meta: [
        { property: 'og:title', content: import.meta.env.NUXT_TITLE },
        { property: 'og:url', content: import.meta.env.NUXT_BASE_URL },
        { property: 'og:image', content: '' }
      ]
    },
    pageTransition: {
      name: 'fade', mode: 'out-in'
    },
    layoutTransition: {
      name: 'fade', mode: 'out-in'
    }
  },
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/transition.css',
  ],
  imports: {
    "dirs": ['store', 'composables']
  },
  modules: ['@pinia/nuxt', 'nuxt-aos', '@nuxt/icon'],
  icon: {
    serverBundle: 'local'
  },
});