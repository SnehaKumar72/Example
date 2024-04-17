const mongoose = require('mongoose')

const expenseDetailsSchema = new mongoose.Schema({
    amount: {
        type:Number
    },
    category: {
        type: String
    },
    date: {
        type: String
    }
})

mongoose.model('ExpenseDetails',xpenseDetailsSchema)