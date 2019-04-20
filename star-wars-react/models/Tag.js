const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const Tag = new Schema ({
    name: String,
    message: String,
})

module.exports = mongoose.model('tag', Tag)