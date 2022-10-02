import React from "react"

/**
 * children属性
 * 目标任务：掌握props中children属性的用法
 * children属性是什么：
 * 表示该组件的子节点，只要组件标签的内部有子节点(即有内容)，组件的props中就有该属性
 * children可以是 普通文本、普通标签元素、函数/对象、JSX表达式
 */

// 函数式子组件，渲染列表
function ListItem({ item, delItem, children }) {
	return (
		<div>
			<h3>{item.name}</h3>
			<p>{item.price}</p>
			<p>{item.info}</p>
			<p>{children[0]}</p>
			<p>{children[3]}</p>
			<button onClick={() => delItem(item.id)}>删除{children[1]}</button>
			<button onClick={children[2]}>执行children的函数</button>
		</div>
	)
}

// 类父组件，提供列表，渲染ListItem组件
class App extends React.Component {
	// 父组件提供要传递的数据
	state = {
		list: [
			{
				id: 1,
				child: "child1",
				name: "超级好吃的棒棒糖",
				price: 18.8,
				info: "开业大酬宾，全场8折",
			},
			{
				id: 2,
				child: "child2",
				name: "超级好吃的大鸡腿",
				price: 34.2,
				info: "开业大酬宾，全场8折",
			},
			{
				id: 3,
				child: "child3",
				name: "超级无敌的冰激凌",
				price: 14.2,
				info: "开业大酬宾，全场8折",
			},
		],
	}
	// 给子组件传递的函数
	delItem = (id) => {
		this.setState({
			list: this.state.list.filter((v) => v.id !== id),
		})
	}
	render() {
		return (
			<div>
				{this.state.list.map((item) => (
					<ListItem key={item.id} item={item} delItem={this.delItem}>
						{/* 普通文本 */}
						this is child
						{/* 普通标签元素 */}
						<span>{item.child}</span>
						{/* 函数/对象 */}
						{() => console.log(item.child)}
						{/* JSX表达式 */}
						{
							<span>
								{"this is span tag"}
								{item.id}
							</span>
						}
					</ListItem>
				))}
			</div>
		)
	}
}

export default App
