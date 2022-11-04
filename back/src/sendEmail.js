const nodemailer = require("nodemailer");
require("dotenv").config();


let transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: process.env.user,
		pass: process.env.pass,
	},
	tls: {
		rejectUnauthorized: false
	}
})

transporter.sendMail({
	from: "Lucas Teste <lucas.soares.w1@gmail.com>",
	to: "lucas.pains36@gmail.com",
	subject: "teste Email",
	text: "Texto teste do email",
})
.then(message=> console.log(message))
.catch(err=>console.log(err))