const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        username: String,
        todo: String,
        isDone: Boolean
    }
);

const ToDos = mongoose.model('ToDos',todoSchema);

module.exports= ToDos;