const path = require("path");

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve('./dist'), // 相对路径转化成绝对路径
    }
}