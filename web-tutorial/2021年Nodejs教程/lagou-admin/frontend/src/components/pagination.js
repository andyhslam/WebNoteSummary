import usersListPageTpl from "../views/users-page.art"
import page from "../bus/page.js"

const pageSize = page.pageSize

// 设置页码高亮
const _setPageActive = (index) => {
	$("#users-page #users-page-list li:not(:first-child, :last-child)")
		.eq(index - 1)
		.addClass("active")
		.siblings()
		.removeClass("active")
}

// 分页器
const pagination = (data) => {
	const total = data.length
	const pageCount = Math.ceil(total / pageSize)
	const pageArray = new Array(pageCount)
	const htmlPage = usersListPageTpl({
		pageArray,
	})
	$("#users-page").html(htmlPage)
	_setPageActive(page.curPage)
	_bindEvent(pageCount)
}

const _bindEvent = (pageCount) => {
	// 绑定分页事件
	$("#users-page").on(
		"click",
		"#users-page-list li:not(:first-child, :last-child)",
		function () {
			// this指向代理的那个元素(li)
			const pageIndex = $(this).index()
			page.setCurPage(pageIndex)
			$("body").trigger("changeCurPage", pageIndex)
			_setPageActive(pageIndex)
		}
	)

	// 向前翻页
	$("#users-page").on(
		"click",
		"#users-page-list li:first-child",
		function () {
			if (page.curPage > 1) {
				page.setCurPage(page.curPage - 1)
				$("body").trigger("changeCurPage", page.curPage)
				_setPageActive(page.curPage)
			}
		}
	)

	// 向后翻页
	$("#users-page").on("click", "#users-page-list li:last-child", function () {
		if (page.curPage < pageCount) {
			page.setCurPage(page.curPage + 1)
			$("body").trigger("changeCurPage", page.curPage)
			_setPageActive(page.curPage)
		}
	})
}

export { pagination }
