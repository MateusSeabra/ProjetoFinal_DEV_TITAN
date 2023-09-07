import express from 'express'
import router from './routes/router.js'

const app = express()

app.use(router)

app.use(express.json())

export default app