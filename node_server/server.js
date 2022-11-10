const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const components = require("./data/components");

app.use("/data/components", components);

app.get("/", (req, res) => {
	res.send("Server running...");
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
	console.log(`Server started on http://localhost:${port}/`)
);
