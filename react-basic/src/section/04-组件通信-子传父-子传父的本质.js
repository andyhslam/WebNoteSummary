import React from "react"

/**
 * 父传子(props)：子组件通过props接收父组件传过来的数据
 * 子传父：子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传入即可
 */
// 函数式子组件
function Son({ getSonMsg }) {
	const clickHandler = () => {
		// 在子组件内部的函数里面，执行父组件传递过来的函数
		getSonMsg("子组件的数据")
	}
	return (
		<div>
			<span>this is son</span>
			<button onClick={clickHandler}>click</button>
		</div>
	)
}

// 类父组件
class App extends React.Component {
	// 父组件提供要传递的数据
	state = {
		list: [1, 2, 3],
	}
	// 父组件准备一个函数，传给子组件
	getSonMsg = (sonMsg) => {
		console.log("sonMsg", sonMsg)
	}
	render() {
		return (
			<div>
				<Son getSonMsg={this.getSonMsg} />
			</div>
		)
	}
}

export default App
