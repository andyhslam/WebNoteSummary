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
5. json：自定义 json 模块 parser，可以加载 yaml、toml 以及 json5

## loader 可以让 webpack 去处理其它类型的文件，并且将它们转化为有效的模块，来提供给应用程序使用

```js
{
  // webpack支持loader的链式调用，链式的每个loader都可以对我们的源进行转换，而且转换是逆序的；
  test: /\.(css|less)$/,
  // 从后往前加载：先用less-loader解析less文件，然后把这个解析好的文件交给css-loader，接着css-loader再把结果通过style-loader放置到页面的head标签里。
  use: ['style-loader', 'css-loader', 'less-loader'],
},
{
  test: /\.css$/,
  // 第一个loader会将结果或者是转换以后的源传递给下一个loader(即style-loader)，最后webpack希望style-loader会返回一个js.
  use: ['style-loader', 'css-loader'],
},
{
  test: /\.txt$/,
  // 当碰到通过require或者是import去解析一个.txt文件的时候，在对这个文件进行打包之前，先使用raw-loader转化。
  use: 'raw-loader',
},
```

## yaml、 toml 与 json5 格式文件的比较

- yaml 文件通过缩进来完成子项的设置；
- toml 文件通过一个中括号的方式来定义子项；
- json5 文件是对 json 格式的一个升级：可以加注释，key 不需要使用双引号，值可以使用单引号，还可以使用类似于\n\r 的一些转义字符。

1. babel-loader 是在 webpack 里面应用 babel 解释 ES6 的一个桥梁。
2. @babel/core 是 babel 的核心代码。
3. @babel/preset-env 是 babel 的预设，一组 babel 插件的集合。

## webpack 的内置插件

- split-chunks-plugin：可以把模块依赖的一些公共文件抽离成单独的 chunk

## 动态导入

- 静态导入和动态导入都可以把依赖的公共模块抽离成单独的 chunk

## 动态导入(也称为异步导入)的代码分离的方法的应用

1. 第一个应用：懒加载（也称为按需加载）

- 懒加载是一种非常好的优化网页或应用的方式，这种方式实际上是先把代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作(比方说单击按钮，点击之后触发其它操作)，它会立即(或即将)引用另外一些新的代码块，这样会加快应用的初始加载速度，减轻代码块的总体体积，因为某些代码块可能永远不会被加载。
- 懒加载可以在编译的时候把模块打包好，在浏览器中什么时候需要这个模块再去加载它，从而实现了按需加载。

2. 第二个应用：预获取和预加载

- prefetch(预获取)：将来某些导航下可能需要的资源
- preload(预加载)：当前导航下可能需要的资源

- 使用 prefetch 的意义在于：告诉 webpack 执行预获取，这会生成 <link rel="prefetch" as="script" href="math.bundle.js"> 并追加到页面的 head 标签。指示着浏览器在闲置时间再去加载打包好的 math.bundle.js；
- 利用预获取 prefetch 的技术，在网络空闲的时候(此时首页面的内容都加载完毕)，把将来使用的代码加载下来，这样既不影响首屏的加载速度，又省去了将来模块加载的延迟。
- 利用预加载 preload 的技术，实现页面模块的并行加载。

- 与 prefetch 指令相比，preload 指令有许多不同之处：

1. preload chunk 会在父 chunk 加载时，以并行方式开始加载。prefetch chunk 会在父 chunk 加载结束后开始加载。
2. preload chunk 具有中等优先级，并立即下载。prefetch chunk 在浏览器闲置时下载。
3. preload chunk 会在父 chunk 中立即请求，用于当下时刻。prefetch chunk 会用于未来的某个时刻。
4. 浏览器支持程度不同

## 代码分离的好处

- 可以把多个模块共享的代码抽离出去，减少入口文件的大小，从而提高首屏的加载速度。

## 分离代码的 3 种方法

1. 在入口起点，通过配置多个入口实现代码的分离。
2. 也是在入口起点里面配置，不过它可以把一些共享的代码单独抽离成一个 bundle，从而防止代码的重复打包。
3. 动态导入

## 7 种 SourceMap 模式

1. eval：每个 module 会封装到 eval 里包裹起来执行，并且会在 bundle 文件的末尾追加注释//# sourceURL，虽然没有生成 SourceMap 文件，但是 bundle 文件也能够锁定代码行数。
2. source-map：会在 bundle 文件的末尾追加注释，生成一个 SourceMap 文件，这个文件会和 bundle 文件做关联，因此能够锁定代码行数。
3. hidden-source-map：不会在 bundle 文件的末尾追加注释，生成一个 SourceMap 文件，但是这个文件不会和 bundle 文件做关联，因此不能锁定代码行数。
4. inline-source-map：不会生成 SourceMap 文件，会在 bundle 文件的末尾追加一个 DataUrl 形式的注释，bundle 文件也能够锁定代码行数。
5. eval-source-map：每个 module 会通过 eval()来执行，不会生成 SourceMap 文件，只生成一个 DataUrl 形式的 SourceMap 放在 bundle 末尾，bundle 文件也能够锁定代码行数。
6. cheap-source-map：生成一个没有列信息（column-mappings）的 SourceMaps 文件，不包含 loader 的 sourcemap（譬如 babel 的 sourcemap）
7. cheap-module-source-map：生成一个没有列信息（column-mappings）的 SourceMaps 文件，同时 loader 的 sourcemap 也被简化为只包含对应行的。开发环境推荐使用这个选项。

### git config core.hooksPath .githooks  执行git的配置，会自动读取pre-commit文件
