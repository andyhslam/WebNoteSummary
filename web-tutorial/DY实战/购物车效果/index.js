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
    this.doms = { goodsContainer: document.querySelector('.goods-list') }
    this.createHTML()
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
              <i class="iconfont icon-jianhao"></i>
              <span>${g.choose}</span>
              <i class="iconfont icon-jiahao"></i>
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
  }

  decrease (index) {
    this.uiData.decrease(index)
    this.updateGoodsItem(index)
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

  }
}

const ui = new UI()