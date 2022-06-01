$.ajax({
	url: "/api/list", // 此js文件与index.html是同源的
	success(result) {
		let html = "<ul>"
		$.each(result.data, (index, value) => {
			html += "<li>" + value + "</li>"
		})
		html += "</ul>"
		$("#list").html(html)
	},
})
