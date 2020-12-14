const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  lineId: {
    type: String,
  },
  lineToken: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);
