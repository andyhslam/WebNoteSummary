const bcrypt = require("bcrypt")
const fs = require("fs")
const path = require("path")
const jwt = require("jsonwebtoken")

exports.hash = (myPlaintextPassword) => {
	return new Promise((resolve, reject) => {
		// Technique 1 (generate a salt and hash on separate function calls):
		// bcrypt.hash(myPlaintextPassword, 10, function (err, hash) {
		// 	if (err) {
		// 		reject(err)
		// 	} else {
		// 		resolve(hash)
		// 	}
		// })

		// Technique 2 (auto-gen a salt and hash):
		bcrypt.genSalt(10, function (err, salt) {
			bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
				if (err) {
					reject(err)
				} else {
					resolve(hash)
				}
			})
		})
	})
}

exports.compare = (myPlaintextPassword, hash) => {
	return new Promise((resolve, reject) => {
		bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
			resolve(result)
		})
	})
}

exports.sign = (username) => {
	const privateKey = fs.readFileSync(
		path.join(__dirname, "../keys/rsa_private_key.pem")
	)
	// 私钥加密，通过私钥生成token
	const token = jwt.sign({ username }, privateKey, { algorithm: "RS256" })
	return token
}

exports.verify = (token) => {
	const publicKey = fs.readFileSync(
		path.join(__dirname, "../keys/rsa_public_key.pem")
	)
	// 公钥验证token
	const result = jwt.verify(token, publicKey)
	return result
}
