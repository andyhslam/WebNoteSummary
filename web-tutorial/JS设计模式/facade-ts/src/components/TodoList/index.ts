import { ITodoData } from '../../typings/index.ts'
import Input, { IInputOptions } from './Subs/Input.ts'
import List, { IListOptions } from './Subs/List.ts'

class TodoList {
  private el: HTMLElement
  private todoData: ITodoData[]
  private todoWrapper: HTMLElement
  private input: Input
  private list: List
  constructor(ele: HTMLElement, data: ITodoData[]) {
    this.el = ele
    this.todoData = data
    this.todoWrapper = document.createElement('div')
  }

  public init() {
    this.createComponents()
    this.render()
    this.bindEvent()
  }

  private createComponents() {
    this.input = new Input(<IInputOptions>{
      wrapperEl: this.todoWrapper,
      placeholderText: '请输入',
      buttonText: '增加',
    })
    this.list = new List(<IListOptions>{
      todoData: this.todoData,
      wrapperEl: this.todoWrapper,
    })
  }

  private render() {
    this.input.render()
    this.list.render()
    this.el.appendChild(this.todoWrapper)
  }

  // 绑定事件处理函数
  private bindEvent() {
    this.input.bindEvent()
  }
}

export default TodoList
