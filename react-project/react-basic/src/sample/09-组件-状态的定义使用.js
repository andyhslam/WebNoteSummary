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

/**
 * 总结：
 * 1.编写组件其实就是编写原生js类或者函数
 * 2.定义状态必须通过state实例属性的方式，提供一个对象，名称是固定的就叫做state
 * 3.修改state中的任何属性，都不可以通过直接赋值，必须用setState方法，此方法是继承得到的。
 * 4.这里的this关键词，很容易出现指向错误的问题；上面的写法是最推荐和最规范的，没有this指向问题
 */

// 根组件
function App() {
	return (
		<div className="App">
			{/* 渲染类组件 */}
			<TestComponent />
		</div>
	)
}
export default App
