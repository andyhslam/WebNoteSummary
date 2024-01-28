const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    // 设置文件的名称和路径的第一种方法：
    // [contenthash]表示根据文件的内容来生成一个哈希的字符串，[ext]表示使用原资源的扩展名。
    assetModuleFilename: 'images/[contenthash][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'app.html',
      inject: 'body'
    })
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
        // 导出的资源为Data URL base64的格式
        type: 'asset/inline',
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      }
    ]
  }
}