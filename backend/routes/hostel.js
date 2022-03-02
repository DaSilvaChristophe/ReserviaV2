const express = require('express');
const router = express.Router();

const hostelCtrl = require('../controllers/hostel')

router.get('/hostels', hostelCtrl.getHostels);
router.get('/hostel/:id', hostelCtrl.getHostelOne);


module.exports = router;