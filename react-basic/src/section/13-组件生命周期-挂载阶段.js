import React from "react"

class App extends React.Component {
	/**
	 * constructor钩子函数
	 * 触发时机：创建组件时，最先执行，初始化的时候只执行一次
	 * 作用：通常不需要在里面做什么事情，新版的react已经不再推荐使用constructor钩子。
	 */
	constructor() {
		super()
		console.log("constructor")
	}
	// 父组件提供要传递的数据
	state = {
		count: 0,
	}

	clickHandler = () => {
		this.setState({
			count: this.state.count + 1,
		})
	}

	/**
	 * componentDidMount钩子函数
	 * 触发时机：组件挂载（完成DOM渲染）后执行，初始化的时候执行一次
	 * 作用：1. 发送网络请求  2.DOM操作
	 */
	componentDidMount() {
		console.log("componentDidMount")
	}

	/**
	 * render钩子函数
	 * 触发时机：每次组件渲染都会触发
	 * 作用：渲染UI（注意：不能在里面调用setState()）
	 * 不能在里面调用setState的原因：
	 * 调用setState方法->修改数据，更新视图->重新渲染组件，触发render钩子函数；
	 * 如果此时在render里面调用setState，就会重复以上步骤，形成无限循环。
	 */
	render() {
		console.log("render")
		return (
			<div>
				<ul>
					<li>组件生命周期-挂载阶段</li>
					<li>这三个钩子函数的执行顺序：</li>
					<li>1.constructor钩子函数</li>
					<li>2.render钩子函数</li>
					<li>3.componentDidMount钩子函数</li>
				</ul>
				<button onClick={this.clickHandler}>{this.state.count}</button>
			</div>
		)
	}
}

export default App
