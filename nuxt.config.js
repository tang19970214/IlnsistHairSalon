export default {
  router: {
    // base: "/InsistHairSalon/",
    scrollBehavior: () => ({y: 0}),
  },
  head: {
    title: 'InsistHairSalon',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
    { src: "~/plugins/aos", ssr: false },
    {src: '~/plugins/sweet-alert', ssr: false},
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
    'nuxt-fontawesome'
  ],
  fontawesome: {
    component: 'fa',
    imports: [
      // 引入 fas 所有的icon
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
    ]
  },

  axios: {
    baseURL: '/',
  },

  build: {
  }
}
