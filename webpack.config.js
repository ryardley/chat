// This SO post helped alot getting sourcemaps to work:
// http://stackoverflow.com/questions/32211649/debugging-with-webpack-es6-and-babel

const path = require('path');

module.exports = {
  context: `${__dirname}/src/entries`,
  devtool: '#inline-source-map',
  entry: ['./main'],
  debug: false,
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        test: /\.js$/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build', 'js'),
    filename: '[name].js',
    publicPath: '/js/',
  },
};
