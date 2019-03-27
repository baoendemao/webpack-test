const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' }, 
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}, 
      { test: /\.scss$/, use: [
          {loader: 'vue-style-loader'}, 
          {loader: 'css-loader'}, 
          {
            // css自动加前缀
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers: ['last 3 versions']
                })  
              ]
            }
          },
          {loader: 'sass-loader'}
      ]}
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new HappyPack({
      id: 'happy-babel-js',
      loaders: ['babel-loader?cacheDirectory=true'],
      threadPool: happyThreadPool
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
    })
  ],
  optimization: { 
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          name: "common",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
          reuseExistingChunk: true 
        }
      }
    }
  }
}