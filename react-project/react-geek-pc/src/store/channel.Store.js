import { makeAutoObservable } from "mobx"
import { http } from "@/utils"

class ChannelStore {
	channelList = []
	constructor() {
		makeAutoObservable(this)
	}
	// 在Layout组件调用该函数，然后在其两个子模块(article和publish)通过useStore去使用。
	loadChannelList = async () => {
		const { data } = await http.get("/channels")
		this.channelList = data.channels
	}
}

export default ChannelStore
