// 等待一个实现了 thenable 接口的非期约对象
async function baz() {
  const thenable = {
    then(callback) {
      callback('baz');
    },
  };
  console.log(await thenable);
}
baz();

// 等待会抛出错误的同步操作，会返回拒绝的期约：
async function foo() {
  console.log(1);
  await (() => {
    throw 3;
  })();
}
// 给返回的期约添加一个拒绝处理程序
foo().catch(console.log);
console.log(2);

// 不允许：await 出现在了箭头函数中
async function foo() {
  const syncFn = async () => {
    return await Promise.resolve('foo');
  };
  console.log(await syncFn());
}
foo();

// 不允许：IIFE 使用同步函数表达式或箭头函数
function qux() {
  (async function () {
    console.log(await Promise.resolve('qux'));
  })();
  (async () => console.log(await Promise.resolve('qux')))();
}

async function foo() {
  console.log(await Promise.resolve('foo'));
}
async function bar() {
  console.log(await 'bar');
}
async function baz() {
  console.log('baz');
}
foo();
bar();
baz();

async function foo() {
  console.log(2);
  console.log(await Promise.resolve(8));
  console.log(9);
}
async function bar() {
  console.log(4);
  console.log(await 6);
  console.log(7);
}
console.log(1);
foo();
console.log(3);
bar();
console.log(5);

function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
async function foo() {
  const t0 = Date.now();
  await sleep(1500); // 暂停约 1500 毫秒
  console.log(Date.now() - t0);
}
foo();
console.log(123);

function addTwo(x) {
  return x + 2;
}
function addThree(x) {
  return x + 3;
}
function addFive(x) {
  return x + 5;
}
async function addTen(x) {
  for (const fn of [addTwo, addThree, addFive]) {
    console.log('x1：', x);
    x = await fn(x);
    console.log('x2：', x);
  }
  return x;
}
addTen(9).then(console.log); // 19
