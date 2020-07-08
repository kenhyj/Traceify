const mongoose = require('mongoose');

const ReopeningSchema = mongoose.Schema({
  province: {
    type: String,
  },
  abbr: {
    type: String,
    required: true,
  },
  current_stage: {
    type: Number,
    required: false,
  },
  phases: [Object],
  more: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Reopening', ReopeningSchema);
