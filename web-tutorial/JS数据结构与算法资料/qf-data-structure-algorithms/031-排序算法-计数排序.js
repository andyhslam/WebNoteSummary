function countSort (arr) {
  if (arr.length < 2) {
    return arr
  }
  const maxValue = findMax(arr)
  // const maxValue = Math.max(...arr)
  const tempArr = new Array(maxValue + 1)
  arr.forEach((item) => {
    if (!tempArr[item]) {
      tempArr[item] = 0
    }
    tempArr[item]++
  })

  let newArr = []
  let sortIndex = 0
  // 对于临时数组，每一个索引index都是排序的值，item是用来计数的。
  tempArr.forEach((item, index) => {
    while (item > 0) {
      // 先赋值，再++
      newArr[sortIndex++] = index
      item--
    }
  })
  return newArr
}

function findMax (arr) {
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}
const sortList = countSort([5, 7, 5, 4, 9, 1])
console.log(sortList)