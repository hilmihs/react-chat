const { Schema, model } = require('mongoose')
const chatSchema = new Schema({
  id: Number,
  title: String,
  username: String
});
module.exports = model('Chat', chatSchema);