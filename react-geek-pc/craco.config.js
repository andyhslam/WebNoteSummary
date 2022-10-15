const path = require("path")

module.exports = {
	// webpack 配置
	webpack: {
		// 配置别名路径
		alias: {
			// 约定：使用@表示src目录所在路径
			"@": path.resolve(__dirname, "src"),
		},
	},
}
