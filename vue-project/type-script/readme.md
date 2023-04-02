# ts 笔记

1. 顶级类型(包含以下 5 种类型)：any(任意类型)、unknown(不知道的类型)

- any 可以赋值给任意类型，unknown 只能赋值给自身或者是 any；
- unknown 不能读任何属性，也不能调用方法，因此比 any 更加安全

2. 第二级别类型(包含以下 4 种类型)：Object
3. 第三级别类型(包含以下 3 种类型)：Number、String、Boolean
4. 第四级别类型(包含以下 2 种类型)：number、string、boolean
5. 第五级别类型(包含以下 1 种类型)：常用的字面量(123、'123'、false)
6. 第六级别类型：never
