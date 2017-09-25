const path = require('path');
const webpack = require('webpack');

const DEV_ENV = 'development';
const NODE_ENV = process.env.NODE_ENV || DEV_ENV;

module.exports = {
  entry: './build',

  output: {
    path: path.join(__dirname, './build/js'),
    publicPath: 'js/',
    filename: 'selectors-app.js'
  },

  watch: false,
  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: true,
        }
      }
    ]
  },

  devServer: {
    contentBase: './build',
    host: '0.0.0.0'
  }
};
