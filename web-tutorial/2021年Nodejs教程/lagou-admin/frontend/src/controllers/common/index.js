import page from "../../bus/page.js"
import * as removeModel from "../../models/remove.js"

// 绑定事件的方法
const remove = ({ $box, url, loadData, dataList }) => {
	// 绑定删除事件，绑定代理
	$box.on("click", ".remove", async function () {
		// 坑：箭头函数的this，其作用域指向会变；普通函数能保证this的作用域指向正确
		const result = await removeModel.remove({ url, id: $(this).data("id") })
		if (result.ret) {
			await loadData()
			const uls = dataList.length
			const isLastPage = Math.ceil(uls / page.pageSize) === page.curPage
			const isLastOne = uls % page.pageSize === 1
			if (uls === 1) {
				page.setCurPage(1)
			} else if (isLastPage && isLastOne && page.curPage > 0) {
				page.setCurPage(page.curPage - 1)
			}
		}
	})
}

export { remove }
