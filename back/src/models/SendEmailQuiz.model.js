const nodemailer = require("nodemailer");

require("dotenv").config();

const emailBase = require("../assets/emailBase");

const SendEmailQuiz = async (data) => {

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

	try {
		// console.log(data);
		const email = await transporter.sendMail({
			from: `Teste Thiago ${process.env.user}`,
			to: data.q2.resp,
			subject: "teste Email",
			text: JSON.stringify(data),
			html: emailBase(data.q1.resp)
		})
		return email;
		
	} catch (error) {
		return error
	}


}



module.exports = {SendEmailQuiz}