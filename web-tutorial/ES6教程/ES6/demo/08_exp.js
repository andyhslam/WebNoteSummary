// 1. 正则表达式 构造函数升级
const exp1 = /\d+/gim;

// 用构造函数创建 正则表达式
const exp2 = new RegExp('\d+', 'gi');
const exp3 = new RegExp(/\d+/gi); // es5支持的方式，但是不允许传入第二个参数

// es6支持传入第二个参数
const exp4 = new RegExp(/\d+/gi);
console.log('exp4.flags :', exp4.flags); // gi
const exp5 = new RegExp(/\d+/gi, 'im'); // 第二个参数是设置 修饰符flags，会覆盖第一个参数的修饰符
console.log('exp5.flags :', exp5.flags); // im

// 2. 增加的修饰符：u修饰符，含义为“unicode 模式”，用来正确处理大于\uFFFF的unicode字符。
let s = '𠮷';
let n = '\n';
let r = '\r';
let t = '\t';
console.log(/^.$/gi.test(s)); // false
console.log(/^.$/u.test(s)); // true

console.log(/^.$/gi.test(t)); // true
console.log(/^.$/gi.test(n)); // false
console.log(/^.$/gi.test(r)); // false

console.log(/^.$/u.test(n)); // false
console.log(/^.$/u.test(r)); // false

console.log(/^.$/s.test(n)); // true
console.log(/^.$/s.test(r)); // true
// 注意：.不能匹配/r/n回车换行符和大于\uFFFF的unicode字符，除非使用s和u修饰符

// 3. y修饰符，叫做“粘连”(sticky)修饰符，后一次匹配都从上一次匹配成功的下一个位置开始，并且是从一开始就进行匹配。

// 全局匹配
const str = '2344bb33dd89';
const exp1 = /\d{2}/g;
let t;
while (t = exp1.exec(str)) {
    console.log('t :', t);
}

// 粘连匹配
const str = '2344bb33dd89';
const exp1 = /\d{2}/y;
let t;
while (t = exp1.exec(str)) {
    console.log('t :', t);
}

// 4. s修饰符：dotAll模式，正则表达式中，点(.)是一个特殊字符，代表任意的单个字符。
// 例如：一个是四个字节的UTF-16字符，这个可以用u修饰符解决；另一个是行终止符(line terminator character)。
console.log(/./.test('\n')); // false
console.log(/./s.test('\n')); // true

// 5. 具名组匹配，ES2018 引入了具名组匹配（Name Capture Groups）, 允许为每一个组匹配指定一个名字
const exp1 = /(?<num1>\d+)(?<num2>-\d+-)/;
const res = exp1.exec('3333-222-aaa');
let { index, input, groups } = res
console.log(res);
console.log(res[0]);
console.log(res[1]);
console.log(res[2]);
console.log(index);
console.log(input);
console.log(groups);

// 还支持解构赋值
const exp2 = /(?<num1>\d+)(?<num2>-\d+-)/;
let { groups: { num1, num2 } } = exp2.exec('3333-222-aaa');
console.log('num1 :', num1);
console.log('num2 :', num2);

// 6. 增加的属性
// RegExp.prototype.flags
// RegExp.prototype.sticky  // y 粘连
// RegExp.prototype.unicode // u Unicode