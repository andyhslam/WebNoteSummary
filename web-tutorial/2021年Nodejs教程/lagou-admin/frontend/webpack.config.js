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
				test: /\.css$/,
				loaders: ["style-loader", "css-loader"],
			},
		],
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
					to: path.join(__dirname, "./dist/favicon.ico"),
				},
				{
					from: "./public/libs",
					to: path.join(__dirname, "./dist/libs"),
				},
			],
		}),
		new CleanWebpackPlugin(),
	],
	// 配置server
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
	},
}
