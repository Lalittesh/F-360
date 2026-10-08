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
      status: { $in: ['Claimed', 'Approved', 'Completed'] }
    });
    
    res.json({ totalRequests, availableFood, claimedReceived });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getRestaurantRequests = async (req, res) => {
  try {
    if (req.user.role !== 'restaurant') return res.status(403).json({ message: 'Only restaurants can view incoming requests' });
    
    const donations = await Donation.find({ restaurant: req.user.userId });
    const donationIds = donations.map(d => d._id);
    
    const requests = await Request.find({ donation: { $in: donationIds } })
      .populate('ngo', 'name contactPerson phone email')
      .populate('donation', 'foodName quantity status')
      .sort({ createdAt: -1 });
      
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const acceptRequest = async (req, res) => {
  try {
    if (req.user.role !== 'restaurant') return res.status(403).json({ message: 'Only restaurants can accept requests' });
    
    const request = await Request.findById(req.params.id).populate('donation');
    if (!request) return res.status(404).json({ message: 'Request not found' });
    
    if (request.donation.restaurant.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    if (request.status !== 'Requested') {
      return res.status(400).json({ message: 'Can only accept pending requests' });
    }
    
    request.status = 'Approved';
    await request.save();
    
    const donation = request.donation;
    donation.status = 'Claimed';
    await donation.save();
    
    res.json(request);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const rejectRequest = async (req, res) => {
  try {
    if (req.user.role !== 'restaurant') return res.status(403).json({ message: 'Only restaurants can reject requests' });
    
    const request = await Request.findById(req.params.id).populate('donation');
    if (!request) return res.status(404).json({ message: 'Request not found' });
    
    if (request.donation.restaurant.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    if (request.status !== 'Requested') {
      return res.status(400).json({ message: 'Can only reject pending requests' });
    }
    
    request.status = 'Rejected';
    await request.save();
    
    const donation = request.donation;
    donation.status = 'Available';
    await donation.save();
    
    res.json(request);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const markAsReceived = async (req, res) => {
  try {
    if (req.user.role !== 'ngo') return res.status(403).json({ message: 'Only NGOs can mark requests as received' });
    
    const request = await Request.findById(req.params.id);
    if (!request) return res.status(404).json({ message: 'Request not found' });
    
    if (request.ngo.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    if (request.status !== 'Approved' && request.status !== 'Claimed') {
      return res.status(400).json({ message: 'Can only receive approved requests' });
    }
    
    request.status = 'Completed';
    await request.save();
    
    const donation = await Donation.findById(request.donation);
    if (donation) {
      donation.status = 'Completed';
      await donation.save();
    }
    
    res.json(request);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { 
  createRequest, 
  getMyRequests, 
  getStats, 
  getRestaurantRequests,
  acceptRequest,
  rejectRequest,
  markAsReceived
};
