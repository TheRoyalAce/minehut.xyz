const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

const path = require("path");

module.exports = withMDX({
	pageExtensions: ["js", "jsx", "mdx", "md"],
	webpack(config) {
		config.module.rules
			.filter(
				(r) =>
					Object.keys(r).includes("use") &&
					r.test.toString().includes("mdx")
			)[0]
			.use.push(path.join(__dirname, "./lib/fm-loader.js"));
		return config;
	},
});
