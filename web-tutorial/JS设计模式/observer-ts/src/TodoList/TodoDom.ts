import { ITodo } from '.'

class TodoDom {
  private static instance: TodoDom
  private oTodoList: HTMLElement

  constructor(oToList: HTMLElement) {
    this.oTodoList = oToList
  }

  public static create(oTodoList: HTMLElement) {
    if (!TodoDom.instance) {
      TodoDom.instance = new TodoDom(oTodoList)
    }
    return TodoDom.instance
  }

  // 因为此方法操作DOM，没有具体resolve什么值，所以直接void
  public addItem(todo: ITodo): Promise<void> {
    return new Promise((resolve, reject) => {
      const oItem: HTMLElement = document.createElement('div')
      oItem.className = 'todo-item'
      oItem.innerHTML = this.todoView(todo)
      this.oTodoList.appendChild(oItem)
      resolve()
    })
  }

  public removeItem(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const oItems: HTMLCollection =
        document.getElementsByClassName('todo-item')
      Array.from(oItems).forEach((oItem) => {
        const btn: any = oItem.querySelector('button')
        const _id = parseInt(btn.dataset.id)
        if (_id === id) {
          oItem.remove()
          resolve()
        }
      })
    })
  }

  public toggleItem(id: number): Promise<void> {
    return new Promise((resolve, reject) => {
      const oItems: HTMLCollection =
        document.getElementsByClassName('todo-item')
      Array.from(oItems).forEach((oItem) => {
        const oCheckbox: HTMLInputElement | any = oItem.querySelector('input')
        const _id = parseInt(oCheckbox.dataset.id)
        if (_id === id) {
          const oContent: HTMLElement | any = oItem.querySelector('span')
          oContent.style.textDecoration = oCheckbox.checked
            ? 'line-through'
            : 'none'
          resolve()
        }
      })
    })
  }

  private todoView({ id, content, completed }: ITodo): string {
    return `
      <input type="checkbox" ${completed ? 'checked' : ''} data-id="${id}" />
      <span style="text-decoration: ${
        completed ? 'line-through' : 'none'
      }">${content}</span>
      <button data-id="${id}">删除</button>
    `
  }
}

export default TodoDom
