const path = require('path');
const PATHS = {
  app: path.join(__dirname, 'source/app/app.js'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: {
    bundle: PATHS.app,
  },

  output: {
    path: PATHS.build,
    filename: "[name].js"
  },

  devServer: {
    inline: true,
    port: 8230,
    contentBase: 'build'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};

