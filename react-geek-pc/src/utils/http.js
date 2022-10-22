/**
 * 封装axios的三个步骤：
 * 1.实例化axios
 * 2.添加请求拦截器
 * 3.添加响应拦截器
 */

import axios from "axios"
import { getToken, history } from "@/utils"

// 实例化axios
const http = axios.create({
	baseURL: "http://geek.itheima.net/v1_0",
	timeout: 5000,
})

// 添加请求拦截器
http.interceptors.request.use(
	(config) => {
		const token = getToken()
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(error) => {
		return Promise.reject(error)
	}
)

// 添加响应拦截器
http.interceptors.response.use(
	(response) => {
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据做点什么
		return response.data
	},
	(error) => {
		// 超出 2xx 范围的状态码都会触发该函数。
		// 对响应错误做点什么
		console.dir(error)
		if (error.response.status === 401) {
			// reactRouter默认状态下，没有实例的说法，不支持在组件之外完成路由跳转，需要自己来实现跳回到登录页
			history.push("/login")
			console.dir("login")
		}
		return Promise.reject(error)
	}
)

export { http }
