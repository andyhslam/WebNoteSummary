/**
 * 在React中使用store的步骤：
 * 1.在组件中导入counterStore实例对象
 * 2.在组件中使用counterStore实例对象中的数据
 * 3.通过事件调用修改数据的方法修改store中的数据
 * 4.让组件响应数据变化
 */

import { useStore } from "./store/index.js"
// 连接mobx和React的中间件
import { observer } from "mobx-react-lite"

function App() {
	// 注意：解构赋值到store实例对象就够了，防止破坏响应式，只需解构用到的store
	const { counterStore, listStore } = useStore()
	return (
		<div className="App">
			<button onClick={counterStore.addCount}>
				{counterStore.count}
			</button>
			<button onClick={listStore.addList}>
				{listStore.list.join("-")}
			</button>
		</div>
	)
}

// 包裹组件让视图响应数据变化
export default observer(App)
