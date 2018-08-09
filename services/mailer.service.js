const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD
  }

});

const defaultFrom = process.env.EMAIL_SENDER

module.exports.solicitudCruce = (animal) => {
  transporter.sendMail({
    from: defaultFrom,
    to: animal.user.email,
    subject: 'Solicitud de cruce por tu ' + animal.name,
    html: `
      <!DOCTYPE html>
        <html>
        <head>
        </head>
        <body>
          Hola ${animal.owner}! <br>
          Te han solicitado un cruce por tu ${animal.name} <br>
          Revisa el perfil 
        </body>
        </html>
    `
  })
    .then((info) => console.log(info))
    .catch((error) => console.log(error))
}
