import { ITodoData } from '../../typings/index.ts'

class TodoList {
  private el: HTMLElement
  private todoData: ITodoData[]
  constructor(ele: HTMLElement, data: ITodoData[]) {
    this.el = ele
    this.todoData = data
  }

  public init() {
    this.createComponents()
    this.render()
    this.bindEvent()
  }

  private createComponents() {
    console.log('createComponents')
  }

  private render() {
    console.log('render')
  }

  // 绑定事件处理函数
  private bindEvent() {
    console.log('bindEvent')
  }
}

export default TodoList
