/**
 * 可以通过原型对象，对原来的内置对象进行扩展自定义的方法，比如给数组增加自定义求和的功能；
 * 像数组和字符串这种内置对象，不能给原型对象覆盖操作Array.prototype={}，只能是Array.prototype.xxx=function(){}的方式。
 */

Array.prototype.sum = function () {
	var sum = 0
	for (var i = 0; i < this.length; i++) {
		sum += this[i]
	}
	return sum
}

var arr1 = [1, 2, 3, 4, 5]
var arr2 = new Array(1, 2, 3)
var arr3 = new Array(4).fill(2)
var arr4 = Array.of(1, 2, 3, 4, 5, 6)
console.log(arr1.sum())
console.log(arr2.sum())
console.log(arr3.sum())
console.log(arr4.sum())
console.log(arr4.copyWithin(1, 2, 4))
console.log(Array.prototype)
