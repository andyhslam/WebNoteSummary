## 课件资料

- https://github.com/passerecho/vite-
- https://blog.csdn.net/weixin_50887064/article/details/134542514?spm=1001.2014.3001.5502
- https://www.zhixi.com/view/8c49b48c

## vite 插件：https://cn.vitejs.dev/plugins/

## vite-aliases 插件：https://github.com/subwaytime/vite-aliases

## 关于如何编写 vite 插件：https://vitejs.dev/guide/api-plugin.html#vite-specific-hooks

## ejs 语法：https://ejs.bootcss.com/

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
 * @param
 * @returns {string} 表示函数返回值的类型
 */
function bar() {}
```

## vite 编译是有生命周期的，读取环境变量是在读取配置文件之后。

## less 编译器的执行命令

`npx lessc ./index.module.less --math='always'`

## postcss 编译器的执行命令

`npx postcss index.css -o result.css`
