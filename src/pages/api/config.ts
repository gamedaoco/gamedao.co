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

import { NextApiRequest, NextApiResponse } from 'next'
import data from '../../data/config.json'

// test config local:
// curl -X POST localhost:3030/api/config -H "Content-Type:application/json;charset=utf-8" -d '{"key":"hello","env":"local"}'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST' && req.body.key == 'hello') {
		const { env } = req.body
		const global = data['global']
		const local = data[env]
		const content = {
			...global,
			...local,
		}

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
