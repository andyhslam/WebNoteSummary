import Carousel from './components/Carousel'
import CarItem from './components/Carousel/Item'

import TreeMenu from './components/TreeMenu'
import MenuItem from './components/TreeMenu/MenuItem'
import SubMenu from './components/TreeMenu/SubMenu'
import ReSubMenu from './components/TreeMenu/ReSubMenu'

import Selector from './components/Selector'

import Magnifier from './components/Magnifier'

import './assets/css/iconfont.css'

let JsppUI = {}
JsppUI.install = function (Vue) {
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarItem.name, CarItem)

  Vue.component(TreeMenu.name, TreeMenu)
  Vue.component(MenuItem.name, MenuItem)
  Vue.component(SubMenu.name, SubMenu)
  Vue.component(ReSubMenu.name, ReSubMenu)

  Vue.component(Selector.name, Selector)

  Vue.component(Magnifier.name, Magnifier)
}

export default JsppUI