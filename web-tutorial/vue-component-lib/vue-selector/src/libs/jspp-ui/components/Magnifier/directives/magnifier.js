import { getStyle } from '@/utils/tools.js'

export default {
  mounted (el) {
    const oImgWrap = el,
      oMagWrap = oImgWrap.querySelector('.mag-wrap'),
      oMagImg = oMagWrap.querySelector('.mag-img'),
      imgWidth = getStyle(oImgWrap, 'width'),
      imgHeight = getStyle(oImgWrap, 'height'),
      magWidth = getStyle(oMagWrap, 'width'),
      magHeight = getStyle(oMagWrap, 'height'),
      imgX = oImgWrap.offsetLeft,
      imgY = oImgWrap.offsetTop
    console.log(oMagImg)
    console.log(imgWidth)
    console.log(imgHeight)
    console.log(magWidth)
    console.log(magHeight)
    console.log(imgX, imgY)

    const init = () => {
      bindEvent()
    }

    function bindEvent () {
      // 鼠标移进来的时候，显示放大镜并且要定位
      oImgWrap.addEventListener('mouseover', function (e) {
        oMagWrap.classList.add('show')
        const { x, y } = getXY(e)
        showMag(x, y)
        document.addEventListener('mousemove', handleMouseMove, false)
      }, false)

      oImgWrap.addEventListener('mouseout', handleMouseOut, false)
    }

    // 鼠标移动的时候，要重新定位
    function handleMouseMove (e) {
      const { x, y, mouseX, mouseY } = getXY(e)
      showMag(x, y, mouseX, mouseY)
    }

    // 鼠标离开的时候，不显示放大镜并且解绑事件
    function handleMouseOut () {
      oMagWrap.classList.remove('show')
      document.removeEventListener('mousemove', handleMouseMove, false)
    }

    function showMag (x, y, mouseX, mouseY) {
      oMagWrap.style.left = x + 'px'
      oMagWrap.style.top = y + 'px'
      oMagImg.style.left = -x + 'px'
      oMagImg.style.top = -y + 'px'

      // 鼠标移出边界时，不显示放大镜并且解绑事件
      if (mouseX < 0 || mouseX > imgWidth || mouseY < 0 || mouseY > imgHeight) {
        handleMouseOut()
      }
    }

    function getXY (e) {
      return {
        // 当前鼠标在图片中的位置
        x: e.pageX - imgX - magWidth / 2,
        y: e.pageY - imgY - magHeight / 2,
        // 当前鼠标与图片边框的距离
        mouseX: e.pageX - imgX,
        mouseY: e.pageY - imgY,
      }
    }

    init()
  }
}