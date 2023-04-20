namespace Contraversion {
  // 主类型
  interface A {
    name: string
    age: number
  }
  // 子类型
  interface B {
    name: string
    age: number
    sex: string
  }

  let a: A = {
    name: '老墨',
    age: 33,
  }
  let b: B = {
    name: '高启强',
    age: 36,
    sex: '男',
  }

  // 协变(用于普通值)：只要子类型的所有属性可以完全覆盖主类型的所有属性，则允许将子类型赋值给主类型
  a = b

  // 逆变(用于函数)
  let fna = (params: A) => {}
  let fnb = (params: B) => {}
  // 赋值一定是安全的
  fnb = fna
  // 在tsconfig.json里面，将strictFunctionTypes设置为false(一般不建议开启)，就可以支持双向协变(用于函数)
  fna = fnb
}
