const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const Tag = new Schema ({
    message: String
})

module.exports = mongoose.model('Tag', Tag)