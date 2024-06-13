const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const showSchema = new Schema({
  showName: {
    type: String,
    required: true
  },
  showStatus: {
    type: String,
    required: true
  },
});

const Show = mongoose.model('show', showSchema);

module.exports = Show;