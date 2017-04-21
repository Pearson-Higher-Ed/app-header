// [name] under the output section denotes the entry prop names

module.exports = {
  entry: {
   dev_demo: ['webpack/hot/dev-server', './demo/src/demo.js'],
   dev_bundle: ['webpack/hot/dev-server', './demo/src/bundle-eventing.js', './main.js'],
   dist: ['./main.js']
  },
  output: {
    library: true,
    libraryTarget: 'commonjs2',
    path: './',
    filename: 'build/[name].app-header.js'
  },
  contentBase: "./demo", // for webpack dev server
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'url-loader'
        ]
      }
    ]
  }
};
