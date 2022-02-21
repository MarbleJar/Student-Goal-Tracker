// import path module
const path = require('path');

// import HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //Entry point for webpack to initiate compiling
  entry: path.join(__dirname, '/client/index.js'),
//   entry: 'index.js',

  // Location to save bundle.js
  output: {
    // Create the build folder for compiled file
    path: path.resolve(__dirname, 'build'),
    // Specify path for all assets within the application
    publicPath: '/',
    // Name of compiled file:
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        // Select files ending in .js or .jsx
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: {
          loader: 'babel-loader', // might need direct path './node_modules/babel-loader'
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
            // alternate: './node_modules/@babel/preset-env', './node_modules/@babel/preset-react'
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], 
      },
      {
        test: /\.html?$/,
        exclude: [path.resolve(__dirname, "./node_modules")],
        loader: "html-loader",
        
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // {
      //   test: /.(css|scss)$/,
      //   exclude: './node_modules/', //path.resolve(__dirname, '/node_modules/'),
      //   use: ['style-loader', 'css-loader', 'sass-loader']
      // }  
    ]
  },

  // configure any plugins for development mode
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './client/index.html' //might need resolve(__dirname, client/)
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    // its where the bundle.js will live on RAM during development
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build')
    }, 
    // set up the proxy such that you can call API requests from hot-reload webpack server to the express back-end server
    // aka fetch req. from localhoast:8080/api/* redirect to localhost:3000/api/*
    proxy: {
      '/': 'http://localhost:3000',
      secure: false,
    } 
  },
}

