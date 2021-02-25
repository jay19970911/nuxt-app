import { PROXY } from "./constants"

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HJay_Chou的个人网站',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // proxy: {
  //   '/api/': {
  //     target: 'http://localhost:3010',
  //     pathRewrite: {
  //       '^/api/': ''
  //     }
  //   }
  // },

  env: {
    NODE_ENV: process.env.NODE_ENV || "development"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    './styles/index.less'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  proxy: {
    "/api": PROXY
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/proxy"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
