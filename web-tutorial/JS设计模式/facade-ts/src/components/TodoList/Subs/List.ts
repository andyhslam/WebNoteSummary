import Component from './Component.ts'
import { ITodoData } from '../../../typings/index.ts'

export interface IListOptions {
  todoData: ITodoData[]
  wrapperEl: HTMLElement
}
class List extends Component {
  private wrapperEl: HTMLElement
  private static todoData: ITodoData[]
  constructor(options: IListOptions) {
    super()
    this.wrapperEl = options.wrapperEl
    List.todoData = options.todoData
  }

  render() {
    this.wrapperEl.innerHTML += Component.listView(List.todoData)
  }
}

export default List
