import React from "react"

class Test extends React.Component {
	/**
	 * state中尽量保持精简的原则：
	 * 1.如果数据需要影响视图，就定义成组件的状态，定义到state中。
	 * 2.如果数据不和视图绑定，就定义成一个普通的实例属性。
	 */
	timer = null
	componentDidMount() {
		this.timer = setInterval(() => {
			console.log("开启定时器")
		}, 1000)
	}
	/**
	 * componentWillUnmount钩子函数
	 * 触发时机：组件卸载（从页面中消失）
	 * 作用：执行清理工作（比如：清理定时器等）
	 */
	componentWillUnmount() {
		console.log("componentWillUnmount")
		// 清理定时器
		clearInterval(this.timer)
	}
	render() {
		return <div>测试组件的卸载阶段</div>
	}
}

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
		flag: true,
	}

	clickHandler = () => {
		this.setState({
			count: this.state.count + 1,
			flag: !this.state.flag,
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
	 * componentDidUpdate钩子函数
	 * 触发时机：组件更新后（DOM渲染完毕）
	 * 作用：DOM操作，可以获取到更新后的DOM内容，不要直接调用setState
	 */
	componentDidUpdate() {
		console.log("componentDidUpdate")
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
					<h2>组件生命周期-挂载阶段，其三个钩子函数的执行顺序</h2>
					<li>1.constructor钩子函数</li>
					<li>2.render钩子函数</li>
					<li>3.componentDidMount钩子函数</li>
				</ul>
				<ul>
					<h2>组件生命周期-更新阶段，其两个钩子函数的执行顺序</h2>
					<li>1.render钩子函数</li>
					<li>2.componentDidUpdate钩子函数</li>
				</ul>
				<ul>
					<h2>组件生命周期-卸载阶段，其三个钩子函数的执行顺序</h2>
					<li>1.父组件的render钩子函数</li>
					<li>2.子组件的componentWillUnmount钩子函数</li>
					<li>3.父组件的componentDidUpdate钩子函数</li>
				</ul>
				{/* 通过切换数据状态，让Test组件进行销毁重建，就会发生组件卸载 */}
				{this.state.flag ? <Test /> : null}
				<button onClick={this.clickHandler}>{this.state.count}</button>
			</div>
		)
	}
}

export default App
