const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
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
              // mozjpeg optimises the jpeg logo, the only bitmap asset here.
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              svgo: {
                plugins: [{ removeViewBox: false }],
              },
              // These three shell out to native binaries that are not
              // available on every platform; the loader requires them unless
              // they are explicitly disabled.
              gifsicle: { enabled: false },
              optipng: { enabled: false },
              pngquant: { enabled: false },
            },
          },
        ],
      },
    ],
  },
};
