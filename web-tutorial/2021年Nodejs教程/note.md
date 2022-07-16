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
1. jQuery.ajax(url,[settings]) https://jquery.cuishifeng.cn/jQuery.Ajax.html
2. success(data, textStatus, jqXHR)
  请求成功后的回调函数。参数：由服务器返回，并根据dataType参数进行处理后的数据；描述状态的字符串。还有 jqXHR（在jQuery 1.4.x的中，XMLHttpRequest） 对象 。在jQuery 1.5， 成功设置可以接受一个函数数组。每个函数将被依次调用。
- SPA：single page application，路由：SME-Router
- UI组件库：基于Bootstrap(AdminLTE) https://adminlte.io/themes/AdminLTE/index.html
- RMVC：art-template
- module模块，model模型，modal模态框

### 后端(Backend)
- Node.js
- Express(static,router,randomstring,bcrypt,cookie-session)
- MongoDB(Mongoose)
- EJS
- jwt(json web token)
- RMVP

### loader
- 线上部署不需要loader：因为打包以后，文件已经编译完。
- babel-loader: 将ES6编译成ES5.

### 常用标点
- &hellip;(...)
- &times;(>×)
- &laquo;(<<)
- &raquo;(>>)
- 点击a链接不起作用的两种方式：
1. <a href="javascript:void(0)"></a>
2. <a href="javascript:;"></a>

### 开发架构
- 前后端分离的开发架构
1. 打完包的前端dist文件夹里面的js代码运行在浏览器上
2. 发布到前端的dist文件夹里，把这个静态页面丢给后端

- 登录状态
1. 任何一条路由，任何一个页面，都需要维护用户登录的状态。

- cookie-session登录注册方案
1. session可以存于内存、数据库(后端)、缓存。
2. 如果存于内存里，服务器就不能宕机；一宕机，用户的所有登录状态都没了。
3. 这个登录态，不需要在前端手动的操作cookie，后端可以自动种cookie到前端，
  二次访问时，浏览器在不跨域的情况下，会自动携带cookie到后端；
  如果浏览器跨域，加上withCredentials，也可以携带cookie到后端。
4. 跨域请求如何携带cookie？(https://blog.csdn.net/KIKI_20170120/article/details/123606851)
5. 此方案的弊端：后端需要存储session；下次前端还需要携带cookie和后端存储的session进行比较，
  后端认为前端的cookie还没过期而且对上了，才允许前端登录。
6. 后端创建session，产生hash值，再把cookie种到前端。步骤如下：
  const sessionId = randomstring.generate()
	Set-Cookie是http协议首部字段的名字，功能是可以从后端往前端种cookie
	cookie的操作：有域名(Path)、有值(sessionId)、有协议(HttpOnly)
	res.set("Set-Cookie", `sessionId=${sessionId}; Path=/; HttpOnly`)
7. cookie与域名有关，只要域名不变，就一直会携带cookie到后端。
8. 浏览器显示的接口cookie，其实就是请求本身注入到浏览器，下次访问时，前端就会自动携带cookie到后端；
  http协议的cookie有两种，后端给前端种cookie称为Set-Cookie，前端给后端送cookie是在请求首部加个字段(Cookie)；
  浏览器和后端会自动维护这个cookie。
9. 请求首部：请求后端接口时，加的首部字段。
10. 由session种出的cookie有过期时间，一旦cookie过期，后端返回的数据也会过期，后端就让前端重新登录，
  接着后端产生一个新的session(插件cookie-session可以完成这件事)
11. 深入Cookie与Session的区别与原理：https://juejin.cn/post/6844903888600956936
12. JavaScript的存储--Cookie、Session、localStorage、sessionStorage：
  https://juejin.cn/post/7012506796489359368

- cookie-session的通信过程：
1. 前端输入用户名和密码发送到后端，后端存储的session当成是cookie的内容种到前端去，前端在下次请求该网站的第二个页面时，
  携带该cookie。后端会自动将cookie值和session值进行比较，如果这两个值相等，就允许用户访问。
2. 缺点：每个用户登录进来，服务器都要存储session。

- token登录注册方案
1. 前端输入用户名和密码发送到后端，后端验证用户名和密码都没问题之后，将生成的token传给前端；前端通过localStorage
  或者cookie的方式存储该token，下次再去鉴权时携带该token到后端，只要后端验证token是有效的，就认为是合法用户。
2. 后端不需要存储任何东西，只需要给前端发令牌；然后通过token的认证机制，只要认证该token是合法的，前端就可以登录。
3. 优点：后端不需要存储token。
4. 关键点：后端需要有一个生成token的算法，或者是生成一个像样的token，不容易被别人破解。
5. 技术点：JWT(全称：Json Web Token) https://www.zhihu.com/question/485758060/answer/2257869896

- 密钥生成(有两种方法：ssh和openssl)
1. 生成私钥：
  首先命令行输入 openssl
  openssl > genrsa -out rsa_private_key.pem 2048
2. 根据私钥生成公钥
  openssl > rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem
3. 连接git服务器的原理：在本地生成私钥和公钥，通过私钥生成token，把token和公钥传到git服务器(github或者gitlab)
  进行验证，验证通过后，就不再需要输入用户名和密码。

### git操作
1. git checkout -b [新的分支名] [提交码commit-hash]
   基于当前分支和提交码创建并切换到新的分支