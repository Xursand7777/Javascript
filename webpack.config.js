const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
console.log('IS PROD', isProd)
console.log('IS DEV', isDev)

module.exports={
    context: path.resolve(__dirname,'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
          '@': path.resolve(__dirname, 'src'),  
          '@core': path.resolve(__dirname, 'src/core')  
        }
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        new CopyPlugin({
            patterns: [
              { from: path.resolve(__dirname,'src/favicon.ico'), 
              to: path.resolve(__dirname,'dist') },
              
            ],
          }),
          new iniCssExtractPlugin({
              filename:'bundle.[hash].css'
          })

    ]
    }
