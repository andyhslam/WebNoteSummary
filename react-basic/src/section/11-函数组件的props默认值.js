import React from "react"

/**
 * 函数组件的props默认值
 * 1.使用defaultProps（不再推荐）
 * 2.直接使用函数参数默认值（推荐）
 * 区别：第一种在使用的时候，组件内部已经有对应的prop；第二种只有传递的时候，组件内部才有这个prop。
 * 注意：函数组件，新版的react已经不再推荐使用defaultProps来添加默认值，而是推荐函数参数默认值来实现
 */

function List({ pageSize = 10 }) {
	return <div>此处展示props的默认值：{pageSize}</div>
}

// 使用defaultProps（不再推荐）
// List.defaultProps = { pageSize: 20 }

class App extends React.Component {
	// 父组件提供要传递的数据
	state = {}

	render() {
		return (
			<div>
				{/* 不传入pageSize属性 */}
				<List pageSize={30} />
			</div>
		)
	}
}

export default App
