var config = {
   entry: './client/index.js',

   output: {
     path: __dirname,
     filename: 'bundle.js',
   },

   devServer: {
      contentBase: "./client"
   },

   module: {
      loaders: [
         {test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel-loader'},
         {test: /\.js$/,exclude: /node_modules/,loader: 'babel-loader'},
         {test: /\.css$/,exclude: /node_modules/,loader: 'style-loader!css-loader'}
      ]
   }
}

module.exports = config;
