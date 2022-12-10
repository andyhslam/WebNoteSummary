class Tab {
	constructor(id) {
		// 获取元素
		this.main = document.querySelector(id)
		this.lis = this.main.querySelectorAll("li")
		this.sections = this.main.querySelectorAll("section")
		this.init()
	}
	init() {
		// 初始化操作(页面加载)让相关的元素(li)绑定(点击)事件
		for (var i = 0; i < this.lis.length; i++) {
			// 每个li的index属性值是当前li的索引号
			this.lis[i].index = i
			this.lis[i].onclick = function () {
				// 获取每个li的索引号
				console.log(this.index)
			}
		}
	}
	// 1. 切换功能
	toggleTab() {}
	// 2. 添加功能
	addTab() {}
	// 3. 删除功能
	removeTab() {}
	// 4. 修改功能
	editTab() {}
}

new Tab("#tab")
