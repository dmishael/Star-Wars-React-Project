const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const Vehicle = new Schema({
  name: String,
  model: String,
  manufacturer: String,
  speed: Number,
  crew: Number,
  tags: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tag"
    }
  ]
});

module.exports = mongoose.model('vehicle', Vehicle)