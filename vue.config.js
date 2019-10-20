const Critters = require('critters-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new Critters(),
    ],
  },

  publicPath: process.env.BASE_URL,

  pwa: {
    workboxOptions: {
      excludeChunks: ['lazyLoadedView'],
      runtimeCaching: [{
        urlPattern: '**/lazyLoadedView.*',
        handler: 'networkFirst',
      }],
    },
  },

  pluginOptions: {
    i18n: {
      locale: 'pt-BR',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
