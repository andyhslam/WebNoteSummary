/**
 * useRef使用
 * 使用场景：
 * 在函数组件中获取真实的dom元素对象或者是组件对象
 * 使用步骤：
 * 1.导入useRef函数
 * 2.执行useRef函数并传入null，返回值为一个对象，内部有一个current属性存放拿到的dom对象（或者组件实例）
 * 3.通过ref绑定要获取的元素或者组件
 * 获取组件实例：
 * 由于函数组件不需要实例化，没有实例，所以不能使用ref获取函数组件的实例；如果想获取组件实例，必须是类组件。
 */

import React, { useRef, useEffect } from "react"

class TestC extends React.Component {
	// state是被react接管的一个特殊的实例属性
	state = {
		name: "test-child",
	}
	getName = () => {
		return this.state.name
	}
	render() {
		return (
			<div>
				<span>我是类组件</span>
			</div>
		)
	}
}
function App() {
	const testRef = useRef(null)
	const h1Ref = useRef(null)
	/**
	 * useEffect回调函数是在dom渲染完毕之后执行
	 * 和vue里的watch，效果比较像，但是执行时机不同
	 */
	useEffect(() => {
		console.log("testRef", testRef.current)
		console.log("h1Ref", h1Ref.current)
	}, [])
	return (
		<div>
			{/* 使用ref获取类组件的实例 */}
			<TestC ref={testRef} />
			{/* 使用ref获取函数组件或者类组件的dom元素对象 */}
			<h1 ref={h1Ref}>this is h1</h1>
		</div>
	)
}

export default App
