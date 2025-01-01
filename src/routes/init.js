// @collapse
const express = require('express')
const { initScrapping } = require('../controllers')
const { auth } = require('../middlewares')

const router = express.Router()

router.get('/init', auth, initScrapping)

module.exports = (app) => app.use(router)
