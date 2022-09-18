/**
 * JSX条件渲染
 * 技术方案：可以使用三元运算符、逻辑与(&&)运算符
 */

const flag = false

function App() {
	return (
		<div className="App">
			{flag ? (
				<div>
					<span>this is span</span>
				</div>
			) : null}

			{!flag && <span>this is span</span>}
		</div>
	)
}

export default App
