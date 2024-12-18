// 普通方式声明
let arr0: (number | string)[] = [1, 2, '3']
let arr1: number[] = [1, 2, 3]
let arr2: string[] = ['1', '2', '3']
let arr3: boolean[] = [false, true]
let arr4: any[] = [1, '2', true, {}]
let arr04: Object[] = [1, '2', true, {}]
// 声明多维数组
let arr5: number[][][] = [[[1]], [[]], [[3]]]

// 泛型方式声明
let arr6: Array<number> = [1, 2, 3]
let arr7: Array<string> = ['1', '2', '3']
let arr8: Array<boolean> = [false, true]
// 声明多维数组
let arr9: Array<Array<number | string>> = [
  [1, 2],
  ['3', 4],
  ['5', '6'],
]

// IArguments是TypeScript内置的类型，可不写
interface IArguments {
  [index: number]: any
  length: number
  callee: Function // 自身函数对象
}

function Arr(...args: number[]): void {
  let arr10: IArguments = arguments
  console.log('args', args)
  console.log('arguments', arguments)
  console.log(arr10 === arguments) // true
}
Arr(4, 5, 6)

// 使用interface定义对象数组
interface ObjArr {
  name: string
  age?: number
}
const arr01: ObjArr[] = [{ name: 'zyn' }, { name: 'khp' }]

// 用接口表示数组：一般用来描述类数组
interface ArrNumber {
  [index: number]: number
}
let arr: ArrNumber = [1, 2, 4]
