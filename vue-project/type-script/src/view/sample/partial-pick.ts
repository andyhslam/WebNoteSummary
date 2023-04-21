// TS进阶用法Partial & Pick 
type Person2 = {
  name: string;
  age: number;
  text: string;
}

// 源码实现：将T中的所有属性设置为可选
type PartialOne<T> = {
  [P in keyof T]?: T[P];
};

// 详解步骤：
// 1. keyof：将一个接口对象的全部属性取出来变成联合类型；keyof T：就是联合类型的每一项
// 2. [P in keyof T]：可以理解成for(let P in keyof T)，就是遍历key
// 3. ?：这个操作就是将每一个属性变成可选项
// 4. T[P]：索引访问操作符，与 JavaScript 中访问属性值的操作类似

// type key = 'name' | 'age' | 'text'

type partial = Partial<Person2>
// 因此T相当于Person2，P相当于'name'|'age'|'text'的其中一项，T[P]相当于Person2[name|age|text]


// 源码实现：从类型定义T的属性中，选取指定的属性，返回一个新的类型定义。
type PickOne<T, K extends keyof T> = {
  [P in K]: T[P];
};

type pick = Pick<Person2, 'age' | 'name'>