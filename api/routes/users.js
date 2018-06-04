const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const validator = require('../middlewares/validator')
const validate = require('../middlewares/validate')
const usersController = require('../controllers/users')

router.post('/add', validator.user_add, validate, usersController.add)

module.exports = router