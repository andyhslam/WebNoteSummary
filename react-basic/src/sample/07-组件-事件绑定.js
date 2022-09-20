import React from "react"

// 定义函数组件
function HelloFn() {
	// 定义事件回调函数
	const clickHandler = () => {
		console.log("函数组件中的事件被触发了")
	}
	return (
		// 绑定事件
		<button onClick={clickHandler}>click me!</button>
	)
}

// 定义类组件
class HelloComponent extends React.Component {
	// 事件回调函数(标准写法可以避免this指向问题)
	// 如此这般，回调函数中的this指向的是当前的组件实例对象
	clickHandler = () => {
		console.log("类组件中的事件被触发了")
	}
	render() {
		// this指向当前的组件实例
		return <div onClick={this.clickHandler}>这是我的第一个类组件!</div>
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
