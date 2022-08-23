const express = require('express');
const router = express.Router();
const productCtrl = require('../api/productCtrl')


//config route
router.get('/get', productCtrl.get)

module.exports = router