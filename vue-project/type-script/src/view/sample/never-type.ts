// TypeScript将使用never类型来表示不应该存在的状态
type bef = string & number

// 因为必定抛出异常，所以 error 将不会有返回值
function error(message: string): never {
  throw new Error(message);
}

// 因为存在死循环，所以 loop 将不会有返回值
function loop(): never {
  while (true) {

  }
}

// never 类型的一个应用场景
interface Apple {
  type: '苹果'
}
interface Banana {
  type: '香蕉'
}
interface Grape {
  type: '葡萄'
}
type Fruit = Apple | Banana | Grape;
function type(val: Fruit) {
  switch (val.type) {
    case '苹果':
      break;
    case '香蕉':
      break;
    case '葡萄':
      break;
    default:
      //兜底逻辑：一般是不会进入这儿，如果进来，那就是程序异常
      const cherry: never = val;
      // 由于任何类型都不能赋值给 never 类型的变量，
      // 所以当存在进入 default 分支的可能性时，TS的类型检查会及时帮我们发现这个问题
      break;
  }
}