import '@babel/polyfill';
// 这个电片(即@babel/polyfill)一旦载入进来，就会在执行下面这句代码之前，把所有可能需要降级的代码放在以下代码的前面。
console.log(Array.from([1, 2, 3], (x) => x + x));
