import { NextApiRequest, NextApiResponse } from 'next'
import config from '../../config/config.json'

// test config local:
// curl -X POST localhost:8020/api/config -H "Content-Type:application/json;charset=utf-8" -d '{"key":"hello","env":"local"}'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST' && req.body.key == 'hello') {
		const { env } = req.body
		const global = config['global']
		const local = config[env]
		const content = {
			...global,
			...local,
		}

		console.log('get config', env)
		console.log(content)

		try {
			res.setHeader('Content-Type', 'application/json')
			res.status(200).send(JSON.stringify(content))
		} catch (error) {
			console.error('ERROR', error)
			res.status(404).send('not found.')
		}
	} else {
		res.status(400).send('not authorised.')
	}
}