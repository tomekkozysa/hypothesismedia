export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Hypothesis Media',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Broadcast & live event innovation consultancy specialising in audience interaction & fan engagement with content & technology' },
      { hid: 'og:image', property: 'og:image', content: "/og-image.jpg" },
      { hid: 'og:image:height', property: 'og:image:height', content: "126" },
      { hid: 'og:description', property: 'og:description', content: "Broadcast &amp; live event innovation consultancy specialising in audience interaction &amp; fan engagement with content &amp; technology" },
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
      '@nuxtjs/google-fonts'
    ],
    googleFonts: {
      families: {
        Oswald: [350],
       
      /* module options */
      },
      // prefetch: true,
      preload: true,
      display:'swap',
      useStylesheet:true,
    }, 
  
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  router:{}
   

}
