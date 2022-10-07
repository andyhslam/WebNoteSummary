/**
 * 在React中使用store的步骤：
 * 1.在组件中导入counterStore实例对象
 * 2.在组件中使用counterStore实例对象中的数据
 * 3.通过事件调用修改数据的方法修改store中的数据
 * 4.让组件响应数据变化
 */

import counterStore from "./store/counter.js"
// 连接mobx和React的中间件
import { observer } from "mobx-react-lite"

function App() {
	return (
		<div className="App">
			<button onClick={counterStore.addCount}>
				{counterStore.count}
			</button>
			{JSON.stringify(counterStore.filterList)}
			<button onClick={counterStore.changeList}>change list</button>
		</div>
	)
}

// 包裹组件让视图响应数据变化
export default observer(App)
