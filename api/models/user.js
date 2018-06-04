const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    prefecture: {
        type: Schema.Types.ObjectId,
        ref: 'Prefecture',
    },
    role: {
        type: String,
        require: true,
    },
    password_recovery: String,
    deleted: Date,
    created: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('User', userSchema)