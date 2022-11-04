const { Router} = require('express');

const SendEmailQuizController = require("../controllers/SendEmailQuiz.controller")

const router = Router();

router.post('/sendQuiz', (SendEmailQuizController.SendEmailQuiz))


module.exports = router;