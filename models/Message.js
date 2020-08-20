const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  isSchedule: {
    type: Boolean,
    default: false,
  },
  scheduleTime: {
    type: Date,
  },
});

module.exports = mongoose.model('Message', MessageSchema);
