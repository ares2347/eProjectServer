const express = require('express');
const router = express.Router();
const productCtrl = require('../api/productCtrl')


//config route
router.get('/get', productCtrl.getProduct)

module.exports = router