const http = ({ url, type = "get", data = {} }) => {
	return new Promise((resolve, reject) => {
		// jquery的ajax返回defer(promise)，可以用promise获取数据
		$.ajax({
			url,
			type,
			data,
			dataType: "json", // 因为后端没有给响应首部设置Content-Type，所有在前端使用这个补救方法
			headers: {
				"X-Access-Token": localStorage.getItem("lg-token") || "",
			},
			// async: false,
			// async (默认:true) 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
			success(result, textStatus, jqXHR) {
				resolve({ result, textStatus, jqXHR })
			},
			error(err) {
				reject(err.message)
			},
		})
	})
}

export default http
