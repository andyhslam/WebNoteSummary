// 注：这个配置文件已经用不着了，将由config文件夹里面的配置文件代替。

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// webpack5已经内置这个插件，可以不用单独安装。
const TerserPlugin = require('terser-webpack-plugin')

const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')

module.exports = (env) => {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: 'inline-source-map',
    entry: {
      index: './src/index.js',
      another: './src/another-module.js',
    },
    output: {
      // [name]这种格式称之为substitution(可替换的模板字符串)，可以拿到entry入口的属性名，来作为每个chunk的名字。
      // [contenthash]表示根据文件的内容来生成一个哈希的字符串，从而文件名会随着文件内容的变化而变化。
      filename: 'scripts/[name].[contenthash].js',
      path: path.resolve(__dirname, './dist'),
      clean: true,
      // 设置文件的名称和路径的第一种方法：[ext]表示使用原资源的扩展名。
      assetModuleFilename: 'images/[contenthash][ext]',
      // 通过它来指定应用程序中所有资源的基础路径
      publicPath: 'http://localhost:8080/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'app.html',
        // 将打包好的文件注入到body元素中
        inject: 'body'
      }),
      // 通过此插件和相应的loader去抽离css文件
      new MiniCssExtractPlugin({
        filename: 'styles/[contenthash].css'
      }),
    ],
    // 其实webpack-dev-server并没有输出任何物理文件，它把输出的打包以后的bundle文件放到内存里；
    // 即使删掉dist文件夹，也能正常访问浏览器。
    devServer: {
      // 告知devServer从什么位置查找文件，即devServer指向的物理路径
      static: './dist', // 将当前服务的根目录指向到dist文件夹
    },
    module: {
      rules: [
        {
          test: /\.png$/,
          type: 'asset/resource',
          // 设置文件的名称和路径的第二种方法：
          // generator的优先级要高于在output配置的资源路径和文件名的优先级
          generator: {
            filename: 'images/[contenthash][ext]'
          }
        },
        {
          test: /\.svg$/,
          // 导出的资源为Data URL；如果是图片，那就是base64的格式。
          // 这里是把一个svg转成一个base64的字符串；可以在业务代码直接引用这个字符串。
          type: 'asset/inline',
        },
        {
          test: /\.txt$/,
          type: 'asset/source',
        },
        {
          test: /\.jpg$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              // 当jpg格式的图片大于4M时，生成一个资源文件(asset/resource)；否则生成一个base64格式的dataUrl(asset/inline)。
              maxSize: 4 * 1024 * 1024
            }
          }
        },
        {
          // webpack支持loader的链式调用，链式的每个loader都可以对我们的源进行转换，而且转换是逆序的；
          test: /\.(css|less)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          // 这个类型可以加载任何类型的资源
          type: 'asset/resource',
        },
        {
          // csv是用逗号来分隔数据，tsv是用type来分隔数据。
          test: /\.(csv|tsv)$/,
          // csv或tsv类型的文件数据会转化成一个数组
          use: 'csv-loader',
        },
        {
          test: /\.xml$/,
          // xml类型的文件数据会转化成一个js对象
          use: 'xml-loader',
        },
        {
          test: /\.toml$/,
          type: 'json',
          parser: {
            parse: toml.parse
          },
        },
        {
          test: /\.yaml$/,
          type: 'json',
          parser: {
            parse: yaml.parse
          },
        },
        {
          test: /\.json5$/,
          type: 'json',
          parser: {
            parse: json5.parse
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            }
          }
        }
      ]
    },
    // 优化的配置
    optimization: {
      // 压缩代码
      minimizer: [
        // 通过此插件压缩css文件
        new CssMinimizerPlugin(),
        new TerserPlugin(),
      ],
      // 这里使用webpack的内置插件(split-chunks-plugin)实现代码的分割，把公共的代码抽离到一个单独的文件。
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            // 设置打包后的第三方库的文件名为vendors
            name: 'vendors',
            chunks: 'all',
          }
        }
      },
    }
  }
}