const webpack = require('webpack');
var path = require('path');
 
var config = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /(node_modules|non_npm_dependencies)(\\|\/).+\.(js|jsx)$/,
        loader: 'imports',
        query: {
            $: 'jquery',
            jQuery: 'jquery'
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
        'window.jQuery': 'jquery'
    })
  ],
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    alias: {
      jquery: 'jquery/dist/jquery'
    },
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
module.exports = config;