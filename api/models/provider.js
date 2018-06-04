const mongoose = require('mongoose')
const Schema = mongoose.Schema

const providerSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    fullName: String,
    document: String,
    email: String,
    active: {
        type: Boolean,
        default: true,
    },
    deleted: Date,
    created: {
        type: Date,
        default: Date.now,
    },
    prefecture_id: {
        type: Schema.Types.ObjectId,
        ref: 'Prefecture',
        required: true,
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

module.exports = mongoose.model('Provider', providerSchema)