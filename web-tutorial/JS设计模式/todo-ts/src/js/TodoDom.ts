import TodoTemplate from './TodoTemplate'
import { ITodoData } from './typings'
import { findParentNode, createItem } from './utils'

class TodoDom extends TodoTemplate {
  private todoWrapper: HTMLElement

  constructor(todoWrapper: HTMLElement) {
    super()
    this.todoWrapper = todoWrapper
  }

  protected initList(todoData: ITodoData[]) {
    if (todoData.length) {
      // 创建文档碎片
      const oFrag: DocumentFragment = document.createDocumentFragment()
      todoData.forEach((todo: ITodoData) => {
        const oItem: HTMLElement = createItem(
          'div',
          'todo-item',
          this.todoView(todo)
        )
        oFrag.appendChild(oItem)
      })
      this.todoWrapper.appendChild(oFrag)
    }
  }

  protected addItem(todo: ITodoData) {
    const oItem: HTMLElement = createItem(
      'div',
      'todo-item',
      this.todoView(todo)
    )
    this.todoWrapper.appendChild(oItem)
  }

  protected removeItem(target: HTMLElement) {
    /**
     * 点击谁，target就是谁；比如点击button，target就是button；
     * 通过findParentNode方法，找到target的父节点。
     */
    const oParentNode: HTMLElement = findParentNode(target, 'todo-item')
    oParentNode?.remove()
  }

  protected changeCompleted(target: HTMLElement, completed: boolean) {
    const oParentNode: HTMLElement = findParentNode(target, 'todo-item')
    const oContent: HTMLElement = oParentNode.querySelector('span')
    oContent.style.textDecoration = completed ? 'line-through' : 'none'
  }
}

export default TodoDom
