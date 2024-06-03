const express = require("express");

const serverConfig = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");

const app = express();

//for reading json format in express because express can not read json,text, url and etc
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.listen(serverConfig.PORT, async () => {
	await connectDB();
	console.log(`Server started at port http://localhost:${serverConfig.PORT}`);
});

//24.2.12.8:5500 -> socket address
// server -contract -- API
// REST -- recommendation for making API or contract
// REST -- json format,
//controller - middle person or waiter - does not contain bussiness layer - collect request
// controller contain URL or http method
// which request
