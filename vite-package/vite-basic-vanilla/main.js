import './counter.js';
import { foo } from './foo.js';

foo();

console.log('main module.');

if (import.meta.hot) {
  // 监测其它模块(foo.js)的变化
  import.meta.hot.accept('./foo.js', (newModule) => {
    // newModule：当前被监测的模块的引用
    // 当foo模块再次被更新的时候
    if (newModule.cache.amount > 5) {
      // 刷新页面
      console.log('invalidate貌似不支持刷新页面');
      import.meta.hot.invalidate();
    } else {
      // 执行热更新
      newModule.foo();
    }
  });
  // 当前文件发生变化时，执行它的热更新
  import.meta.hot.accept();
  // 让当前模块刷新页面，不执行热替换
  // import.meta.hot.decline();
  console.log('decline貌似也不支持刷新页面');
}
