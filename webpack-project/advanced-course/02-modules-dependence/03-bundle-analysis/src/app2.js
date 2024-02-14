// 异步载入的模块
import(/* webpackChunkName: 'lodash' */ 'lodash').then(({ default: _ }) => {
  // default就是导入的lodash对象的引用
  console.log(_.join(['hello', 'webpack'], ' '));
});
