/** @type {import('next-sitemap').IConfig} */
const config = {
	siteUrl: "https://iswenzz.com",
	generateRobotsTxt: true,
	// https://nextjs.org/docs/app/api-reference/file-conventions/metadata
	exclude: ["/twitter-image.*", "/opengraph-image.*", "/icon.*"]
};

export default config;
