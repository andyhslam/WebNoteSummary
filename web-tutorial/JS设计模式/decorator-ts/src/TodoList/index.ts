// 写一个接口去描述对象
export interface ITodo {
  id: number
  content: string
  completed: boolean
}

class TodoList {
  private oTodoList: HTMLElement
  // 谁构造出来的instance，谁就是instance的类型
  private static instance: TodoList

  constructor(oTodoList: HTMLElement) {
    this.oTodoList = oTodoList
  }

  public static create(oTodoList: HTMLElement) {
    if (!TodoList.instance) {
      TodoList.instance = new TodoList(oTodoList)
    }
    return TodoList.instance
  }

  public addItem(todo: ITodo) {}

  public removeItem(id: number) {}

  public toggleCompleted(id: number) {}
}

export default TodoList
