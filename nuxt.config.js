import colors from 'vuetify/es5/util/colors'

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - oa6 by IBM',
    title: 'Aquí no hay cola',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.2.0/dist/leaflet.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  router: {
    middleware: ['authenticated']
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/google-maps", ssr: true },
    { src: "~/plugins/vue-leaflet", ssr: false }],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': { target: 'http://localhost:3001' }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      dark: false,
      themes: {
        light:{
          primary: '#384554',
          secondary: '#41f8f9',
          info:'#1e9fb0'
        },
        dark: {
          primary: '#384554',
          accent: colors.grey.darken3,
          secondary: '#41f8f9',
          info: '#1e9fb0',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/]
  }
}
