const merge = require("webpack-merge")
const baseConfig = require("./webpack.base.config")
const devConfig = require("./webpack.dev.config")
const proConfig = require("./webpack.pro.config")

module.exports = (env, argv) => {
	// env表示环境，argv表示当前命令下的一些配置
	const config = argv.mode === "development" ? devConfig : proConfig
	return merge(baseConfig, config)
}
