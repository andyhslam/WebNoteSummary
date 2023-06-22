import TodoList, { ITodo } from './TodoList/index'
;((doc) => {
  const oTodoList: HTMLElement = doc.querySelector('.todo-list') as HTMLElement
  const oAddBtn: HTMLElement = doc.querySelector('.add-btn') as HTMLElement
  const oInput: HTMLInputElement = doc.querySelector(
    'input'
  ) as HTMLInputElement
  const todoList: TodoList = TodoList.create(oTodoList)

  const init = (): void => {
    bindEvent()
  }

  // 绑定事件处理函数
  function bindEvent() {
    oAddBtn.addEventListener('click', handleAddBtnClick, false)
    oTodoList.addEventListener('click', handleListClick, false)
  }

  function handleAddBtnClick() {
    const val: string = oInput.value.trim()
    if (!val.length) {
      return
    }
    todoList.notify<ITodo>('add', {
      id: new Date().getTime(),
      content: val,
      completed: false,
    })
    oInput.value = ''
  }

  // 因为要使用事件代理，所以加了参数e
  function handleListClick(e: MouseEvent) {
    const tar = e.target as HTMLElement
    const tagName = tar.tagName.toLowerCase()

    if (['input', 'button'].includes(tagName)) {
      const id: number = Number(tar.dataset.id)

      switch (tagName) {
        case 'input':
          todoList.notify<number>('toggle', id)
          break
        case 'button':
          todoList.notify<number>('remove', id)
          break
        default:
          break
      }
    }
  }

  init()
})(document)
