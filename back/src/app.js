const express = require("express");
require("dotenv").config();


const cors = require("cors");

const SendEmailQuiz = require("./routes/SendEmailQuiz.routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(SendEmailQuiz);

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=> console.log(`Ouvindo na porta ${PORT}`))


