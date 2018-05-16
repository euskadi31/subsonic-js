var webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/subsonic.ts',
  output: {
    filename: 'subsonic.js',
    path: __dirname + '/dist',
    libraryTarget: 'umd'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' as resolvable extensions.
    extensions: ['.ts', '.js', '.json']
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: {
            warnings: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
          },
          output: {comments: false},
        }
      }),
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':
          JSON.stringify(process.env.NODE_ENV || 'development')
    }),
  ],

  module: {
    rules: [
      // All files with a '.ts' extension will be handled by
      // 'awesome-typescript-loader'.
      {test: /\.ts$/, loader: 'awesome-typescript-loader'},

      // All output '.js' files will have any sourcemaps re-processed by
      // 'source-map-loader'.
      {enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'}
    ]
  },

  externals: {},
};
