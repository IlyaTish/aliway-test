module.exports = {
  chainWebpack: config => {
    config.module.rules.delete('svg')
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'vue-svg-loader',
          options: {
            svgo: {
              plugins: [{ removeDimensions: true }, { removeViewBox: false }]
            }
          }
        }
      ]
    }
  }
}
