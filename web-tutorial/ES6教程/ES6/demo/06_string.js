// 1. js允许采用\uxxxx形式表示一个字在\u0000~\uFFFF之间的字符
let x = '\u0061'; // a
let y = '\u0062'; // b
let z = '\u0063'; // c
console.log('x :', x);
console.log('y :', y);
console.log('z :', z);

// 2. 超出\u0000~\uFFFF范围的字符，必须用两个双字节的形式表示
let b = '\uD842\uDFB7';
console.log('b :', b);

let c = '\ud840\udce9';
console.log('c :', c);

// 3. 还可以用花括号把码点包裹住
let d = '\u{20BB7}';
console.log('d :', d);

let f = '\u{61}';
console.log('f :', f);

// 4. js中的 字符表示方法汇总
let a = '\z';
let b = '\172'; // 八进制表示方法
let c = '\x7A'; // 十六进制表示法
let d = '\u007A'; // 制表符表示方法
let e = '\u{7A}'; // 码点表示方法
console.log('a,b,c,d,e :', a, b, c, d, e); // 都表示z

// 5. 字符串方法：codePointAt(index), 获得字符的码点
let s = '𠮷';
console.log('s.charAt(0) :', s.charAt(0));
console.log('s.charAt(1) :', s.charAt(1));
console.log('s.charCodeAt(0) :', s.charCodeAt(0));
console.log('s.charCodeAt(1) :', s.charCodeAt(1));
console.log('s.length :', s.length);

// 6. String.fromCodePoint(num) 通过码点返回字符
console.log('String.fromCodePoint(0x7a) :', String.fromCodePoint(0x7a));

// 7. 字符串的遍历器接口，优点是能正确识别大于0xffff码点的字符。
let s = '𠮷';
// 此种方法不能识别大于0xffff码点的字符
for (var i = 0; i < s.length; i++) {
    console.log('s[i] :', s[i]);
}

// 此种方法能够识别大于0xffff码点的字符
for (let k of '𠮷') {
    console.log('k :', k);
}

// 8. includes(), startsWith(), endsWith()
let s = '123456';
console.log('s.includes("34") :', s.includes("34"));
console.log('s.includes("30") :', s.includes("30"));
console.log('s.includes("4", 5) :', s.includes("4", 5));

console.log('s.startsWith("1") :', s.startsWith("1"));
console.log('s.startsWith("2") :', s.startsWith("2"));

console.log('s.endsWith("56") :', s.endsWith("56"));
console.log('s.endsWith("567") :', s.endsWith("567"));

// 这三个方法都支持第二个参数，表示开始搜索的位置

// 9. repeat()：返回一个新字符串，表示将原字符串重复n次
let m = 'aicoder.com ';
console.log('m.repeat(2.7) :', m.repeat(2.7));
console.log('m.repeat(2) :', m.repeat(2));
console.log('m.repeat(0) :', m.repeat(0));
console.log('m.repeat(-1) :', m.repeat(-1));

// 10. ES2017引入字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。
// padStart()用于头部补全，padEnd()用于尾部补全
let k = '12';
console.log('k.padStart(5, "ab") :', k.padStart(5, "ab")); // aba12
console.log('k.padEnd(7, "ab") :', k.padEnd(7, "ab")); // 12ababa

// 11. 模板字符串(template string)是增强版的字符串，用反引号(`)标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量
let s1 = `<div>
    <h3>你好</h3>
    <p>这里是</p>
</div>`;
console.log('s1 :', s1);

// 有数据放到标签里面，可以使用前端模板或者字符串拼接
let [a1, a2] = [9, 10];
let tempStr = '';
tempStr += '<p>' + a1 + '</p>';
tempStr += '<p>' + a2 + '</p>';
console.log('tempStr :', tempStr);

let s2 = `<p>${a1}</p>
<p>${a2}</p>`;
console.log('s2 :', s2);

// 输出表达式计算结果
let [a1, a2] = [9, 10];
let s2 = `${a1 * 2}--${a2}`;
console.log('s2 :', s2);

// 函数调用
function add(a, b) {
    return a + b;
}
let [a1, a2] = [9, 10];
let s3 = `===> ${add(a1, a2) * 2}`;
console.log('s3 :', s3);

// 模板字符串嵌套
let t = `<ul>
    ${ [1,2,3,4,5].map(item => `<li>${item}</li>`).join('') }
</ul>`;
console.log('t :', t);

// 标签模板
let [a1, a2] = ['*', '%'];
function add() {
    console.log('arguments[0] :', arguments[0]);
    console.log('arguments :', arguments);
}
add`a${a1}-${a2}==`;