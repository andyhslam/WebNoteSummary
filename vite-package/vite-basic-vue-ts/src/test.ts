import { Person } from './type';

declare const enum Age {
  age1 = 18,
  age2 = 20,
}

let person: Person = {
  name: 'felix',
  // 无法访问环境常量枚举
  // age: Age.age1,
  age: 25,
};

export { person };
