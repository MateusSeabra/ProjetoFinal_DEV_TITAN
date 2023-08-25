const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

app.use('/api', router);

const url = "http://localhost:3000/api/news"

async function getNews () {
    axios.get(url) 
    .then( response =>   {
        
    })
}


module.exports = app;

