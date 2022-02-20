// ES6的模块是单例模式：从一个文件中导出的模块，不管导出多少次，都是同一个对象。
// 模块的变量延迟执行：用到的时候，才会去拿具体的值。
// ES6模块是静态解析的：import命令先静态解析，才执行模块内部的代码
import { show, addAge } from './whole'
import * as aicoder from './whole'
import sdk from './whole'
import './gwj'
show()
addAge(10)
show()
aicoder.show()
console.log('sdk :', sdk);