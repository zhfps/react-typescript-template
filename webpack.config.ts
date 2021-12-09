import path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const externals =  {
    react: 'React',
    'react-dom': 'ReactDOM'
}

const cdnjs = [
    'https://unpkg.com/react@17.0.2/umd/react.production.min.js',
    'https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js'
]

const cdncss:Array<string> = []
module.exports = {
    entry: './src/main.tsx',
    mode: isDev ? 'development': 'production',
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
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
          },
        extensions: ['.tsx', '.ts', '.js']
    },
    externals: isDev ? {} : externals,
    performance: {
        maxAssetSize: isDev ? 10000000 : 100000,
        maxEntrypointSize: isDev ? 40000000 : 400000
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 1000
        },
      },
    output: {
        filename: 'js/[contenthash:4].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'static/[hash][ext][query]',
        clean: true,
        publicPath: '/'
      },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'data-v',
            template: 'public/index.html',
            cdnjs: isDev ? [] : cdnjs,
            cdncss: isDev ? [] : cdncss
        }),
    ]
}