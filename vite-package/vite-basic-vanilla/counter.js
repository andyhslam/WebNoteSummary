export const counter = 2;

// hot属性只存在于开发环境，不存在于生产环境，所以它会被tree shaking优化掉
if (import.meta.hot) {
  // 监测模块自身的变化
  import.meta.hot.accept((newModule) => {
    // newModule：被更新以后的模块的引用
    console.log(newModule.counter);
  });
}
