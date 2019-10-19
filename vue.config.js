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
    },
  },
};
