import React from "react"

// 函数式子组件，渲染列表
function ListItem({ item, delItem }) {
	return (
		<div>
			<h3>{item.name}</h3>
			<p>{item.price}</p>
			<p>{item.info}</p>
			<button onClick={() => delItem(item.id)}>删除</button>
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
				name: "超级好吃的棒棒糖",
				price: 18.8,
				info: "开业大酬宾，全场8折",
			},
			{
				id: 2,
				name: "超级好吃的大鸡腿",
				price: 34.2,
				info: "开业大酬宾，全场8折",
			},
			{
				id: 3,
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
					<ListItem
						key={item.id}
						item={item}
						delItem={this.delItem}
					/>
				))}
			</div>
		)
	}
}

export default App
