// 1.对象混入
// 可以使用es6的Object.assign 合并多个对象
interface Name {
  name: string
}
interface Age {
  age: number
}
interface Sex {
  sex: string
}

let people1: Name = { name: 'lx' }
let people2: Age = { age: 30 }
let people3: Sex = { sex: 'female' }
// 此时 people4 会被推断成一个交差类型 Name & Age & sex;
let people4 = Object.assign(people1, people2, people3);
// console.log(people1);
// console.log(people4);


// 2.类的混入
// 首先声明两个mixins类 （严格模式要关闭不然编译不过）
class Adt {
  type: boolean;
  changeType(): void {
    this.type = !this.type;
  }
}
class Bgm {
  name: string;
  getName(): string {
    return this.name;
  }
}
// 定义实现类：没使用extends而是使用implements。 把类当成接口
class Cat implements Adt, Bgm {
  // 为将要mixin进来的属性方法创建出占位属性
  type: boolean = false;
  name: string = 'lx';
  changeType: () => void;
  getName: () => string;
}
// 创建帮助函数，做混入操作。它会遍历mixins上的所有属性，并复制到目标上去，把之前的占位属性替换成真正的实现代码
// Object.getOwnPropertyNames()获取对象自身的属性；除去它继承来的属性，对它所有的属性遍历，它是一个数组，遍历它所有的属性名
mixins(Cat, [Adt, Bgm]);
function mixins(curCls: any, itemCls: any[]) {
  itemCls.forEach(item => {
    // console.log(item);
    Object.getOwnPropertyNames(item.prototype).forEach(name => {
      // console.log(name);
      curCls.prototype[name] = item.prototype[name];
    })
  })
}
const cba = new Cat();
console.log(cba.type);
cba.changeType();
console.log(cba.type);