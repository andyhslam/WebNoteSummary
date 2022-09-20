import React from "react"

// 组件状态，以类组件作为演示
class TestComponent extends React.Component {
	/**
	 * 1.定义组件状态
	 * 通过class的实例属性state来初始化
	 * state的值是一个对象结构，表示一个组件可以有多个数据状态
	 */
	state = {
		// 在这里可以定义各种属性，而这些属性全都是当前组件的状态
		name: "cp teacher",
	}
	// 事件回调函数
	changeName = () => {
		// 3.修改state的状态
		// 注意：在React中，不可以直接做赋值修改，必须通过setState方法
		this.setState({
			name: "支离破碎",
		})
	}
	render() {
		// 2.使用状态
		return (
			<div>
				this is TestComponent! 当前name为：{this.state.name}
				<button onClick={this.changeName}>修改name</button>
			</div>
		)
	}
}

function App() {
	return (
		<div className="App">
			{/* 渲染类组件 */}
			<TestComponent />
		</div>
	)
}
export default App
