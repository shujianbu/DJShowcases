var webpack = require('webpack');
//var bower_dir = __dirname + '/bower_components';

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp('^' + name + '$'));
  },
  entry: [
    './app/main.js',
    './app/main.css'
  ],
  resolve: { alias: {} },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  output: {
    path: process.env.NODE_ENV === 'production' ? './dist' : './build',
    filename: 'bundle.js'
  },
  module: {
    noParse: [],
    loaders: [
      { 
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|woff)$/,
        loader: 'url-loader?limit=100000' // file < 100K will be converted to inline base64
      }
    ]
  },
  devServer: {
    contentBase: './build',
    port: 31214
  }
};

//config.addVendor('react', bower_dir + '/react/react.min.js');
module.exports = config;
