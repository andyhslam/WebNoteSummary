// function median(...nums) {
//   console.log('nums', nums.sort());
//   return nums.sort()[Math.floor(nums.length / 2)];
// }
// const proxy = new Proxy(median, {
//   apply(target, thisArg, argumentsList) {
//     for (const arg of argumentsList) {
//       if (typeof arg !== 'number') {
//         throw 'Non-number argument provided';
//       }
//     }
//     return Reflect.apply(...arguments);
//   },
// });
// console.log(proxy(4, 7, 1)); // 4
// console.log(proxy(4, '7', 1)); // Error: Non-number argument provided

const userList = [];
function emit(newValue) {
  console.log(newValue);
}
const proxy = new Proxy(userList, {
  set(target, property, value, receiver) {
    const result = Reflect.set(...arguments);
    if (result) {
      // emit(value);
      emit(Reflect.get(target, property, receiver));
    }
    return result;
  },
});
proxy.push('John'); // John
proxy.push('Jacob'); // Jacob
