;((doc) => {
  // 在HTMLInputElement原型下吗，才能找到oInput的value、checked等属性
  const oInput: HTMLInputElement = doc.querySelector('input')
  const oAddBtn: HTMLElement = doc.querySelector('.add-btn')
  const oTodoList: HTMLElement = doc.querySelector('.todo-list')

  const init = (): void => {
    bindEvent()
  }

  function bindEvent() {
    oAddBtn.addEventListener('click', handleAddBtnClick, false)
    oTodoList.addEventListener('click', handleListClick, false)
  }

  function handleAddBtnClick() {}

  function handleListClick(e: MouseEvent) {
    const tar = e.target as HTMLElement
    const tagName = tar.tagName
  }

  init()
})(document)

// 把全局对象(变量)document作为形参，变成作用域内部的一个临时变量
