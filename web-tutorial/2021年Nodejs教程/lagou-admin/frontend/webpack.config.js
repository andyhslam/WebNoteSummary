const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
	// 配置环境
	mode: "development",
	// 在开发环境调试代码
	devtool: "source-map",
	// 配置入口
	entry: {
		"js/app": "./src/app.js",
	},
	// 配置出口
	output: {
		path: path.join(__dirname, "./dist"),
		// 在开发环境，不需要输入版本号，没有缓存，因此可以不用标明hash值
		filename: "[name]-[hash:6].js", // hash值防止浏览器缓存文件
	},
	module: {
		rules: [
			{
				test: /\.art$/,
				use: {
					loader: "art-template-loader",
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	// 配置插件
	plugins: [
		// 该插件把html文件打包到目标文件夹dist，同时把css和js(携带链接路径)放到页面上，
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "./public/index.html"),
			filename: "index.html",
			inject: true,
		}),
		// 该插件把public目录的资源复制到dist目录
		new CopyPlugin({
			patterns: [
				{
					from: "./public/*.ico",
					to: path.join(__dirname, "./dist/favicon.ico"),
				},
				// 注意书写路径：from与to只写目录，不要写文件名，这样不会增加新的目录
				{
					from: "./public/libs",
					to: path.join(__dirname, "./dist/libs"),
				},
			],
		}),
		// 该插件把dist目录在打包之前删除掉
		new CleanWebpackPlugin(),
	],
	// 配置server
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
		// 代理的作用：把跨域的资源代理到本地，我们就像使用本地资源一样使用远端资源。
		proxy: {
			"/api": {
				target: "http://localhost:3000",
			},
		},
	},
}
