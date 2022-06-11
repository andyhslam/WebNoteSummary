// console.log(require)

// 使用方式一：
// const name = require("./name.js")
// name.sayName()

// 同使用方式二：
const { name, age } = require("./name.js")
name.sayName()
console.log(age.girl)

// 同使用方式三：
// const west = require("./name.js")
// console.log(west)
// west.default.name.sayName()
// console.log(west.default.age.girl)
