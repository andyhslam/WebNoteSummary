import React from "react"

// 3.子组件通过props接收父组件传过来的数据
// 函数式子组件
function FSon(props) {
	// 3-a.函数式组件直接通过参数获取props对象
	return <div>我是函数式子组件，{props.msg}</div>
}

// 类子组件
class CSon extends React.Component {
	// 3-b.类组件使用this.props获取props对象
	render() {
		return <div>我是类子组件，{this.props.msg}</div>
	}
}

// 类父组件
class App extends React.Component {
	// 1.父组件提供要传递的数据
	state = {
		message: "this is message",
	}
	render() {
		return (
			<div>
				<h1>父组件</h1>
				{/* 2.给子组件标签添加属性，值为state中的数据  */}
				<FSon msg={this.state.message} />
				<CSon msg={this.state.message} />
			</div>
		)
	}
}

export default App
