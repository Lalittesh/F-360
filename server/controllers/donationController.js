const Donation = require('../models/Donation');

// @desc Create a donation
// @route POST /api/donations
// @access Private (Restaurant only)
const createDonation = async (req, res) => {
  try {
    if (req.user.role !== 'restaurant') {
       return res.status(403).json({ message: 'Only restaurants can create donations' });
    }
    const { foodName, category, quantity, preparationDate, expiryDate, pickupAddress, description, image } = req.body;
    
    const donation = await Donation.create({
      restaurant: req.user.userId,
      foodName,
      category,
      quantity,
      preparationDate,
      expiryDate,
      pickupAddress,
      description,
      image
    });
    res.status(201).json(donation);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Get current restaurant's donations
// @route GET /api/donations/my
// @access Private
const getMyDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ restaurant: req.user.userId }).sort({ createdAt: -1 });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Get current restaurant's stats
// @route GET /api/donations/stats
// @access Private
const getStats = async (req, res) => {
  try {
    const total = await Donation.countDocuments({ restaurant: req.user.userId });
    const available = await Donation.countDocuments({ restaurant: req.user.userId, status: 'Available' });
    const claimed = await Donation.countDocuments({ restaurant: req.user.userId, status: 'Claimed' });
    res.json({ total, available, claimed });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createDonation, getMyDonations, getStats };
