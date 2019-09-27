const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    entry: './index.js',
    output: {
      filename: 'build/bundle.js',
      path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()],
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [
              [
                'env',
                { targets: { browsers: ['last 2 versions']}}
              ],
              'stage-0',
            ]
          }
        }
      ]
    }
};