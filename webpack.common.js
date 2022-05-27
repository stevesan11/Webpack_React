const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ outputFile, assetFile }) => ({
	entry: path.resolve(__dirname, "src/index.tsx"),
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: `js/${outputFile}.js`,
		chunkFilename: `js/${outputFile}.js`,
		clean: true,
	},
	plugins: [
		new ESLintPlugin({
			extensions: [".ts", ".tsx", ".js"],
			exclude: "node_modules",
		}),
		new MiniCssExtractPlugin({
			filename: `css/${outputFile}.css`,
		}),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(eot|ttf|woff|woff2|png|jpg|gif|jpeg)$/i,
				type: "asset/resource",
				generator: {
					filename: `asset/${assetFile}[ext]`,
				},
			},
			{
				test: /\.html$/, //HtmlWebpackPluginがないと動作しない
				use: ["html-loader"],
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
			},
			{
				test: /\.svg$/i,
				type: "asset",
				resourceQuery: /url/, // *.svg?url
			},
			{
				test: /\.svg$/i,
				issuer: /\.([jt]sx|js|ts)?$/,
				resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
				use: ["@svgr/webpack"],
			},
		],
	},
	resolve: {
		modules: [path.resolve(__dirname, "node_modules")],
		extensions: [".tsx", ".ts", ".js"],
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					name: "vendors",
					test: /[\\/]node_modules[\\/]/,
					chunks: "all",
					reuseExistingChunk: true,
				},
			},
		},
	},
	stats: {
		children: true,
	},
});
