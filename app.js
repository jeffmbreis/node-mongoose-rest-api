const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const prefecturesRouters = require('./api/routes/prefectures')
const usersRouters = require('./api/routes/users')

const app = express()

mongoose.connect('mongodb+srv://prefeitura:' + process.env.MONGO_ATLAS_PW +'@prefeitura-k6c8d.mongodb.net/test?retryWrites=true')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Controll-Allow-Origin', '*')
    res.header('Access-Controll-Allow_Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (res.method === 'OPTIONS') {
        res.header('Access-Controll-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE')
        return res.status(200).json({})
    }
    next()
})

app.use('/prefectures', prefecturesRouters)
app.use('/users', usersRouters)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        error: {
            message: err.message
        }
    })
})

module.exports = app