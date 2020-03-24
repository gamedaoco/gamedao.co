const pkg = require('../../package.json')

export default (req, res) => {
	res.json({
		version: pkg.version,
	})
}
