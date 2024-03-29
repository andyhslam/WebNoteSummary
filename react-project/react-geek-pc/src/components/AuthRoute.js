// 判断本地是否有token，如果有，就直接正常渲染子组件，否则就重定向到登录路由

// 高阶组件:把一个组件当成另外一个组件的参数传入，然后通过一定的判断，返回新的组件

import { getToken } from "@/utils"
import { Navigate } from "react-router-dom"

function AuthRoute({ children }) {
	const isToken = getToken()
	if (isToken) {
		return <>{children}</>
	} else {
		return <Navigate to="/login" replace />
	}
}

export default AuthRoute
