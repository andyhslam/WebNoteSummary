# 数据操作

1. todoData[]
2. 方法 -> 操作数据
   增加数据 -> addTodo(todo) todo:{id, content, completed}
   删除数据 -> removeTodo(id) -> todoData -> {id}
   切换状态 -> toggleCompleted(id) -> todoData -> {id} -> completed

# DOM 操作

1. 方法 -> 操作 DOM
   增加项 -> todo:{id, content, completed} -> 加入 todo 模板 -> 形成 todoItem -> 加入 oTodoList
   删除项 -> id -> oTodoList {id} -> item -> remove
   切换状态 -> id -> oTodoList {id} -> item -> content -> 中横线

# 设计方式

之前的：DOM 操作 -> 数据操作 -> app.ts -> 执行数据操作方法 -> 实现功能
当前的：数据操作是@装饰器 -> 挂载到 DOM 操作 -> app.ts -> 执行 DOM 操作方法 -> 实现功能
