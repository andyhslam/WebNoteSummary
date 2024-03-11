import { text } from './json/data.json';
// 纯JS环境下使用Web Worker
// const worker = new Worker('./worker.js');

// Vite环境中使用Web Worker
// 在后面一定要加?worker，这个资源才会被当作成是一个worker来引入的。
import MyWorker from './worker?worker';
const worker = new MyWorker();

// 给worker定义onmessage事件，收取在子线程发过来的数据。
worker.onmessage = function (ev) {
  console.log(ev.data);
};

console.log(text);
