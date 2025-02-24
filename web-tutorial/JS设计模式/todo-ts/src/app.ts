import { ITodoData } from './js/typings'
import TodoEvent from './js/TodoEvent'
;((doc) => {
  const oInput: HTMLInputElement = document.querySelector('input')
  const oAddBtn: HTMLButtonElement = document.querySelector('button')
  const oTodoList: HTMLElement = document.querySelector('.todo-list')

  const todoData: ITodoData[] = []

  const todoEvent: TodoEvent = new TodoEvent(todoData, oTodoList)

  const init = (): void => {
    bindEvent()
  }

  // 绑定事件处理函数，处理数据
  function bindEvent(): void {
    oAddBtn.addEventListener('click', handleAddBtnClick, false)
    oTodoList.addEventListener('click', handleListClick, false)
  }

  function handleAddBtnClick(): void {
    let val: string = oInput.value.trim()
    if (val.length) {
      const ret = todoEvent.addTodo(<ITodoData>{
        id: Date.now(),
        content: val,
        completed: false,
      })
      if (ret && ret === 1001) {
        alert('列表项已存在')
      }
    }
    oInput.value = ''
  }

  function handleListClick(e: MouseEvent): void {
    const tar = e.target as HTMLElement
    const tagName = tar.tagName.toLocaleLowerCase()
    if (['input', 'button'].includes(tagName)) {
      const id = parseInt(tar.dataset.id)
      switch (tagName) {
        case 'input':
          todoEvent.toggleComplete(tar, id)
          break
        case 'button':
          todoEvent.removeTodo(tar, id)
          break
        default:
          break
      }
    }
  }

  init()
})(document)
