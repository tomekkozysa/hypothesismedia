export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s Hypothesis Media',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Broadcast and live event innovation consultancy specialising in audience interaction and fan engagement with content and technology' },
     
      { hid: 'og:url', property: 'og:url', content: "https://hypothesis-media.co.uk" },
      { hid: 'og:title', property: 'og:title', content: "Hypothesis Media" },
      { hid: 'og:description', property: 'og:description', content: "Broadcast and live event innovation consultancy specialising in audience interaction and fan engagement with content and technology" },
      { hid: 'og:image', property: 'og:image', content: "https://hypothesis-media.co.uk/ogimagewide.png" },    
      
      { hid: 'twitter:domain', property: 'twitter:domain', content: "hypothesis-media.co.uk" },
      { hid: 'twitter:url', property: 'twitter:url', content: "https://hypothesis-media.co.uk" },
      { hid: 'twitter:title', property: 'twitter:title', content: "Hypothesis Media" },
      { hid: 'twitter:description', property: 'twitter:description', content: "Broadcast and live event innovation consultancy specialising in audience interaction and fan engagement with content and technology" },
      { hid: 'twitter:image', property: 'twitter:image', content: "https://hypothesis-media.co.uk/ogimagewide.png" },


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'prefetch',
        href: 'https://cdn.muse.ai/w/ca560fe03e91517f91d2fb618bb3e3f4d2bd425dc3324c4658afb4d24d7d27df/videos/video.mp4'
      }
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
  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
    // debug: { enabled: true, sendHitTask: true }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
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
