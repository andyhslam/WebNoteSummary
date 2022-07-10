export const usersList = () => {
	return $.ajax({
		url: "/api/users/list",
		type: "get",
		headers: {
			"X-Access-Token": localStorage.getItem("lg-token") || "",
		},
		// async: false,
		// async (默认:true) 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
		success(result) {
			return result
		},
	})
}
