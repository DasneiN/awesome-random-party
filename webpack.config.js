const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractCSS = new ExtractTextPlugin('app.bundle.css');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      { enforce: 'pre', test: /\.js?x$/, loader: 'eslint-loader' },
      {
        test: /\.js?x$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: extractCSS.extract(['css-loader', 'postcss-loader']),
      },
      {
        test: /\.(gif|png|svg|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images/',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // webp: {
              //   quality: 75,
              // },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    extractCSS,
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin([
      { from: './data/*.json', to: './data/[name].[ext]', cache: true },
    ]),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
