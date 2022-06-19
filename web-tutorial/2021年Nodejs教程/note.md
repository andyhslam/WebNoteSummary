## node package versions
- 13.4.6
- major(主版本):13, minor(次版本):4, patch(补丁版本):6(偶数表示稳定的patch，奇数表示不稳定的patch)

## npm版本符号
- ^13.4.6：^表示只锁定主版本号，~13.4.6：~表示锁定主版本号和次版本号；
- 13.4.6：表示锁定补丁版本号，"*"：表示最新版本

## node的浏览器端调试
- node --inspect-brk server.js

## node进程管理工具
- supervisor
- nodemon(在本地端使用)
- forever
- pm2(在服务器端管理nodejs多进程)

## jsonp原理
- 利用浏览器端请求js(script标签加载js)不跨域的特性，从后端拉取一段js代码来运行，然后在前端准备好相应的函数，接收后端接口传过来的参数(即完成接口的获取)。
- 如果通过ajax请求另一个平台的接口，就会有同源策略的限制。
- 注意：非同源，不跨域

## Windows下如何查看某个端口被谁占用
1. 查找所有运行的端口：netstat -ano
2. 查看被占用端口对应的 PID：netstat -aon|findstr "9000"
   回车执行该命令，最后一位数字就是PID, 这里是3548。
3. 查看指定PID的进程：tasklist|findstr "3548"
4. 结束进程，强制(/F参数)杀死pid为3548的所有进程包括子进程(/T参数)：taskkill /T /F /PID 3548

## 正向代理和反向代理的区别
1. 正向代理是客户端的代理，帮助客户端访问其无法访问的服务器资源。反向代理则是服务器的代理，帮助服务器做负载均衡，安全防护等。
2. 正向代理一般是客户端架设的，比如在自己的机器上安装一个代理软件。反向代理一般是服务器架设的，比如在自己的机器集群中部署一个 反向代理服务器。

## gulp与webpack的区别：
- gulp是一个基于文件流的任务批处理系统，可以把所有任务编成一个任务队列，以同步或者异步的方式执行，
  最终给一个源输出一个目标，中间可以插入很多插件。
- webpack强调将文件按照模块进行打包

## yarn如何查看源和换源
- https://zhuanlan.zhihu.com/p/35856841

## epress template
- ejs、pug、jade、art-template

## 页面render
- SSR(Server Side Render) 服务端渲染页面
- CSR(Client Side Render) 客户端渲染页面
- https://aui.github.io/art-template/zh-cn/

## Node.js项目
### 前端(Front-end)
- 前端工程化环境(webpack)
- CSS预处理工具(sass)
- JS模块化：ES Module，CommonJS Module
- JS库：jQuery
- SPA：single page application，路由：SME-Router
- UI组件库：基于Bootstrap(AdminLTE) https://adminlte.io/themes/AdminLTE/index.html
- RMVC：art-template
### 后端(Backend)
- Node.js
- Express
- MongoDB(Mongoose)

### loader
- 线上部署不需要loader：因为打包以后，文件已经编译完。

### 常用标点
- &hellip;(...)
- &times;(>×)
