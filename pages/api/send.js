const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY)

	const { name, email, phone, message } = req.body

	const content = {
		to: 'play+contact@zero.io',
		from: email,
		subject: `ZERO.IO — Message from ${name || email}`,
		text: `from:\nname: ${name}\n email: ${email}\nphone: ${phone}\n\n${message}`,
		html: `<p>from:</p><p>name: ${name}</p><p>email: ${email}</p><p>phone: ${phone}</p><p>${message}</p>`,
	}

	try {
		await sgMail.send(content)
		res.status(200).send('Thank you. The message was successfully sent.')
	} catch (error) {
		console.log('ERROR', error)
		res.status(400).send('Ooops. Message not sent.')
	}
}
