import $ from 'jquery'
import { ITodoData } from './typings'

export function getTodoList(
  target: any, // 当前装饰的函数的容器 -> TodoEvent.prototype
  methodName: string, // 被装饰的函数名称
  descriptor: PropertyDescriptor // 属性描述器：描述属性和方法
): void {
  // 在严格模式下，_origin函数里面的this是undefined
  const _origin = descriptor.value // 保存原有的init函数
  // 使用descriptor.value重写时，可以获得原来init函数的参数
  descriptor.value = function (todoData: ITodoData[]) {
    $.get('http://localhost:8181/todolist')
      .then((res: string) => {
        if (!res) {
          return
        }
        todoData = JSON.parse(res)
      })
      .then(() => {
        // 当前作用域的this指向TodoEvent的实例，最后调用原有的init函数
        _origin.call(this, todoData)
      })
  }
}

export function removeTodo(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void {
  const _origin = descriptor.value
  descriptor.value = function (target: HTMLElement, id: number) {
    $.post('http://localhost:8181/remove', { id }).then((res) => {
      _origin.call(this, target, id)
    })
  }
}
