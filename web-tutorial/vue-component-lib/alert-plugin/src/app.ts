import { Alert } from '../libs/index.ts'
;((doc) => {
  const oShowAlert: HTMLElement = doc.querySelector('#showAlert') as HTMLElement
  const alert = Alert.create({
    duration: 300,
    headerTitle: '枫ふうあ',
    alertText: '並木あいな',
  })

  const init = (): void => {
    bindEvent()
  }

  function bindEvent(): void {
    oShowAlert.addEventListener('click', showAlert, false)
  }

  function showAlert(): void {
    alert.show('warning', {
      duration: 150,
      headerTitle: 'Fua Kaede',
      alertText: '藍芽みずき',
    })
  }

  init()
})(document)
