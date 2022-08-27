const path = require('path');
// 服务端通常不需要打包node_module中的模块
// Webpack-node-externals会从node modules目录中排除所有模块，并提供包白名单选项。
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: path.resolve(__dirname, '../src/server.js'),
  output: {
    filename: 'bundle_server.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  externals: [webpackNodeExternals()],
};
