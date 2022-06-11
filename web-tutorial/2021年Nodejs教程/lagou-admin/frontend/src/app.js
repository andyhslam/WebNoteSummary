// webpack自动将es6模块化转成浏览器能够兼容的，一直兼容到底
import indexTpl from "./views/index.art"

const html = indexTpl({})
$("#root").html(html)
