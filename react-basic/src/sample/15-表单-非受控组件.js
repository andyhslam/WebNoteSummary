// 1.导入createRef函数
import React, { createRef } from "react"

class InputComponent extends React.Component {
	// 使用createRef产生一个存放dom的对象容器
	// 2.调用createRef函数，创建一个ref对象，存储到名为msgRef的实例属性中
	msgRef = createRef()

	// 4.在按钮的事件处理程序中，通过msgRef.current即可拿到input对应的dom元素，
	// 而其中msgRef.current.value拿到的就是文本框的值。
	changeHandler = () => {
		console.log(this.msgRef.current)
		console.log(this.msgRef.current.value)
	}

	render() {
		return (
			<div>
				{/* 3.为input添加ref属性，值为msgRef，获取真实dom */}
				<input ref={this.msgRef} />
				<button onClick={this.changeHandler}>点击获取输入框的值</button>
			</div>
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
