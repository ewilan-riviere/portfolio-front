import settings from './static/settings.json'
import { getRoutes, getProjectsRoutes } from './plugins/sitemaps/sitemap'

export default {
  generate: {
    crawler: true,
  },
  target: process.env.TARGET || 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: settings.title,
    titleTemplate: settings.titleTemplate,
    htmlAttrs: {
      lang: settings.locale,
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: settings.description,
      },
      {
        hid: 'author',
        name: 'author',
        content: settings.author,
      },
      {
        hid: 'robots',
        name: 'robots',
        content: 'index, follow',
      },
      // Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: settings.projectName,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.BASE_URL,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: settings.title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: settings.description,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}/${settings.defaultOpenGraph}`,
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: settings.projectName,
      },
      {
        hid: 'og:image:type',
        property: 'og:image:type',
        content: 'image/png',
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1200',
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '1200',
      },
      { hid: 'og:locale', name: 'og:locale', content: settings.locale },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: settings.title,
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: settings.author,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: settings.description,
      },
      {
        hid: 'twitter:image:src',
        property: 'twitter:image:src',
        content: `${process.env.BASE_URL}/${settings.defaultOpenGraph}`,
      },
      {
        hid: 'twitter:image:width',
        name: 'twitter:image:width',
        content: '1200',
      },
      {
        hid: 'twitter:image:height',
        name: 'twitter:image:height',
        content: '1200',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: settings.projectName,
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: process.env.GOOGLE_SITE_VERIFICATION_TOKEN,
      },
      { name: 'msapplication-TileColor', content: settings.color },
      { name: 'theme-color', content: settings.color },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/app'],

  loading: {
    color: '#800080',
    height: '5px',
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/icons-loader', ssr: false },
    { src: '~/plugins/sweetalert2', ssr: false },
    { src: '~/plugins/helpers' },
    { src: '~/plugins/jsonld' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: ['~/components/common'],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/dotenv-module#readme
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/router-module
    // ['@nuxtjs/router', { keepDefaultRouter: true }],
    // https://color-mode.nuxtjs.org/#setup
    // '@nuxtjs/color-mode',
    // https://google-fonts.nuxtjs.org
    // '@nuxtjs/google-fonts',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  colorMode: {
    classSuffix: '',
  },
  // googleFonts: {
  //   display: 'swap',
  //   prefetch: true,
  //   families: {
  //     'PT+Sans': true,
  //   },
  // },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://i18n.nuxtjs.org/
    // 'nuxt-i18n',
    // https://www.npmjs.com/package/@nuxtjs/robots
    '@nuxtjs/robots',
    // https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap',
  ],
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL,
  },
  pwa: {
    meta: {
      name: settings.name,
      author: settings.author,
      description: settings.description,
      theme_color: settings.color,
    },
  },
  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},
  // i18n: {
  //   locales: ['en', 'fr'],
  //   defaultLocale: 'en',
  //   messages: {
  //     en: '~/plugins/locales/en',
  //     fr: '~/plugins/locales/fr',
  //   },
  // },
  robots: {
    // Disallow: ['/sign-in', '/dashboard', '/admin'],
    Sitemap: `${process.env.BASE_URL}/sitemap.xml`,
  },
  sitemap: {
    path: '/sitemap.xml', // L'emplacement de votre fichier sitemap.
    hostname: process.env.BASE_URL, // L'adresse de votre site, que vous pouvez placer comme ici dans une variable d'environnement.
    cacheTime: 1000 * 60 * 15, // La durée avant que le sitemap soit regénéré. Ici 15mn.
    gzip: true,
    generate: false, // Génère une version statique du sitemap quand activé. À utiliser avec nuxt generate.
    exclude: [
      // Les pages qu'on a pas trop envie de voir atterrir sur Google.
      '**',
    ],
    sitemaps: [
      {
        path: '/sitemaps/sitemap.xml',
        exclude: ['**'],
        routes() {
          // Nous allons utiliser une fonction personnalisée pour charger nos routes dynamiques dans le sitemap.
          return getRoutes()
        },
      },
      {
        path: '/sitemaps/projects.xml',
        exclude: ['**'],
        routes: () => {
          return getProjectsRoutes()
        },
      },
    ],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-agile'],
  },
}
