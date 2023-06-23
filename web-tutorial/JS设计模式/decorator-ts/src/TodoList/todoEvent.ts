import { ITodo } from '.'

// 以下三个函数都要返回装饰器函数
export function addTodo(todoData: ITodo[]) {
  return function (
    target: any, // 当前装饰的函数的容器 -> TodoList.prototype
    methodName: string, // 被装饰的函数名称
    descriptor: PropertyDescriptor // 属性描述器：描述属性和方法
  ) {
    const _origin = descriptor.value // 保存原函数(即addItem函数)

    // 使用descriptor.value重写时，可以获得原来addItem函数的参数
    descriptor.value = function (todo: ITodo) {
      const _todo: ITodo | null = todoData.find(
        (t: ITodo) => t.content === todo.content
      )
      if (_todo) {
        alert('该项已存在')
        return
      }
      todoData.push(todo)
      // 此处的this指向TodoList的实例
      _origin.call(this, todo)
    }
  }
}

export function removeTodo(todoData: ITodo[]) {
  return function (
    target: any, // 当前装饰的函数的容器 -> TodoList.prototype
    methodName: string, // 被装饰的函数名称
    descriptor: PropertyDescriptor // 属性描述器：描述属性和方法
  ) {}
}

export function changeCompleted(todoData: ITodo[]) {
  return function (
    target: any, // 当前装饰的函数的容器 -> TodoList.prototype
    methodName: string, // 被装饰的函数名称
    descriptor: PropertyDescriptor // 属性描述器：描述属性和方法
  ) {}
}
