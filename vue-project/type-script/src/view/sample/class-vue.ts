// class的基本用法：继承和类型约束implements
// 类的修饰符：readonly、private、protected、public
// readonly修饰符：只能应用在索引签名或者属性上面，只能读取
// private修饰符：代表定义的变量是私有的，只能在内部访问，不能在外部和继承的子类中访问
// protected修饰符：代表定义的变量是私有的，只能在内部和继承的子类中访问，不能在外部访问
// public修饰符：代表定义的变量是公有的，可以在内部、外部和继承的子类中访问，如果不写默认就是public

// 实现简单版的vue虚拟dom
interface Options {
  el: string | HTMLElement
}
interface VueCls {
  options: Options
  init(): void
}
// 定义虚拟dom的数据结构
interface Vnode {
  tag: string
  text?: string
  children?: Vnode[]
}
// 在父类实现虚拟dom
class Dom {
  fatherName: string
  constructor(name: string) {
    this.fatherName = name
  }
  // 创建真实dom节点的方法
  private createElement(el: string) {
    return document.createElement(el)
  }

  // 填充文本的方法
  private setText(el: HTMLElement, text: string | null) {
    el.textContent = text
  }

  // 渲染函数：把js描述的dom变成真实的dom
  protected render(data: Vnode) {
    // 先获取根节点
    let root = this.createElement(data.tag)
    if (data.children && Array.isArray(data.children)) {
      data.children.forEach((item) => {
        // 递归：一直创建children的节点
        let child = this.render(item)
        root.appendChild(child)
      })
    } else {
      // 把文本塞到dom节点里面
      this.setText(root, data.text || null)
    }
    return root
  }
}
class Vue extends Dom implements VueCls {
  public options: Options
  static version: string = '1.0.0'
  constructor(options: Options) {
    // 如果要接收默认的参数或者调用默认的方法，都可以在构造函数里面初始化
    super('米仓凉子') // 相当于Dom.prototype.constructor.call(this, '米仓凉子')
    this.options = options
    this.init()
    // 可以通过super直接调用父类的属性和方法：super.name和super.render()
  }

  static getVersion() {
    return this.version
  }

  public init(): void {
    // 虚拟dom就是通过js去渲染真实dom
    let data: Vnode = {
      tag: 'div',
      text: '我是父节点，没有渲染此文本',
      children: [
        {
          tag: 'section',
          text: '我是子节点1',
        },
        {
          tag: 'section',
          text: '我是子节点2',
        },
        {
          tag: 'section',
          text: '我是子节点3',
        },
      ],
    }
    let app =
      typeof this.options.el === 'string'
        ? document.querySelector(this.options.el)
        : this.options.el
    // 把生成的真实dom节点塞进app
    app?.appendChild(this.render(data))
  }
}

const vue = new Vue({
  el: '#app',
})
