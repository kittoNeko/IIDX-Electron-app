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
  resolve: {
    fallback: {
      "crypto-browserify" : require.resolve('crypto-browserify'),
      "browserify" : require.resolve('browserify'),
      "path": require.resolve("path-browserify"),
      "fs":require.resolve("browserify-fs"),
      "os":require.resolve("os-browserify/browser"),
      "stream":require.resolve("stream-browserify"),
    }
  }
};
