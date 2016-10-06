var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:3002', // WebpackDevServer host and port
    // 'webpack/hot/only-dev-server',
    path.join(__dirname, 'app/src/js/index.js')
    // 'webpack-hot-middleware/client'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: '/node_modules/',
        include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: __dirname
      }
    ]
  }
}