// const obj1 = { name: "lyf", age: 35, attr: { height: 173 } }
// const obj2 = { ...obj1 }
// obj1.name = "mxt"
// obj1.age = 32
// obj1.attr.height = 170
// console.log("obj1", obj1)
// console.log("obj2", obj2)

// const str1 = "   imooc   "
// console.log(str1)
// console.log(str1.replace(/^\s+/g, ""))

// const arr1 = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]
// console.log(arr1.flat().flat().flat())
// console.log(arr1.flat(3))
// console.log(arr1.flat(Infinity))

// const arr2 = [1, 2, 3, 4, 5]
// const res1 = arr2.map((v) => [v + 1]).flat()
// const res2 = arr2.flatMap((v) => [v + 1])
// console.log(res1, res2)

// function foo() {
// 	// es10
// 	console.log("imooc")
// }
// console.log(foo.toString())

const validJSON = (json) => {
	try {
		JSON.parse(json)
		return true
	} catch {
		return false
	}
}
const json1 = '{"name":"imooc", "level": 20}'
const json2 = '{"name:"imooc", "level": 20}'
console.log(validJSON(json1))
console.log(validJSON(json2))

// JSON superset(超集)支持段分隔符（\u2029）和行分隔符（\u2028）
eval('var str = "imooc";\u{2029} function foo(){return str}')
console.log(foo())

// JSON.stringify增强能力，防止JSON.stringify从Unicode字符串返回时的缺陷问题
// 原来支持的范围是0xD800~0xDfff
console.log(JSON.stringify("\uD83D\uDE0E")) // emoji表情是多字节的一个字符
console.log(JSON.stringify("\uD83D")) // 原样输出，因为这不是一个完整的字符
