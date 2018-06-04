const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expenseSchema = Schema({
    description: String,
    maturity: Date,
    payment: Date,
    value: Number,
    authorized_value: Number,
    authorization: String,
    cod_verificacao: String,
    deleted: Date,
    created: {
        type: Date,
        default: Date.now,
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    authorized_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    prefecture_id: {
        type: Schema.Types.ObjectId,
        ref: 'Prefecture',
        required: true,
    }
})

module.exports = mongoose.model('Expense', expenseSchema)