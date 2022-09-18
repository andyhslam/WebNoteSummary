/**
 * JSX中可以使用的js表达式
 * 1.识别常规的变量
 * 2.原生js方法调用
 * 3.三元运算符
 */

const name = "柴柴"
const getAge = () => {
	return 18
}
const flag = true

const songs = [
	{ id: 1, name: "痴心绝对" },
	{ id: 2, name: "像我这样的人" },
	{ id: 3, name: "南山南" },
]

function App() {
	return (
		<div className="App">
			<h1>你好，我叫{name}</h1>
			<h2>{getAge()}</h2>
			<h3>{flag ? "真棒" : "真菜"}</h3>
			<ul>
				<h1>JSX列表渲染</h1>
				{songs.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	)
}

export default App
