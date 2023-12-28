// 单件商品的数据
class UIGoods {
  constructor(g) {
    this.data = g
    this.choose = 0
  }

  // 获取总价
  getTotalPrice () {
    return this.data.price * this.choose
  }

  // 是否选中了此件商品
  isChoose () {
    return this.choose > 0
  }

  // 选择的数量+1
  increase () {
    this.choose++
  }

  // 选择的数量-1
  decrease () {
    if (this.choose === 0) {
      return
    }
    this.choose--
  }
}

// 整个界面的数据
class UIData {
  constructor() {
    const uiGoods = []
    for (let i = 0; i < goods.length; i++) {
      const uig = new UIGoods(goods[i])
      uiGoods.push(uig)
    }
    this.uiGoods = uiGoods
    this.deliveryThreshold = 30
    this.deliveryPrice = 5
  }

  getTotalPrice () {
    let sum = 0
    for (let i = 0; i < this.uiGoods.length; i++) {
      const g = this.uiGoods[i]
      sum += g.getTotalPrice()
    }
    return sum
  }

  // 增加某件商品的选中数量
  increase (index) {
    this.uiGoods[index].increase()
  }

  // 减少某件商品的选中数量
  decrease (index) {
    this.uiGoods[index].decrease()
  }

  // 得到总共的选择数量
  getTotalChooseNumber () {
    let sum = 0
    for (let i = 0; i < this.uiGoods.length; i++) {
      sum += this.uiGoods[i].choose
    }
    return sum
  }

  // 购物车中有没有东西
  hasGoodsInCar () {
    return this.getTotalChooseNumber() > 0
  }

  // 是否跨过了配送标准
  isCrossDeliveryThreshold () {
    return this.getTotalPrice() >= this.deliveryThreshold
  }

  isChoose (index) {
    return this.uiGoods[index].isChoose()
  }
}

// 整个界面
class UI {
  constructor() {
    this.uiData = new UIData()
    this.doms = {
      goodsContainer: document.querySelector('.goods-list'),
      deliveryPrice: document.querySelector('.footer-car-tip'),
      footerPay: document.querySelector('.footer-pay'),
      footerPayInnerSpan: document.querySelector('.footer-pay span'),
      totalPrice: document.querySelector('.footer-car-total'),
      car: document.querySelector('.footer-car'),
      badge: document.querySelector('.footer-car-badge '),
    }
    const carRect = this.doms.car.getBoundingClientRect()
    const jumpTarget = {
      x: carRect.left + carRect.width / 2,
      y: carRect.top + carRect.height / 3
    }
    this.jumpTarget = jumpTarget
    this.createHTML()
    this.updateFooter()
    this.listenEvent()
  }

  // 监听各种事件
  listenEvent () {
    this.doms.car.addEventListener('animationend', function () {
      // 此时的this指向注册事件的元素car
      this.classList.remove('animate')
    })
  }

  // 根据商品数量创建商品列表元素
  createHTML () {
    let html = ''
    for (let i = 0; i < this.uiData.uiGoods.length; i++) {
      const g = this.uiData.uiGoods[i]
      html += `<div class="goods-item">
        <img src="${g.data.pic}" class="goods-pic" width="80" height="100">
        <div class="goods-info">
          <h2 class="goods-title">${g.data.title}</h2>
          <p class="goods-desc">${g.data.desc}</p>
          <p class="goods-sell">
            <span>月售 ${g.data.sellNumber}</span>
            <span>好评率 ${g.data.favorRate}%</span>
          </p>
          <div class="goods-confirm">
            <p class="goods-price">
              <span class="goods-price-unit">￥</span>
              <span>${g.data.price}</span>
            </p>
            <div class="goods-btns">
              <i index="${i}" class="iconfont icon-jianhao"></i>
              <span>${g.choose}</span>
              <i index="${i}" class="iconfont icon-jiahao"></i>
            </div>
          </div>
        </div>
      </div>`
    }
    this.doms.goodsContainer.innerHTML = html
  }

  increase (index) {
    this.uiData.increase(index)
    this.updateGoodsItem(index)
    this.updateFooter()
    this.jump(index)
  }

  decrease (index) {
    this.uiData.decrease(index)
    this.updateGoodsItem(index)
    this.updateFooter()
  }

  // 更新某个商品元素的显示状态
  updateGoodsItem (index) {
    const goodsItemDom = this.doms.goodsContainer.children[index]
    console.log(goodsItemDom)
    if (this.uiData.isChoose(index)) {
      goodsItemDom.classList.add('active')
    } else {
      goodsItemDom.classList.remove('active')
    }
    const span = goodsItemDom.querySelector('.goods-btns span')
    span.textContent = this.uiData.uiGoods[index].choose
  }

  // 更新页脚
  updateFooter () {
    // 得到总价数据
    const total = this.uiData.getTotalPrice()
    // 设置配送费
    this.doms.deliveryPrice.textContent = `配送费￥${this.uiData.deliveryPrice}`
    if (this.uiData.isCrossDeliveryThreshold()) {
      // 到达起送点
      this.doms.footerPay.classList.add('active')
    } else {
      this.doms.footerPay.classList.remove('active')
      // 计算起送费还差多少
      const dis = Math.round(this.uiData.deliveryThreshold - total)
      this.doms.footerPayInnerSpan.textContent = `还差￥${dis}元起送`
    }
    // 设置总价
    this.doms.totalPrice.textContent = total.toFixed(2)
    // 设置购物车的样式状态
    if (this.uiData.hasGoodsInCar()) {
      this.doms.car.classList.add('active')
    } else {
      this.doms.car.classList.remove('active')
    }
    // 设置购物车中的数量
    this.doms.badge.textContent = this.uiData.getTotalChooseNumber()
  }

  // 购物车动画
  carAnimate () {
    this.doms.car.classList.add('animate')
  }

  // 抛物线跳跃的元素
  jump (index) {
    // 找到对应商品的加号
    const btnAdd = this.doms.goodsContainer.children[index].querySelector('.icon-jiahao')
    const rect = btnAdd.getBoundingClientRect()
    const start = {
      x: rect.left,
      y: rect.top
    }
    const div = document.createElement('div')
    div.className = 'add-to-car'
    const i = document.createElement('i')
    i.className = 'iconfont icon-jiahao'
    // 设置初始位置
    div.style.transform = `translateX(${start.x}px)`
    i.style.transform = `translateY(${start.y}px)`
    div.appendChild(i)
    document.body.appendChild(div)
    // console.log(rect, start, this.jumpTarget)
    // 读取元素的布局属性，都会导致强行渲染reflow；
    // h5的requestAnimationFrame不会导致reflow，它会等待渲染结束，才会做下一件事
    div.clientWidth
    // 设置结束位置
    /**
     * 实现抛物线的效果：
     * 1.div带着i元素横向移动，i元素自身纵向移动；
     * 2.外面的div元素控制横向坐标，里面的i元素控制纵向坐标；
     */
    div.style.transform = `translateX(${this.jumpTarget.x}px)`
    i.style.transform = `translateY(${this.jumpTarget.y}px)`

    const that = this
    div.addEventListener('transitionend', function () {
      div.remove()
      that.carAnimate()
      // once: true 表示事件仅触发一次
    }, { once: true })
  }
}

const ui = new UI()

// 事件委托
ui.doms.goodsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('icon-jiahao')) {
    const index = +e.target.getAttribute('index')
    ui.increase(index)
  } else if (e.target.classList.contains('icon-jianhao')) {
    const index = +e.target.getAttribute('index')
    ui.decrease(index)
  }
})