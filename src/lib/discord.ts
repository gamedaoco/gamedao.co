import Discord from 'discord.js'

const ID = '748182044244312085'
const TOKEN = '0qIPw0uA1PZUYLNooDUe7Ml5mN0eO7rYMXyQWI0AjBGXbBngtaBVrNZ_v4WZTdn_mJ0K'
const discord = new Discord.WebhookClient( ID, TOKEN );

export default async ( msg: string ) => {
	if ( !msg ) return null
	discord.send( msg )
	return msg
}
