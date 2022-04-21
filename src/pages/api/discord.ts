import { NextApiRequest, NextApiResponse } from 'next'
// import Discord from 'discord.js'

import discord from '../../lib/discord'

// const ID = '748182044244312085'
// const TOKEN = '0qIPw0uA1PZUYLNooDUe7Ml5mN0eO7rYMXyQWI0AjBGXbBngtaBVrNZ_v4WZTdn_mJ0K'
// const discord = new Discord.WebhookClient( ID, TOKEN );

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const msg = 'I am now alive!'
	await discord(msg + new Date())
	res.status(200).send(msg)
}
