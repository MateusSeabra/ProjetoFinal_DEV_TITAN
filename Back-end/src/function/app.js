const express = require('express');
const router = require('../router/router');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

app.use('/api', router);

const url = "http://localhost:3000/api/news"


module.exports = app;

