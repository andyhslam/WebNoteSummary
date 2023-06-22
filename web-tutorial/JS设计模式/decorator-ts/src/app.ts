import TodoList from './TodoList/index'
;((doc) => {
  // 在HTMLInputElement原型下吗，才能找到oInput的value、checked等属性
  const oInput: HTMLInputElement = doc.querySelector('input')
  const oAddBtn: HTMLElement = doc.querySelector('.add-btn')
  const oTodoList: HTMLElement = doc.querySelector('.todo-list')

  const todoList = TodoList.create(oTodoList)

  /**
   * addItem(todo) {id: Date.now(), content: oInput.value, completed: false}
   * removeItem(id) todoList -> id -> item -> remove
   * toggleCompleted  todoList -> id -> item -> content -> 中横线
   */

  const init = (): void => {
    bindEvent()
  }

  function bindEvent() {
    oAddBtn.addEventListener('click', handleAddBtnClick, false)
    oTodoList.addEventListener('click', handleListClick, false)
  }

  function handleAddBtnClick() {
    const val: string = oInput.value.trim()
    if (!val.length) {
      return
    }
    todoList.addItem({
      id: new Date().getTime(),
      content: val,
      completed: false,
    })
    oInput.value = ''
  }

  function handleListClick(e: MouseEvent) {
    // tar是事件源对象
    const tar = e.target as HTMLElement
    const tagName = tar.tagName

    if (['input', 'button'].includes(tagName)) {
      const id: number = Number(tar.dataset.id)

      switch (tagName) {
        case 'input':
          todoList.toggleCompleted(id)
          break
        case 'button':
          todoList.removeItem(id)
          break
        default:
          break
      }
    }
  }

  init()
})(document)

// 把全局对象(变量)document作为形参，变成作用域内部的一个临时变量
