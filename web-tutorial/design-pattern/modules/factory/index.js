; (() => {
  const oModal = document.getElementsByClassName('modal')[0]
  const oBtnGroup = document.getElementsByClassName('btn-group')[0]
  const init = () => {
    bindEvent()
  }
  function bindEvent () {
    oBtnGroup.addEventListener('click', handleBtnClick, false)
  }
  function handleBtnClick (e) {
    const tar = e.target
    const tagName = tar.tagName.toLowerCase()
    if (tagName === 'button') {
      const status = tar.dataset.status
      changeStatus(status)
    }
  }
  function changeStatus (status) {
    switch (status) {
      case 'S':
        oModal.className = 'modal success'
        break
      case 'W':
        oModal.className = 'modal warning'
        break
      case 'E':
        oModal.className = 'modal error'
        break
      default:
        break
    }
  }
  init()
})()