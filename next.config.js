const withImages = require('next-images')

const path = require('path')
const dotenv = require('dotenv').config()
const webpack = require('webpack')

const sitemap = require('nextjs-sitemap-generator')

sitemap({
	ignoredPaths: ['api'],
	baseUrl: 'https://gamedao.co',
	pagesDirectory: __dirname + '/pages',
	targetDirectory: 'public/',
	ignoreIndexFiles: true,
	pagesConfig: {
		'/index': {
			priority: '1',
			changefreq: 'daily',
		},
	},
})

module.exports = withImages({
	poweredByHeader: false,

	webpack: (config, options) => {
		config.node = {
			fs: 'empty',
		}

		config.resolve.alias = {
			...config.resolve.alias,
			public: path.join(__dirname, './public/'),
			config: path.join(__dirname, './config/'),
			src: path.join(__dirname, './src/'),
			lib: path.join(__dirname, './src/lib/'),
			components: path.join(__dirname, './src/components/'),
			containers: path.join(__dirname, './src/containers/'),
			layouts: path.join(__dirname, './src/layouts/'),
			themes: path.join(__dirname, './src/themes/'),
		}

		// create object from .env
		const env = Object.keys(process.env).reduce((acc, curr) => {
			acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
			return acc
		}, {})
		config.plugins.push(new webpack.DefinePlugin(env))

		return config
	},
})
