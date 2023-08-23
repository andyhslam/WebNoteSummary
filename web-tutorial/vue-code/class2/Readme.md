## template -> 编译... -> 形成真实 DOM

1. 获取到 template
2. template -> AST 树

- AST(Abstract Syntax Tree)：抽象语法树
- 源代码的抽象语法结构的树状描述
- AST 树不是虚拟 DOM，AST 是代码层面的树状的数据结构，虚拟 DOM 可以添加自定义属性(如：data-xxx)

3. AST 树 -> render 函数(\_c：createElement，\_v：文本，\_s：变量)
4. render 函数 -> 虚拟节点
5. 设置 patch(数据变化时，对比新旧两个节点，去打相应的补丁) -> 打补丁到真实 DOM
