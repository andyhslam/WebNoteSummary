import { useEffect, useState } from "react"

/**
 * 需求描述：自定义hook函数，可以自动同步到本地LocalStorage
 * 1.message可以通过自定义传入默认初始值
 * 2.每次修改message数据的时候 都会自动往本地同步一份
 */
export function useLocalStorage(key, defaultValue) {
	const [message, setMessage] = useState(defaultValue)
	// 每次只要message变化，就会自动同步到本地LocalStorage
	useEffect(() => {
		window.localStorage.setItem(key, message)
	}, [key, message])
	return [message, setMessage]
}
