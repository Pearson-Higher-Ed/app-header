// [name] under the output section denotes the entry prop names
const path = require('path');
const demo = `${__dirname}/demo/src/demo.js`;
const demoCSS = `${__dirname}/demo/src/demo.scss`;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
   dev_demo: [ demo, demoCSS ],
   dev_bundle: ['./demo/src/bundle-eventing.js', './main.js'],
   dist: ['./main.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].app-header.js',
    publicPath : '/'
  },
  devServer : {
    static : {
      directory : path.join(__dirname, 'demo'),
      publicPath : '/'
    }
  },
  module : {
    rules : [
      {
        test: /\.scss$/,
        use : [{ loader: 'css-loader' },{ loader: 'sass-loader' }]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [ { loader: 'url-loader' } ]
      }
    ]
  },
};
