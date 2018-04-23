module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | Project Name',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Anton' },
    ],
    script: [{ src: '/js/main.js', type: 'text/javascript', body: true }]
  },
  /*
  ** Load global CSS
  */
  css: ['@/assets/css/main.css', 'aos/dist/aos.css'],
  /*
  ** This option is given directly to the vue-router Router constructor
  */
  router: {
    base: '',
    linkActiveClass: 'is-active'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['aos']
  },
  plugins: [
    { src: '~/plugins/aos', ssr: false },
    { src: '~/plugins/vue-scrollto', ssr: false },
    { src: '~/plugins/vue-lazyload' }
  ]
}
