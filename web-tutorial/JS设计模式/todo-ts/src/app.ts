import { ITodoData } from './js/typings'
import TodoEvent from './js/TodoEvent'
;((doc) => {
  const oInput: HTMLInputElement | null = document.querySelector('input')
  const oAddBtn: HTMLButtonElement | null = document.querySelector('button')
  const oTodoList: HTMLElement | null = document.querySelector('.todo-list')

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

  const todoEvent: TodoEvent = new TodoEvent(todoData)

  const init = (): void => {
    bindEvent()
  }

  // 绑定事件处理函数
  function bindEvent(): void {
    oAddBtn?.addEventListener('click', handleAddBtnClick, false)
    oTodoList?.addEventListener('click', handleListClick, false)
  }

  function handleAddBtnClick(): void {
    todoEvent.addTodo(<ITodoData>{
      id: 4,
      content: '999',
      completed: false,
    })
    console.log('todoData', todoData)
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
