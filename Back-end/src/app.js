import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()
app.use(express.json())

const userJsonPath = path.join('src', 'db', 'user.json')
const newsJsonPath = path.join('src', 'db', 'news.json')
let newsJson = JSON.parse(fs.readFileSync(newsJsonPath, 'utf-8'))
let userJson = JSON.parse(fs.readFileSync(userJsonPath, 'utf-8'))

function idSearchNews(category, id) {
    return newsJson.news[category].filter(nw => nw.id == id)
}

function idSearchUser(id) {
    return userJson.users.filter(user => user.id == id)
}

function indexSearchNews(category, id) {
    return newsJson.news[category].findIndex(nw => nw.id == id)
}

function indexSearchUser(id) {
    return userJson.users.findIndex(user => user.id === id)
}

app.get('/', (req, res) => {
    res.send('Connected')
})

app.get('/news', (req, res) => {
    res.status(200).send(newsJson)
})

app.get('/user', (req, res) => {
    res.status(200).send(userJson)
})

app.get('/news/:category/:id', (req, res) => {
    const {category, id} = req.params
    res.json(idSearchNews(category, id))
})

app.get('/user/:id', (req, res) => {
    res.json(idSearchUser(req.params.id))
})

app.post('/news', (req, res) => {
    const newNews = req.body
    const category = newNews.category

    newsJson.news[category].push(newNews)
    
    fs.writeFileSync(newsJsonPath, JSON.stringify(newsJson, null, 2), 'utf-8')
    
    res.status(201).send('News Created')
})

app.post('/user', (req, res) => {
    const newUser = req.body

    userJson.users.push(newUser)

    fs.writeFileSync(userJsonPath, JSON.stringify(userJson, null, 2), 'utf-8')

    res.status(201).send('User Created')
})

app.delete('/news/:category/:id', (req, res) => {
    const {category, id} = req.params
    const newsIndex = indexSearchNews(category, parseInt(id))

    newsJson.news[category].splice(newsIndex, 1)

    fs.writeFileSync(newsJsonPath, JSON.stringify(newsJson, null, 2), 'utf-8')

    res.status(200).send('News Deleted')
})

app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const userIndex = indexSearchUser(id)

    userJson.users.splice(userIndex, 1)

    fs.writeFileSync(userJsonPath, JSON.stringify(userJson, null, 2), 'utf-8')

    res.status(200).send('User Deleted')
})

app.put('/news/:category/:id', (req, res) => {
    const {category, id} = req.params
    const parsedId = parseInt(id)
    const newsIndex = indexSearchNews(category, parsedId)

    newsJson.news[category][newsIndex].image = req.body.image
    newsJson.news[category][newsIndex].title = req.body.title
    newsJson.news[category][newsIndex].data = req.body.data
    newsJson.news[category][newsIndex].author = req.body.author
    newsJson.news[category][newsIndex].comments = req.body.comments
    newsJson.news[category][newsIndex].category = req.body.category

    fs.writeFileSync(newsJsonPath, JSON.stringify(newsJson, null, 2), 'utf-8')

    res.status(200).json(newsJson.news[category][newsIndex])
})

app.put('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const userIndex = indexSearchUser(id)

    userJson.users[userIndex].email = req.body.email
    userJson.users[userIndex].username = req.body.username
    userJson.users[userIndex].password = req.body.password

    fs.writeFileSync(userJsonPath, JSON.stringify(userJson, null, 2), 'utf-8')

    res.status(200).json(userJson.users[userIndex])
})

export default app