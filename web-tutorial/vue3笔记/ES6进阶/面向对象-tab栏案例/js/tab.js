var that
class Tab {
	constructor(id) {
		// 获取元素
		that = this
		this.main = document.querySelector(id)
		this.add = this.main.querySelector(".tabadd")
		this.ul = this.main.querySelector(".fisrstnav ul:first-child")
		this.fsection = this.main.querySelector(".tabscon")
		this.init()
	}
	init() {
		this.updateNode()
		// 初始化操作(页面加载)让相关的元素绑定(点击)事件
		this.add.onclick = this.addTab
		for (var i = 0; i < this.lis.length; i++) {
			// 每个li的index属性值是当前li的索引号
			this.lis[i].index = i
			this.lis[i].onclick = this.toggleTab
			this.remove[i].onclick = this.removeTab
		}
	}
	// 动态添加元素，需要重新获取对应的元素
	updateNode() {
		this.lis = this.main.querySelectorAll("li")
		this.sections = this.main.querySelectorAll("section")
		this.remove = this.main.querySelectorAll(".icon-guanbi")
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
	// 清除所有li和section的类
	clearClass() {
		for (var i = 0; i < this.lis.length; i++) {
			this.lis[i].className = ""
			this.sections[i].className = ""
		}
	}
	// 2. 添加功能
	addTab() {
		that.clearClass()
		// 1.创建li元素和section元素
		var li =
			'<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
		var section =
			'<section class="conactive">测试' + Math.random() + "</section>"
		// 2.把这两个字符串元素追加到对应的父元素最后面
		that.ul.insertAdjacentHTML("beforeend", li)
		that.fsection.insertAdjacentHTML("beforeend", section)
		// 先添加li和section的新元素，然后获取所有的li和section元素，再给他们绑定事件
		that.init()
	}
	// 3. 删除功能
	removeTab(e) {
		// 阻止冒泡：防止触发li的切换点击事件
		e.stopPropagation()
		// 获取关闭按钮的父节点li的索引号(即关闭按钮的索引号)
		var index = this.parentNode.index
		// 根据索引号删除对应的li和section，remove()方法可以直接删除指定的元素。
		that.lis[index].remove()
		that.sections[index].remove()
		that.init()
		// 当删除不是选中状态的li的时候，原来的选中状态li保持不变
		if (document.querySelector(".liactive")) return
		// 当删除选中状态的li的时候，让它的前一个li处于选中状态。
		index--
		// 自动执行点击事件，不需要鼠标触发
		that.lis[index] && that.lis[index].click()
	}
	// 4. 修改功能
	editTab() {}
}

new Tab("#tab")
