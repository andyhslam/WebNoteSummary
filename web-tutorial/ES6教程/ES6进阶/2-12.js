// 父类
function Animal (name) {
	this.name = name
}
Animal.prototype.showName = function () {
	console.log("名字是：" + this.name)
}

// 子类
function Dog (name, color) {
	/**
	 * 对于构造函数继承，只能继承父类的属性，不能继承父类的方法；
	 * call的第一个参数指的是，你要把this指向谁，就把要指向的那个对象作为第一个参数；
	 * 在这里，就是把Animal里面的this指向Dog里面的this；
	 */
	Animal.call(this, name)
	this.color = color
}
// 对于原型继承，能够继承父类的方法，此时不需要传参
Dog.prototype = new Animal()
console.log(Dog.prototype.__proto__ === Animal.prototype) // true
console.log(Dog.prototype.__proto__.constructor === Animal.prototype.constructor) // true
console.log(Dog.prototype.constructor === Animal.prototype.constructor) // true
console.log(Dog.prototype.__proto__.constructor === Dog.prototype.constructor) // true
console.log(Dog.prototype.__proto__ === Dog.prototype) // false
Dog.prototype.constructor = Dog // 修正constructor的指向
// console.log(Dog.prototype.__proto__.constructor)
const d1 = new Dog("wangcai", "white")
console.log(d1)
console.log(d1.constructor === Dog.prototype.constructor)
d1.showName()

// 组合继承：构造函数继承 + 原型继承，能够继承父类的属性和方法。
