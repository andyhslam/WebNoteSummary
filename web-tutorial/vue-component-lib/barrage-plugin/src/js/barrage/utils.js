function isObject (value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

function isArray (value) {
  return Array.isArray(value)
}

// canvas有mesureText().width
function getTextWidth (content, fontSize) {
  // 创建临时元素
  const _span = document.createElement('span')
  // 放入弹幕文本
  _span.innerText = content
  // 设置文本字体大小
  _span.style.fontSize = fontSize + 'px'
  // span转换块级
  _span.style.position = 'absolute'
  // span放入body中
  document.body.appendChild(_span)
  // 获取span的宽度
  const width = _span.offsetWidth
  // 从body上删除该span
  document.body.removeChild(_span)
  // 返回span的宽度
  return width
}

function getTextPosition (canvas, fontSize, ctx) {
  const X = canvas.width
  let Y = canvas.height * Math.random()

  Y < fontSize && (Y = fontSize)
  const MaxY = canvas.height - fontSize
  Y > MaxY && (Y = MaxY)

  ctx.X = X
  ctx.Y = Y
}

export { isObject, isArray, getTextWidth, getTextPosition }