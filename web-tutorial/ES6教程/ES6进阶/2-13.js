class People {
	constructor(name, age) {
		// 实例属性定义在constructor构造函数里面
		this.name = name
		this.age = age
		this._sex = -1
	}
	// 在类的最顶层，通过get和set关键字去定义属性，对属性进行拦截，实现相应的业务逻辑
	get sex() {
		// return this._sex
		if (this._sex === 1) {
			return "male"
		} else if (this._sex === 0) {
			return "female"
		} else {
			return "error"
		}
	}
	set sex(val) {
		// 1:male; 0:female
		if (val === 0 || val === 1) {
			this._sex = val
		}
	}
	showName() {
		console.log(this.name)
	}
	// 通过static关键字去定义静态方法，与实例化对象没有关系
	static getCount() {
		return 5
	}
	// Class内部已经可以定义静态属性
	static count = 0
}

const p1 = new People("mxt", 30)
console.log(p1)
p1.sex = 0
console.log(p1.sex)
// 直接通过类去调用静态方法
console.log(People.getCount())
// 也可以像ES5一样，去定义静态属性
People.count = 9
// ES6的Class只是ES5这种基于原型方式的语法糖，底层还是跟ES5一样
console.log(typeof People) // function
// 直接通过类去调用静态属性
console.log(People.count)

class Coder extends People {
	constructor(name, age, company) {
		// 通过super关键字去继承父类的属性
		super(name, age)
		this.company = company
	}
	showCompany() {
		console.log(this.company)
	}
}

const c1 = new Coder("lyt", 28, "hengdian")
console.log(c1)
c1.showName()
c1.showCompany()
// 在父类顶层定义的sex属性，也能被子类继承
c1.sex = 1
console.log(c1.sex)
// 在父类定义的静态方法，也能被子类继承
console.log(Coder.getCount())
