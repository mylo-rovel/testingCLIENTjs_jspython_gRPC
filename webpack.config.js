const path = require("path");

const config_obj = {
	mode: "development",
	entry:"./src/index.js",
	output: {
		path: path.resolve(__dirname, "public"),
		publicPath:"/",
		filename: "bundle.js",
	},
	target: "web",
	devServer: {
		port:"3000",
		static: ["./public"],
		open: true,
		hot: true,
		liveReload: true
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
	},
	module: {
		rules:[
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
				  'style-loader',
				  'css-loader'
				]
			}
			// {
			// 	test: /\.(js|jsx|ts|tsx)$/,
			// 	exclude: /node_modules/,
			// 	use: "eslint-loader"
			// }
		]
	}
}


module.exports = config_obj