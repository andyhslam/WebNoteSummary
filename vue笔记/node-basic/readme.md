## node package versions

-   13.4.6
-   major(主版本):13, minor(次版本):4, patch(补丁版本):6(偶数表示稳定的 patch，奇数表示不稳定的 patch)

## npm 版本符号

-   ^13.4.6：^表示只锁定主版本号，~13.4.6：~表示锁定主版本号和次版本号；
-   13.4.6：表示锁定补丁版本号，"\*"：表示最新版本

## node 的浏览器端调试

-   node --inspect-brk server.js

## node 进程管理工具

-   supervisor
-   nodemon(在本地端使用)
-   forever
-   pm2(在服务器端管理 nodejs 多进程)
