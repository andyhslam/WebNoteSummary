// 借用父构造函数继承属性
// 1.父构造函数
function Father(uname, age) {
	// this指向父构造函数的对象实例
	this.uname = uname
	this.age = age
}
// 2.子构造函数
function Son(uname, age, score) {
	// this指向子构造函数的对象实例
	// 调用父构造函数，同时把父构造函数的this指向子构造函数的this，就可以使用父构造函数的属性了。
	Father.call(this, uname, age)
	this.score = score
}

var son = new Son("刘德华", 17, 100)
console.log(son)
