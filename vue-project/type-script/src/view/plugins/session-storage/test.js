// class Person {}
// let p1 = new Person();
// console.log('Tracy', p1.__proto__ === Person.constructor.prototype); // false
// console.log('Tracy', p1.__proto__ === Person.prototype); // true
// console.log(p1.constructor === Person); // true
// console.log(p1 instanceof Person); // true
// console.log(p1 instanceof Person.constructor); // false

// let p2 = new Person.constructor();
// console.log(p2.constructor === Person); // false
// console.log(p2 instanceof Person); // false
// console.log(p2 instanceof Person.constructor); // true
// console.log(p2.constructor instanceof Person.constructor); // true
// console.log(p2.constructor instanceof Person.constructor.constructor); // true

// let classList = [
//   class {
//     constructor(id) {
//       this.id_ = id;
//       console.log(`instance ${this.id_}`);
//     }
//   },
// ];
// function createInstance(classDefinition, id) {
//   return new classDefinition(id);
// }
// let foo = createInstance(classList[0], 3141); // instance 3141

class Person {
  constructor() {
    // 添加到 this 的所有内容都会存在于不同的实例上
    this.locate = () => console.log('instance', this);
  }
  // 定义在类的原型对象上
  locate() {
    console.log('prototype', this);
  }
  //  定义在类本身上
  static locate() {
    console.log('class', this);
  }
}
let p = new Person();
p.locate(); // instance, Person {}
Person.prototype.locate(); // prototype, {constructor: ... }
Person.locate(); // class, class Person {}

class Vehicle {}
// 继承类
class Bus extends Vehicle {}
let b = new Bus();
console.log(b instanceof Bus); // true
console.log(b instanceof Vehicle); // true
console.log(Bus instanceof Vehicle); // false

function Person() {}
// 继承普通构造函数
class Engineer extends Person {}
let e = new Engineer();
console.log(e instanceof Engineer); // true
console.log(e instanceof Person); // true

class Vehicle {
  identifyPrototype(id) {
    console.log(id, this);
  }
  static identifyClass(id) {
    console.log(id, this);
  }
}
class Bus extends Vehicle {}
let v = new Vehicle();
let b = new Bus();
b.identifyPrototype('bus'); // bus, Bus {}
v.identifyPrototype('vehicle'); // vehicle, Vehicle {}
Bus.identifyClass('bus'); // bus, class Bus {}
Vehicle.identifyClass('vehicle'); // vehicle, class Vehicle {}

// 在静态方法中可以通过 super 调用继承的类上定义的静态方法：
class Vehicle {
  identify1() {
    console.log('vehicle');
  }
}
class Bus extends Vehicle {
  identify() {
    super.identify1();
  }
}
let bus = new Bus();
bus.identify(); // vehicle

class Vehicle {
  constructor() {
    this.hasEngine = true;
  }
}
class Bus extends Vehicle {
  constructor() {
    // 不要在调用 super()之前引用 this，否则会抛出 ReferenceError
    super(); // 相当于 super.constructor()
    console.log(this instanceof Vehicle); // true
    console.log(this); // Bus { hasEngine: true }
  }
}
new Bus();

class Vehicle {}
class Bus extends Vehicle {
  constructor() {
    super();
    console.log(this instanceof Bus);
    console.log(this instanceof Vehicle);
  }
}
new Bus(); // true

class Vehicle {}
class Car extends Vehicle {}
class Bus extends Vehicle {
  constructor() {
    super();
  }
}
class Van extends Vehicle {
  constructor() {
    return {};
  }
}
console.log(new Car()); // Car {}
console.log(new Bus()); // Bus {}
console.log(new Van()); // {}

class SuperArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}
let a1 = new SuperArray(1, 2, 3, 4, 5);
let a2 = a1.filter((x) => !!(x % 2));
console.log(a1); // [1, 2, 3, 4, 5]
console.log(a2); // [1, 3, 5]
console.log(a1 instanceof SuperArray); // true
console.log(a2 instanceof SuperArray); // false
console.log(a2 instanceof Array); // true

const target = {
  foo: 'bar',
  baz: 'qux',
};
const handler = {
  get(trapTarget, property, receiver) {
    let decoration = '';
    if (property === 'foo') {
      decoration = '!!!';
    }
    console.log(...arguments);
    return Reflect.get(...arguments) + decoration;
  },
};
const proxy = new Proxy(target, handler);
proxy.foo;

const target = {
  thisValEqualsProxy() {
    return this === proxy;
  },
};
const proxy = new Proxy(target, {});
console.log(target.thisValEqualsProxy()); // false
console.log(proxy.thisValEqualsProxy()); // true

const myTarget = {};
const proxy = new Proxy(myTarget, {
  defineProperty(target, property, descriptor) {
    console.log('defineProperty()');
    console.log('descriptor', descriptor);
    return Reflect.defineProperty(...arguments);
  },
});
Object.defineProperty(proxy, 'foo', { value: 'bar' });

const myTarget = {};
const proxy = new Proxy(myTarget, {
  deleteProperty(...args) {
    console.log('deleteProperty()');
    return Reflect.deleteProperty(...args);
  },
});
delete proxy.foo;

// 类的私有属性
class FDT {
  #rip = 'r&b';
  constructor() {
    this.#rip = 'rb';
    this.rib = 123;
  }
}

const fdt = new FDT();
console.log('rip', fdt.#rip);
console.log('rib', fdt.rib);
