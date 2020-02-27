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

		// console.log( '===== before' )
		// console.log( config.resolve.alias )

		config.resolve.alias = {
			...config.resolve.alias,

			src: path.resolve(__dirname, './src/'),
			lib: path.resolve(__dirname, './src/lib/'),
			public: path.join(__dirname, './public/'),
			config: path.join(__dirname, './config/'),
			components: path.join(__dirname, './src/components/'),
			containers: path.join(__dirname, './src/containers/'),
			layouts: path.join(__dirname, './src/layouts/'),
		}

		// console.log( '===== after' )
		// console.log( config.resolve.alias )

		// create object from .env
		const env = Object.keys(process.env).reduce((acc, curr) => {
			acc[`process.env.${curr}`] = JSON.stringify(process.env[curr])
			return acc
		}, {})
		config.plugins.push(new webpack.DefinePlugin(env))

		return config
	},
})
