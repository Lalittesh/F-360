const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { 
  createRequest, 
  getMyRequests, 
  getStats,
  getRestaurantRequests,
  acceptRequest,
  rejectRequest,
  markAsReceived
} = require('../controllers/requestController');

router.route('/').post(protect, createRequest);
router.route('/my').get(protect, getMyRequests);
router.route('/stats').get(protect, getStats);
router.route('/restaurant').get(protect, getRestaurantRequests);
router.route('/:id/accept').put(protect, acceptRequest);
router.route('/:id/reject').put(protect, rejectRequest);
router.route('/:id/receive').put(protect, markAsReceived);

module.exports = router;
