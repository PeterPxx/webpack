var path = require('path')
var ROOT = path.resolve(__dirname)

module.exports = {
  entry: {
    'page/index': './src/js/page/index'
  },
  output: {
    path: ROOT + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};