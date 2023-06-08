import TodoList from './components/TodoList/index.ts'
import { ITodoData } from './typings/index.ts'
;((doc) => {
  const oApp: HTMLElement = doc.querySelector('#app') as HTMLElement

  const todoData: ITodoData[] = [
    {
      id: 1,
      content: '123',
      completed: true,
    },
    {
      id: 2,
      content: '456',
      completed: false,
    },
    {
      id: 3,
      content: '789',
      completed: true,
    },
  ]
  const init = (): void => {
    const todoList: TodoList = new TodoList(oApp, todoData)
    todoList.init()
  }

  init()
})(document)
