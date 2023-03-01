import React from "react"

/**
 * 函数组件的约定说明
 * 1. 函数组件的名称必须首字母大写，react内部会根据这个来判断是组件还是普通的HTML标签
 * 2. 函数组件必须有返回值，表示该组件的UI结构；如果不需要渲染任何内容，则返回null
 * 3. 组件就像HTML标签一样可以被渲染到页面中。组件表示一段结构内容，对于函数组件来说，渲染的内容就是函数的返回值
 * 4. 使用函数名称作为组件标签名称，可以成对出现也可以自闭合
 */

// 定义函数组件
function HelloFn() {
	return <div>这是我的第一个函数组件!</div>
}

/**
 * 类组件的约定说明
 * 1. 类组件名称也必须以大写字母开头
 * 2. 类组件应该继承React.Component父类，从而使用父类中提供的方法或属性
 * 3. 类组件必须提供render方法；render方法必须有返回值，表示该组件的UI结构
 */

// 定义类组件
class HelloComponent extends React.Component {
	render() {
		return <div>这是我的第一个类组件!</div>
	}
}

function App() {
	return (
		<div className="App">
			{/* 渲染函数组件 */}
			<HelloFn />
			<HelloFn></HelloFn>
			{/* 渲染类组件 */}
			<HelloComponent />
			<HelloComponent></HelloComponent>
		</div>
	)
}
export default App
