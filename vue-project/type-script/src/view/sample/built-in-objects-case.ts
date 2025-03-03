// 代码雨案例
const canvas: HTMLCanvasElement = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
// 设置成可视区域的宽高
canvas.width = screen.availWidth
canvas.height = screen.availHeight

const canStr: string[] = '米仓凉子'.split('')
// 用数组来维护文字的位置，根据屏幕的宽度绘制代码雨的位置(一个字看成10px)
const canArr = Array(Math.ceil(canvas.width / 10)).fill(0)
console.log(canArr)

const rain = () => {
  ctx.fillStyle = 'rgba(0,0,0,0.05)'
  // 背景从上往下铺满
  ctx?.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#0f0'
  canArr.forEach((item, index) => {
    ctx?.fillText(
      canStr[Math.floor(canStr.length * Math.random())],
      index * 10,
      item + 10
    )
    canArr[index] =
      item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10
  })
}
setInterval(rain, 40)
