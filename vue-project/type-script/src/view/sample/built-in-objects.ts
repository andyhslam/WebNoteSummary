// ECMAScript的内置对象：Boolean、Number、String、RegExp、Date、Error、XMLHttpRequest
const numb: Number = new Number(12)
console.log('numb', numb)
const reg1: RegExp = /^2/
const reg2: RegExp = new RegExp(/\w/)
const date: Date = new Date()
const err: Error = new Error('错误')
const xhr: XMLHttpRequest = new XMLHttpRequest()

// DOM 和 BOM 的内置对象：Document、HTMLElement、Event、NodeList、NodeListOf等
// 定义DOM节点的类型
const list: NodeList = document.querySelectorAll('#list li')
list.forEach((item) => {
  // NodeList可以使用forEach遍历当前每一个节点
  console.log(item)
})
// querySelectorAll里面的元素是动态的，类型不固定，使用联合类型
const ul: NodeListOf<HTMLDivElement | HTMLElement> =
  document.querySelectorAll('ul')
// 有特色的元素：HTML(元素名称)Element
const div: HTMLDivElement = document.querySelector('div')
const input: HTMLInputElement = document.querySelector('input')
const canva: HTMLCanvasElement = document.querySelector('canvas')
// 普通的元素：HTMLElement
const body: HTMLElement = document.body
const section: HTMLElement = document.querySelector('section')
const header: HTMLElement = document.querySelector('header')
const footer: HTMLElement = document.querySelector('footer')
// 还可以断言成Element，这个适合所有类型。
const select = document.querySelector('select') as Element

// 定义window相关(即BOM)的类型
const local: Storage = localStorage
const lo: Location = location
const cookie: string = document.cookie // 返回的就是一个字符串
document.body.addEventListener('click', (e: MouseEvent) => {
  console.log(e)
})

// 定义Promise
// 接收返回值的类型
const promise1: Promise<string> = new Promise((resolve) => resolve('未知子'))
promise1.then((res) => {
  // 提示字符串的方法
  res.toLocaleUpperCase()
})

// 如果我们不指定返回的类型，TS是推断不出来返回的是什么类型
function promise2(): Promise<number> {
  return new Promise<number>((resolve) => {
    resolve(100)
  })
}
promise2().then((res) => {
  // 提示数字的方法
  res.toPrecision()
})
