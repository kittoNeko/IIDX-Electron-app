const path = require('path');

module.exports = {
 entry: {
   index: './src/app.jsx',
   print: './src/print.js',
 },
 plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};