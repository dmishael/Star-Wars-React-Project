const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const Planet = new Schema ({
    name: String,
    climate: String,
    gravity: String,
    population: String,
    residents: [{
        type: Schema.Types.ObjectId,
        ref: 'People'
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }]

})

module.exports = mongoose.model('planet', Planet)