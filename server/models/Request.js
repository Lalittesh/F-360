const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  ngo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  donation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donation',
    required: true
  },
  status: {
    type: String,
    enum: ['Requested', 'Claimed', 'Approved', 'Rejected', 'Completed'],
    default: 'Requested'
  }
}, { timestamps: true });

module.exports = mongoose.model('Request', requestSchema);
