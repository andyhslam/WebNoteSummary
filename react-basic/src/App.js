// 定义函数组件
function HelloFn() {
	return <div>这是我的第一个函数组件!</div>
}

// 定义类组件
function App() {
	return (
		<div className="App">
			{/* 渲染函数组件 */}
			<HelloFn />
			<HelloFn></HelloFn>
		</div>
	)
}
export default App
