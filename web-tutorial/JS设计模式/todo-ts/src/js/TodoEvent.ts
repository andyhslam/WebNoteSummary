import { ITodoData } from './typings'

class TodoEvent {
  private todoData: ITodoData[]

  constructor(todoData: ITodoData[]) {
    this.todoData = todoData
  }

  public addTodo(todo: ITodoData): undefined | number {
    const _todo: undefined | ITodoData = this.todoData.find(
      (item: ITodoData) => item.content === todo.content
    )
    if (!_todo) {
      this.todoData.push(todo)
      return
    }
    return 1001
  }

  public removeTodo(id: number): void {
    this.todoData = this.todoData.filter((todo: ITodoData) => todo.id !== id)
  }

  public toggleComplete(id: number): void {
    this.todoData.forEach((todo: ITodoData) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
    })
  }
}

export default TodoEvent
