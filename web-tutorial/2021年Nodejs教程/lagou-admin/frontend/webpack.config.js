const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
	// 配置环境
	mode: "development",
	// 在开发环境调试代码
	devtool: "source-map",
	// 配置入口
	entry: {
		app: "./src/app.js",
	},
	// 配置出口
	output: {
		path: path.join(__dirname, "./dist"),
		filename: "app.js",
	},
	// 配置插件
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "./public/index.html"),
			filename: "index.html",
			inject: true,
		}),
		new CopyPlugin({
			patterns: [
				{
					from: "./public/*.ico",
				},
			],
		}),
	],
	// 配置server
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
	},
}
