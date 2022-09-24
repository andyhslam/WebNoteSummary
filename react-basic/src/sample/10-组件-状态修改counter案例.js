import React from "react"

// 通过类组件修改状态的方式
class Counter extends React.Component {
	// 通过state定义组件状态
	state = {
		count: 0,
	}
	// 事件回调函数
	changeCount = () => {
		// 修改state的状态
		// 在react体系，‘数据不可变’，不可以直接做赋值修改，必须通过setState方法
		this.setState({
			count: this.state.count + 1,
		})
	}
	render() {
		// 2.使用状态
		return (
			<button onClick={this.changeCount}>{this.state.count}click</button>
		)
	}
}

function App() {
	return (
		<div className="App">
			{/* 渲染类组件 */}
			<Counter />
		</div>
	)
}
export default App
