const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Division = new Schema(
    {
        Nummer: { type: Number, required: true },
        Description: { type: String, required: true },
    }
)

module.exports = mongoose.model('TEST', Division, 'DIV')
/*
As mentioned in docs: http://mongoosejs.com/docs/api.html#index_Mongoose-model

Mongoose#model(name, [schema], [collection], [skipInit])

Defines a model or retrieves it.

Parameters:

1st param - name <String> model name
2nd param - [schema] <Schema> schema name
3rd param - [collection] <String> collection name (optional, induced from model name)
4th param - [skipInit] <Boolean> whether to skip initialization (defaults to false)
*/
