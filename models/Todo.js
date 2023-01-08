const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    owner: {type: Types.ObjectId, ref: 'User', required: true},
    text: {type: String, required: true},
    completed: {type: Boolean, default: false},
    important: {type: Boolean, default: false},
})

module.exports = model('Todo', schema)