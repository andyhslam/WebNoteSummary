import React from "react"

class Test extends React.Component {
	// 构造函数做初始化
	constructor() {
		super()
		/**
		 * 第一个this.handler是挂载到实例属性上；
		 * 第二个this.handler是取得下面的方法，强行绑定this。
		 * 使用bind强行修正this指向；
		 * 相当于在类组件初始化的阶段，就可以把回调函数的this修正到永远指向当前组件的实例对象。
		 */
		this.handler = this.handler.bind(this)
	}
	// 事件回调函数
	handler() {
		// 箭头函数的this指向是固定的，指向父作用域；普通函数的this指向是可变的，指向调用它的对象。
		console.log(this)
	}

	render() {
		return <button onClick={this.handler}>click</button>
	}
}

function App() {
	return (
		<div className="App">
			{/* 渲染类组件 */}
			<Test />
		</div>
	)
}
export default App
