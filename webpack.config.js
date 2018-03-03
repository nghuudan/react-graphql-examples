const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    port: 3333
  },

  devtool: 'source-map',

  entry: path.resolve('index'),

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                targets: {
                  browsers: ['ie 11']
                }
              }],
              'react',
              'stage-0'
            ]
          }
        }
      },
      {
        exclude: /node_modules/,
        test: /\.graphql|gql$/,
        loaders: ['graphql-tag/loader']
      }
    ]
  },

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve('dist')
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join('src', 'client', 'index.html')
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  target: 'web'
};
