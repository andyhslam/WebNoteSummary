/**
 * JSX-模板精简原则：模板中的逻辑尽量保持精简
 * 复杂的多分支的逻辑，收敛为一个函数，通过一个专门的函数来写分支逻辑，模板中只负责调用函数。
 */

const getHtag = (type) => {
	let hTag
	switch (type) {
		case 1:
			hTag = <h1>this is h1</h1>
			break
		case 2:
			hTag = <h2>this is h2</h2>
			break
		case 3:
			hTag = <h3>this is h3</h3>
			break
		default:
			hTag = null
	}
	return hTag
}

function App() {
	return (
		<div className="App">
			{getHtag(1)}
			{getHtag(2)}
			{getHtag(3)}
			{getHtag()}
		</div>
	)
}

export default App
