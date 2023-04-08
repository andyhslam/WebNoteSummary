// TypeScript将使用never类型来表示不应该存在的状态
type bef = string & number // 此处的&表示交叉类型，两种类型都要包含

// 因为必定抛出异常，所以函数error将不会有返回值
function error(message: string): never {
  throw new Error(message)
}

// 因为存在死循环，所以函数loop将不会有返回值
function loop(): never {
  while (true) {}
}

// never类型写到联合类型，会被直接忽略掉
type combination = void | number | never | string

// never类型的两个应用场景
interface Apple {
  type: '苹果'
}
interface Banana {
  type: '香蕉'
}
interface Grape {
  type: '葡萄'
}
type Fruit = Apple | Banana | Grape
function type(val: Fruit) {
  switch (val.type) {
    case '苹果':
      break
    case '香蕉':
      break
    case '葡萄':
      break
    default:
      // 兜底逻辑：一般是不会进入这儿，如果进来，那就是程序异常
      const cherry: never = val
    // 由于任何类型都不能赋值给never类型的变量，
    // 所以当存在进入default分支的可能性时，TS的类型检查会及时帮我们发现这个问题
  }
}

type Rookie = '唱歌' | '跳舞' | '打篮球'
function kun(value: Rookie) {
  switch (value) {
    case '唱歌':
      break
    case '跳舞':
      break
    case '打篮球':
      break
    default:
      // 兜底逻辑：never类型是等级最低的，所有类型都包含不了
      const error: never = value
      break
  }
}
