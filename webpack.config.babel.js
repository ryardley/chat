// This SO post helped alot getting sourcemaps to work:
// http://stackoverflow.com/questions/32211649/debugging-with-webpack-es6-and-babel

import path from 'path';
import webpack from 'webpack';

const isDevServer = process.env._.indexOf('webpack-dev-server') > -1 ||
  process.env.NODE_ENV === 'development';

const base = {
  context: `${__dirname}/src/webpack/js`,
  devtool: false,
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

const prod = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
    }),
  ],
};

const dev = {
  devtool: '#inline-source-map',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
  ].concat(base.entry),
  module: {
    ...base.module,
    loaders: [
      {
        ...base.module.loaders[0],
        loaders: ['react-hot', 'babel-loader'],
      },
    ],
  },
};

const config = isDevServer
  ? Object.assign({}, base, dev)
  : Object.assign({}, base, prod);

// console.log(JSON.stringify(config, null, 2));
export default config;
