import { ITodo } from '.'

let todoData: Array<ITodo> = []

// 以下三个函数都要返回装饰器函数
export function addTodo(
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

export function removeTodo(
  target: any, // 当前装饰的函数的容器 -> TodoList.prototype
  methodName: string, // 被装饰的函数名称
  descriptor: PropertyDescriptor // 属性描述器：描述属性和方法
) {
  const _origin = descriptor.value // 保存原函数(即removeItem函数)

  descriptor.value = function (id: number) {
    todoData = todoData.filter((todo: ITodo) => todo.id !== id)
    // 其实此处不需要改变this指向，因为原来removeItem函数里面没有用到this，这里加上call只是为了和上面的写法统一。
    _origin.call(this, id)
    // _origin(id)
  }
}

// 在写底层逻辑时，经常用到装饰器里面的descriptor
export function changeCompleted(
  target: any, // 当前装饰的函数的容器 -> TodoList.prototype
  methodName: string, // 被装饰的函数名称
  descriptor: PropertyDescriptor // 属性描述器：描述属性和方法
) {
  const _origin = descriptor.value // 保存原函数(即toggleCompleted函数)

  descriptor.value = function (id: number) {
    todoData.forEach((todo: ITodo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        // 其实此处不需要改变this指向，因为原来toggleCompleted函数里面没有用到this，这里加上call只是为了和上面的写法统一。
        _origin.call(this, id, todo.completed)
        // _origin(id, todo.completed)
      }
    })
  }
}
