// 1. Class的基本语法
// ES5的写法
function Person(name = 'zyf', age = 20) {
    this.age = age;
    this.name = name;
}
Person.prototype.show = function() {
    console.log(this.name, this.age);
}
let p = new Person('cxl');
p.show();

// ES6 使用 class定义类型
class Person {
    show() {
        console.log(this.PName);
    }
    get PName() {
        return this._pName;
    }
    set PName(val) {
        this._pName = val;
    }
}
let p = new Person();
p.PName = 'zyf';
p.show();
console.log('typeof Person :', typeof Person); //Person类型，其实本质和原来的构造函数一样。

// 2. 类上面的方法都是定义在 类的原型上。
console.log('Person.prototype.show :', Person.prototype.show);

// 3. 构造函数constructor方法。
class Person {
    constructor(name = 'zyf', age = 20) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log('this.name :', this.name);
        console.log('this.age :', this.age);
    }
}
let p = new Person(); // es6中用class定义的类型，必须用new构建。
p.show();
let p2 = new Person('syq', 24);
p2.show();

// 使用new的时候自动调用 constructor 方法。如果没有显式定义，一个空的constructor方法会被默认添加。

// 构造函数中，返回其他对象。不推荐这样使用！！！
class Person {
    constructor(name, age) {
        return {
            name,
            age
        }
    }
}
let p = new Person('jc', 30);
console.log('p :', p);

// 类型的创建实例必须使用new，不然会报错。

// 4. 严格模式
// 类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。

// 5. Class表达式(函数表达式)
let Person = class {
    show() {
        console.log(123);
    }
}
let p = new Person();
p.show();

// 6. 类不存在变量提升(hoist)
let p = new Person();
p.show();
class Person {
    show() {
        console.log(345);
    }
}

// 7. this的指向。类的方法内部如果含有this，它默认指向类的实例。
class Person {
    show() {
        console.log('this :', this); // this : Person {}
    }
}
let p = new Person();
p.show();

// 使用析构的时候，要注意this可能不是指向当前对象。
class Person {
    show() {
        console.log('this :', this); // this : undefined
    }
}
let p = new Person();
let { show } = p;
show();

// 解决办法：1、bind 2、箭头函数 【如果你已经对react很熟悉的话】
// 1、bind
class Person {
    constructor() {
        this.show = this.show.bind(this);
    }
    show() {
        console.log('this :', this); // this : Person { show: [Function: bound show] }
    }
}
let p = new Person();
let { show } = p;
show();
// 2、箭头函数内部的this指向当前所在的作用域。

// 8. Class的静态方法
// 类型的方法加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
class Person {
    static Add(a, b) {
        return a + b;
    }
}
Person.PI = 3.14;
console.log(Person.Add(1, 5));

// 9. Class的继承extends
// (1) 父类构造函数里面初始化对象的代码执行，并且只执行一次。
// (2) 父类构造函数的原型上定义的方法进行拷贝。

// extends关键字，继承父类的所有属性和方法
// 子类必须在constructor方法中调用super方法，super是用来调用父类的构造函数。在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。
class Person {
    constructor(name = '', age = 20) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(this.name, this.age);
    }
}
class Student extends Person {
    constructor(name = '', age = 20, phone = '') {
        super(name, age);
        this.phone = phone;
    }
}
let s = new Student('zyf', 22, '23566');
s.show();

// 10. 继承原生的构造函数
function Person(age, name) {
    this.age = age;
    this.name = name;
}
Person.prototype.show = function() {
    console.log(this.age, this.name);
}
class Student extends Person {
    constructor(age, name) {
        super(age, name);
    }
}
let s = new Student(18, 'gwj');
s.show();

// 11. 继承内置类型的构造函数
class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }
}
let m = new MyArray(3, 5, 7);
console.log('m :', m);