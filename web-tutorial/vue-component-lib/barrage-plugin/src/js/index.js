import VideoBarrage from './barrage/index.js'

// 弹幕数据
const barrageData = [
  {
    content: '天空之城1',
    speed: 2,
    runTime: 0,
    color: 'red',
  },
  {
    content: '天空之城2',
    speed: 4,
    runTime: 5,
    color: 'green',
  },
  {
    content: '天空之城3',
    speed: 4,
    runTime: 8,
    color: 'orange',
  },
  {
    content: '天空之城4',
    speed: 4,
    runTime: 8,
    color: 'blue',
  },
  {
    content: '天空之城5',
    speed: 4,
    runTime: 8,
    color: 'green',
  },
  {
    content: '天空之城6',
    speed: 4,
    runTime: 10,
    color: 'red',
  },
  {
    content: '天空之城7',
    speed: 4,
    runTime: 10,
    color: 'green',
  },
]


  // 函数参数是该函数作用域的临时变量，函数执行完即销毁；此处的doc是该作用域的局部变量
  ; ((doc) => {
    // 获取video和canvas的DOM对象
    const oBarrageVideo = doc.getElementById('J_barrageVideo')
    const oBarrageCanvas = doc.getElementById('J_barrageCanvas')
    const oBarrageInput = doc.getElementsByClassName('barrage-input')[0]
    const oBarrageBtn = doc.getElementsByClassName('barrage-btn')[0]
    const oColorInput = doc.getElementsByClassName('color-input')[0]

    // 模块初始化函数
    const init = () => {
      // 实例化弹幕插件
      window.videoBarrage = new VideoBarrage(oBarrageVideo, oBarrageCanvas, { barrageData })

      bindEvent()
    }

    // 绑定事件处理函数的管理函数
    function bindEvent () {
      oBarrageVideo.addEventListener('play', handleVideoPlay, false)
      oBarrageVideo.addEventListener('pause', handleVideoPause, false)
      oBarrageVideo.addEventListener('seeked', handleVideoSeek, false)
      oBarrageBtn.addEventListener('click', handleBarrageBtnClick, false)
    }

    function handleVideoPlay () {
      // 不能暂停了
      videoBarrage.barragePaused = false
      videoBarrage.render()
    }

    function handleVideoPause () {
      videoBarrage.barragePaused = true
    }

    // 操作播放进度条的函数
    function handleVideoSeek () {
      videoBarrage.reset()
    }


    function handleBarrageBtnClick () {
      if (videoBarrage.barragePaused) return
      const inputValue = oBarrageInput.value.trim()
      if (!inputValue.length) return
      const colorValue = oColorInput.value
      const currentTime = oBarrageVideo.currentTime

      const _data = {
        content: inputValue,
        color: colorValue,
        runTime: currentTime
      }

      videoBarrage.addBarrage(_data)
      oBarrageInput.value = ''
    }

    init()
  })(document)