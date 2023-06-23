# 传统写法

1. 绑定事件处理函数 - 数据

- 增加项 - 列表数据 -> 增加一项 {id: timestamp, content: string, completed: false}
  每一项视图 -> 添加到列表
- 删除项 - 列表数据 -> id -> removeItem
  将对应项的视图 -> 从列表中删除
- 改变完成状态 - 列表数据 -> id -> changeCompleted
  将对应项的完成状态 -> 更改为是否完成

# 程序设计方案：面向对象、类的继承、横向切割程序

1. 程序进行分类

- 外层：通过浏览器的事件去调用方法 -> 事件处理函数的绑定
- 操作数据的方法：addTodo、removeTodo、toggleComplete
- 操作 DOM：addItem、removeItem、changeCompleted
- 管理模板：todoView -> 接收参数
