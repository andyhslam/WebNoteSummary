import TodoTemplate from './TodoTemplate'
import { ITodoData } from './typings'
import { findParentNode } from './utils'

class TodoDom extends TodoTemplate {
  private todoWrapper: HTMLElement

  constructor(todoWrapper: HTMLElement) {
    super()
    this.todoWrapper = todoWrapper
  }

  protected addItem(todo: ITodoData) {
    const oItem: HTMLElement = document.createElement('div')
    oItem.className = 'todo-item'
    oItem.innerHTML = this.todoView(todo)
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
