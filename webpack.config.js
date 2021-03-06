const webpack = require('webpack')

var config = {
   entry: './src/main.js',
	
   output: {
      path:'./build/',
      filename: 'index.js',
   },
	
//    devServer: {
//       inline: true,
//       port: 8080
//    },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },

   resolve:{
       extensions:['','.js','.jsx','.css','.html']
   }
}

module.exports = config;