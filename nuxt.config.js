export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Hypothesis Media',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Broadcast and live event innovation consultancy specialising in audience interaction and fan engagement with content and technology' },
      { hid: 'og:image', property: 'og:image', content: "/og-image.png" },
      { hid: 'og:image:height', property: 'og:image:height', content: "1000" },
      { hid: 'og:image:width', property: 'og:image:width', content: "1000" },
      { hid: 'og:description', property: 'og:description', content: "Broadcast and live event innovation consultancy specialising in audience interaction and fan engagement with content and technology" },
      { hid: 'og:title', property: 'og:title', content: "Hypothesis Media" },
      { hid: 'og:title', property: 'og:url', content: "hypothesis-media.co.uk" },
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
      '@nuxtjs/google-fonts',
      '@nuxtjs/dotenv',
      // '@nuxtjs/google-analytics'
    ],
    googleFonts: {
      families: {
        Oswald: [350],
      },
      // prefetch: true,
      preload: true,
      display:'swap',
      // useStylesheet:true,
    }, 
    // googleAnalytics: {
    //   id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
    //   // debug: {
    //   //   enabled: true,
    //   //   sendHitTask: true
    //   // }
    // },
    // // example config
 
    'google-gtag': {
      id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
      // debug: {
      //   enabled: true,
      //   sendHitTask: true
      // }
    },
  
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // Simple usage
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap',
  ],
  sitemap: {
    hostname: 'https://hypothesis-media.co.uk',
    gzip: true,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  router:{}
   

}
