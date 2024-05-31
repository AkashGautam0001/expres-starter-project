const express = require("express");
const app = express();
const serverConfig = require("./config/serverConfig");

app.listen(serverConfig.PORT, () => {
	console.log(`Server started at port http://localhost:${serverConfig.PORT}`);
});

//24.2.12.8:5500 -> socket address
