const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

let testicals = {};

app.use(cors());

app.use((req, res, next) => {
	next();
});

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

app.post('/user', (req, res, next) => {
	testicals = req.body;
	res.json(testicals);
});

app.get('/', (req, res, next) => {
	res.json(testicals);
});

app.listen(port);
