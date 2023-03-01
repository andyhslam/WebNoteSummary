// 把所有的store子模块做统一处理

import React from "react"
import LoginStore from "./login.Store.js"
import UserStore from "./user.Store.js"
import ChannelStore from "./channel.Store.js"

class RootStore {
	constructor() {
		this.loginStore = new LoginStore()
		this.userStore = new UserStore()
		this.channelStore = new ChannelStore()
	}
}

// 实例化根Store
const rootStore = new RootStore()
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export { useStore }
