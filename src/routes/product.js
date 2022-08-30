const express = require('express');
const router = express.Router();
const productCtrl = require('../api/productCtrl')


//config route
router.get('/get', productCtrl.getProduct)
router.get('/reviews', productCtrl.getReview)
router.get('/recommended', productCtrl.getRecommended)
router.get('/featured', productCtrl.getFeatured)
module.exports = router