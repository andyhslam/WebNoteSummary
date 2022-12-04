// 创建一个明星类
class Star {
	/**
	 * constructor()方法是类的构造函数(默认方法)，用于传递参数，返回实例对象；
	 * 通过new命令生成对象实例时，自动调用该方法;
	 * 如果没有显式定义，类内部会自动创建一个constructor()
	 */
	constructor(uname, age) {
		// this指向创建的实例对象
		this.uname = uname
		this.age = age
	}
	sing(song) {
		console.log(this.uname + "：" + song)
	}
}

// 利用类创建实例对象
const ldh = new Star("刘德华", 61)
console.log(ldh)
ldh.sing("冰雨")

/**
 * 1.通过class关键字创建类, 类名我们还是习惯性定义首字母大写。
 * 2.类里面有个constructor函数,可以接受传递过来的参数,同时返回实例对象。
 * 3.constructor函数：只要new生成实例时，就会自动调用这个函数；如果我们不写这个函数，类也会自动生成这个函数。
 * 4.生成实例，new不能省略。
 * 5.最后注意语法规范, 创建类：类名后面不要加小括号；生成实例：类名后面加小括号；构造函数不需要加function。
 * 6.类里面所有的函数不需要写function
 * 7.多个函数方法之间不需要添加逗号分隔
 */

// 1.类的继承
class Father {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
	sum() {
		console.log(this.x + this.y)
	}
	money() {
		console.log(100)
	}
}

// extends关键字，可以让子类继承父类的属性和方法。
class Son extends Father {
	constructor(x, y) {
		// 通过super关键字，可以调用父类上的构造函数和普通函数，实现子类向父类传递参数。
		super(x, y)
	}
}
const son = new Son(1, 2)
son.money()
son.sum()
