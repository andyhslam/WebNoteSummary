const webpackNumbers = require('02-webpack-numbers-beta');
// 使用第三方库时，会读取该包的package.json文件里面的main属性对应的文件路径
console.log(webpackNumbers.wordToNum('One'));
