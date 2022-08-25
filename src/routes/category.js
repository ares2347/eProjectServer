const express = require('express');
const router = express.Router();
const categoryCtrl = require('../api/categoryCtrl')


//config route
router.get('/get', categoryCtrl.getCategory)

module.exports = router