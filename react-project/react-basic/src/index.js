// 框架的核心包
import React from "react"
// 专门做渲染相关的包
import ReactDOM from "react-dom/client"
// 应用的全局样式文件
import "./index.css"
// 引入根组件，它是组件化渲染的开始，从该组件往外扩展
import App from "./App"

// 保留三个核心入口文件：根组件(App.js)、全局样式文件(index.css)、应用入口文件(index.js)。

const root = ReactDOM.createRoot(document.getElementById("root"))
// 渲染根组件APP到一个id为root的dom节点上
root.render(
	/**
	 * 严格模式节点需要去掉
	 * 1. 因为在严格模式下，会影响useEffect的执行时机
	 * 2. 产生的现象：因为它要检测额外的副作用，所以执行两次index.js
	 */
	// <React.StrictMode>
	<App />
	// </React.StrictMode>
)
