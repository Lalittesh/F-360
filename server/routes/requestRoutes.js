const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createRequest, getMyRequests, getStats } = require('../controllers/requestController');

router.route('/').post(protect, createRequest);
router.route('/my').get(protect, getMyRequests);
router.route('/stats').get(protect, getStats);

module.exports = router;
