import { useState } from "react"

// 需求描述：自定义一个hook函数，实现获取滚动距离Y
export function useWindowScroll() {
	const [y, setY] = useState(0)
	// 在滚动行为发生时，不断获取滚动值，然后赋值给y
	window.addEventListener("scroll", () => {
		const h = document.documentElement.scrollTop
		setY(h)
	})
	return [y]
}
