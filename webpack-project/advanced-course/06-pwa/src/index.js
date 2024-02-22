console.log('hello webpack');

// serviceWorker要配合webpack和浏览器，来达到浏览器端模拟原生APP的交互效果，即使网络断开，也能访问页面的静态内容
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW 注册成功', registration);
      })
      .catch((registrationError) => {
        console.log('SW 注册失败', registrationError);
      });
  });
}
