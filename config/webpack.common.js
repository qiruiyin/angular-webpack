var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js', '.scss'],
    alias: {
      'src': path.resolve(__dirname, '../src'), // 项目开发目录
      'modules': path.resolve(__dirname, '../src/modules'), // app入口文件及页面文件
      'assets': path.resolve(__dirname, '../src/assets'), // 静态资源文件
      'components': path.resolve(__dirname, '../src/components'), // 公共组件文件
      'lib': path.resolve(__dirname, '../bower_components'), // 第三方库依赖文件，也可以放在assets里面
    }
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: { configFileName: helpers.root('src', 'tsconfig.json') }
          } , 'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        exclude: [
          helpers.root('src', 'module'),
          helpers.root('src', 'components')
        ],
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
      },
      {
        test: /\.scss$/,
        exclude: [
          helpers.root('src', 'module'),
          helpers.root('src', 'components')
        ],
        // loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!postcss-loader!sass-loader?sourceMap' })
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'module'),
        loader: 'raw-loader'
      },
      {
        test: /\.scss$/,
        include: [
          helpers.root('src', 'module'),
          helpers.root('src', 'components')
        ],
        loader: 'raw-loader!postcss-loader!sass-loader'
      }
    ]
  },
  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new webpack.LoaderOptionsPlugin({
      // test: /\.xxx$/, // may apply this only for some modules
      options: {
        postcss: [
          require('autoprefixer')({
            browsers: ['> 1%'] // 浏览器兼容版本，可根据需求变更
          })
        ]
      }
    })

  ]
};

