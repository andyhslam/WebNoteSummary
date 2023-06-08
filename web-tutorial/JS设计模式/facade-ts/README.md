TodoList -> Component

index.html -> TodoList + Header + Footer + Carousel

index.html -> index <- TodoList

<div id="app"></div>

index 入口文件 <- TodoList
index: data, ElementWrapper

TodoList -> todo-list <- input + list
TodoList -> todo-list -> ElementWrapper

TodoList 组件 = Input + List 组件
外观 -> index 组件接口

TodoList 中介 -> Input + List 视图 + 功能集中管理 -> index

组件 -> 组件结构 -> 外观模式

设计代码的结构：从外往里写，先有架子再写细节。
