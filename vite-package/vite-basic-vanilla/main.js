import './counter.js';
import { foo } from './foo.js';

foo();

if (import.meta.hot) {
  // 监测其它模块(foo.js)的变化
  import.meta.hot.accept('./foo.js', (newModule) => {
    // newModule：当前被监测的模块的引用
    // 当foo模块再次被更新的时候
    newModule.foo();
  });
}
