const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: path.join(__dirname, 'src/popup.tsx'),
    options: path.join(__dirname, 'src/options.tsx'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name]/[name].js',
    assetModuleFilename: 'assets/[hash][ext]',
    clean: true,
  },
  devServer: {
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png$/,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'options/options.html',
      template: './public/options/options.html',
      chunks: ['options'],
    }),
    new HtmlWebpackPlugin({
      filename: 'popup/popup.html',
      template: './public/popup/popup.html',
      chunks: ['popup'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          globOptions: {
            ignore: ['**/options/options.html', '**/popup/popup.html'],
          },
        },
      ],
    }),
  ],
  stats: 'errors-only',
  optimization: {
    minimize: true,
    usedExports: true,
  },
};
