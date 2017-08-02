const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['jquery'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/component/'),
    },
    extensions: ['.js'],
  },

  module: {
    rules: [
      // Css Loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
       //Load gif png
      {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
      },
       //Load font
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       },
       {
         test: /\.less$/,
         use: [{
             loader: "style-loader" // creates style nodes from JS strings
         }, {
             loader: "css-loader" // translates CSS into CommonJS
         }, {
             loader: "less-loader" // compiles Less to CSS
         }]
       },
      // Babel
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?presets[]=es2015,presets[]=react,presets[]=stage-0',
          options: {
            presets: ['env']
          }
        }
      },
    ],
  },
};
