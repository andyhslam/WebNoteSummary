// ECMAScript的内置对象：Boolean、Number、string、RegExp、Date、Error
const reg: RegExp = /^2/;
const d: Date = new Date();
const err: Error = new Error('错误');

// DOM 和 BOM 的内置对象：Document、HTMLElement、Event、NodeList 等
const list: NodeList = document.querySelectorAll('#list li');
const body: HTMLElement = document.body;
const div: HTMLDivElement = document.querySelector('div');
console.log(div);

document.body.addEventListener('click', (e: MouseEvent) => {
  console.log(e);
});

// 定义Promise：如果我们不指定返回的类型TS是推断不出来返回的是什么类型
function promise(): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    resolve(1);
  })
}
promise().then((res) => {
  console.log(res);
})
