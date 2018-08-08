import webpack from 'webpack';
import path from 'path';
import { main } from './package';

export default {
  mode: process.env.NODE_ENV || 'development',
  // devtool: 'cheap-source-map',
  // devtool: 'source-map',
  devtool: 'cheap-module-inline-source-map',
  entry: {
    application: path.resolve(__dirname, main),
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  output: {
    library: 'DIM',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'css-to-string-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
      ],
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          },
        },
      ],
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      window: {
        HTMLIFrameElement() {},
      },
      document: undefined,
    }),
  ],
};
