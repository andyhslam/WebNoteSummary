/**
 * jsx中可以使用的js表达式
 * 1.识别常规的变量
 * 2.原生js方法调用
 * 3.三元运算符
 */

const name = "柴柴"
const getAge = () => {
	return 18
}
const flag = true

function App() {
	return (
		<div className="App">
			<h1>你好，我叫{name}</h1>
			<h2>{getAge()}</h2>
			<h3>{flag ? "真棒" : "真菜"}</h3>
		</div>
	)
}

export default App
