const path = require('path');

module.exports = {
  entry: './build',

  output: {
    path: path.join(__dirname, './public'),
    publicPath: '/',
    filename: 'selectors-app.js'
  },

  watch: false,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },

  devServer: {
    contentBase: './public',
    host: '0.0.0.0'
  }
};
