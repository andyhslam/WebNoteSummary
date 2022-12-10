/**
 * 构造函数中的属性和方法称为成员，成员可以添加；
 * 成员分为两大类：实例成员和静态成员
 */
function Star(uname, age) {
	this.uname = uname
	this.age = age
	this.sing = function () {
		console.log("我会唱歌")
	}
}

var ldh = new Star("刘德华", 17)
/**
 * 1.实例成员：构造函数内部通过this添加的成员；例如：uname、age、sing
 * 实例成员只能通过实例化对象来访问，不能通过构造函数来访问。
 */
console.log(ldh.uname)
ldh.sing()
console.log(Star.uname) // undefined; 这是不可以的

/**
 * 2.静态成员：在构造函数身上添加的成员；例如：sex
 * 静态成员只能通过构造函数来访问，不能通过实例化对象来访问。
 */
Star.sex = "male"
console.log(Star.sex)
console.log(ldh.sex) // undefined; 这是不可以的
