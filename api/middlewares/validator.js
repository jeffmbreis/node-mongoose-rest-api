const { check } = require('express-validator/check')

exports.user_add = [
    check('password').isEmpty(),
]