// 添加自定义对于webpack的配置

const path = require("path")
const { whenProd, getPlugin, pluginByName } = require("@craco/craco")

module.exports = {
	// webpack 配置
	webpack: {
		// 配置别名路径
		alias: {
			// 约定：使用@表示src目录所在路径
			"@": path.resolve(__dirname, "src"),
		},
		// 配置CDN
		configure: (webpackConfig) => {
			/**
			 * webpackConfig
			 * 自动注入的webpack配置对象，可以在这个函数中对它进行详细的自定义配置，只要最后return出去就行
			 */
			let cdn = {
				js: [],
				css: [],
			}
			// 只有生产环境才配置
			whenProd(() => {
				// key：不参与打包的具体的包
				// value: cdn文件中挂载于全局的变量名称，为了替换之前在开发环境下，通过import导入的react和react-dom
				webpackConfig.externals = {
					react: "React",
					"react-dom": "ReactDOM",
				}
				// 配置现成的cdn资源数组，现在使用的是公共免费的，用于测试
				// 实际开发的时候，用公司自己花钱买的cdn服务器
				cdn = {
					js: [
						"https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js",
						"https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js",
					],
					css: [],
				}
			})

			// 都是为了将来配置htmlWebpackPlugin插件，
			// 将来在public/index.html注入cdn资源数组时，准备好的一些现成的资源
			const { isFound, match } = getPlugin(
				webpackConfig,
				pluginByName("HtmlWebpackPlugin")
			)

			if (isFound) {
				// 找到了HtmlWebpackPlugin的插件
				match.userOptions.cdn = cdn
			}

			return webpackConfig
		},
	},
}
