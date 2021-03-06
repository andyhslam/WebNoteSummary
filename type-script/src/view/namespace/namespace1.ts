// 1. 命名空间中通过export将想要暴露的部分导出
// 2. 如果不用export导出，是无法读取其值的
import { B } from './namespace2'
// 不能用ts-node去运行namespace
namespace A {
  export const a = 1;
}
console.log(A.a);

// 嵌套命名空间
namespace C {
  export namespace D {
    export const d = 3;
  }
}
// 简化命名空间
import CDd = C.D.d;
console.log(CDd, B);

// 合并命名空间：重名的命名空间会合并
namespace E {
  export const e = 5;
}
namespace E {
  export const f = 6;
}
// 相当于这样
// namespace E {
//   export const e = 5;
//   export const f = 6;
// }

console.log(E.f);

