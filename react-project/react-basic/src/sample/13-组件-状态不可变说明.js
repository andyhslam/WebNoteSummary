import React from "react"

// 通过类组件修改状态的方式
class Counter extends React.Component {
	// 通过state定义组件状态
	state = {
		count: 0,
		list: [1, 2, 3],
		person: {
			name: "jack",
			age: 20,
		},
	}
	// 事件回调函数
	changeCount = () => {
		// 修改state的状态
		// 在react体系，‘数据不可变’，不可以直接做赋值修改，必须通过setState方法
		this.setState({
			count: this.state.count + 1,
			// list: [...this.state.list, 4], // 增加操作
			list: this.state.list.filter((v) => v !== 2), // 删除操作
			person: {
				...this.state.person,
				name: "rose",
			},
		})
	}
	render() {
		return (
			<>
				<ul>
					{this.state.list.map((v) => (
						<li key={v}>{v}</li>
					))}
				</ul>
				<h2>{this.state.person.name}</h2>
				<span>{this.state.count}</span>
				<button onClick={this.changeCount}>click</button>
			</>
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
