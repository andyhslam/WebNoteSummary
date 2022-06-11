// 第三方模块的使用顺序
// 1、npm install 模块名(安装模块)
// 2、使用require引入模块到项目(注意引入路径的写法)
// 3、按照第三方给出的使用方式使用
var uniq = require('uniq')
var module1 = require('./module1')
exports.say = function() {
    console.log('running');
}
module.exports.eat = function(food) {
    console.log(`今天吃了${food}`);
}
module.exports.getArr = module1.getArr
module.exports.setArr = module1.setArr

var arr = [1, 2, 3, 10, 3, 2, 1]
uniq(arr)
console.log(arr);