export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt"
  ],
  image: {
    provider: 'ipx'
  },
  ui: {
    icons: ["heroicons", "lucide"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
      link: [
        // https://nuxt.com/deploy/github-pages and https://vite.dev/guide/env-and-mode.html for details.
        // !!! Make use of compile time environment var NUXT_APP_BASE_URL to work for GitHub Pages deployments as well.
        // Assumption: favicon files in ~/public as ~/public/favicon.ico, ~/public/favicon-32x32.png etc.:
        {
          rel: "icon",
          type: "image/x-icon",
          href: (import.meta.env.NUXT_APP_BASE_URL ? import.meta.env.NUXT_APP_BASE_URL : "/") + "favicon.ico?x=2"
        },
      ],
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
  vite: {
    server: {
      hmr: {
        clientPort: 3000
      },
    },
  }
});
