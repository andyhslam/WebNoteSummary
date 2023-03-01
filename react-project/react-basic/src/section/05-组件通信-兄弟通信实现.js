import React from "react"
/**
 * 目标任务：实现兄弟组件之间的通信
 * 核心思路： 通过状态提升机制，利用共同的父组件实现兄弟通信
 * 实现步骤：
 * 1.将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态
 * 2.要接收数据状态的子组件通过props接收数据
 * 3.要传递数据状态的子组件通过props接收方法，调用方法传递数据
 */

// 函数式子组件
function SonA(props) {
	return (
		<div>
			<span>this is SonA </span>
			<span>{props.sendAMsg}</span>
		</div>
	)
}

// 函数式子组件
function SonB(props) {
	const bMsg = "B组件的数据"
	const { getBMsg } = props
	return (
		<div>
			<span>this is SonB </span>
			<button onClick={() => getBMsg(bMsg)}>发送数据</button>
		</div>
	)
}

// 类父组件
class App extends React.Component {
	// 父组件提供要传递的数据
	state = {
		sendAMsg: "测试父传子的初始值",
	}
	// 声明一个传给B组件的方法
	getBMsg = (msg) => {
		console.log("msg", msg)
		this.setState({
			sendAMsg: msg,
		})
	}
	render() {
		return (
			<div>
				<SonA sendAMsg={this.state.sendAMsg} />
				<SonB getBMsg={this.getBMsg} />
			</div>
		)
	}
}

export default App
