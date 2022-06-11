// 类的修饰符：public private protected
// 使用public 修饰符 可以让你定义的变量 内部访问 也可以外部访问 如果不写默认就是public
// 使用 private 修饰符 代表定义的变量是私有的，只能在内部访问 不能在外部访问
// 使用 protected 修饰符 代表定义的变量是私有的，只能在内部和继承的子类中访问 不能在外部访问
class Person {
  public age: number = 0
  private name: string
  protected sub: boolean
  static height: string = '180cm'
  constructor(name: string, age: number, sub: boolean) {
    this.name = name;
    this.age = age;
    this.sub = sub;
    Person.run();
  }
  static run() {
    this.height; // 静态方法内部只能访问静态属性，不能访问构造函数的内部属性(变量)
    return 234;
  }
  // 两个静态方法是可以互相调用的
  static build() {
    this.run();
    return 'build';
  }
}
class Man extends Person {
  constructor() {
    super('lx', 20, false); // 通过super关键字去调用父类的构造函数
    this.sub
  }
}
console.log(Person.height); // 通过类名直接访问其静态属性
console.log(Person.run()); // 通过类名直接访问其静态方法
let pct = new Person('lx', 20, false);


// 通过接口去约束类
interface School {
  set(): void
}
interface Teacher {
  run(type: boolean): boolean
}
class Act {
  params: string
  constructor(params: string) {
    this.params = params;
  }
}
// extends: class的继承；implements：约束class的类型
class Student extends Act implements School,Teacher {
  run(type: boolean): boolean {
    return type;
  }
  set() {

  }
}

// 抽象类，应用场景：
// 1.如果你写的类实例化之后毫无用处，此时可以把它定义为抽象类
// 2.你也可以把它作为一个基类-> 通过继承一个派生类去实现基类的一些方法
abstract class Abs {
  name: string
  constructor(name: string) {
    this.name = name;
  }
  // 在抽象类定义的非抽象方法需要在其内部实现，还可以直接被派生类调用
  setName(name: string) {
    this.name = name;
  }
  // 在抽象类定义的抽象方法必须在派生类实现
  abstract getName(): string
}
// new Abs(); // 抽象类无法被实例化

// 在Abs抽象类定义 getName 抽象方法但未实现
// Bps类实现Abs抽象类定义的抽象方法 如不实现就报错 
class Bps extends Abs {
  constructor() {
    super('yyc');
  }
  getName(): string {
    return this.name;
  }
}
let bps = new Bps(); // 非抽象类才能被实例化
bps.setName('zyn');
console.log(bps.getName());
