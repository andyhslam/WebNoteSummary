// import { count } from '@/utils.js/counter.js';
// import '@/utils.js/request.js';
// import '@/style/variable.css';
// import '@/style/index.css';
// import '@/style/index.less';
// import '@/component/A.js';
// import '@/component/B.js';

// console.log('count', count);

// import '@/views/imageLoader.js';
import '@/views/svgLoader.js';
import { age } from '@/assets/json/index.json';

// tree shaking(摇树优化)：打包工具会自动移除没有用到的变量或者方法
console.log('jsonFile', age);
