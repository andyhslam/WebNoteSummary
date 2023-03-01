/**
 * 概念：JSX是 JavaScript XML（HTML）的缩写，表示在JS代码中书写HTML结构
 * 作用：在React中创建HTML结构（页面UI结构）
 * jsx中可以使用的js表达式：
 * 1.识别常规的变量
 * 2.原生js方法调用
 * 3.三元运算符
 * 特别注意：if语句/switch-case语句/变量声明语句，这些叫做语句，不是表达式，不能出现在{}中
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
