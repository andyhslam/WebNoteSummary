import Component from './Component.ts'
import { ITodoData } from '../../../typings/index.ts'
import list from '../../../../node_modules/postcss/lib/list'

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

  public render() {
    this.wrapperEl.innerHTML += Component.listView(List.todoData)
  }

  public bindEvent() {
    const oTodoList: HTMLElement = document.querySelector(
      '.todo-list'
    ) as HTMLElement
    oTodoList.addEventListener('click', this.handleListClick.bind(this), false)
  }

  private handleListClick(e: MouseEvent) {
    const tar = e.target as HTMLElement
    const tagName = tar.tagName.toLowerCase()
    const oTodoItems: HTMLCollection =
      document.getElementsByClassName('todo-item')

    if (['input', 'button'].includes(tagName)) {
      const id: number = Number(tar.dataset.id)
      switch (tagName) {
        case 'input':
          this._handleCheckBoxClick(id, oTodoItems)
          break
        case 'button':
          this._handleButtonClick(id, oTodoItems)
          break
        default:
          break
      }
    }
  }

  private _handleCheckBoxClick(id: number, oTodoItems: HTMLCollection) {
    List.todoData = List.todoData.map((todo: ITodoData, index: number) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        const span = oTodoItems[index].querySelector('span') as HTMLElement
        span.style.textDecoration = todo.completed ? 'line-through' : ''
      }
      return todo
    })
  }

  private _handleButtonClick(id: number, oTodoItems: HTMLCollection) {
    List.todoData = List.todoData.filter((todo: ITodoData, index: number) => {
      if (todo.id !== id) {
        return todo
      } else {
        oTodoItems[index].remove()
      }
    })
  }

  public static addItem(val: string) {
    const oTodoList = document.querySelector('.todo-list') as HTMLElement
    const _item: ITodoData = {
      id: Date.now(),
      content: val,
      completed: false,
    }
    List.todoData.push(_item)
    if (List.todoData.length === 1) {
      oTodoList.innerHTML = ''
    }
    oTodoList.innerHTML += Component.todoView(_item)
  }
}

export default List
