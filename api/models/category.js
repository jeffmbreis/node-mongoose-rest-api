const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = Schema({
    name: {
        type: String,
        required: true,
    },
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
    }
})

module.exports = mongoose.model('Category', categorySchema)