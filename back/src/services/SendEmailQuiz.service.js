const SendEmailQuizModel = require("../models/SendEmailQuiz.model")


const SendEmailQuiz = async (data) => {
	const email = await SendEmailQuizModel.SendEmailQuiz(data);
	// console.log(email);
	if(!email.accepted) return {status:400, message:email}
	return {status:200, message:"Email Enviado com sucesso"}
}

module.exports = {SendEmailQuiz}