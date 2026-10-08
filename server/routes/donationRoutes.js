const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createDonation, getMyDonations, getStats } = require('../controllers/donationController');

router.route('/').post(protect, createDonation);
router.route('/my').get(protect, getMyDonations);
router.route('/stats').get(protect, getStats);

module.exports = router;
