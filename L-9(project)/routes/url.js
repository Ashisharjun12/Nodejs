const express =require('express')

const router = express.Router()

const { generateShortUrl ,shorturl} = require('../controllers/url.js')


router.post('/', generateShortUrl)




module.exports = router