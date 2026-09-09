const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', 'dist'),
    compress: true,
    hot: true,
    port: 8564,
  },
  performance: {
    maxAssetSize: 5000000,
    maxEntrypointSize: 5000000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              // mozjpeg handles the jpeg logo, the only bitmap asset here.
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // These shell out to native binaries that are not available on
              // every platform; the loader requires each one unless it is
              // explicitly disabled.
              gifsicle: { enabled: false },
              optipng: { enabled: false },
              pngquant: { enabled: false },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
