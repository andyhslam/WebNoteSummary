class Page {
	constructor() {
		this.curPage = 1
		this.pageSize = 2
	}

	setCurPage(curPage) {
		this.curPage = curPage
	}
}

// 暴露Page类的实例：只要引用这个类，就能够拿到实例，多个地方都能使用这个实例(多个页面共享数据的特性)。
// 共享数据的特点：一个组件修改数据，另一个组件能读到修改后的数据。
export default new Page()
