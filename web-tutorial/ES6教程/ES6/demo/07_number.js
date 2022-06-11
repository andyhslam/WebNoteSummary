// 1. 二进制与八进制
let b = 0o77; // 八进制：0o 0O 开头
let c = 0o34;
let d = 0b11; // 二进制：0b 0B 开头
let f = 0B1011;
console.log('b :', b);
console.log('c :', c);
console.log('d :', d);
console.log('f :', f);

// 将二进制或八进制数据转成十进制
console.log('Number(0b1011) :', Number(0b1011));
console.log('Number(0o1011) :', Number(0o1011));

// 2. ES6将全局方法isFinite()和isNaN()，添加到Number的静态方法

// 2-1 全局方法 isFinite()和isNaN()
console.log(isFinite(1.2)); // true
console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite("1")); // true；非数字先隐式转换成数字类型再进行判断
console.log(isFinite(true)); // true

console.log(isNaN(NaN)); // true
console.log(isNaN(Infinity)); // false
console.log(isNaN(22)); // false
console.log(isNaN('aa')); // true

// 2-2 ES6在Number对象上，新提供Number.isFinite() 和 Number.isNaN()两个方法

// Number.isFinite()用来检查一个数值是否为有限的(finite)，即不是Infinity；注意：如果参数类型不是数值，Number.isFinite一律返回false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(1)); // true
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite('1')); // false

// Number.isNaN()用来检查一个值是否为NaN；注意：如果参数类型不是NaN，Number.isNaN一律返回false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN('NaN')); // false
console.log(Number.isNaN(1)); // false

// 它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转换为数值，再进行判断。
// 而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false，Number.isNaN()只有对于NaN才返回true，非NaN一律返回false

// 3. ES6将全局方法parseInt()和parseFloat()，移植到Number()对象上面，行为完全保持不变。

// ES5的写法
parseInt('12.34'); // 12
parseFloat('12.34#'); // 12.34

// ES6的写法
Number.parseInt('12.34'); // 12
Number.parseFloat('12.34#'); // 12.34

// 这样做的目的，是逐步减少全局性方法，使得语言逐步模块化
Number.parseInt === parseInt; // true
Number.parseFloat === parseFloat; // true

// 4. Number.isInteger() 用来判断一个数值是否为整数
Number.isInteger(25); // true
Number.isInteger(25.1); // false

// js内部，整数和浮点数采用的是同样的存储方法，所以25和25.0被视为同一个值。
Number.isInteger(25); // true
Number.isInteger(25.0); // true

// 如果参数不是数值，Number.isInteger 返回 false
Number.isInteger(); // false
Number.isInteger(null); // false
Number.isInteger('15'); // false
Number.isInteger(true); // false

// 注意：由于js采用IEEE754标准，数值存储为64位双精度格式，数值精度最多可以达到53个二进制位(1个隐藏位与52个有效位)。
// 如果数值的精度超过这个限度，第54位及后面的位就会被丢弃，这种情况下，Number.isInteger可能会误判。

// 5. ES6在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示1与大于1的最小浮点数之间的差。
// 对于64位浮点数来说，大于1的最小浮点数相当于二进制的1.00..001，小数点后面有连续51个零。这个值减去1之后，就等于2的-52次方。
Number.EPSILON === Math.pow(2, -52); // true
Number.EPSILON; // 2.220446049250313e-16
Number.EPSILON.toFixed(20); // '0.00000000000000022204'

// Number.EPSILON实际上是js能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义，即不存在误差。
0.1 + 0.2; // 0.30000000000000004
0.1 + 0.2 - 0.3; // 5.551115123125783e-17
console.log('0.1 + 0.2 - 0.3 < Number.EPSILON :', 0.1 + 0.2 - 0.3 < Number.EPSILON); // true
5.551115123125783e-17.toFixed(20); // '0.00000000000000005551'

// 6. 安全整数和Number.isSafeInteger()
// js能够准确表示的整数范围在-2^53到2^53之间(不含两个端点)，超过这个范围，无法正确表示这个值
console.log('Number.isSafeInteger(33333) :', Number.isSafeInteger(33333)); // true

// 7. Math对象扩展
// 7.1 指数运算符**
console.log('Math.pow(2, 3) :', Math.pow(2, 3)); // 8
console.log('2**3 :', 2 ** 3); // 8

// 7.2 Math.trunc方法用于去除一个数的小数部分，返回整数部分

// 对于非数值，Math.trunc内部使用Number方法将其先转为数值。
console.log('Math.trunc(2.3) :', Math.trunc(2.3)); // 2
console.log('Math.trunc(3.33) :', Math.trunc(3.33)); // 3
console.log('Number.parseInt(2.3) :', Number.parseInt(2.3)); // 2

// 对于空值和无法截取整数的值，返回NaN
console.log('Math.trunc(NaN) :', Math.trunc(NaN));
console.log('Math.trunc("aa") :', Math.trunc("aa"));

// 7.3 判断数字的符号 Math.sign()
// Math.sign方法用来判断一个数到底是正数、负数，还是零。对于非数值，会先将其转换为数值。
// 它会返回五种值：
// 参数为正数，返回1；
// 参数为负数，返回-1；
// 参数为0，返回0；
// 参数为-0，返回-0；
// 其他值，返回NaN。

console.log('Math.sign(2) :', Math.sign(2));
console.log('Math.sign(-2) :', Math.sign(-2));
console.log('Math.sign(0) :', Math.sign(0));
console.log('Math.sign(-0) :', Math.sign(-0));
console.log('Math.sign("aa") :', Math.sign("aa"));

// 7.4 Math.cbrt方法用于计算一个数的立方根
// 对于非数值，Math.cbrt方法内部也是先使用Number方法将其转为数值。
console.log('Math.cbrt(8) :', Math.cbrt(8));

// 7.5 Math.hypot方法返回所有参数的平方和的平方根。根下a^2 + b^2，勾股定理
console.log('Math.hypot(3, 4) :', Math.hypot(3, 4));

// 7.6 Math.expm1()，Math.expm1(x)返回ex - 1，即Math.exp(x) - 1。
console.log('Math.expm1(2) :', Math.expm1(2)); // 6.38905609893065
console.log('Math.exp(2) - 1 :', Math.exp(2) - 1); // 6.38905609893065

// 7.7 Math.log10(x)返回以 10 为底的x的对数。如果x小于0，则返回NaN。
console.log('Math.log10(10) :', Math.log10(10)); // 1

// 7.8 Math.log2(x)返回以 2 为底的x的对数。如果x小于0，则返回NaN。
console.log('Math.log2(8) :', Math.log2(8)); // 3