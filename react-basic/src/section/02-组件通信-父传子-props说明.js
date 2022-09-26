import React from "react"

// 3.子组件通过props接收父组件传过来的数据
// 函数式子组件
function FSon(props) {
	// 3-a.函数式组件直接通过参数获取props对象
	console.log("函数式子组件的props", props)
	return (
		<div>
			<span>我是函数式子组件，{props.msg}</span>
			<ul>
				{props.list.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
			{props.child}
		</div>
	)
}

// 类子组件
class CSon extends React.Component {
	// 3-b.类组件使用this.props获取props对象
	render() {
		console.log("类子组件的props", this.props)
		return (
			<div>
				<span>我是类子组件</span>
				<p>{this.props.userInfo.name}</p>
				<button onClick={this.props.getMsg}>
					触发父组件传入的函数
				</button>
			</div>
		)
	}
}

// 类父组件
class App extends React.Component {
	// 1.父组件提供要传递的数据
	state = {
		message: "this is message",
		list: [1, 2, 3],
		userInfo: {
			name: "刘德华",
			age: 61,
		},
	}
	getMsg = () => {
		console.log("父组件的函数")
	}
	render() {
		return (
			<div>
				<h1>父组件</h1>
				{/* 2.给子组件标签添加属性，值为state中的数据  */}
				<FSon
					msg={this.state.message}
					list={this.state.list}
					child={<span>this is span</span>}
				/>
				<CSon userInfo={this.state.userInfo} getMsg={this.getMsg} />
			</div>
		)
	}
}

export default App
