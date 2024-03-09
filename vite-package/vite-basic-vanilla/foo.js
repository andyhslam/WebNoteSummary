export const foo = () => {
  console.log('foo works!!!！');
};

let cache = {
  amount: 0,
};

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    // 在模块热更新时，dispose会记录上一个模块清理的动作，与此同时，我们可以做一些清理副作用的操作，例如清理上一个定时器。
    if (timer) {
      clearInterval(timer);
    }
  });

  // 让cache缓存模块上一个状态的amount
  // 连续赋值的规则：最终值先赋值给第一个变量，再赋值给第二个变量
  cache = import.meta.hot.data.cache = {
    // 这里的data可以缓存模块在状态发生变化时，一个公共的变量或者是全局的状态
    amount: import.meta.hot.data.cache ? import.meta.hot.data.cache.amount : 0,
  };
}

let timer = setInterval(() => {
  cache.amount++;
  console.log(cache.amount);
}, 1000);

export { cache };
