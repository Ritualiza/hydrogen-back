const SendEmailQuizService = require("../services/SendEmailQuiz.service")

const SendEmailQuiz = async (req, res) => {
	const data = req.body;
	// console.log(req.body);
	const email = await SendEmailQuizService.SendEmailQuiz(data);

	return res.status(email.status).json(email.message);
}

module.exports = {SendEmailQuiz}