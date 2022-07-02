const bcrypt = require("bcrypt")

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
