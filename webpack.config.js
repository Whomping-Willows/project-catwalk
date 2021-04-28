const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client', 'dist'),
  },
  plugins: [
    // new HTMLWebpackPlugin({
    //   filename: './index.html',
    //   template: path.join(__dirname, 'public/index.html'),
    // }),
    new BundleAnalyzerPlugin(),
    new CompressionPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.scss/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
    ],
  },
};
