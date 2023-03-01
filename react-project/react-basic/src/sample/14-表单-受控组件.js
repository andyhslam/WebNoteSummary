import React from "react"

class InputComponent extends React.Component {
	// 1.声明React组件状态，用来控制input框的value属性。
	state = {
		message: "this is message",
	}
	// 声明事件回调函数
	inputChange = (e) => {
		// 4.调用setState方法，将文本框的值作为state状态的最新值
		this.setState({ message: e.target.value })
	}
	render() {
		return (
			// 2.给input框的value属性绑定React组件状态
			// 3.给input框绑定change事件，在事件处理程序中，通过事件对象e获取到当前文本框的值
			<input
				type="text"
				value={this.state.message}
				onChange={this.inputChange}
			/>
		)
	}
}

function App() {
	return (
		<div className="App">
			<InputComponent />
		</div>
	)
}
export default App
