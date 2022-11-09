const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () =>
	console.log(`Server started on http://localhost:${port}/`)
);

app.get("/", (req, res) => {
	res.send("Server running...");
});
