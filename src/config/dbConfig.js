const mongoose = require("mongoose");
const serverConfig = require("./serverConfig");
async function connectDB() {
	try {
		await mongoose.connect(serverConfig.DB_URL);
		console.log("DB conneted Successfully !");
	} catch (error) {
		console.log("Error : DB not connect", error);
	}
}

module.exports = connectDB;
