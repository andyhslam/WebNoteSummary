import TodoDom from './TodoDom'
import { ITodoData } from './typings'
import { getTodoList, removeTodo, toggleTodo } from './TodoService'

class TodoEvent extends TodoDom {
  private todoData: ITodoData[]

  constructor(todoData: ITodoData[], todoWrapper: HTMLElement) {
    super(todoWrapper)
    this.todoData = todoData
    this.init(this.todoData)
  }

  // 装饰器的作用：先请求数据，然后把请求回来的数据todoData传给init，最后执行init方法
  @getTodoList
  private init(todoData: ITodoData[]) {
    this.todoData = todoData
    this.initList(this.todoData)
  }

  public addTodo(todo: ITodoData): undefined | number {
    const _todo: null | ITodoData = this.todoData.find(
      (item: ITodoData) => item.content === todo.content
    )
    if (!_todo) {
      this.todoData.push(todo)
      this.addItem(todo)
      return
    }
    return 1001
  }

  @removeTodo
  public removeTodo(target: HTMLElement, id: number): void {
    this.todoData = this.todoData.filter((todo: ITodoData) => todo.id !== id)
    this.removeItem(target)
  }

  @toggleTodo
  public toggleComplete(target: HTMLElement, id: number): void {
    this.todoData.forEach((todo: ITodoData) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        this.changeCompleted(target, todo.completed)
      }
    })
  }
}

export default TodoEvent
