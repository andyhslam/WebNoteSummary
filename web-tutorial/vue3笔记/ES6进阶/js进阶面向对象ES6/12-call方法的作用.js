function fn(x, y) {
	console.log("刘亦菲")
	console.log(this)
	console.log(x + y)
}
var obj = {
	name: "andy",
}

/**
 * call()：
 * 调用这个函数，并且修改函数运行时的this指向。
 * fun.call(thisArg, arg1, arg2, ...)
 * thisArg：当前调用函数this的指向对象
 * arg1，arg2：传递的其它参数
 */

// 1.call可以调用函数
fn.call()
// 2.call可以改变这个函数的this指向，此时这个函数的this就指向obj
fn.call(obj, 3, 4)
