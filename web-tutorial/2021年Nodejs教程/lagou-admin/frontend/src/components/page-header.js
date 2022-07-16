import pageHeaderTpl from "../views/page-header.art"

const pageHeader = () => {
	const nav = {
		"#/index/users": {
			mainNav: "用户管理",
			subNav: "用户列表",
		},
		"#/index/positions": {
			mainNav: "职位管理",
			subNav: "职位列表",
		},
	}
	const hash = location.hash
	const pageHeaderHtml = pageHeaderTpl({
		mainNav: nav[hash]["mainNav"],
		subNav: nav[hash].subNav,
	})
	// 在id为content的元素前面，添加模板
	$("#content").before(pageHeaderHtml)
}

export default pageHeader
