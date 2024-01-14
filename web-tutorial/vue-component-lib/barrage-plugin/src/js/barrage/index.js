import { isObject, isArray } from './utils'
import Barrage from './Barrage'

class VideoBarrage {
  constructor(video, canvas, options) {
    if (!video || !canvas || !options || !isObject(options)) return
    if (!options.barrageData || !isArray(options.barrageData)) return

    this.video = video
    this.canvas = canvas
    this.canvasCtx = canvas.getContext('2d')
    this.canvas.width = video.offsetWidth
    this.canvas.height = video.offsetHeight
    this.barragePaused = true

    Object.assign(this, options, {
      content: '白皇后',
      speed: 2,
      runTime: 0,
      color: '#fff'
    })

    this.barragePool = this.createBarragePool()
    this.render()
  }

  createBarragePool () {
    return this.barrageData.map(bg => new Barrage(bg, this))
  }

  render () {
    // 先清除画布，再画，然后走动画
    this.clearRect()
    this.drawBarrage()
    // 因为requestAnimationFrame的回调函数render里面的this指向window，所以用bind来修正this的指向
    !this.barragePaused && window.requestAnimationFrame(this.render.bind(this))
  }

  // 清除画布
  clearRect () {
    this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  // 绘制弹幕
  drawBarrage () {
    // 获取当前video的时间
    let currentTime = this.video.currentTime
    this.barragePool.forEach((bg) => {
      // 第一次绘制时，还没给stopDrawing赋值，它为undefined，所以能继续往下执行
      if (!bg.stopDrawing && currentTime >= bg.runTime) {
        if (!bg.isInitialized) {
          // 没有初始化的时候，才会初始化
          bg.initialize()
          bg.isInitialized = true
        }
        // 弹幕向左移动
        bg.X -= bg.speed
        // 真正开始绘制
        bg.draw()

        // 左移的弹幕坐标在画板的外面时，停止绘制
        if (bg.X <= this.canvas.width * -1) {
          // 添加停止绘制的标志
          bg.stopDrawing = true
        }
      }
    })
  }
}

export default VideoBarrage