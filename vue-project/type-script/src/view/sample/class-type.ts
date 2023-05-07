/**
 * 类的修饰符：readonly、private、protected、public
 * readonly修饰符：只能应用在索引签名或者属性上面，只能读取
 * private修饰符：代表定义的变量是私有的，只能在内部访问，不能在外部和继承的子类中访问
 * protected修饰符：代表定义的变量是私有的，只能在内部和继承的子类中访问，不能在外部访问
 * public修饰符：代表定义的变量是公有的，可以在内部、外部和继承的子类中访问，如果不写默认就是public
 */

class Person {
  public age: number = 0
  private name: string
  protected sub: boolean
  static height: string = '180cm'
  constructor(pname: string, page: number, psub: boolean) {
    this.name = pname
    this.age = page
    this.sub = psub
    this.readName()
    Person.runner()
  }

  // 静态方法内部只能访问静态属性和方法，不能访问构造函数的内部属性(变量)
  static runner() {
    this.height
    // build里面已经调用runner，所以现在runner里面不能调用build
    // this.build()
    console.log('此处的name是指类的名字，不是指类的构造器的name属性', this.name)
    return '起风了'
  }

  // 两个静态方法是可以互相调用的，但是不能同时调用
  static build() {
    this.runner()
    return 'build'
  }

  readName() {
    console.log(this.name)
  }
}
class Man extends Person {
  constructor() {
    super('子名', 20, false) // 通过super关键字去调用父类的构造函数
    this.sub
  }
}
console.log(Person.height) // 通过类名直接访问其静态属性
console.log(Person.runner()) // 通过类名直接访问其静态方法
let pct = new Person('父名', 20, false)

// 通过接口去约束类
interface School {
  set(): void
}
interface Teacher {
  run(type: boolean): boolean
}
class Act {
  params: string
  constructor(param: string) {
    this.params = param
  }
}
// extends: class的继承；implements：约束class的类型
class Student extends Act implements School, Teacher {
  run(type: boolean): boolean {
    return type
  }
  set() {}
}

/**
 * 类分为两种，一种为具体类，另一种为抽象类。具体类可以被实例化，抽象类不能被实例化。
 * 抽象类的作用：
 * 1.由于抽象类不能被实例化，如果有人编写了一个抽象类，那么这个抽象类一定是用来被某些具体类继承的。
 * 2.抽象类和接口一样可以用于向上转型。
 * 3.抽象类也可以表示一种契约。
 * 抽象类的应用场景：
 * 1.如果你写的类实例化之后毫无用处，此时可以把它定义为抽象类；
 * 2.你也可以把它作为一个基类-> 通过继承的派生类去实现基类的一些方法。
 */
abstract class Abs {
  name: string
  constructor(pname: string) {
    this.name = pname
  }

  /**
   * 抽象方法和具体方法：
   * 抽象方法只能被声明在抽象类中，抽象方法并没有具体的实现过程，是一些“哑”方法；
   * 当子类继承了这个抽象类时，必须重写父类的抽象方法；
   * 在抽象类定义的抽象方法只能描述，不能在其内部实现，必须在派生类实现。
   */
  abstract init(): void

  /**
   * 除了抽象方法之外，如果每个子类中都有一些同样的具体实现方法，
   * 那这些方法也可以选择放在抽象类中，这可以节省代码以达到复用的效果，这些方法叫作具体方法；
   * 在抽象类定义的具体方法需要在其内部实现，还可以直接被派生类调用。
   */
  getName(): string {
    return this.name
  }
}
// new Abs(); // 抽象类无法被实例化

/**
 * 在Abs抽象类定义init抽象方法，但未实现；
 * Bps派生类实现Abs抽象类定义的抽象方法，如不实现就报错。
 */
class Bps extends Abs {
  constructor() {
    super('mi')
    this.init()
  }
  init() {
    console.log(this.getName())
  }
  setName(pname: string) {
    this.name = pname
  }
}
let bps = new Bps() // 具体类才能被实例化
bps.setName('zyn')
console.log(bps.getName())

// 通过get和set去做一个拦截器
class Ref {
  _value: any
  constructor(value: any) {
    this._value = value
  }

  // 自定义去拦截读取和设置操作
  get value() {
    return this._value + '失败'
  }
  set value(newVal) {
    this._value = newVal + '永不'
  }
}

const ref = new Ref('Doctor X')
ref.value = '大门未知子'
console.log(ref.value) // 大门未知子永不失败
console.log(ref._value) // 大门未知子永不
