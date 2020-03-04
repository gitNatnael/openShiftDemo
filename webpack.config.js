
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/app/app.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.bundle.js',
    },
    module: {
      rules: [ {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
      },
      {
          test:/\.html$/,
          use:'html-loader'
      },
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
              loader: 'babel-loader',
          }
      }]
  }
  ,
  
  
  mode: 'development'
  };