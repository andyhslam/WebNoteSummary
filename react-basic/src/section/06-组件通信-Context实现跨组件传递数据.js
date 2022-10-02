import React, { createContext } from "react"

/**
 * 跨组件通信Context的实现步骤：
 * 1.导入createContext方法并执行，解构出Provider和Consumer对象
 * 2.使用Provider包裹上层组件，提供数据
 * 3.需要用到数据的组件使用Consumer包裹，获取数据
 * 注意事项：
 * 1.上层组件和下层组件关系是相对的，只要存在就可以使用；通常都会以App作为数据提供方。
 * 2.这里涉及到的语法都是固定的，有两处(语法)：
 * 1）提供的位置必须通过value属性提供数据；
 * 2）获取的位置，jsx表达式里面必须是箭头函数的写法 {value => 使用value做什么都可以}
 */

const { Provider, Consumer } = createContext()
// 函数式子组件
function ComA() {
	return (
		<div>
			<span>this is ComA </span>
			<ComC />
		</div>
	)
}

// 函数式子组件
function ComC() {
	return (
		<div>
			<span>this is ComC </span>
			{/* 通过Consumer使用数据 */}
			<Consumer>{(value) => <span>{value}</span>}</Consumer>
		</div>
	)
}

// 类父组件
class App extends React.Component {
	// 父组件提供要传递的数据
	state = {
		message: "this is message",
	}
	render() {
		return (
			// 使用Provider包裹根组件，并提供数据
			<Provider value={this.state.message}>
				<div>
					<ComA />
				</div>
			</Provider>
		)
	}
}

export default App
