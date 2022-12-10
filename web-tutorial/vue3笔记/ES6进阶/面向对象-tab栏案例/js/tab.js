var that
class Tab {
	constructor(id) {
		// 获取元素
		that = this
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
			this.lis[i].onclick = this.toggleTab
		}
	}
	// 1. 切换功能
	toggleTab() {
		// console.log(this.index) 获取当前li的索引号
		// 此处的this指向函数的调用者(li)，所以要定义一个全局变量that保存constructor里面的this
		// 此处的that指向实例对象，因为是实例对象调用clearClass方法，所以clearClass方法里面的this就指向实例对象。
		that.clearClass()
		this.className = "liactive"
		that.sections[this.index].className = "conactive"
	}
	clearClass() {
		for (var i = 0; i < this.lis.length; i++) {
			this.lis[i].className = ""
			this.sections[i].className = ""
		}
	}
	// 2. 添加功能
	addTab() {}
	// 3. 删除功能
	removeTab() {}
	// 4. 修改功能
	editTab() {}
}

new Tab("#tab")
