/**
 * 该插件主要是用来拦截http请求：
 * 当我们使用fetch或者axios发送请求到本地的开发服务器时，vite server就会接管
 */

const fs = require('fs');
const path = require('path');

const getMockResult = () => {
  const mockStat = fs.statSync('mock');
  let result = [];
  if (mockStat.isDirectory()) {
    // process.cwd() 表示当前node执行命令的所在目录。
    result = require(path.resolve(process.cwd(), 'mock/index.js'));
  }
  return result;
};

module.exports = (options) => {
  return {
    configureServer(server) {
      // server应用于服务器的相关配置
      server.middlewares.use((req, res, next) => {
        /**
         * 该函数就是自定义的中间件：
         * req：请求对象，用户发送过来的请求，包括请求头、请求体、url、cookie等等；
         * res：响应对象，包括响应头、设置cookie等等；
         * next：是否交给下一个中间件，调用next方法会将处理结果交给下一个中间件。
         */
        const mockResult = getMockResult();
        const matchItem = mockResult.find((desc) => desc.url === req.url);
        if (matchItem) {
          const respData = matchItem.response(req);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(respData));
        } else {
          next();
        }
      });
    },
  };
};
