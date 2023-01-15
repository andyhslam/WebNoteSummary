/**
 * ES6之前，通过构造函数+原型的方式实现面向对象编程
 * 构造函数的特点：
 * 1.构造函数有原型对象prototype
 * 2.构造函数的原型对象里面的constructor属性，指向构造函数本身
 * 3.构造函数可以通过原型对象添加方法
 * 4.构造函数创建的实例对象有__proto__属性，指向构造函数的原型对象
 */
/**
 * ES6之后，通过类的方式实现面向对象编程
 * 类的本质其实还是一个函数，类就是构造函数的另外一种写法。
 * 1.类有原型对象prototype
 * 2.类的原型对象里面的constructor属性，指向类本身
 * 3.类可以通过原型对象添加方法
 * 4.类创建的实例对象有__proto__属性，指向类的原型对象
 */
class Star {}
// 对应3
Star.prototype.song = function () {
	console.log("冰雨")
}

console.log(Object.prototype.toString.call(Star))
// 对应1
console.log(Star.prototype)
// 对应2
console.log(Star.prototype.constructor)
// 对应4
var ldh = new Star()
console.log(ldh)
console.log(ldh.__proto__ === Star.prototype)
