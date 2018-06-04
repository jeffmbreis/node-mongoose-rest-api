const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prefectureSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    fullName: String,
    cnpj: String,
    active: {
        type: Boolean,
        default: true,
    },
    deleted: Date,
    created: {
        type: Date,
        default: Date.now,
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
})

module.exports = mongoose.model('Prefecture', prefectureSchema)