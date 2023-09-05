const express = require('express')
const routes = require("./router/router")
const dbNews = require("./db/news.json")
const dbUsers = require("./db/users.json")
const cors = require("cors")

const app = require('./app');

// Iniciar o servidor
 app.listen(3050,() => console.log('Server is running'));

app.use(cosn())
app.use(express.json())
 