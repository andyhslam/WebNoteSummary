https://github.com/passerecho/vite-

https://blog.csdn.net/weixin_50887064/article/details/134542514?spm=1001.2014.3001.5502

https://www.zhixi.com/view/8c49b48c

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
