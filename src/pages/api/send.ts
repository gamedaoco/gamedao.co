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

const sgMail = require('@sendgrid/mail')
import Discord from 'discord.js'

const ID = '748193288997044395'
const TOKEN = 'U5pvMChmhau5zLb8GHUs7MKHUQ_0qIMfVAnMtv0Qgt4n6pOdMNrUNSUKq6c7S-ZpAsFX'
const discord = new Discord.WebhookClient(ID, TOKEN)

export default async function (req, res) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

	const { name, email, phone, message } = req.body

	const content = {
		to: 'play+contact@zero.io',
		from: email,
		subject: `ZERO.IO — Message from ${name || email}`,
		text: `from:\nname: ${name}\n email: ${email}\nphone: ${phone}\n\n${message}`,
		html: `<p>from:</p><p>name: ${name}</p><p>email: ${email}</p><p>phone: ${phone}</p><p>${message}</p>`,
	}

	try {
		discord.send('```' + content.text + '```')
		await sgMail.send(content)
		res.status(200).send('Thank you. The message was successfully sent.')
	} catch (error) {
		console.log('ERROR', error)
		res.status(400).send('Ooops. Message not sent.')
	}
}
