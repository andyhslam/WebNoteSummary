import TodoList from './components/TodoList/index.ts'
import { ITodoData } from './typings/index.ts'
;((doc) => {
  const oApp: HTMLElement = doc.querySelector('#app') as HTMLElement

  const todoData: ITodoData[] = []
  const init = (): void => {
    const todoList: TodoList = new TodoList(oApp, todoData)
    todoList.init()
  }

  init()
})(document)
