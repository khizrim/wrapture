const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/index.tsx'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
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
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  stats: 'errors-only',
};
