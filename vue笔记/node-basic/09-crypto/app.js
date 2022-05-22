const crypto = require("crypto")

const password = "abc123"

/**
 * 1、sha256：非对称加密；sha1：对称加密
 * 2、createHmac：非对称加密；createHash：对称加密
 * 3、crypto链式调用的三个方法依次表示：
 * - createHash：加密规则(使用什么加密算法)
 * - update：加密数据(要加密的字符串)
 * - digest：显示规则(返回加密后的字符串)
 */
const hash = crypto.createHash("sha1").update(password, "utf8").digest("hex")
console.log(hash)
