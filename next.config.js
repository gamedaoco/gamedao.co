const sitemap = require('nextjs-sitemap-generator')
const pkg = require('./package')
const date = new Date()
const dateStr = date.toISOString()

sitemap({
	ignoredPaths: ['api'],
	baseUrl: 'https://gamedao.co',
	pagesDirectory: __dirname + '/src/pages',
	targetDirectory: 'public/',
	ignoreIndexFiles: true,
	pagesConfig: {
		'/index': {
			priority: '1',
			changefreq: 'daily',
		},
	},
})

const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	},
})

module.exports = withMDX({
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	reactStrictMode: true,
	env: {
		BUILD_TIME: dateStr.toString(),
		BUILD_TIMESTAMP: +date,
		APP_NAME: pkg.name,
		APP_VERSION: pkg.version,
		VERCEL_GITHUB_COMMIT_REF: process.env.VERCEL_GITHUB_COMMIT_REF || 'unknown',
	},
	poweredByHeader: false,
	images: {
		domains: ['ipfs.infura.io', 'gateway.ipfs.io', 'gamedao.infura-ipfs.io'],
	},
})
