import React from "react"
// 这个包里面有各种各样的内置的校验规则
import PropTypes from "prop-types"

const Test = ({ list }) => {
	const lis = list.map((item) => <li key={item}>{item}</li>)
	return <ul>{lis}</ul>
}

Test.propTypes = {
	// 限定list参数的类型必须是数组类型
	list: PropTypes.array,
}

class App extends React.Component {
	// 父组件提供要传递的数据
	state = {
		tList: [1, 2, 3],
	}

	render() {
		return (
			<div>
				<Test list={this.state.tList} />
			</div>
		)
	}
}

export default App
