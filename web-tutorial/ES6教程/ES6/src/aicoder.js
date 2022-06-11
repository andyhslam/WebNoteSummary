export let age = 19;
export let name = 'aicoder';
export function addAge(num) {
    age += num;
}
export function show() {
    console.log('a :', a);
    console.log('b :', b);
    console.log('c :', c);
    console.log('age :', age);
    console.log('name :', name);
}
export let [a, b, c] = [1, 2, 3];

let k = 10;
export default k; // 等价于 export let default = k;
// 只有default后面才能直接跟着变量名，其它的只能跟着变量声明或者函数声明