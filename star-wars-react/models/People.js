const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const People = new Schema ({
    name: String,
    birthyear: String,
    gender: String,
    homeworld: String,
    vehicles: [{
        type: Schema.Types.ObjectId,
        ref: 'vehicles'
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }]

})

module.exports = mongoose.model('people', People)