const sgMail = require('@sendgrid/mail')

export default async function (req, res) {
    sgMail.setApiKey("@sendgrid_api_key")

    const {
        email,
        message
    } = req.body

    const content = {
        to: 'juankamilo@gmail.com',
        from: email,
        subject: `New Message From - ${email}`,
        text: message,
        html: `<p>${message}</p>`
    }

    try {
        await sgMail.send(content)
        res.status(200).send('Message sent successfully.')
    } catch (error) {
        console.log('ERROR', error)
        res.status(400).send('Message not sent.')
    }
}

