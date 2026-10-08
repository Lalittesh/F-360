const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  foodName: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: String, required: true },
  preparationDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  pickupAddress: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  status: {
    type: String,
    enum: ['Available', 'Requested', 'Claimed', 'Completed', 'Expired'],
    default: 'Available'
  }
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);
