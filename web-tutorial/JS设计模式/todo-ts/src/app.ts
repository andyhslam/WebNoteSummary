import { ITodoData } from './js/typings'
import TodoEvent from './js/TodoEvent'
;((doc) => {
  const oInput: HTMLInputElement = document.querySelector('input')
  const oAddBtn: HTMLButtonElement = document.querySelector('button')
  const oTodoList: HTMLElement = document.querySelector('.todo-list')

  const todoData: ITodoData[] = [
    {
      id: 1,
      content: '12',
      completed: false,
    },
    {
      id: 2,
      content: '34',
      completed: true,
    },
    {
      id: 3,
      content: '56',
      completed: false,
    },
  ]

  const todoEvent: TodoEvent = new TodoEvent(todoData, oTodoList)

  const init = (): void => {
    bindEvent()
  }

  // 绑定事件处理函数
  function bindEvent(): void {
    oAddBtn?.addEventListener('click', handleAddBtnClick, false)
    oTodoList?.addEventListener('click', handleListClick, false)
  }

  function handleAddBtnClick(): void {
    let val: string = oInput.value.trim()
    if (val.length) {
      const ret = todoEvent.addTodo(<ITodoData>{
        id: 4,
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
      switch (tagName) {
        case 'input':
          break
        case 'button':
          break
        default:
          break
      }
    }
  }

  init()
})(document)
