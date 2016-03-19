module.exports = {
  entry: [
    './main.js'
  ],

  output: {
    path: __dirname,
    filename: "build/bundle.js"
  },

  devServer: {
    inline: true,
    port: 8230
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
