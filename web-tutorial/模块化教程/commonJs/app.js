// commonjs规范暴露的本质，就是exports这个对象
// var module1 = require('./modules/module1')
var module2 = require('./modules/module2')
var module3 = require('./modules/module3')

// module1.setArr([1, 2])
// console.log(module1.getArr());
// module2()
// module2.say()

console.log(module2);
console.log(module3);
// module3.say()
// module3.eat('tea')
module3.setArr([1, 2, 4])
console.log(module3.getArr());