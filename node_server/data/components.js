const express = require("express");
const { MongoClient } = require("mongodb");
const router = express.Router();

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "react-tailwind-components";

router.get("/", async (req, res) => {
	// Timeout for testing
	setTimeout(async () => {
		const components = await loadComponentsCollection();
		if (components) {
			res.send(await components.find({}).toArray());
			client.close();
		} else {
			res.send("Error connecting to MongoDB");
		}
	}, 1500);
});

async function loadComponentsCollection() {
	console.log("Connecting to MongoDB...");
	try {
		await client.connect();
	} catch (err) {
		console.log("Error connecting to MongoDB: ", err);
		return false;
	}
	console.log("Connected successfully to server");
	return client.db("react-tailwind-components").collection("components");
}

module.exports = router;
