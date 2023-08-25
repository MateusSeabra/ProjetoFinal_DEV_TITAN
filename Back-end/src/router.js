
const express = require('express');
const router = express.Router();
const axios = require('axios');
// Data base import
const urlUsers = require('../db/users.json')
const urlNews = require('../db/news.json')

router.get('/users', (req,res) => res.send(urlUsers))
router.get('/news', (req,res) => res.send(urlNews))

// Requisições para o front














module.exports = router;
 