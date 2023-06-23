import { ITodoData } from './js/typings'
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

  const init = (): void => {
    bindEvent()
  }

  // 绑定事件处理函数
  function bindEvent(): void {
    oAddBtn?.addEventListener('click', handleAddBtnClick, false)
    oTodoList?.addEventListener('click', handleListClick, false)
  }

  function handleAddBtnClick(): void {}

  function handleListClick(e: MouseEvent): void {}

  init()
})(document)
