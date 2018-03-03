const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');

const clientConfig = {
  devtool: 'source-map',

  entry: path.join(__dirname, 'src', 'client', 'index'),

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
    filename: '[name].[chunkhash].client.js',
    path: path.resolve('dist', 'public')
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

const serverConfig = {
  entry: path.join(__dirname, 'src', 'server', 'index'),

  externals: [webpackNodeExternals()],

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
                  node: ['8.9.4']
                }
              }],
              'react',
              'stage-0'
            ]
          }
        }
      }
    ]
  },

  output: {
    filename: '[name].server.js',
    path: path.resolve('dist')
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  target: 'node'
};

module.exports = [clientConfig, serverConfig];
