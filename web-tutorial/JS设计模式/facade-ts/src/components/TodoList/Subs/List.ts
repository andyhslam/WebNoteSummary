import Component from './Component.ts'
import { ITodoData } from '../../../typings/index.ts'

export interface IListOptions {
  todoData: ITodoData[]
  wrapperEl: HTMLElement
}
class List extends Component {
  private wrapperEl: HTMLElement
  // 静态属性：每次实例化，它是唯一的
  private static todoData: ITodoData[]
  constructor(options: IListOptions) {
    super()
    this.wrapperEl = options.wrapperEl
    List.todoData = options.todoData
  }

  render() {
    this.wrapperEl.innerHTML += Component.listView(List.todoData)
  }

  public static addItem(val: string) {
    const _item: ITodoData = {
      id: Date.now(),
      content: val,
      completed: false,
    }
    List.todoData.push(_item)
    const todoList = document.querySelector('.todo-list') as HTMLElement
    todoList.innerHTML += Component.todoView(_item)
  }
}

export default List
