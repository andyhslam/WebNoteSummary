// import { count } from '@/utils.js/counter.js';
// import '@/utils.js/request.js';
// import '@/style/variable.css';
// import '@/style/index.css';
// import '@/style/index.less';
// import '@/components/A.js';
// import '@/components/B.js';
// console.log('count', count);

import '@/views/svgLoader.js';
import { age } from '@/assets/json/index.json';
import('@/views/imageLoader.js').then((data) => {
  console.log('data', data);
});

// tree shaking(摇树优化)：打包工具会自动移除没有用到的变量或者方法
console.log('jsonFile', age);

// 不写域名，会自动补全本地域名，所以会把请求发送到本地的vite开发服务器。
fetch('/api/users', { method: 'post' })
  .then((rsp) => rsp.json())
  .then((rsp) => {
    console.log('rsp', rsp);
  })
  .catch((error) => {
    console.log('error', error);
  });
