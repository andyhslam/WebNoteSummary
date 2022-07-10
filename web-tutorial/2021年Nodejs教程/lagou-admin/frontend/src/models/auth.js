export const auth = () => {
	// 返回promise
	return $.ajax({
		url: "/api/users/isAuth",
		type: "get", // get请求可省略不写
		dataType: "json", // 因为后端没有给响应首部设置Content-Type，所有在前端使用这个补救方法
		headers: {
			"X-Access-Token": localStorage.getItem("lg-token") || "",
		},
		success(result) {
			return result
		},
	})
}
