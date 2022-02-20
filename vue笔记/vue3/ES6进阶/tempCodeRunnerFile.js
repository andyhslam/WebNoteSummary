let arr2 = [1, 2, 3, 4, 5, 6, 3, 2]
    // let arr3 = Array.from(new Set(arr2)).filter(item => item > 1)
let arr3 = [...new Set(arr2)].filter(item => item > 1)
console.log(arr3);
console.log(new Set(arr3).add(7).add(6).add('5'));