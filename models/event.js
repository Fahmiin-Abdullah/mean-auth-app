const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const eventSchema = new Schema({
  id: Schema.ObjectId,
  name: String,
  description: String,
  date: Date,
});

module.exports = mongoose.model('event', eventSchema, 'events');