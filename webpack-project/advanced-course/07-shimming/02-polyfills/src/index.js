/**
 * When setting `useBuiltIns: 'usage'`, polyfills are automatically imported when needed.
  Please remove the direct import of `@babel/polyfill` or use `useBuiltIns: 'entry'` instead.
  `@babel/polyfill` is deprecated. Please, use required parts of `core-js`
  and `regenerator-runtime/runtime` separately
  已经在配置文件里配置@babel/preset-env，就不要再全局引入整个polyfill包。
 */
// import '@babel/polyfill';
// 这个电片(即@babel/polyfill)一旦载入进来，就会在执行下面这句代码之前，把所有可能需要降级的代码放在以下代码的前面。
console.log(Array.from([1, 2, 3], (x) => x + x));
