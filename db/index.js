const mongoose = require('mongoose')

mongoose
    .connect('mongodb://10.2.111.66:27017/FMG_DIV', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db