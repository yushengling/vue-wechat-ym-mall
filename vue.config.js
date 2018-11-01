const path = require('path')
module.exports = {
  devServer: {
    public: 'shop.exmobile.info',
    port: 9000,
    compress: true,
    disableHostCheck: true
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/var.styl'),
        path.resolve(__dirname, 'src/assets/styles/mixins.styl'),
        path.resolve(__dirname, 'src/assets/styles/layout.styl')
      ]
    }
  }
}
