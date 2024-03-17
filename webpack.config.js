const path = require('path');

module.exports = {
  entry: './src/Home.js', // Specify the entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Specify the output directory
    filename: 'bundle.js', // Specify the output filename
  },
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "assert": require.resolve("assert/"),
      "zlib": require.resolve("browserify-zlib"),
      
    },
  },
  module: {
    rules: [
      // Add rules for processing different file types (e.g., JS, CSS, etc.)
    ],
  },
  // Add any necessary plugins or additional configuration options
};