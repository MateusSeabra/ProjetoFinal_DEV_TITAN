import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()
app.use(express.json())

const userJsonPath = path.join('src', 'db', 'user.json')
const newsJsonPath = path.join('src', 'db', 'news.json')
let newsJson = JSON.parse(fs.readFileSync(newsJsonPath, 'utf-8'))
let userJson = JSON.parse(fs.readFileSync(userJsonPath, 'utf-8'))

app.get('/', (req, res) => {
    res.send('Connected')
})

app.get('/news', (req, res) => {
    res.status(200).send(newsJson)
})

app.get('/user', (req, res) => {
    res.status(200).send(userJson)
})

app.post('/news', (req, res) => {
    const newNews = req.body

    if (newNews.category == "sports") {
        newsJson.news.sports.push(newNews)
    } else if (newNews.category == "tech") {
        newsJson.news.tech.push(newNews)
    } else if (newNews.category == "arts") {
        newsJson.news.arts.push(newNews)
    } else {
        newsJson.news.others.push(newNews)
    }

    fs.writeFileSync(newsJsonPath, JSON.stringify(newsJson, null, 2), 'utf-8')

    res.status(201).send('User Data Updated')
})

app.post('/user', (req, res) => {
    const newUser = req.body

    userJson.users.push(newUser)

    fs.writeFileSync(userJsonPath, JSON.stringify(userJson, null, 2), 'utf-8')

    res.status(201).send('User Data Updated')
})

export default app