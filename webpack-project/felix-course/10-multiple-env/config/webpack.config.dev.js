
module.exports = {
  mode: 'development',
  // 用于在开发环境来调试代码
  devtool: 'inline-source-map',
  output: {
    filename: 'scripts/[name].js',
  },
  // 其实webpack-dev-server并没有输出任何物理文件，它把输出的打包以后的bundle文件放到内存里；
  // 即使删掉dist文件夹，也能正常访问浏览器。
  devServer: {
    // 告知devServer从什么位置查找文件，即devServer指向的物理路径
    static: './dist', // 将当前服务的根目录指向到dist文件夹
  },
}
