// GET ROUTES

const express = require('express')
const router = express.Router()
const newsController = require('./news')

router.get('/news', newsController.getAllNews)

// router.get('/news/id', newsController.getNewsById)

module.exports = router

