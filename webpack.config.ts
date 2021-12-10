import path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const externals = {
  react: 'React',
  'react-dom': 'ReactDOM'
}

const cdnjs = [
  'https://unpkg.com/react@17.0.2/umd/react.production.min.js',
  'https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js'
]

const cdncss:Array<string> = []

const banner = fs.readFileSync('./banner.txt', 'utf-8')
module.exports = {
  entry: './src/main.tsx',
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.less$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: 'asset',
        generator: {
          filename: 'images/[name]-[hash][ext]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff2?|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name]-[hash][ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      '/@/': path.resolve(__dirname, 'src/')
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  // 拆分包
  externals: isDev ? {} : externals,
  // 打包体积限制
  performance: {
    maxAssetSize: isDev ? 10000000 : 100000,
    maxEntrypointSize: isDev ? 40000000 : 400000
  },
  // 分包
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1000
    }
  },
  // 打包输出
  output: {
    filename: 'js/[contenthash:4].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'static/[hash][ext][query]',
    clean: true,
    publicPath: '/'
  },
  // 本地服务
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  stats: {
    preset: 'minimal',
    colors: true
  },
  devtool: 'inline-source-map',
  // 插件
  plugins: [
    new webpack.BannerPlugin({
      banner: banner
    }),
    new HtmlWebpackPlugin({
      title: 'data-v',
      template: 'public/index.html',
      cdnjs: isDev ? [] : cdnjs,
      cdncss: isDev ? [] : cdncss
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [banner]
      },
      clearConsole: true
    })
  ]
}
