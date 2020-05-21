/**
           _______________________________ ________
           \____    /\_   _____/\______   \\_____  \
             /     /  |    __)_  |       _/ /   |   \
            /     /_  |        \ |    |   \/    |    \
           /_______ \/_______  / |____|_  /\_______  /
                   \/        \/         \/         \/
           Z  E  R  O  .  I  O     N  E  T  W  O  R  K
           © C O P Y R I O T   2 0 7 5   Z E R O . I O
**/

const pkg = require('../../../package.json')

export default (req, res) => {
	res.json({
		version: pkg.version,
	})
}

// export default (req, res) => {
// 	const date = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
// 	res.json({
// 		date,
// 	})
// }
