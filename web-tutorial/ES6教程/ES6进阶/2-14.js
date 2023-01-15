// 创建一个明星类
class Star {
	/**
	 * constructor()方法是类的构造函数(默认方法)，用于传递参数，返回实例对象；
	 * 通过new命令生成对象实例时，自动调用该方法;
	 * 如果没有显式定义，类内部会自动创建一个constructor()
	 */
	constructor(uname, age) {
		// 构造函数里面的this指向创建的实例对象
		this.uname = uname
		this.age = age
		// 直接在构造函数里面调用实例方法
		this.singer()
	}
	// 普通函数里面的this指向该函数的调用者
	singer() {
		console.log(this.uname)
	}
	sing(song) {
		console.log(this.uname + "：" + song)
	}
}

// 利用类创建实例对象
const ldh = new Star("刘德华", 61)
ldh.sing("冰雨")

/**
 * 使用类的3个注意点
 * 1.在ES6中，类没有变量提升，所以必须先定义类，才能通过类实例化对象。
 * 2.类里面的共有属性和方法，一定要加this使用，因为这些属性和方法属于实例对象。
 * 3.类里面的this指向问题：
 * 3-1.构造函数里面的this指向创建的实例对象；
 * 3-2.普通函数里面的this指向该函数的调用者。
 */

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
	say() {
		console.log("我是爸爸")
	}
	money() {
		console.log(100)
	}
}

// extends关键字，可以让子类继承父类的属性和方法。
class Son extends Father {
	constructor(x, y) {
		/**
		 * 通过super关键字，调用父类上的构造函数，实现子类向父类传递参数；
		 * 子类在构造函数中使用super，必须放到this前面；
		 * 必须先调用父类的构造函数，然后才能对子类的this进行赋值操作。
		 */
		super(x, y)
	}
	subtract() {
		console.log(this.x - this.y)
	}
	say() {
		// 通过super关键字，调用父类上的普通函数
		super.say()
	}
}

/**
 * 继承中属性和方法的查找原则: 就近原则
 * 1.继承中，如果实例化子类输出一个方法，先看子类有没有这个方法，如果有就先执行子类的；
 * 2.继承中，如果子类里面没有，就去查找父类有没有这个方法，如果有，就执行父类的这个方法。
 */

const son = new Son(5, 3)
console.log(son)
son.money()
son.sum()
son.subtract()
son.say()
