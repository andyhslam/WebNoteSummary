const name = {
	surname: "lx",
	sayName() {
		console.log(this.surname)
	},
}

const age = {
	girl: 20,
}

// 一个文件只能有一个module.exports
// module.exports = name

module.exports = {
	name,
	age,
}

// exports.name = name
// exports.age = age

// exports.default = { name, age }
// module.exports = { default: { name, age } }

// const exports = module.exports; exports相当于是module.exports的一个引用

// 错误！原因：对象地址引用的问题
// exports = {
// 	name,
// 	age,
// }
