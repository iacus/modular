const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   context: path.resolve(__dirname, '_site'),
   entry: [
      '@babel/polyfill',
      './_templates/_process/js/index.js',
      './_templates/_process/sass/styles.scss'
   ],
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/bundle.js'
   },
   plugins: [
      new CopyWebpackPlugin([
         { from: './images', to: '../dist/images' }
      ]),
      new MiniCssExtractPlugin({
         filename: "css/style.css"
      })
   ],
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.(sa|sc|c)ss$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     publicPath: '../'
                  }
               },
               {
                  loader: "css-loader",
               },
               {
                  loader: "sass-loader"
               }
            ]
         },
         {
            test: /\.(png|jpe?g|gif|ico)$/,
            use: [{
               loader: 'file-loader',
               options: {
                  context: path.resolve(__dirname, '_site'),
                  name: '[path][name].[ext]'
               }
            }]
         },
         {
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     context: path.resolve(__dirname, '_site'),
                     outputPath: 'fonts'
                  }
               }
            ]
         }
      ]
   }
}