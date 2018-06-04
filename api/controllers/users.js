const bcrypt = require('bcrypt')
const User = require('../models/user')
const messages = require('../core/messages')

exports.add = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
        if (err) {
            console.log(err)
            res.status(500).json({
                error: 'bcrypt error!',
            })
        } else {
            const user = new User({
                name: req.body.name,
                username: req.body.username,
                password: hash,
                role: req.body.role,
            })
    
            user
            .save()
            .then(result => {
                res.status(201).json({
                    ok: true,
                    message: messages.crud.success.add,
                    result,
                })
            })
            .catch(err => {
                res.status(500).json({
                    ok: false,
                    message: messages.crud.error.add,
                    err: error
                })
            })
        }
    })

}