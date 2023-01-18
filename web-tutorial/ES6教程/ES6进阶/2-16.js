const str = `
  <html>
    <body>
      <div>第一个div</div>
      <p>这是p</p>
      <div>第二个div</div>
      <span>这是span</span>
      <div>第三个div</div>
    </body>
  </html>
`

function selectDivByMatch(regExp, str) {
	let matches = []
	while (true) {
		/**
		 * exec方法返回整个匹配文本和子表达式的结果。
		 * 每次执行exec方法时，会根据lastIndex属性的值来决定此次开始的位置。
		 * 正则对象的lastIndex属性表示每次查找时，从字符串的哪个位置开始往后面去找。
		 */
		// console.log(regExp.lastIndex)
		const match = regExp.exec(str)
		// console.log(match)
		if (match === null) {
			break
		}
		matches.push(match[1])
	}
	return matches
}
// 正则表达式里面的小括号表示子表达式或者捕获组。
const regExp = /<div>(.+)<\/div>/g
/**
 * 此处g修饰符的作用-正则的底层原理：
 * 如果不加g修饰符，每次都是从字符串的起始位置（即第一个div）开始匹配，selectDiv函数里面的match始终不等于null，就会陷入死循环。
 * 如果加上g修饰符，每次都是从上一个结果开始，再往后面继续去匹配；从lastIndex继续开始找
 */
// const res1 = selectDivByMatch(regExp, str)
// console.log(res1)

// match的作用：匹配所有包含的结果，返回匹配的整个文本的结果。
console.log(str.match(regExp))

// 字符串的实例方法：replace
function selectDivByReplace(regExp, str) {
	let matches = []
	str.replace(regExp, (all, first) => {
		// 第一个参数all表示完整的匹配结果，第二个参数first表示第一个子表达式的结果。
		// 能够通过regExp规则匹配，把结果push到matches
		matches.push(first)
	})
	return matches
}
const res2 = selectDivByReplace(regExp, str)
// console.log(res2)

// matchAll
function selectDivByMatchAll(regExp, str) {
	let matches = []
	for (let match of str.matchAll(regExp)) {
		matches.push(match[1])
	}
	return matches
}
const res3 = selectDivByMatchAll(regExp, str)
console.log(res3)
