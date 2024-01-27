## webpack 最出色的功能之一就是除了引入 js，还可以使用内置的资源模块(asset module)来引入任何的其它类型资源

## 资源模块(asset module)

- 是一种模块类型，它允许我们应用 webpack 来打包其它的资源文件(比如：字体文件、图标文件等等)

## 资源模块的类型(asset module type)

- 会通过四种新的类型模块来替换所有的 loader
- 这四种新的类型模块如下

1. asset/resource：它会发送一个单独的文件并导出 URL
2. asset/inline：它会导出一个资源的 Data URL
3. asset/source：它会导出资源的源代码
4. asset：它会在导出一个 Data URL 和发送一个单独的文件之间自动进行选择
