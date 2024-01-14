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
  }

  createBarragePool () {
    return this.barrageData.map(bg => new Barrage(bg, this))
  }
}

export default VideoBarrage