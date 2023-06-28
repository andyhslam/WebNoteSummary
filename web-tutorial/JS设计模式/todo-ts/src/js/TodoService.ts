import $ from 'jquery'
import { ITodoData } from './typings'

export function getTodoList(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
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
        // 当前作用域的this指向TodoEvent的实例
        _origin.call(this, todoData)
      })
  }
}
