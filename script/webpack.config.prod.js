const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

module.exports = merge(baseWebpackConfig, {
  //Source map let you can access origin code when debug.
  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
       title: 'Output Management'
     }),
     new webpack.optimize.UglifyJsPlugin({
         compress: {
             warnings: false,
         },
         output: {
             comments: false,
         },
     }),
     new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
     new webpack.SourceMapDevToolPlugin({
       filename: '[name].js.map',
       exclude: ['vendor.js'],
     }),
  ],
});
