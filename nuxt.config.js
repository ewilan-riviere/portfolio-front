import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || '',
    title: '',
    titleTemplate: '%s - ' + 'Portfolio · Ewilan Rivière',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css'
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#f3c9d7' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/main.scss', '@/assets/scss/_fonts.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/get-content.js',
    '~/plugins/vuetify.js',
    '~/plugins/slugify.js',
    { src: '@/plugins/global-components-loader' },
    { src: '@/plugins/vue-icons-loader', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['@/assets/scss/_variables.scss']
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/router', { keepDefaultRouter: true }],
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios', { baseURL: process.env.BASE_URL }],
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    '@nuxtjs/svg',
    [
      '@nuxtjs/google-tag-manager',
      {
        id: 'UA-90411452-3',
        pageTracking: true
      }
    ]
  ],
  env: {
    baseURL: process.env.BASE_URL
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/scss/_variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: process.env.NODE_ENV === 'production',
    transpile: ['swiper']
  }
}
