import page from "../../bus/page.js"
import * as removeModel from "../../models/remove.js"

// 绑定事件的方法
const remove = ({ $box, url, loadData, state }) => {
	// 绑定删除事件，绑定代理
	$box.off("click").on("click", ".remove", async function () {
		// 引用类型：实时取到外部对象的数值
		const length = state.list.length
		// 坑：箭头函数的this，其作用域指向会变；普通函数能保证this的作用域指向正确
		const result = await removeModel.remove({ url, id: $(this).data("id") })
		if (result.ret) {
			loadData()
			const isLastPage =
				Math.ceil(length / page.pageSize) === page.curPage
			const isLastOne = length % page.pageSize === 1
			if (length === 1) {
				page.setCurPage(1)
			} else if (isLastPage && isLastOne && page.curPage > 0) {
				page.setCurPage(page.curPage - 1)
			}
		}
	})
}

export { remove }
