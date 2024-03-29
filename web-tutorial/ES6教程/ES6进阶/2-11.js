function People (name, age) {
	// console.log(this)
	// 实例属性
	this.name = name
	this.age = age
	People.count++
}
// 静态属性
People.count = 0
// 静态方法，与实例化对象没有关系
People.getCount = function () {
	console.log(this) // this指向当前的构造函数
	// console.log("当前共有" + this.count + "个人")
	console.log("当前共有" + People.count + "个人")
}

// 实例方法
People.prototype.showName = function () {
	console.log("我的名字是：" + this.name)
}

const p1 = new People("lyf", 35)
p1.showName()
// console.log(p1)

const p2 = new People("zyf", 27)
p2.showName()
// console.log(p2)

console.log(People.count)
People.getCount()

// 这些js内置对象是构造函数对象，其方法都是实例方法，因此需要new出来。
// const str = new String("imooc")
// console.log(str)
// const arr1 = new Array(3)
// console.log(arr1)
// const obj1 = new Object({ age: 22 })
// console.log(obj1)

// js内置对象Math和Reflect不是构造函数对象，不能new，其方法都是静态方法。
// console.log(Math.max(2, 8))
// console.log(Math.random())

// 与大多数全局对象不同Reflect并非一个构造函数，所以不能通过new运算符对其进行调用，或者将Reflect对象作为一个函数来调用。
// Reflect 的所有属性和方法都是静态的（就像 Math 对象）。
// Reflect对象提供拦截JavaScript操作的方法，这些方法与proxy handler方法的命名相同，作用也相似。

