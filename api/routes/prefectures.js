const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const messages = require('../core/messages')
const Prefecture = require('../models/prefecture')

router.get('/', (req, res, next) => {
    Prefecture.find()
    .exec()
    .then(result => {
        res.status(200).json({
            ok: true,
            result,
        })
    })
    .catch(error => {
        res.status(500).json({
            ok: false,
            message: messages.crud.error.list,
            error,
        })
    })
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    Prefecture.findById(id)
    .exec()
    .then(result => {
        res.status(200).json({
            ok: true,
            result,
        })
    })
    .catch(error => {
        res.status(500).json({
            ok: false,
            message: messages.crud.error.get,
            error,
        })
    })
})

router.post('/', (req, res, next) => {
    const prefecture = new Prefecture({
        name: req.body.name
    })

    prefecture.save().then(result => {
        console.log(result)
        res.status(201).json({
            ok: true,
            message: messages.crud.success.add,
            result,
        })
    })
    .catch(error => {
        res.status(500).json({
            ok: false,
            message: messages.crud.error.add,
            error,
        })
    })
})

router.patch('/:id', (req, res, next) => {
    const id = req.params.id
    const data = req.body
    let toUpdate = {}

    for (const key of Object.keys(data)) {
        toUpdate[key] = data[key]
    }

    Prefecture.update({ _id: id }, {$set: toUpdate})
    .exec()
    .then(result => {
        res.status(200).json({
            ok: true,
            message: messages.crud.success.update,
            result,
        })
    })
    .catch(error => {
        res.status(500).json({
            ok: false,
            message: messages.crud.error.update,
            error,
        })
    })
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    Prefecture.deleteOne({ _id: id })
    .exec()
    .then(result => {
        res.status(200).json({
            ok: true,
            message: messages.crud.success.delete,
            result,
        })
    })
    .catch(error => {
        res.status(500).json({
            ok: false,
            message: messages.crud.error.delete,
            error,
        })
    })
})

module.exports = router