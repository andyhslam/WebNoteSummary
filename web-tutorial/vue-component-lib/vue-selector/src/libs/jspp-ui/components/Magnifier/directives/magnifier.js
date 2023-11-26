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
      oImgWrap.addEventListener('mouseover', function () {
        oMagWrap.classList.add('show')
        document.addEventListener('mousemove', handleMouseMove, false)
      }, false)

      oImgWrap.addEventListener('mouseout', handleMouseOut, false)
    }

    function handleMouseMove () {

    }

    function handleMouseOut () {
      oMagWrap.classList.remove('show')
    }

    init()
  }
}