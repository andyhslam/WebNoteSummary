// 1. 属性的简洁表示法
let name = 'zyf'
let phone = 123456
let person = { age: 20, name, phone };
console.log('person :', person);

// 2. 方法简写
let person = {
    age: 20,
    show: function() {
        console.log(this.age);
    }
}
person.show();

let person = {
    age: 20,
    show() {
        console.log(this.age);
    }
}
person.show();

// 3. 属性名表达式
let a = 'google.com';
let b = 'google';
let person = {
    [a + 1]: '123',
    [b]: 'cnc',
    show() {
        console.log(this[a + 1]);
        console.log(this[b]);
        console.log(this.google);
    }
}
person.show();
console.log('person :', person);

// 4. 表达式还可以用于定义方法名
let a = 'add';
let person = {
    [a + 1]: function() {
        console.log('258');
    }
}
person[a + 1]();
console.log('person :', person);

// 5. 对象的方法的name属性，返回函数名
let a = 'add';
let person = {
    [a + 1]: function() {
        console.log('258');
    }
}
console.log(person[a + 1].name);

// 6. 有两种特殊情况：bind方法创造的函数，name属性返回bound加上原函数的名字；Function构造函数创造的函数，name属性返回anonymous。
let f = function() {};
let k = f.bind({});
console.log('k.name :', k.name);

let f = new Function('console.log("hello")');
f();
console.log('f.name :', f.name);

// 7. Object.is() 它用来比较两个值是否严格相等，与严格比较运算符(===)的行为基本一致。
// ===严格相等运算符：不能处理 NaN不等于自身，以及+0等于-0
console.log('+0 === -0 :', +0 === -0);
console.log('NaN === NaN :', NaN === NaN);
console.log('Object.is(+0, -0) :', Object.is(+0, -0));
console.log('Object.is(NaN, NaN) :', Object.is(NaN, NaN));

// 8. Object.assign方法用于对象的合并，将源对象(source)的所有可枚举属性，复制到目标对象(target)，这个是浅拷贝。
let m = { d: 4 }
let k = Object.assign(m, { a: 1 }, { b: 2 }, { c: 3 });
console.log('k :', k);
console.log('m :', m);

// 注意：undefined和null无法转成对象，所以如果它们作为第一个参数，就会报错；作为第二个或者后面的参数会省略。
let k = Object.assign(null, { a: 1 }, { b: 2 }, { c: 3 }); // 报错
let k = Object.assign({}, null, { a: 1 }, { b: 2 }, { c: 3 }); // 被省略
console.log('k :', k);

// Object.assign 拷贝布尔类型和数字没有效果，字符串会转成字符数组。
let n = Object.assign({}, true, 12, '369', { a: 2 });
console.log('n :', n);

// 数组的assign
let n = Object.assign({}, [1, 2, 3]);
console.log('n :', n);

// 同名属性的替换
let m = {};
let k = Object.assign(m, { age: 18, name: 'zyf' }, { age: 20 });
console.log('m :', m);
console.log('k :', k);

// 给对象赋默认值

// 浅拷贝对象

// 9. 属性的定义与描述
// 属性定义 Object.defineProperties(obj, props)
// obj: 在其上定义或修改属性的对象
// props：
// 要定义其可枚举属性或修改的属性描述符的对象。对象中存在的属性描述符主要有两种：数据描述符和访问器描述符。
// configurable: 当且仅当该属性描述符的类型可以被改变并且该属性可以从对应对象中删除。默认为false
// enumerable: 当且仅当在枚举相应对象上的属性时该属性显现。默认为false
// value: 与属性关联的值。可以是任何有效的JavaScript值(数字，对象，函数等)。默认为undefined，不能与get和set共用
// writable: 当且仅当与该属性相关联的值可以用assignment operator改变时。默认为false，不能与get和set共用
// get:
// 作为该属性的getter函数，如果没有 getter 则为undefined。函数返回值将被用作属性的值。
// 默认为undefined
// set:
// 作为该属性的setter函数，如果没有 setter 则为undefined。函数将仅接受参数赋值给该属性的新值。
// 默认为undefined

let person = {};
person.age = 10;

Object.defineProperties(person, {
    name: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 'zyf'
    },
    phone: {
        configurable: false,
        enumerable: false,
        writable: false,
        value: '17909'
    },
    address: {
        get: function() {
            return this._address;
        },
        set: function(val) {
            console.log(val);
            this._address = val;
        }
    }
})

console.log(person.phone);
person.address = '北京上海';
console.log(person.address);
console.log('person :', person);
for (let k in person) {
    console.log(k);
}

// Object.getOwnPropertyDescriptors方法返回一个对象，所有原对象的属性名都是该对象的属性名，对应的属性值就是该属性的描述对象。

let person = {};
person.age = 10;

Object.defineProperties(person, {
    name: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 'zyf'
    },
    phone: {
        configurable: false,
        enumerable: false,
        writable: false,
        value: '17909'
    },
    address: {
        get: function() {
            return this._address;
        },
        set: function(val) {
            console.log(val);
            this._address = val;
        }
    }
})

console.log('Object.getOwnPropertyDescriptors(person) :', Object.getOwnPropertyDescriptors(person));

// 属性的可枚举性

// 对象的每个属性都有一个描述对象(Descriptor)，用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
console.log(Object.getOwnPropertyDescriptor(person, 'age'));

// 可枚举的应用
// for...in循环：只遍历对象自身的和继承的可枚举的属性。
let p = { age: 20, name: 'zyf' };
Object.prototype.prop = 'father prop';
for (let k in p) {
    console.log('k :', k);
}
// Object.keys(): 返回对象自身的所有可枚举的属性的键名，与for...of循环配合。
let p = { age: 20, name: 'zyf' };
Object.prototype.prop = 'father prop';
console.log(Object.keys(p));
for (let k of Object.keys(p)) {
    console.log('k :', k);
}
// JSON.stringify(): 只串行化对象自身的可枚举的属性。
// Object.assign(): 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

// 10. 遍历的可枚举属性

// for...in循环：只遍历对象自身的和继承的可枚举的属性。

// Object.keys返回一个数值，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）的键名

// Object.getOwnPropertyNames(obj) 返回一个数值，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）的键名。
let m = { age: 10 };
Object.defineProperties(m, {
    demo: {
        enumerable: false,
        value: 123
    }
});
console.log('m.demo :', m.demo);
console.log('Object.keys(m) :', Object.keys(m));
console.log('Object.getOwnPropertyNames(m) :', Object.getOwnPropertyNames(m));

// 11. Object.setPrototypeOf()设置原型对象的方法，Object.create()
let p = Object.create({ age: 20 });
console.log('p.age :', p.age);
Object.setPrototypeOf(p, { name: 'zyf' });
console.log('p.age :', p.age);
console.log('p.name :', p.name);

// 12. Object.getPrototypeOf()用于读取一个对象的原型对象。

// 13. Object.keys()， Object.values()， Object.entries()

// ES2017 引入了跟Object.keys配置的 Object.values和 Object.entries，作为遍历一个对象的补充手段，供for...of循环使用。
let k = { age: 20, name: 'zyf' }
console.log('Object.entries(k) :', Object.entries(k));

// 14. ES2018 将...运算符引入对象
let { a, ...b } = { a: 123, b: 456, c: 789 };
console.log('a :', a);
console.log('b :', b);

// 15. 扩展运算符进行对象的浅拷贝复制
// 对象的扩展运算符(...)用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
let k1 = { age: 20 };
let k2 = { name: 'zyf' };
let k3 = {...k1, ...k2 };
console.log('k3 :', k3);