import React from "react"
// 这个包里面有各种各样的内置的校验规则
import PropTypes from "prop-types"

/**
 * props校验-规则说明
 * 目标任务：掌握props常见的规则
 * 四种常见结构：
 * 1.常见类型：array、bool、func、number、object、string
 * 2.React元素类型：element(即JSX)
 * 3.必填项：isRequired；只需要在类型后面串联一个isRequired。
 * 4.特定的结构对象：shape({})
 */

const Test = ({ list, tListShape: tShape }) => {
	const lis = list.map((item, index) => (
		<li key={index}>
			{item.name}: {item.age}
		</li>
	))
	return (
		<ul>
			{lis}
			<span>
				{tShape.character}: {tShape.dynasty}
				{tShape.ad}
			</span>
		</ul>
	)
}

Test.propTypes = {
	// 限定list参数的类型必须是数组类型
	list: PropTypes.array.isRequired,
	tShape: PropTypes.shape({
		ad: PropTypes.number,
		dynasty: PropTypes.string,
		character: PropTypes.string,
	}),
}

class App extends React.Component {
	// 父组件提供要传递的数据
	state = {
		tList: [
			{ name: "Andy", age: 18 },
			{ name: "Leon", age: 20 },
		],
		tListShape: {
			ad: 1520,
			dynasty: "大明",
			character: "王阳明",
		},
	}

	render() {
		return (
			<div>
				<Test
					list={this.state.tList}
					tListShape={this.state.tListShape}
				/>
			</div>
		)
	}
}

export default App
