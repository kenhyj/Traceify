const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  province: {
    type: String,
    required: true,
  },
  abbr: {
    type: String,
  },
  current_stage: {
    type: Number,
  },
  phases: [{ phase: Number }],
  more: {
    type: String,
  },
});

module.exports = mongoose.model('Reopening', PostSchema);
