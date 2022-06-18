import indexTpl from "../views/index.art"
import loginTpl from "../views/login.art"

const indexHtml = indexTpl({})
const loginHtml = loginTpl({})

const _handleSubmit = (router) => {
	return (e) => {
		e.preventDefault()
		router.go("/index")
	}
}

const index = (router) => {
	return (req, res, next) => {
		res.render(indexHtml)
	}
}

// 函数柯里化：此处是函数里面返回一个函数作为路由的回调函数
const login = (router) => {
	return (req, res, next) => {
		res.render(loginHtml)
		// 因为此处需要一个回调函数，所以_handleSubmit方法需要包装成一个柯里化函数
		$("#login").on("submit", _handleSubmit(router))
	}
}

export { index, login }
