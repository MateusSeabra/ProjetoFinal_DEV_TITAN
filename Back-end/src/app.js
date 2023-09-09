import express from 'express'
import router from './routes/router.js'
import cors from 'cors'

const app = express()

const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));

app.use(express.json())

app.use(router)

export default app