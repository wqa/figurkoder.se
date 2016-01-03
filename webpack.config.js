var webpack = require('webpack')
var path = require('path')
var buildPath = path.resolve(__dirname, '')
var sourcePath = path.resolve(__dirname, 'src')
var nodeModulesPath = path.resolve(__dirname, 'node_modules')
var upupPath = path.resolve(__dirname, 'src/app/upup/')
var TransferWebpackPlugin = require('transfer-webpack-plugin')

const production = process.argv.find((element) => element === '--production') ? true : false

const jsBaseEntry = [
  'babel-polyfill',
  './src/app/app.jsx',
]

const jsEntry = production ? jsBaseEntry.concat([
  './src/app/upup/upup.start.js',
  './src/app/upup/upup.min.js',
  './src/app/upup/upup.sw.min.js',
]) : jsBaseEntry

var config = {
  entry: {
    js: jsEntry,
    html: './src/www/index.html',
  },
  devServer:{
    contentBase: 'src/www',
    devtool: 'source-map',
    hot: true,
    inline: true,
    port: 3000,
  },
  output: {
    path: buildPath,
    filename: 'boundle.min.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      {from: 'www'},
    ], sourcePath),
    new webpack.DefinePlugin({
        PRODUCTION: production,
    }),
  ],
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: [path.resolve(__dirname, "src/app")],
        exclude: [nodeModulesPath, upupPath],
      },
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: [nodeModulesPath, upupPath],
        loaders: [
            'react-hot',
            'babel?' + JSON.stringify({
                presets: ["react", "es2015", "stage-1"],
            }),
        ],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.jsx'],
    root: __dirname,
  },
  devtool: 'source-map',
  eslint: {
    configFile: '.eslintrc',
  },
}

if (production) {
  process.env.NODE_ENV = 'production'

  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ].concat(config.plugins)

  config.module.loaders = config.module.loaders.concat([
    {
      test: /\upup.*.js$/,
      loader: "file?name=[name].[ext]",
    },
  ])
}

module.exports = config
