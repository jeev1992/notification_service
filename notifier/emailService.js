const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'crmtestuser100@gmail.com',
        pass: 'prnewdhgkslxnddu'
    },
    secure: true,
})
