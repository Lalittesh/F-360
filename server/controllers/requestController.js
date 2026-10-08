const Request = require('../models/Request');
const Donation = require('../models/Donation');

// @desc Create a request for available food
// @route POST /api/requests
// @access Private (NGO only)
const createRequest = async (req, res) => {
  try {
    if (req.user.role !== 'ngo') {
      return res.status(403).json({ message: 'Only NGOs can request food' });
    }
    const { donationId } = req.body;
    
    const donation = await Donation.findById(donationId);
    if (!donation || donation.status !== 'Available') {
      return res.status(400).json({ message: 'Donation is no longer available' });
    }

    const request = await Request.create({
      ngo: req.user.userId,
      donation: donationId,
      status: 'Requested'
    });

    // Update donation status
    donation.status = 'Requested';
    await donation.save();

    res.status(201).json(request);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Get current NGO's requests
// @route GET /api/requests/my
// @access Private (NGO only)
const getMyRequests = async (req, res) => {
  try {
    const requests = await Request.find({ ngo: req.user.userId })
      .populate({
        path: 'donation',
        populate: {
          path: 'restaurant',
          select: 'name'
        }
      })
      .sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc Get current NGO's stats
// @route GET /api/requests/stats
// @access Private (NGO only)
const getStats = async (req, res) => {
  try {
    const totalRequests = await Request.countDocuments({ ngo: req.user.userId });
    const availableFood = await Donation.countDocuments({ status: 'Available' });
    const claimedReceived = await Request.countDocuments({ 
      ngo: req.user.userId, 
      status: { $in: ['Claimed', 'Completed'] }
    });
    
    res.json({ totalRequests, availableFood, claimedReceived });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createRequest, getMyRequests, getStats };
