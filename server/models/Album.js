const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = new mongoose.model('Album', albumSchema)