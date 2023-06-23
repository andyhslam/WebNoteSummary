import { todoView } from './template'
import { addTodo, removeTodo, changeCompleted } from './todoEvent'
import utils from './utils'

// 写一个接口去描述对象
export interface ITodo {
  id: number
  content: string
  completed: boolean
}

// utils装饰器挂载到类上，可以扩展TodoList的原型，增强其功能
@utils
class TodoList {
  private oTodoList: HTMLElement
  // 谁构造出来的instance，谁就是instance的类型
  private static instance: TodoList

  private plus: Function
  private minus: Function
  private name: string

  constructor(oTodoList: HTMLElement) {
    this.oTodoList = oTodoList
    console.log(this.plus(1, 2))
    console.log(this.minus(1, 2))
    console.log(this.name)
  }

  public static create(oTodoList: HTMLElement) {
    if (!TodoList.instance) {
      TodoList.instance = new TodoList(oTodoList)
    }
    return TodoList.instance
  }

  // 装饰器挂载到方法上，可以增强其功能
  @addTodo
  public addItem(todo: ITodo) {
    const oItem: HTMLElement = document.createElement('div')
    oItem.className = 'todo-item'
    oItem.innerHTML = todoView(todo)
    this.oTodoList.appendChild(oItem)
  }

  @removeTodo
  public removeItem(id: number) {
    const oItems: HTMLCollection = document.getElementsByClassName('todo-item')
    Array.from(oItems).forEach((oItem) => {
      const _id = parseInt(oItem.querySelector('button').dataset.id)
      if (_id === id) {
        oItem.remove()
      }
    })
  }

  @changeCompleted
  public toggleCompleted(id: number, completed?: boolean) {
    const oItems: HTMLCollection = document.getElementsByClassName('todo-item')
    Array.from(oItems).forEach((oItem) => {
      const _id = parseInt(oItem.querySelector('input').dataset.id)
      if (_id === id) {
        const oContent: HTMLElement = oItem.querySelector('span')
        oContent.style.textDecoration = completed ? 'line-through' : 'none'
      }
    })
  }
}

export default TodoList
