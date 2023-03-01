import React from "react"

// 箭头函数写法
class Test extends React.Component {
	// 事件回调函数
	handler() {
		// 箭头函数的this指向是固定的，指向父作用域；普通函数的this指向是可变的，指向调用它的对象。
		console.log(this)
	}

	render() {
		/**
		 * 可以在事件绑定的位置，通过箭头函数的写法，直接沿用父级函数的this指向。
		 * 这个箭头函数() => this.handler()的父级函数是render函数；
		 * render函数中的this已经被react内部做了修正，这里的this就是指向当前的组件实例对象。
		 * 这个箭头函数中的this直接沿用，所以也是指向当前的组件实例对象。
		 */
		console.log("父级函数中的this指向为：", this)
		return <button onClick={() => this.handler()}>click</button>
	}
}

function App() {
	return (
		<div className="App">
			{/* 渲染类组件 */}
			<Test />
		</div>
	)
}
export default App
