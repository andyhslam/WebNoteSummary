## Vuex
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

### 安装
npm install vuex --save

import Vuex from 'vuex'
Vue.use(Vuex)

### 兼容性
npm install es6-promise --save
// vuex上面调用
import 'es6-promise/auto'

### Vuex是什么
VueComponents -> (dispatch)Actions -> (Commit)Mutations -> (Mutate)State -> (render)VueComponents

### 什么情况下我应该使用 Vuex
Vuex 可以帮助我们管理共享状态，并附带了更多的概念和框架。这需要对短期和长期效益进行权衡。
如果您不打算开发大型单页应用，使用 Vuex 可能是繁琐冗余的。确实是如此——如果您的应用够简单，您最好不要使用 Vuex。一个简单的 store 模式就足够您所需了。但是，如果您需要构建一个中大型单页应用，您很可能会考虑如何更好地在组件外部管理状态，Vuex 将会成为自然而然的选择。引用 Redux 的作者 Dan Abramov 的话说就是：Flux 架构就像眼镜：您自会知道什么时候需要它。

### Vuex 和单纯的全局对象有以下两点不同
1. Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2. 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用

### 核心概念
#### State
mapState 辅助函数

#### Mutation
更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
mutations:{
    increment(state){
        state.count++
    },
    decrement(state){
        state.count--
    }
}

提交载荷（Payload）
对象风格的提交方式
Mutation 需遵守 Vue 的响应规则
    既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项:
    1. 最好提前在你的 store 中初始化好所有所需属性
    2. 当需要在对象上添加新属性时，你应该
        使用 Vue.set(obj, 'newProp', 123), 或者
        以新对象替换老对象。例如，利用 stage-3 的对象展开运算符我们可以这样写：state.obj = { ...state.obj, newProp: 123 }
使用常量替代 Mutation 事件类型
Mutation 必须是同步函数
mapMutations 辅助函数

#### Action
Action 类似于 mutation，不同在于：
    Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作。
乍一眼看上去感觉多此一举，我们直接分发 mutation 岂不更方便？实际上并非如此，还记得 mutation 必须同步执行这个限制么？Action 就不受约束！我们可以在 action 内部执行异步操作：
mapActions 辅助函数

#### Getter
有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数
mapGetters 辅助函数

#### Module
由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿,为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：
1. 拆分代码结构
2. module模块
命名空间
默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的——这样使得多个模块能够对同一 mutation 或 action 作出响应，如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
模块动态注册

### 插件
Vuex 的 store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子。Vuex 插件就是一个函数，它接收 store 作为唯一参数：
内置 Logger 插件

### 严格模式
开启严格模式，仅需在创建 store 的时候传入 strict: true
开发环境与发布环境
不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。

类似于插件，我们可以让构建工具来处理这种情况：

### 表单处理
当在严格模式中使用 Vuex 时，在属于 Vuex 的 state 上使用 v-model 会比较棘手：
方案1：
用“Vuex 的思维”去解决这个问题的方法是：给 <input> 中绑定 value，然后侦听 input 或者 change 事件，在事件回调中调用 action:
方案2：v-model

### 热重载
