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

export default async function (req, res) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY)

	const {
		firstname,
		lastname,
		email,
		phone,
		country,
		usa_tax,
		exposed_person,
		currency,
		apply_project,
		apply_professional,
		apply_creator,
		apply_publisher,
		apply_investor,
		company,
		company_team_description,
		company_incorporation_date,
		company_address_1,
		company_address_2,
		company_zip,
		company_city,
		company_country,
		project_name,
		project_pitch,
		project_startdate,
		project_metrics,
		project_platforms,
		funding_target,
		equity,
		lending,
		presale,
	} = req.body

	const data = {
		firstname,
		lastname,
		email,
		phone,
		country,
		usa_tax,
		exposed_person,
		currency,
		apply_project,
		apply_professional,
		apply_creator,
		apply_publisher,
		apply_investor,
		company,
		company_team_description,
		company_incorporation_date,
		company_address_1,
		company_address_2,
		company_zip,
		company_city,
		company_country,
		project_name,
		project_pitch,
		project_startdate,
		project_metrics,
		project_platforms,
		funding_target,
		equity,
		lending,
		presale,
	}

	console.log(data)

	const content = {
		to: 'play+apply@zero.io',
		from: email,
		subject: `GameDAO — Application from ${firstname || email}`,
		text: `from:\nname: ${firstname} ${lastname}\n email: ${email}\nphone: ${phone}\n\n${JSON.stringify(data)}\n\n`,
		//html: `<p>from:</p><p>name: ${name}</p><p>email: ${email}</p><p>phone: ${phone}</p><p>${message}</p>`,
	}

	try {
		await sgMail.send(content)
		res.status(200).send('Thank you. The message was successfully sent.')
	} catch (error) {
		console.log('ERROR', error)
		res.status(400).send('Ooops. Message not sent. Please check the form.')
	}
}
