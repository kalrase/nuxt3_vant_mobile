// https://nuxt.com/docs/api/configuration/nuxt-config
// import postcss-pxtorem from 'postcss-pxtorem'



export default defineNuxtConfig({
  pages: true,
  devServer: {
    port: 3001,
    host: "0.0.0.0",
  },
  // 自定义配置项
  runtimeConfig: {
    // 只在服务端可以访问的配置项
    apiSecret: "api-secret",
    // 可以暴露给客户端使用的配置项
    public: {},
  },
  app: {
    head: {
      script: [
        // { src: "some.js"},
      ],
      viewport: "width=device-width,initial-scale=1",
      link: [{ rel: "icon", href: "./favicon.ico", sizes: "any" }],

      meta: [
        { charset: "utf-8" },
        // { "http-equiv": "X-UA-Compatible", "content": "IE=edge" },
        { "http-equiv": "pragma", content: "no-cache" },
        { "http-equiv": "Cache-Control", content: "no-cache, must-revalidate" },
        { "http-equiv": "expires", content: "0" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, user-scalable=0, viewport-fit=cover",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
    },
  },
  css: [
    "@/assets/css/index.scss",
    '@unocss/reset/tailwind.css',
    '~/styles/vars.css',
    '~/styles/global.css',
    '~/styles/default-theme.css',

  ],
  plugins: [],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@unocss/nuxt",
    "nuxt-headlessui",
    "@nuxt/image",
    "@nuxtjs/device",
    "nuxt-swiper",
    "dayjs-nuxt",
    "@nuxt/icon",
    "@vant/nuxt",
    "@pinia/nuxt",
  ],
  postcss: {
        plugins: {
          "sass": {},
          "autoprefixer": {},
          "cssnano": {},
          'postcss-mobile-forever': {
            appSelector: '#__nuxt',
            viewportWidth: 375,
            maxDisplayWidth: 600,
            exclude: /@nuxt/,
            //
          },
      },
  },
});
