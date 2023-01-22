const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
      quasar: {
        importStrategy: 'kebab',
        rtlSupport: false
      }
   },

  pwa: {
      name: "Hallo man",
      themeColor: '#efa032',
      mobileWebAppCapable: 'yes',
      mobileWebAppCache:'yes',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppCache: 'yes',
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {
        navigateFallback: '/index.html',
        skipWaiting: true,
        clientsClaim: true
      },
      manifestOptions: {
        name: "Hallo man",
        short_name: "Hallo man",
        start_url: '.',
        display: 'standalone',
        theme_color: '#CB4335'
      }
    }
})
