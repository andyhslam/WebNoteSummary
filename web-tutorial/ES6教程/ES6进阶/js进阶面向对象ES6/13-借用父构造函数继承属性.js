// 借用父构造函数继承属性
// 1.父构造函数
function Father(uname, age) {
	// this指向父构造函数的对象实例
	this.uname = uname
	this.age = age
}
// 3.利用原型对象继承方法
Father.prototype.money = function () {
	console.log(120000)
}

// 2.子构造函数
function Son(uname, age, score) {
	// this指向子构造函数的对象实例
	// 调用父构造函数，同时把父构造函数的this指向子构造函数的this，就可以使用父构造函数的属性了。
	Father.call(this, uname, age)
	this.score = score
}
/**
 * Son.prototype = Father.prototype
 * 这样直接赋值会有问题，如果修改子原型对象，父原型对象也会跟着一起变化。
 */
Son.prototype = new Father()
// 如果利用对象的形式修改了原型对象，别忘了利用constructor指回原来的构造函数。
Son.prototype.constructor = Son

var son = new Son("刘德华", 17, 100)
console.log(son)
