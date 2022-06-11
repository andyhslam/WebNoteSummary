// 所有文件系统操作都具有同步、回调和基于 promise 的形式，并且可以使用 CommonJS 语法和 ES6 模块进行访问。
const fs = require("fs")
const fsPromises = require("fs").promises

/**
 * 回调函数是异步的标志，读写文件是I/O操作(耗时)，所以是异步的
 */

// 创建文件夹
// fs.mkdir("./logs", (err) => {
// 	if (err) throw Error(err)
// 	console.log("文件夹创建成功")
// })

// 文件夹改名
// fs.rename("./log1", "./log2", () => {
// 	console.log("文件夹名字修改成功")
// })

// 删除文件夹
// fs.rmdir("./log1", () => {
// 	console.log("done")
// })

// 读取文件夹/目录信息
// fs.readdir("./log1", (err, result) => {
// 	console.log(result)
// })

// 写内容到文件里
// fs.writeFile("./logs/log1.log", "hello\nworld", (err) => {
// 	// 错误优先的回调函数
// 	if (err) {
// 		console.log(err.message)
// 	} else {
// 		console.log("文件创建成功")
// 	}
// })

// 给文件追加内容
// fs.appendFile("./logs/log1.log", "!!!", (err) => {
// 	console.log("done")
// })

// 删除文件
// fs.unlink("./logs/log1.log", (err) => {
// 	console.log("done")
// })

// 异步读取文件：方法一
// fs.readFile("./logs/log1.log", "utf-8", (err, content) => {
// 	console.log(content)
// })

// 异步读取文件：方法二
// fs.readFile("./logs/log1.log", (err, content) => {
// 	console.log(content.toString())
// })

// 异步读取文件：方法三
// const fsp = fsPromises.readFile("./logs/log-1.txt", "utf-8").then((result) => {
// 	console.log(result)
// })
// console.log(fsp)

// 同步读取文件
// const content = fs.readFileSync("./logs/log1.log")
// console.log(content.toString())
// console.log("continue...")

/** 加分号的场景：
 * 1、小括号作为第一行语句的开头必须加分号，否则会成为另一个方法执行的参数
 * 2、中括号作为第一行语句的开头必须加分号，否则会成为数组的索引或对象的属性
 */
// ;(async () => {
// 	const result = await fsPromises.readFile("./logs/log1.log")
// 	console.log(result.toString())
// })()

// 批量写文件
// for (let i = 0; i < 10; i++) {
// 	fs.writeFile(`./logs/log-${i}.txt`, `log-${i}`, (err) => {
// 		console.log("done.")
// 	})
// }

// 读取文件/目录信息
// function readDir(dir) {
// 	fs.readdir(dir, (err, content) => {
// 		content.forEach((item, index) => {
// 			const joinDir = `${dir}/${item}`
// 			fs.stat(joinDir, (err, stats) => {
// 				if (stats.isDirectory()) {
// 					readDir(joinDir)
// 				} else {
// 					fs.readFile(joinDir, "utf-8", (err, content) => {
// 						console.log(content)
// 					})
// 				}
// 			})
// 		})
// 	})
// }
// readDir("./")

// watch 监测文件变化
fs.watchFile("./logs/log-0.txt", (curr, prev) => {
	console.log(`the current mtime is: ${curr.mtime}`)
	console.log(`the previous mtime was: ${prev.mtime}`)
})
