const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 3003;

app.get("/", (req, res) => {
	res.send("Hello I am Working");
});

app.listen(process.env.PORT || port);
