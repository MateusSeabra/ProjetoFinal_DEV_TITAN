const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send('Hello'));





// router.post('/user', (req, res) =>  console.log(req.body))

module.exports = router;
 