const path = require('path');

module.exports = {
  context: `${__dirname}/src`,
  entry: ['./client/main'],
  output: {
    path: path.resolve(__dirname, 'build', 'js'),
    filename: '[name].js',
    publicPath: '/js/',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
