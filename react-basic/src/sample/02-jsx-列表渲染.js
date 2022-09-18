/**
 * JSX列表渲染
 * 技术方案：使用数组的map方法
 * 1.key不会出现在真实的dom结构中，是 React 内部用来进行性能优化时使用
 * 2.key在当前列表中要唯一的字符串或者数值（String/Number），提高diff性能
 */

const songs = [
	{ id: 1, name: "痴心绝对" },
	{ id: 2, name: "像我这样的人" },
	{ id: 3, name: "南山南" },
]

function App() {
	return (
		<div className="App">
			<ul>
				{songs.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	)
}

export default App
