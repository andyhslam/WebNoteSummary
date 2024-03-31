## 课件资料

- https://github.com/passerecho/vite-
- https://blog.csdn.net/weixin_50887064/article/details/134542514?spm=1001.2014.3001.5502
- https://www.zhixi.com/view/8c49b48c

## vite 插件：https://cn.vitejs.dev/plugins/

## vite-aliases 插件：https://github.com/subwaytime/vite-aliases

## 关于如何编写 vite 插件：https://vitejs.dev/guide/api-plugin.html#vite-specific-hooks

## ejs 语法：https://ejs.bootcss.com/

## rollup 官网：https://rollupjs.org/configuration-options/#external

## CDN 相关网站：https://www.jsdelivr.com/

## 没被封的外国网站：https://codepen.io/

## apifox：

- https://apifox.com/
- https://apifox.com/compare/postman-vs-apifox/?utm_source=google_dsa&utm_medium=g&utm_campaign=20543997484&utm_content=156047449829&utm_term=&gad_source=1&gclid=Cj0KCQjw8J6wBhDXARIsAPo7QA-avXqsuE95Um9p_767KO8w6OE5zGDzLoEcq75_z_idvbBNhjlGte8aAkmwEALw_wcB

## vite-plugin-mock 的 github 地址： https://github.com/vbenjs/vite-plugin-mock

## 处理 vite 配置文件的语法提示：手动注释，让 vscode 编辑器知道当前的类型是什么。

### 第一种方式：

```js
import { defineConfig } from 'vite';
export default defineConfig({
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
  },
});
```

### 第二种方式：

```js
/** @type import('vite').UserConfig */
const viteConfig = {
  optimizeDeps: {
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
  },
};
export default viteConfig;
```

## 函数注释的标准写法

```js
/**
 * @param { string } param1
 * @param { { name: string, age: number } } param2
 * @returns { string } 表示函数返回值的类型
 */
function bar(param1, param2) {}
```

## vite 编译是有生命周期的，读取环境变量是在读取配置文件之后。

## less 编译器的执行命令

`npx lessc ./index.module.less --math='always'`

## postcss 编译器的执行命令

`npx postcss index.css -o result.css`

# vite 性能优化概述

### vite 按需加载，在开发环境使用 esbuild 构建，在生产环境使用 rollup 构建

### webpack 的 cache-loader，如果两次构建的源代码没有发生变化，则直接使用缓存，不调用 loader

### 分包策略：vite4 版本直接导入内置插件 splitVendorChunkPlugin，不需要任何配置了。

### gzip 压缩：

- nginx 是动态压缩，前端是静态压缩；
- 动态压缩是请求到了 nginx 的时候再压缩，比较消耗服务器资源，最好还是由前端来压缩。

## 跨域

### 开发环境的跨域解决

- 客户端去请求 vite 的开发服务器，服务器收到请求，根据 config 代理配置重写请求路径，从服务端发送请求，由于同源策略仅发生在浏览器，服务器端之间的请求不会受限制，所以 vite 开发服务器收到请求后，向重写后的地址发送请求，直接把相应结果给到浏览器（客户端）

### 生产环境的跨域解决

- 一般是交给后端或运维去处理跨域

1. ngnix：代理服务(与本地开发服务器类似)
2. 配置身份标记（Access-Control-Allow-Origin）
