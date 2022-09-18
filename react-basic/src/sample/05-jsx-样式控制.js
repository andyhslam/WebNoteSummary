/**
 * jsx样式控制
 * 1.行内样式
 * 2.类名样式
 */
import "./app.css"
const styleObj = {
	color: "red",
	fontSize: "20px",
}

function App() {
	return (
		<div className="App">
			<span style={styleObj}>this is span</span>
			<span className="active">测试类名样式</span>
		</div>
	)
}

export default App
