import { getTextWidth, getTextPosition } from './utils'

class Barrage {
  constructor(bg, fCtx) {
    this.content = bg.content
    this.runTime = bg.runTime
    this.barrage = bg
    this.ctx = fCtx
    this.initialize()
  }

  initialize () {
    this.color = this.barrage.color || this.ctx.color
    this.speed = this.barrage.speed || this.ctx.speed
    this.fontSize = 30
    this.width = getTextWidth(this.content, this.fontSize)
    getTextPosition(this.ctx.canvas, this.fontSize, this)
  }

  draw () {
    this.ctx.canvasCtx.font = this.fontSize + 'px Microsoft Yahei'
    this.ctx.canvasCtx.fillStyle = this.color
    this.ctx.canvasCtx.fillText(this.content, this.X, this.Y)
  }
}

export default Barrage