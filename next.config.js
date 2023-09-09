/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["brittanychiang.com"],
	},
	// webpack(config) {
	// 	config.module.rules.push({
	// 		test: /\.svg$/,
	// 		use: ["@svgr/webpack"],
	// 	});
	// 	return config;
	// },
};

module.exports = nextConfig;
