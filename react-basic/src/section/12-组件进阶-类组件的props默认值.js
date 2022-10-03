import React from "react"

/**
 * 类组件的props默认值
 * 1.使用defaultProps（不推荐）
 * 2.使用类静态属性声明默认值，static defaultProps = {}（推荐）
 * 相同点：第一种和第二种写法在使用的时候，组件内部都已经有对应的prop。
 */

class List extends React.Component {
	static defaultProps = {
		pageSize: 10,
	}
	render() {
		return <div>此处展示props的默认值：{this.props.pageSize}</div>
	}
}
// 这种其实也是往类身上挂载静态属性
// List.defaultProps = { pageSize: 20 }

class App extends React.Component {
	// 父组件提供要传递的数据
	state = {}

	render() {
		return (
			<div>
				<List pageSize={30} />
			</div>
		)
	}
}

export default App
