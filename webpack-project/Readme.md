## webpack 最出色的功能之一就是除了引入 js，还可以使用内置的资源模块(asset module)来引入任何的其它类型资源

## webpack 提供四种资源类型，来加载除了 js 以外的资源（比如：图片）

## 资源模块(asset module)

- 是一种模块类型，它允许我们应用 webpack 来打包其它的资源文件(比如：字体文件、图标文件等等)

## 资源模块的类型(asset module type)

- 会通过四种新的类型模块来替换所有的 loader
- 这四种新的类型模块如下

1. asset/resource：它会发送一个单独的文件并导出 URL，可以在业务代码直接使用这个 URL(即资源路径)
2. asset/inline：它会导出一个资源的 Data URL；如果是图片，那就是 base64 的格式。
3. asset/source：它会导出资源的源代码
4. asset(通用资源类型)：它会在导出一个 Data URL(asset/inline)和发送一个单独的文件(asset/resource)之间自动进行选择，选择的依据是资源的大小。默认情况下，当资源文件大于 4k 的时候，就会采用 asset/resource 的方式，创建一个资源；如果小于 4k，就会采用 asset/inline 的方式，生成一个 base64 的链接。不过，还可以通过 dataUrlCondition 的 maxSize 属性来修改这个默认的资源大小。

```js
{
  // webpack支持loader的链式调用，链式的每个loader都可以对我们的源进行转换，而且转换是逆序的；
  test: /\.(css|less)$/,
  // 从后往前加载：先用less-loader解析css文件，然后把这个解析好的文件交给css-loader，接着css-loader再把结果通过style-loader放置到页面的head标签里。
  use: ['style-loader', 'css-loader', 'less-loader'],
},
{
  test: /\.(css|less)$/,
  // 第一个loader会将结果或者是转换以后的源传递给下一个loader(即style-loader)，最后webpack希望style-loader会返回一个js.
  use: ['style-loader', 'css-loader'],
},
{
  test: /\.txt$/,
  // 当碰到通过require或者是import去解析一个.txt文件的时候，在对这个文件进行打包之前，先使用raw-loader转化。
  use: 'raw-loader',
},
```
