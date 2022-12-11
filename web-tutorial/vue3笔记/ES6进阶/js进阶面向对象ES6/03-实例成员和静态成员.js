/**
 * 构造函数是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与new一起使用。
 * 我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面。
 * new在执行时会做四件事情：
 * 1.在内存中创建一个新的空对象。
 * 2.让this指向这个新的对象。
 * 3.执行构造函数里面的代码，给这个新对象添加属性和方法。
 * 4.返回这个新对象(所以构造函数里面不需要return)。
 */

/**
 * 构造函数中的属性和方法称为成员，成员可以添加；
 * 成员分为两大类：实例成员和静态成员
 */
function Star(uname, age) {
	this.uname = uname
	this.age = age
}
/**
 * 构造函数原型prototype：
 * 构造函数通过原型分配的函数是所有对象所共享的。
 * js规定，每个构造函数都有一个prototype属性，指向另一个对象。
 * 注意这个prototype就是一个对象，这个对象的所有属性和方法，都会被构造函数所拥有。
 * 我们可以把那些不变的方法，直接定义在prototype对象上，这样所有实例对象就可以共享这些方法。
 * 一般情况下，公共属性定义到构造函数里面，公共方法定义在原型对象身上(实现方法的共享，不会再开辟新的内存空间，节省内存资源)
 */

// Star.prototype.sing = function () {
// 	console.log("我会唱歌")
// }

Star.prototype = {
	/**
	 * 如果修改了原来的原型对象，给原型对象赋值的是一个对象;
	 * 此时原型对象就没有constructor属性，也就是把原来的constructor属性覆盖了；
	 * 则必须手动地利用constructor指回原来的构造函数，这样就知道对象是通过哪个构造函数创建出来的。
	 */
	constructor: Star,
	sing: function () {
		console.log("我会唱歌")
	},
}

/**
 * constructor构造函数：
 * 对象原型(__proto__)和构造函数(prototype)原型对象里面都有一个constructor属性，它指回构造函数本身。
 * constructor主要用于记录该对象引用于哪个构造函数，它可以让原型对象重新指向原来的构造函数。
 */

var ldh = new Star("刘德华", 17)
var zxy = new Star("张学友", 18)
console.log(ldh.sing === zxy.sing)
console.log(Star.prototype)
console.log(ldh.__proto__)
/**
 * 1.实例成员：构造函数内部通过this添加的成员；例如：uname、age、sing
 * 实例成员只能通过实例化对象来访问，不能通过构造函数来访问。
 */
console.log(ldh.uname)
ldh.sing()
console.log(Star.uname) // undefined; 这是不可以的

/**
 * 2.静态成员：在构造函数本身上添加的成员；例如：sex
 * 静态成员只能通过构造函数来访问，不能通过实例化对象来访问。
 */
Star.sex = "male"
console.log(Star.sex)
console.log(ldh.sex) // undefined; 这是不可以的

// 类是对象的模板，对象是类的实例。
