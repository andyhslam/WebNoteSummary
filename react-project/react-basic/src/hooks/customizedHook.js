// 自定义hook
import { useWindowScroll } from "./useWindowScroll.js"
import { useLocalStorage } from "./useLocalStorage.js"

function App() {
	// 在函数组件的最外层执行
	const [y] = useWindowScroll()
	const [message, setMessage] = useLocalStorage("hook-key", "阿菲")
	setTimeout(() => {
		setMessage("阿飞与阿基")
	}, 2000)
	return (
		<div style={{ height: "1200px" }}>
			<p>滚动距离Y：{y}</p>
			<p>自动同步到本地LocalStorage：{message}</p>
		</div>
	)
}

export default App
