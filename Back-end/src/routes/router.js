import { Router } from 'express'
import newsController from '../controllers/newsController.js'
import userController from '../controllers/userController.js'

const router = Router()

router.get('/', (req, res) => {
    res.send('Connected')
})

router.get('/news', newsController.index)

router.get('/user', userController.index)

router.get('/news/:category/:id', newsController.show)

router.get('/user/:id', userController.show)

router.post('/news', newsController.store)

router.post('/user', userController.store)

router.put('/news/:category/:id', newsController.update)

router.put('/user/:id', userController.update)

router.delete('/news/:category/:id', newsController.delete)

router.delete('/user/:id', userController.delete)

export default router