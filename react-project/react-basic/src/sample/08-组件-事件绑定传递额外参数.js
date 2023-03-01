function HelloFn() {
	/**
	 * 传递自定义参数
	 * 1.只需要一个额外参数：{clickHandler} -> {() => clickHandler("自定义参数")}
	 * 2.既需要事件对象e，也需要额外参数：{clickHandler} -> {(e) => clickHandler(e, "自定义参数")}
	 */
	const clickToJump = (e) => {
		e.preventDefault()
		console.log("a链接点击不跳转", e)
	}
	const clickHandler = (e, msg) => {
		console.log("函数组件中的事件被触发了", e, msg)
	}
	return (
		<>
			<a onClick={clickToJump} href="https://www.baidu.com">
				百度
			</a>
			{/* 改造成箭头函数调用的写法，返回一个函数的调用，给函数参数传递实参 */}
			<button onClick={(e) => clickHandler(e, "this is msg")}>
				click me!
			</button>
		</>
	)
}

function App() {
	return (
		<div className="App">
			{/* 渲染函数组件 */}
			<HelloFn />
		</div>
	)
}
export default App
