import fs from 'fs'
import path from 'path'

const newsJsonPath = path.join('src', 'db', 'news.json')

function readNewsJson() {
    return JSON.parse(fs.readFileSync(newsJsonPath, 'utf-8'))
}

class NewsController {
    index(req, res) {
        try {
            const newsJson = readNewsJson()

            if (newsJson) {
                res.status(200).json(newsJson)
            } else {
                res.status(404).json({ error: 'News List Not Found' })
            }
        } catch (error) {
            console.error('Error:', error)
            res.status(500).json({ error: 'Server Error' })
        }
    }

    show(req, res) {
        try {
            const { category, id } = req.params
            const newsJson = readNewsJson()
            const news = newsJson.news[category].find((nw) => nw.id == id)

            if (news) {
                res.status(200).json(news)
            } else {
                res.status(404).json({ error: 'News Not Found' })
            }
        } catch (error) {
            console.error('Error:', error)
            res.status(500).json({ error: 'Server Error' })
        }
    }

    store(req, res) {
        try {
            const newNews = req.body
            const newsJson = readNewsJson()

            let maxId = 0
            for (const category in newsJson.news) {
                const categoryNews = newsJson.news[category]
                for (const news of categoryNews) {
                    const id = parseInt(news.id, 10)
                    if (id > maxId) {
                        maxId = id
                    }
                }
            }

            newNews.id = maxId + 1

            if (
                newNews.hasOwnProperty('image') &&
                newNews.hasOwnProperty('title') &&
                newNews.hasOwnProperty('data') &&
                newNews.hasOwnProperty('author') &&
                newNews.hasOwnProperty('comments') &&
                newNews.hasOwnProperty('category')
            ) {
                const news = {
                    id: newNews.id,
                    ...newNews
                }

                newsJson.news[newNews.category].push(news)
                fs.writeFileSync(newsJsonPath, JSON.stringify(newsJson, null, 2), 'utf-8')
                res.status(201).json({ message: 'News Stored' })
            } else {
                res.status(400).json({ error: 'Not a Valid User' })
            }
        } catch (error) {
            console.error('Error:', error)
            res.status(500).json({ error: 'Server Error' })
        }
    }

    update(req, res) {
        try {
            const { category, id } = req.params
            const newsJson = readNewsJson()
            const newsIndex = newsJson.news[category].findIndex((nw) => nw.id == id)

            if (newsIndex !== -1) {
                newsJson.news[category][newsIndex].image = req.body.image
                newsJson.news[category][newsIndex].title = req.body.title
                newsJson.news[category][newsIndex].data = req.body.data
                newsJson.news[category][newsIndex].author = req.body.author
                newsJson.news[category][newsIndex].comments = req.body.comments
                newsJson.news[category][newsIndex].category = req.body.category

                fs.writeFileSync(newsJsonPath, JSON.stringify(newsJson, null, 2), 'utf-8')
                res.status(200).json({ message: 'News Updated' })
            } else {
                res.status(404).json({ error: 'News Not Found' })
            }
        } catch (error) {
            console.error('Error:', error)
            res.status(500).json({ error: 'Server Error' })
        }
    }

    delete(req, res) {
        try {
            const { category, id } = req.params
            const newsJson = readNewsJson()
            const newsIndex = newsJson.news[category].findIndex((nw) => nw.id == id)

            if (newsIndex !== -1) {
                newsJson.news[category].splice(newsIndex, 1)

                fs.writeFileSync(newsJsonPath, JSON.stringify(newsJson, null, 2), 'utf-8')
                res.status(200).json({ message: 'News Deleted' })
            } else {
                res.status(404).json({ error: 'News Not Found' })
            }
        } catch (error) {
            console.error('Error:', error)
            res.status(500).json({ error: 'Server Error' })
        }
    }
}

export default new NewsController()